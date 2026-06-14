import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('accueil');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'accueil':
        return (
          <div className="section-content">
            <h3>Présentation Personnelle</h3>
            <div className="card">
              <div className="presentation-header">
                {/* Correction dynamique du chemin pour GitHub Pages */}
                <img 
                  src={`${process.env.PUBLIC_URL}/photo-ryan.jpg`} 
                  alt="Ryan Agin" 
                  className="profile-photo" 
                />
                <div>
                  <h4 style={{ marginTop: 0 }}>Mon histoire avec l'informatique</h4>
                  <p>
                    J'ai découvert ma passion pour l'informatique vers l'âge de 13 ans avec mon premier ordinateur. Au départ, j'étais simplement curieux de comprendre comment fonctionnaient les jeux, les logiciels et Internet. Très vite, j'ai voulu regarder "derrière l'écran" : les systèmes, les réseaux, la sécurité. Cette curiosité m'a poussé à apprendre par moi-même, puis à intégrer un BUT Informatique. Aujourd'hui, ma vocation est claire : la cybersécurité, un domaine qui combine analyse, logique, investigation et résolution de problèmes concrets.
                  </p>
                </div>
              </div>
              
              <h4>Ce qui me définit</h4>
              <p>
                Je suis un passionné de cybersécurité et de hacking éthique. Mon loisir principal ? Comprendre les systèmes pour identifier leurs faiblesses et les sécuriser. Mon entourage professionnel et académique me décrit souvent en trois mots : <strong>Curieux, Persévérant, et doté d'un fort Esprit d'équipe</strong>. J'aime aller au fond des problèmes et je n'abandonne jamais face à un bug technique.
              </p>
              
              <h4>Une anecdote marquante</h4>
              <p>
                Mon stage en tant qu'Administrateur Système et Réseau chez CM-MP a été un déclic. Pour la première fois, je gérais de véritables infrastructures informatiques, configurais des serveurs et intervenais sur des problématiques de sécurité réelles. Cette immersion a forgé ma confiance technique et confirmé mon ambition de devenir Pentester.
              </p>
            </div>

            <h3>Passeport Culturel & Ouverture</h3>
            <div className="grid-2">
              <div className="card">
                <h4>Événements & Pratique (CTF)</h4>
                <p>Visant une spécialisation en Pentest, je m'entraîne intensivement sur TryHackMe, Root-Me et Hack The Box. Je participe à des CTF (Capture The Flag) pour pratiquer l'intrusion éthique et le reverse engineering. Je me rends aussi régulièrement à des salons informatiques pour échanger avec des experts et voir des démonstrations industrielles.</p>
              </div>
              <div className="card">
                <h4>Veille Technologique</h4>
                <p><strong>Cyber :</strong> Suivi quotidien des failles CVE, rapports CERT-FR, méthodologies OWASP via Reddit (r/netsec) et médias spécialisés (Underscore_, Le Comptoir Sécu).</p>
                <p><strong>IA & Dév :</strong> Suivi de l'évolution des LLM mondiaux et du Prompt Engineering via des newsletters tech (TLDR) et GitHub.</p>
              </div>
            </div>
            
            <div className="card">
              <h4>Ouverture à l'international</h4>
              <ul>
                <li><strong>Géopolitique Tech :</strong> En SAÉ S6, j'ai étudié l'IA chinoise DeepSeek face aux géants américains (Claude, ChatGPT) pour comprendre les enjeux de la "Guerre Froide" technologique.</li>
                <li><strong>Langues :</strong> Anglais technique maîtrisé au quotidien (TryHackMe, documentations Flutter/Python, rapports de failles).</li>
                <li><strong>Ambition :</strong> Totalement mobile, j'envisage ma carrière à l'international (stage, VIE ou multinationale) pour exercer mon métier dans un contexte multiculturel.</li>
              </ul>
            </div>
          </div>
        );

      case 'stage':
        return (
          <div className="section-content">
            <h3>Stage BUT 3 : Immersion Professionnelle</h3>
            <div className="card">
              <h4>Auto-école MILAR (Sarcelles) — Développeur Python / Automatisation</h4>
              <p><em>Du 18 mai au 18 septembre 2026</em></p>
              <p><strong>Mission :</strong> Développement d'un bot haute performance de réservation automatique de places d'examen de conduite sur la plateforme gouvernementale (pro.permisdeconduire.gouv.fr).</p>
              
              <h4>Ce que j'ai réalisé</h4>
              <p>J'ai conçu une architecture complète pour détecter les créneaux disponibles dès leur publication à 15h et les réserver en quelques millisecondes, avant les auto-écoles concurrentes. J'ai géré l'authentification via CDP pour contourner les protections, mis en place un scan asynchrone des 3 centres en parallèle via l'API, et créé un système de réservation instantanée avec gestion des erreurs.</p>
              
              <h4>Difficultés et Résolutions (Blocages techniques)</h4>
              <ul>
                <li><strong>Protection Cloudflare Turnstile :</strong> Le navigateur headless classique était détecté. <em>Résolution :</em> Utilisation du vrai navigateur Chrome via CDP (Chrome DevTools Protocol).</li>
                <li><strong>Protection Akamai :</strong> Requêtes API directes rejetées. <em>Résolution :</em> Réplication millimétrée des headers HTTP d'un trafic humain.</li>
                <li><strong>Boucle infinie de l'API :</strong> L'API gouvernementale retournait la même date en boucle. <em>Résolution :</em> Analyse réseau via HAR et implémentation d'une logique de curseur.</li>
                <li><strong>SSO Keycloak bloqué :</strong> Bouton de connexion désactivé par injection JS. <em>Résolution :</em> Simulation de véritables frappes clavier.</li>
                <li><strong>Rate limiting (429) :</strong> <em>Résolution :</em> Implémentation d'un backoff exponentiel.</li>
              </ul>

              <h4>Culture d'entreprise & Bilan personnel</h4>
              <p>J'ai évolué dans une ambiance familiale très agréable, avec un point quotidien avec la direction (approche Agile). J'ai découvert ma capacité à ne jamais abandonner face à des blocages sévères. Ce stage m'a appris à analyser méthodiquement les trames réseau plutôt que de tâtonner dans le code.</p>
              <p><strong>Ce dont je suis le plus fier :</strong> Avoir livré un bot robuste, en production, qui tourne réellement pour l'auto-école et réserve des places en moins de 200 millisecondes avec une architecture propre.</p>

              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">asyncio</span>
                <span className="tag">Playwright & CDP</span>
                <span className="tag">API REST (SSO)</span>
                <span className="tag">Analyse HAR</span>
              </div>
            </div>

            <div className="card">
              <h4>Témoignage Professionnel</h4>
              <blockquote className="testimonial">
                "Durant ses 4 mois de stage au sein de notre agence, Ryan a fait preuve d'un professionnalisme exemplaire. C'est un jeune homme sérieux, ponctuel et doté d'un excellent sens relationnel. Bien qu'autonome sur la conception technique, il a su parfaitement s'intégrer à l'équipe et communiquer clairement. Les retours sur son travail sont très positifs, et son attitude a été irréprochable. Nous recommandons vivement son profil."
                <span className="testimonial-author">— Hélène Aydin, Secrétaire & Référente RH (Europermis, Sarcelles)</span>
              </blockquote>
            </div>
          </div>
        );

      case 'sae':
        return (
          <div className="section-content">
            <h3>Projets Universitaires (SAÉ)</h3>
            
            <div className="card">
              <h4>SAÉ S5 : MIAAM (App Mobile Anti-Gaspillage)</h4>
              <p><strong>Contexte :</strong> Conception d'une application intelligente proposant des recettes sur mesure pour réduire le gaspillage alimentaire (Slogan : "Réduire le gaspillage, un repas à la fois").</p>
              <p><strong>Mon rôle :</strong> Co-conception de l'identité visuelle et développement de la logique métier (organisation et profils utilisateurs).</p>
              
              <h4>Difficultés & Rebonds</h4>
              <ul>
                <li><strong>Difficulté (Ton de l'app) :</strong> Sensibiliser à l'écologie sans être moralisateur. <br/><em>Rebond :</em> Choix d'une charte graphique chaleureuse (beige/brun) et d'un slogan axé sur la progressivité.</li>
                <li><strong>Difficulté (Pertinence) :</strong> Proposer des recettes variées sans dérouter. <br/><em>Rebond :</em> Création d'un algorithme basé sur une topologie culturelle mondiale (100+ traditions) pour lier les cuisines proches.</li>
                <li><strong>Difficulté (Ressources) :</strong> Batterie et contrainte hors-ligne. <br/><em>Rebond :</em> Optimisation drastique des requêtes SQL locales via SQLite.</li>
              </ul>
              
              <p><strong>Bilan :</strong> Une app performante intégrant un Éco-Score. J'en retiens l'importance d'allier architecture rigoureuse (MVC/Repository) et UX soignée.</p>
              <div className="tags">
                <span className="tag">Flutter</span>
                <span className="tag">SQLite</span>
                <span className="tag">MVC</span>
                <span className="tag">Algorithmique</span>
              </div>
            </div>

            <div className="card">
              <h4>SAÉ S6 : Diagrammes de Voronoï & IA Génératives</h4>
              <p><strong>Contexte :</strong> Générer un diagramme de Voronoï via Python et comparer l'efficacité de 4 IA génératives dans le développement logiciel.</p>
              <p><strong>Mon rôle :</strong> Développeur et "Prompt Engineer" attitré. Chargé d'analyser les risques de souveraineté/légalité des IA.</p>

              <h4>Difficultés & Rebonds</h4>
              <ul>
                <li><strong>Difficulté (IA Inefficace) :</strong> L'IA Grok a totalement échoué à générer le diagramme. <br/><em>Rebond :</em> Pivot stratégique immédiat vers DeepSeek.</li>
                <li><strong>Difficulté (Code instable) :</strong> Arborescence initiale brisée, rendu graphique faux (couleurs confondues). <br/><em>Rebond :</em> Processus itératif de 26 prompts. Fourniture des logs d'erreurs et captures d'écran à l'IA pour la forcer à corriger le tracé SVG/PNG.</li>
                <li><strong>Difficulté (Contrainte cachée) :</strong> L'IA imposait arbitrairement un minimum de 3 points. <br/><em>Rebond :</em> Identification du bug lors de mes tests et suppression de la contrainte pour un rendu valide dès le 1er point.</li>
              </ul>

              <p><strong>Bilan :</strong> Module obtenu en moins d'une heure. Conclusion : l'IA accélère le développement mais ne remplace jamais l'esprit critique, le débogage et l'analyse de logs d'un ingénieur humain.</p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">DeepSeek</span>
                <span className="tag">Prompt Engineering</span>
                <span className="tag">SVG/PNG Rendering</span>
              </div>
            </div>
          </div>
        );

      case 'perso':
        return (
          <div className="section-content">
            <h3>Projets Personnels</h3>
            <div className="card">
              <h4>Bot de Trading Algorithmique (Marché de l'Or - XAUUSD)</h4>
              <p>Développement d'un système autonome conçu et codé de A à Z en Python, en collaboration avec un trader professionnel.</p>
              
              <h4>Fonctionnalités Techniques</h4>
              <ul>
                <li><strong>Collecte & Analyse :</strong> Récupération des données en temps réel via l'API MetaTrader 5. Calcul d'indicateurs (EMA, ATR, RSI) et détection de patterns institutionnels (Order Blocks, Smart Money Concepts).</li>
                <li><strong>Veille Asynchrone :</strong> Moteur de news multi-sources avec système de scoring basé sur le NLP (Traitement du Langage Naturel) pour analyser le sentiment du marché.</li>
                <li><strong>Exécution Ultra-Rapide :</strong> Prise de position à faible latence (millisecondes) lors des annonces macroéconomiques majeures (NFP, FOMC, CPI).</li>
                <li><strong>Gestion des risques :</strong> Implémentation d'un système autonome avec Kill Switch et Trailing Stop.</li>
              </ul>

              <p><strong>Objectif actuel :</strong> Valider une stratégie rentable sur compte démo pour un passage en production, avec l'ambition de rendre le système scalable vers des flux institutionnels comme Bloomberg ou Reuters.</p>
              
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">asyncio & aiohttp</span>
                <span className="tag">Pandas & Numpy</span>
                <span className="tag">MetaTrader5 API</span>
                <span className="tag">Event-Driven Architecture</span>
              </div>
            </div>
          </div>
        );

      case 'competences':
        return (
          <div className="section-content">
            <h3>Compétences Techniques & Informatiques</h3>
            <div className="grid-2">
              <div className="card">
                <h4>Développement & BDD</h4>
                <ul>
                  <li><strong>Avancé :</strong> HTML/CSS, SQL (PostgreSQL, MySQL, MariaDB)</li>
                  <li><strong>Intermédiaire :</strong> JavaScript/TypeScript, Python, PHP, Java, Dart, Bash, SQLite</li>
                  <li><strong>Frameworks :</strong> React, Node.js, Express, Flutter, Tailwind CSS, Spring Boot</li>
                </ul>
              </div>
              <div className="card">
                <h4>Cybersécurité, Réseau & DevOps</h4>
                <ul>
                  <li><strong>Systèmes :</strong> Linux, Windows Server, VMware ESXi</li>
                  <li><strong>Sécurité :</strong> Kali Linux, Wireshark, Nmap, SQLMap, pfSense</li>
                  <li><strong>Outils Pro :</strong> Git/GitHub, Docker, Jenkins, Ansible, Méthodes Agiles (TDD/BDD)</li>
                </ul>
              </div>
            </div>
            
            <div className="card" style={{marginTop: '1.5rem'}}>
              <h4>Ma valeur ajoutée</h4>
              <p>Mon atout principal est ma double compétence : <strong>Développement Full Stack + Cybersécurité/Infrastructure</strong>. Cette transversalité me permet d'avoir une vision globale du cycle de vie d'une application, depuis sa conception logicielle jusqu'à son déploiement réseau et sa sécurisation face aux attaques.</p>
            </div>

            <h3>Auto-évaluation des Compétences (BUT Informatique)</h3>
            <table className="eval-table">
              <thead>
                <tr>
                  <th>Compétence</th>
                  <th>Note</th>
                  <th>Savoir-faire et Acquis</th>
                  <th>Axes d'amélioration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Réaliser</strong></td>
                  <td>16/20</td>
                  <td>Autonome de bout en bout. Maîtrise des architectures MVC/Repository (Flutter/SQLite). Capacité à déboguer un terminal et à piloter une IA avec esprit critique (26 prompts sur Voronoï). Modularisation avancée du code (Python).</td>
                  <td>Besoins occasionnels de phases de refactoring. Je dois viser un code nativement optimisé aux plus hauts standards d'architecture dès le premier jet.</td>
                </tr>
                <tr>
                  <td><strong>Optimiser</strong></td>
                  <td>15/20</td>
                  <td>Capacité à proposer des algorithmes innovants (topologie culturelle) et à nettoyer le code des contraintes inutiles générées par l'IA. Excellente optimisation des requêtes SQL pour préserver l'énergie des mobiles.</td>
                  <td>Acquérir des automatismes méthodologiques (utilisation de profilers de code, calculs de complexité théorique) pour optimiser par défaut et non a posteriori.</td>
                </tr>
                <tr>
                  <td><strong>Collaborer</strong></td>
                  <td>16/20</td>
                  <td>Excellente intégration d'équipe. Capacité à lier la technique aux enjeux design/communication. Gestion de projets complexes sans conflits, avec une écoute active et transparente.</td>
                  <td>Prendre davantage d'initiatives formelles en tant que Lead Developer ou Scrum Master pour guider et structurer la dynamique de toute une équipe.</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case 'avenir':
        return (
          <div className="section-content">
            <h3>Bilan Académique</h3>
            <div className="grid-2">
              <div className="card">
                <h4>Mes points forts</h4>
                <p>Mon moteur est la passion. Lorsque j'étudie un domaine lié au développement, à la gestion de projet ou à la sécurité, mon investissement est total, ce qui s'est traduit par d'excellentes notes lors de mes SAÉ. Je retiens ma grande curiosité technique, mon esprit d'équipe et ma capacité d'adaptation rapide aux nouvelles technologies (comme les IAGen).</p>
              </div>
              <div className="card">
                <h4>Mes axes de progression</h4>
                <p>Ma principale difficulté a été de maintenir une rigueur constante dans les matières théoriques ou périphériques à mes passions. J'ai compris qu'un bon ingénieur doit traiter chaque module avec un professionnalisme égal. C'est un point que j'ai activement corrigé pour cette fin de cursus.</p>
              </div>
            </div>

            <h3>Poursuite d'études & Objectifs</h3>
            <div className="card">
              <h4>Objectif à Court Terme (6 mois) : Transition et Consolidation</h4>
              <p>Sécuriser mon entrée en <strong>École d'Ingénieurs en Informatique</strong>. Je souhaite assimiler parfaitement mes fondamentaux du BUT pour démarrer le cycle ingénieur avec un socle technique et méthodologique irréprochable, et me positionner comme un élément moteur de ma future promotion.</p>
              
              <h4>Objectif à Moyen Terme (1-2 ans) : Spécialisation Cybersécurité</h4>
              <p>Décrocher mon diplôme d'ingénieur tout en orientant stratégiquement tous mes choix (options, projets, stages) vers la sécurité informatique et les réseaux, afin de bâtir un profil hautement employable et pertinent face aux réalités des menaces actuelles.</p>
              
              <h4>Objectif à Long Terme (5 ans et +) : Devenir Expert Pentester</h4>
              <p>Faire carrière dans le hacking éthique (Pentest). Mon épanouissement passera par la résolution quotidienne de défis stimulants (audits, recherche de vulnérabilités, sécurisation de SI critiques) tout en atteignant une forte reconnaissance professionnelle et une stabilité financière à la hauteur de mon expertise.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="portfolio-container">
      <header className="main-header">
        <h1>Ryan Agin</h1>
        <h2>Développeur Full Stack & Passionné de Cybersécurité</h2>
        <div className="contact-bar">
          <a href="mailto:aginryan951@gmail.com">aginryan951@gmail.com</a>
          <span>|</span>
          <span>07.66.18.56.72</span>
          <span>|</span>
          <a href="https://www.linkedin.com/in/ryan-agin-069b012a3/" target="_blank" rel="noreferrer">LinkedIn</a>
          <span>|</span>
          <a href="https://github.com/KAKRI21" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <nav className="nav-tabs">
        <button className={`tab-button ${activeTab === 'accueil' ? 'active' : ''}`} onClick={() => setActiveTab('accueil')}>À propos & Culture</button>
        <button className={`tab-button ${activeTab === 'stage' ? 'active' : ''}`} onClick={() => setActiveTab('stage')}>Stage BUT 3</button>
        <button className={`tab-button ${activeTab === 'sae' ? 'active' : ''}`} onClick={() => setActiveTab('sae')}>Projets SAÉ</button>
        <button className={`tab-button ${activeTab === 'perso' ? 'active' : ''}`} onClick={() => setActiveTab('perso')}>Projets Persos</button>
        <button className={`tab-button ${activeTab === 'competences' ? 'active' : ''}`} onClick={() => setActiveTab('competences')}>Compétences & Auto-évaluation</button>
        <button className={`tab-button ${activeTab === 'avenir' ? 'active' : ''}`} onClick={() => setActiveTab('avenir')}>Bilan & Avenir</button>
      </nav>

      <main>
        {renderTabContent()}
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© 2026 Ryan Agin. Portfolio BUT 3 Informatique.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
