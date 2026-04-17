import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Settings, Download, History, Plus, Edit, Trash2, Eye } from 'lucide-react';

// Référentiels officiels de la branche (IDCC 1516)
const BAREME_POINTS = {
  autonomie: {1: 20, 2: 29, 3: 39, 4: 48, 5: 57, 6: 69, 7: 90},
  management: {1: 0, 2: 20, 3: 29, 4: 39, 5: 48, 6: 57, 7: 69, 8: 90},
  relationnel: {1: 20, 2: 29, 3: 39, 4: 48, 5: 57, 6: 69, 7: 90},
  impact: {1: 20, 2: 40, 3: 58, 4: 90},
  ampleur: {1: 20, 2: 32, 3: 43, 4: 54, 5: 67, 6: 90},
  complexite: {1: 20, 2: 40, 3: 58, 4: 90},
  respJuri: {1: 0, 2: 20, 3: 40},
  interfiliere: {1: 0, 2: 10, 3: 20}
};

const MAX_MARCHES = {
  autonomie: 7,
  management: 8,
  relationnel: 7,
  impact: 4,
  ampleur: 6,
  complexite: 4
};

const PALIERS = [
  {min: 100, max: 109, palier: 1}, {min: 110, max: 119, palier: 2}, {min: 120, max: 129, palier: 3},
  {min: 130, max: 139, palier: 4}, {min: 140, max: 149, palier: 5}, {min: 150, max: 159, palier: 6},
  {min: 160, max: 169, palier: 7}, {min: 170, max: 179, palier: 8}, {min: 180, max: 189, palier: 9},
  {min: 190, max: 199, palier: 10}, {min: 200, max: 209, palier: 11}, {min: 210, max: 219, palier: 12},
  {min: 220, max: 229, palier: 13}, {min: 230, max: 239, palier: 14}, {min: 240, max: 249, palier: 15},
  {min: 250, max: 259, palier: 16}, {min: 260, max: 269, palier: 17}, {min: 270, max: 279, palier: 18},
  {min: 280, max: 289, palier: 19}, {min: 290, max: 299, palier: 20}, {min: 300, max: 309, palier: 21},
  {min: 310, max: 319, palier: 22}, {min: 320, max: 329, palier: 23}, {min: 330, max: 339, palier: 24},
  {min: 340, max: 349, palier: 25}, {min: 350, max: 399, palier: 26}, {min: 400, max: 449, palier: 27},
  {min: 450, max: 499, palier: 28}, {min: 500, max: 549, palier: 29}, {min: 550, max: 599, palier: 30},
  {min: 600, max: 999, palier: 31}
];

const FILIERES = [
  { 
    id: 'filiere1', 
    label: 'Filière 1 : Formation, accompagnement, ingénierie',
    description: 'Métiers du processus pédagogique, animation de formation, conseil et accompagnement, ingénierie de formation.'
  },
  { 
    id: 'filiere2', 
    label: 'Filière 2 : Développement',
    description: 'Métiers spécifiques : promotion, marketing, développement commercial, management et gestion de organisme.'
  },
  { 
    id: 'filiere3', 
    label: 'Filière 3 : Supports',
    description: 'Métiers transversaux : gestion administrative, logistique, financière ou réglementaire.'
  }
];

const CRITERES_LABELS = {
  autonomie: "Autonomie",
  management: "Management",
  relationnel: "Relationnel", 
  impact: "Impact",
  ampleur: "Ampleur des connaissances",
  complexite: "Complexité/Savoir-faire pro."
};

// Questions par défaut (modifiables)
const DEFAULT_QUESTIONS = {
  autonomie: [
    "Degré d'autonomie requis dans l'organisation du travail",
    "Niveau d'initiative que le poste nécessite",
    "Degré de supervision nécessaire pour ce poste"
  ],
  management: [
    "Responsabilité d'encadrement requise par le poste",
    "Coordination et animation de projets exigées",
    "Développement des compétences des collaborateurs attendu"
  ],
  relationnel: [
    "Niveau de communication interpersonnelle requis",
    "Intensité du travail en équipe nécessaire",
    "Complexité des relations avec clients/partenaires externes"
  ],
  impact: [
    "Impact des décisions du poste sur l'organisation",
    "Influence du poste sur les résultats de l'entreprise",
    "Portée des responsabilités du poste"
  ],
  ampleur: [
    "Étendue des connaissances techniques requises",
    "Diversité des domaines de compétence nécessaires",
    "Niveau de spécialisation exigé par le poste",
    "Exigences de veille technologique et réglementaire"
  ],
  complexite: [
    "Complexité des tâches que le poste implique",
    "Niveau de technicité requis",
    "Difficultés techniques inhérentes au poste"
  ]
};

export default function QuizPositionnement() {
  const [currentView, setCurrentView] = useState('home');
  const [currentSection, setCurrentSection] = useState('info');
  const [questions, setQuestions] = useState(DEFAULT_QUESTIONS);
  const [responses, setResponses] = useState({});
  const [bonifications, setBonifications] = useState({
    respJuri: 1,
    interfiliere: 1
  });
  const [bonifQuestions, setBonifQuestions] = useState({
    respJuri: '',
    interfiliere: ''
  });
  const [emploiInfo, setEmploiInfo] = useState({
    nom: '',
    filiere: '',
    date: new Date().toISOString().split('T')[0],
    evaluateur: '',
    commentaires: ''
  });
  const [results, setResults] = useState(null);
  const [savedResults, setSavedResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const sections = ['info', ...Object.keys(questions), 'bonifications'];
  const currentIndex = sections.indexOf(currentSection);
  const progress = currentSection === 'info' ? 0 : ((currentIndex) / (sections.length - 1)) * 100;

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('quiz-results') || '[]');
      setSavedResults(saved);
    } catch (e) {
      setSavedResults([]);
    }
  }, []);

  const saveResult = (result) => {
    const newResults = [...savedResults, { 
      id: Date.now(), 
      date: new Date().toISOString(),
      ...result 
    }];
    setSavedResults(newResults);
    try {
      localStorage.setItem('quiz-results', JSON.stringify(newResults));
    } catch (e) {
      console.error('Erreur sauvegarde:', e);
    }
  };

  const deleteResult = (id) => {
    const newResults = savedResults.filter(r => r.id !== id);
    setSavedResults(newResults);
    try {
      localStorage.setItem('quiz-results', JSON.stringify(newResults));
    } catch (e) {
      console.error('Erreur suppression:', e);
    }
  };

  const handleResponse = (questionIndex, value) => {
    setResponses(prev => ({
      ...prev,
      [`${currentSection}_Q${questionIndex + 1}`]: parseInt(value)
    }));
  };

  const nextSection = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    } else {
      calculateResults();
    }
  };

  const prevSection = () => {
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  const calculateResults = () => {
    const critereResults = {};
    let totalPoints = 0;

    // Calcul pour chaque critère principal
    Object.keys(questions).forEach(critere => {
      const questionsCount = questions[critere].length;
      let sum = 0;
      let count = 0;

      for (let i = 0; i < questionsCount; i++) {
        const response = responses[`${critere}_Q${i + 1}`];
        if (response) {
          sum += response;
          count++;
        }
      }

      if (count > 0) {
        const moyenne = sum / count;
        const maxMarches = MAX_MARCHES[critere];
        const marche = Math.max(1, Math.round((moyenne / 5) * maxMarches));
        const points = BAREME_POINTS[critere][marche];
        
        critereResults[critere] = {
          moyenne: moyenne.toFixed(2),
          marche,
          points
        };
        
        totalPoints += points;
      }
    });

    const respJuriPoints = BAREME_POINTS.respJuri[bonifications.respJuri];
    const interfilierePoints = BAREME_POINTS.interfiliere[bonifications.interfiliere];
    
    totalPoints += respJuriPoints + interfilierePoints;

    const palier = PALIERS.find(p => totalPoints >= p.min && totalPoints <= p.max)?.palier || 31;

    let statut = "Employé";
    const mgmtMarche = critereResults.management?.marche || 1;
    const ampleurMarche = critereResults.ampleur?.marche || 1;
    const autoMarche = critereResults.autonomie?.marche || 1;

    if (totalPoints >= 350) {
      statut = "Cadre";
    } else if (totalPoints >= 310 && totalPoints <= 349 && 
               mgmtMarche >= 3 && ampleurMarche >= 4 && autoMarche >= 6) {
      statut = "Cadre";
    } else if (totalPoints >= 171) {
      statut = "Technicien";
    }

    const finalResult = {
      emploiInfo,
      criteres: critereResults,
      bonifications: {
        respJuri: { marche: bonifications.respJuri, points: respJuriPoints },
        interfiliere: { marche: bonifications.interfiliere, points: interfilierePoints }
      },
      totalPoints,
      palier,
      statut
    };

    setResults(finalResult);
    saveResult(finalResult);
    setShowResults(true);
  };

  const isCurrentSectionComplete = () => {
    if (currentSection === 'info') {
      return emploiInfo.nom && emploiInfo.filiere;
    }
    if (currentSection === 'bonifications') {
      return bonifQuestions.respJuri && bonifQuestions.interfiliere;
    }
    const questionsCount = questions[currentSection].length;
    for (let i = 0; i < questionsCount; i++) {
      if (!responses[`${currentSection}_Q${i + 1}`]) return false;
    }
    return true;
  };

  const restart = () => {
    setCurrentView('home');
    setCurrentSection('info');
    setResponses({});
    setBonifications({ respJuri: 1, interfiliere: 1 });
    setBonifQuestions({ respJuri: '', interfiliere: '' });
    setEmploiInfo({
      nom: '',
      filiere: '',
      date: new Date().toISOString().split('T')[0],
      evaluateur: '',
      commentaires: ''
    });
    setResults(null);
    setShowResults(false);
  };

  const [showFullReport, setShowFullReport] = useState(false);
  const [reportData, setReportData] = useState(null);

  const generateFullReport = (result) => {
    const filiereLabel = FILIERES.find(f => f.id === result.emploiInfo.filiere)?.label || result.emploiInfo.filiere;
    
    // Reconstituer les réponses approximatives basées sur les moyennes
    const reconstructedResponses = {};
    Object.keys(result.criteres).forEach(critere => {
      const critereData = result.criteres[critere];
      const questionsCount = questions[critere].length;
      const avgResponse = Math.round(parseFloat(critereData.moyenne));
      
      for (let i = 1; i <= questionsCount; i++) {
        reconstructedResponses[`${critere}_Q${i}`] = avgResponse;
      }
    });

    const bonifResponses = {
      respJuri: result.bonifications.respJuri.marche === 1 ? 'Aucune' : 
               result.bonifications.respJuri.marche === 2 ? 'Modérée' : 'Importante',
      interfiliere: result.bonifications.interfiliere.marche === 1 ? 'Non' :
                   result.bonifications.interfiliere.marche === 2 ? 'Partiel' : 'Total'
    };

    setReportData({
      result,
      filiereLabel,
      responses: reconstructedResponses,
      bonifResponses
    });
    setShowFullReport(true);
  };

  const addQuestion = (critere) => {
    setQuestions(prev => ({
      ...prev,
      [critere]: [...prev[critere], "Nouvelle question..."]
    }));
  };

  const updateQuestion = (critere, index, newText) => {
    setQuestions(prev => ({
      ...prev,
      [critere]: prev[critere].map((q, i) => i === index ? newText : q)
    }));
  };

  const deleteQuestion = (critere, index) => {
    if (questions[critere].length > 1) {
      setQuestions(prev => ({
        ...prev,
        [critere]: prev[critere].filter((_, i) => i !== index)
      }));
    }
  };

  // Interface d'accueil
  if (currentView === 'home') {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Quiz de Positionnement Salarial
          </h1>
          <p className="text-gray-600">
            Convention Collective des Organismes de Formation (IDCC 1516)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Nouvelle évaluation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Démarrer une nouvelle évaluation de poste
              </p>
              <Button 
                onClick={() => setCurrentView('quiz')} 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5" />
                Historique ({savedResults.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Consulter les évaluations précédentes
              </p>
              <Button 
                onClick={() => setCurrentView('history')} 
                variant="outline" 
                className="w-full"
              >
                Voir historique
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Personnaliser les questions du quiz
              </p>
              <Button 
                onClick={() => setCurrentView('config')} 
                variant="outline" 
                className="w-full"
              >
                Configurer
              </Button>
            </CardContent>
          </Card>
        </div>

        {savedResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Dernières évaluations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {savedResults.slice(-5).reverse().map(result => (
                  <div key={result.id} className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <div className="font-semibold">{result.emploiInfo.nom}</div>
                      <div className="text-sm text-gray-600">
                        {FILIERES.find(f => f.id === result.emploiInfo.filiere)?.label} - 
                        Palier {result.palier} ({result.totalPoints} pts)
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setSelectedResult(result);
                          setCurrentView('detail');
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => exportToPDF(result)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Interface historique
  if (currentView === 'history') {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Historique des évaluations</h2>
          <Button variant="outline" onClick={() => setCurrentView('home')}>
            Retour
          </Button>
        </div>

        <div className="space-y-4">
          {savedResults.map(result => (
            <Card key={result.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{result.emploiInfo.nom}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Filière: {FILIERES.find(f => f.id === result.emploiInfo.filiere)?.label}</div>
                      <div>Date: {new Date(result.emploiInfo.date).toLocaleDateString('fr-FR')}</div>
                      <div>Évaluateur: {result.emploiInfo.evaluateur || 'Non renseigné'}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">Palier {result.palier}</div>
                    <div className="text-sm">{result.totalPoints} pts - {result.statut}</div>
                  </div>
                  <div className="ml-4 flex flex-col gap-2">
                    <Button 
                      size="sm"
                      onClick={() => {
                        setSelectedResult(result);
                        setCurrentView('detail');
                      }}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => generateFullReport(result)}
                    >
                      📄
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => deleteResult(result.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Interface de configuration
  if (currentView === 'config') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Configuration des questions</h2>
          <Button variant="outline" onClick={() => setCurrentView('home')}>
            Retour
          </Button>
        </div>

        <div className="space-y-6">
          {Object.entries(questions).map(([critere, questionsArray]) => (
            <Card key={critere}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {CRITERES_LABELS[critere]}
                  <Button 
                    size="sm"
                    onClick={() => addQuestion(critere)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {questionsArray.map((question, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => updateQuestion(critere, index, e.target.value)}
                      className="flex-1 p-2 border rounded"
                    />
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteQuestion(critere, index)}
                      disabled={questionsArray.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Vue détail d'un résultat
  if (currentView === 'detail' && selectedResult) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Détail de évaluation</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={() => generateFullReport(selectedResult)}
            >
              📄 Voir rapport complet
            </Button>
            <Button variant="outline" onClick={() => setCurrentView('home')}>
              Retour
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><strong>Emploi :</strong> {selectedResult.emploiInfo.nom}</div>
              <div><strong>Filière :</strong> {FILIERES.find(f => f.id === selectedResult.emploiInfo.filiere)?.label}</div>
              <div><strong>Date :</strong> {new Date(selectedResult.emploiInfo.date).toLocaleDateString('fr-FR')}</div>
              <div><strong>Évaluateur :</strong> {selectedResult.emploiInfo.evaluateur || 'Non renseigné'}</div>
              {selectedResult.emploiInfo.commentaires && (
                <div><strong>Commentaires :</strong> {selectedResult.emploiInfo.commentaires}</div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Résultats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-bold text-blue-600">
                Palier {selectedResult.palier}
              </div>
              <div className="text-xl">
                Coefficient: <span className="font-semibold">{selectedResult.totalPoints}</span>
              </div>
              <div className="text-lg">
                Statut: <span className="font-semibold text-green-600">{selectedResult.statut}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Détail par critère</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(selectedResult.criteres).map(([critere, data]) => (
                <div key={critere} className="flex justify-between items-center p-3 border-b">
                  <span className="font-medium">{CRITERES_LABELS[critere]}</span>
                  <div className="text-right">
                    <div className="font-semibold">Marche {data.marche} → {data.points} pts</div>
                    <div className="text-sm text-gray-500">Moyenne: {data.moyenne}</div>
                  </div>
                </div>
              ))}
              
              {selectedResult.bonifications.respJuri.points > 0 && (
                <div className="flex justify-between items-center p-3 border-b bg-yellow-50">
                  <span className="font-medium">Responsabilité Juridique</span>
                  <span className="font-semibold">{selectedResult.bonifications.respJuri.points} pts</span>
                </div>
              )}
              {selectedResult.bonifications.interfiliere.points > 0 && (
                <div className="flex justify-between items-center p-3 border-b bg-yellow-50">
                  <span className="font-medium">Emploi Interfilière</span>
                  <span className="font-semibold">{selectedResult.bonifications.interfiliere.points} pts</span>
                </div>
              )}
              
              <div className="flex justify-between items-center p-3 bg-blue-50 font-bold text-lg">
                <span>Total</span>
                <span>{selectedResult.totalPoints} pts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Interface de quiz
  if (currentView === 'quiz') {
    if (showResults && results) {
      return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-blue-600">
                Résultats du Positionnement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Informations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div><strong>Emploi :</strong> {results.emploiInfo.nom}</div>
                    <div><strong>Filière :</strong> {FILIERES.find(f => f.id === results.emploiInfo.filiere)?.label}</div>
                    <div><strong>Date :</strong> {new Date(results.emploiInfo.date).toLocaleDateString('fr-FR')}</div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Synthèse</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-3xl font-bold text-blue-600">
                      Palier {results.palier}
                    </div>
                    <div className="text-xl">
                      Coefficient: <span className="font-semibold">{results.totalPoints}</span>
                    </div>
                    <div className="text-lg">
                      Statut: <span className="font-semibold text-green-600">{results.statut}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Détail par critère</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(results.criteres).map(([critere, data]) => (
                      <div key={critere} className="flex justify-between items-center">
                        <span className="text-sm">{CRITERES_LABELS[critere]}</span>
                        <div className="text-right text-sm">
                          <div>Marche {data.marche} → {data.points} pts</div>
                          <div className="text-gray-500">(Moy: {data.moyenne})</div>
                        </div>
                      </div>
                    ))}
                    
                    {results.bonifications.respJuri.points > 0 && (
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="text-sm">Resp. Juridique</span>
                        <span className="text-sm">{results.bonifications.respJuri.points} pts</span>
                      </div>
                    )}
                    {results.bonifications.interfiliere.points > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Interfilière</span>
                        <span className="text-sm">{results.bonifications.interfiliere.points} pts</span>
                      </div>
                    )}
                    
                    <div className="border-t pt-2 font-semibold flex justify-between">
                      <span>Total</span>
                      <span>{results.totalPoints} pts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center mt-6 flex gap-4 justify-center">
                <Button 
                  onClick={() => generateFullReport(results)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  📄 Voir le rapport complet
                </Button>
                <Button 
                  onClick={restart} 
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Nouvelle évaluation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto p-6">
        {/* Header avec progression */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center mb-4">
            Quiz de Positionnement
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Convention Collective des Organismes de Formation (IDCC 1516)
          </p>
          <Progress value={progress} className="w-full" />
          <p className="text-center text-sm text-gray-500 mt-2">
            Section {currentIndex + 1} sur {sections.length}
          </p>
        </div>

        {/* Section informations emploi */}
        {currentSection === 'info' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Informations sur emploi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Nom de emploi *</label>
                <input
                  type="text"
                  value={emploiInfo.nom}
                  onChange={(e) => setEmploiInfo(prev => ({ ...prev, nom: e.target.value }))}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Ex: Formateur expert, Responsable pédagogique..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Filière *</label>
                <div className="space-y-3">
                  {FILIERES.map(filiere => (
                    <div 
                      key={filiere.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        emploiInfo.filiere === filiere.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setEmploiInfo(prev => ({ ...prev, filiere: filiere.id }))}
                    >
                      <div className="font-medium text-blue-600 mb-1">{filiere.label}</div>
                      <div className="text-sm text-gray-600">{filiere.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Date évaluation</label>
                  <input
                    type="date"
                    value={emploiInfo.date}
                    onChange={(e) => setEmploiInfo(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Évaluateur</label>
                  <input
                    type="text"
                    value={emploiInfo.evaluateur}
                    onChange={(e) => setEmploiInfo(prev => ({ ...prev, evaluateur: e.target.value }))}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Nom de la personne qui évalue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Commentaires (optionnel)</label>
                <textarea
                  value={emploiInfo.commentaires}
                  onChange={(e) => setEmploiInfo(prev => ({ ...prev, commentaires: e.target.value }))}
                  className="w-full p-3 border rounded-lg h-24"
                  placeholder="Observations particulières, contexte..."
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Section bonifications */}
        {currentSection === 'bonifications' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Bonifications</CardTitle>
              <p className="text-sm text-gray-600">
                Ces éléments peuvent donner droit à des points supplémentaires.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Ce poste implique-t-il une responsabilité juridique particulière ? *
                </label>
                <p className="text-xs text-gray-500">
                  Ex: signature engagements financiers, responsabilité pénale, représentation légale...
                </p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      bonifQuestions.respJuri === 'aucune' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setBonifQuestions(prev => ({ ...prev, respJuri: 'aucune' }));
                      setBonifications(prev => ({ ...prev, respJuri: 1 }));
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Aucune responsabilité juridique particulière</span>
                      <span className="text-xs text-blue-600 font-medium">+0 pts</span>
                    </div>
                  </div>
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      bonifQuestions.respJuri === 'moderee' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setBonifQuestions(prev => ({ ...prev, respJuri: 'moderee' }));
                      setBonifications(prev => ({ ...prev, respJuri: 2 }));
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Responsabilité modérée (signatures limitées, délégations partielles)</span>
                      <span className="text-xs text-blue-600 font-medium">+20 pts</span>
                    </div>
                  </div>
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      bonifQuestions.respJuri === 'importante' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setBonifQuestions(prev => ({ ...prev, respJuri: 'importante' }));
                      setBonifications(prev => ({ ...prev, respJuri: 3 }));
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Responsabilité importante (engagements majeurs, représentation légale)</span>
                      <span className="text-xs text-blue-600 font-medium">+40 pts</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Ce poste nécessite-t-il des compétences dans plusieurs filières ? *
                </label>
                <p className="text-xs text-gray-500">
                  Ex: formateur qui fait aussi du commercial, administratif qui gère aussi la pédagogie...
                </p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      bonifQuestions.interfiliere === 'non' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setBonifQuestions(prev => ({ ...prev, interfiliere: 'non' }));
                      setBonifications(prev => ({ ...prev, interfiliere: 1 }));
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Non, poste spécialisé dans une seule filière</span>
                      <span className="text-xs text-blue-600 font-medium">+0 pts</span>
                    </div>
                  </div>
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      bonifQuestions.interfiliere === 'partiel' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setBonifQuestions(prev => ({ ...prev, interfiliere: 'partiel' }));
                      setBonifications(prev => ({ ...prev, interfiliere: 2 }));
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Oui, quelques compétences autres filières (moins 30% temps)</span>
                      <span className="text-xs text-blue-600 font-medium">+10 pts</span>
                    </div>
                  </div>
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      bonifQuestions.interfiliere === 'total' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setBonifQuestions(prev => ({ ...prev, interfiliere: 'total' }));
                      setBonifications(prev => ({ ...prev, interfiliere: 3 }));
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Oui, compétences majeures plusieurs filières (30% ou plus temps)</span>
                      <span className="text-xs text-blue-600 font-medium">+20 pts</span>
                    </div>
                  </div>
                </div>

                {emploiInfo.filiere === 'filiere3' && bonifQuestions.interfiliere === 'non' && (
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="text-yellow-600">⚠️</div>
                      <div className="text-sm">
                        <div className="font-medium text-yellow-800">Attention - Incohérence détectée</div>
                        <div className="text-yellow-700">
                          Vous avez sélectionné la Filière 3 (Supports) qui rassemble les métiers transversaux, 
                          mais vous indiquez que le poste ne nécessite pas de compétences interfilières. 
                          Vérifiez si cette évaluation est correcte.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sections des critères */}
        {currentSection !== 'info' && currentSection !== 'bonifications' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {CRITERES_LABELS[currentSection]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {questions[currentSection].map((question, index) => (
                <div key={index} className="space-y-3">
                  <label className="block text-sm font-medium">
                    {question}
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map(value => (
                      <button
                        key={value}
                        onClick={() => handleResponse(index, value)}
                        className={`w-12 h-12 rounded-full border-2 text-sm font-medium transition-all ${
                          responses[`${currentSection}_Q${index + 1}`] === value
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Très faible</span>
                    <span>Très élevé</span>
                  </div>
                  <div className="mt-1 text-xs text-blue-600">
                    Évaluez les <strong>exigences du poste</strong>, pas les compétences de la personne
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={prevSection}
            disabled={currentIndex === 0}
          >
            Précédent
          </Button>
          <Button 
            onClick={nextSection}
            disabled={!isCurrentSectionComplete()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {currentIndex === sections.length - 1 ? 'Calculer les résultats' : 'Suivant'}
          </Button>
        </div>
      </div>
    );
  }
}