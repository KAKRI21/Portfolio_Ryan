import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('stage'); // Mis sur 'stage' par défaut pour que tu puisses vérifier direct

  const renderTabContent = () => {
    switch (activeTab) {
      case 'accueil':
        return (
          <div className="section-content">
            <h3>Présentation Personnelle</h3>
            <div className="card">
              <div className="presentation-header">
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
                Mon stage en tant qu'Administrateur Système et Réseau chez CM-MP a été un déclic. Pour la première fois, je gérais de véritables infrastructures informatiques, configurais des serveurs et intervenais sur des problématiques de sécurité réelles[cite: 1]. Cette immersion a forgé ma confiance technique et confirmé mon ambition de devenir Pentester[cite: 1].
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
            <h3>Mes Expériences en Stage</h3>
            
            {/* ==================== STAGE 3EME ANNEE ==================== */}
            <div className="card">
              <span className="badge-year">Stage 3ème Année</span>
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
              <p style={{ marginBottom: '1.5rem' }}><strong>Ce dont je suis le plus fier :</strong> Avoir livré un bot robuste, en production, qui tourne réellement pour l'auto-école et réserve des places en moins de 200 millisecondes avec une architecture propre.</p>

              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">asyncio</span>
                <span className="tag">Playwright & CDP</span>
                <span className="tag">API REST (SSO)</span>
                <span className="tag">Analyse HAR</span>
              </div>
            </div>

            {/* ==================== STAGE 2EME ANNEE ==================== */}
            <div className="card">
              <span className="badge-year">Stage 2ème Année</span>
              <h4>CM-MP (Nanterre) — Administrateur Système et Réseau</h4>
              <p><em>Du 27 janvier au 21 février 2025</em></p>
              <h5 className="sub-tagline">Comment mon stage m’a ouvert les yeux sur la cybersécurité[cite: 1]</h5>
              
              <p>
                Pour ma deuxième année de BUT Informatique à l’IUT de Villetaneuse, j’ai eu la chance d’effectuer un stage chez CM-MP (68 avenue des Guilleraies, 92000 Nanterre) en tant qu’Administrateur Système et Réseau[cite: 1].
              </p>
              <p>
                Ce stage a vraiment été un <strong>déclic pour moi</strong> : c’est la première fois que j’ai pu vivre de l’intérieur la sécurité informatique sur le terrain, en équipe, avec des responsabilités concrètes[cite: 1]. Je me suis rendu compte que la cybersécurité, ce n’est pas juste une affaire de firewall ou d’outils : c’est toute une vision, un état d’esprit, où chaque détail compte pour protéger les données et les systèmes des clients[cite: 1].
              </p>
              
              <h4>Missions et compétences de terrain</h4>
              <p>
                J’ai pu intervenir sur la gestion des serveurs, l’installation et la configuration de solutions comme <strong>VMware ESXi</strong>, la gestion des réseaux, la configuration de <strong>VPN</strong>, la mise en place de systèmes de reconnaissance faciale et la réponse aux incidents de sécurité[cite: 1]. En étant en contact direct avec les clients (TPE et PME), j’ai compris l’importance de l’écoute, de la pédagogie et de la rigueur dans notre métier[cite: 1].
              </p>
              
              <h4>Esprit d'équipe & Évolution</h4>
              <p>
                Travailler dans une équipe soudée, où tout le monde est prêt à partager ses connaissances et à s’entraider, a renforcé mon envie de m’investir à fond dans la cybersécurité[cite: 1]. Ce stage m’a aussi montré que ce secteur est en évolution permanente et qu’il demande une vraie curiosité intellectuelle : chaque journée apportait son lot de nouveaux défis, que ce soit une configuration réseau à sécuriser, une tentative d’intrusion à analyser, ou un serveur à mettre en production[cite: 1].
              </p>

              <h4>Bilan personnel</h4>
              <p>
                Honnêtement, <strong>j’ai kiffé !</strong> Je me suis senti utile, valorisé, et j’ai gagné en confiance : ce stage a confirmé que je voulais vraiment faire carrière dans la cybersécurité, avec une vraie passion pour les systèmes, la gestion des risques et la protection des infrastructures informatiques[cite: 1]. Un grand merci à toute l’équipe CM-MP pour leur accueil, leur bienveillance et la qualité de l’encadrement. Ce stage restera une expérience marquante de mon parcours[cite: 1] !
              </p>

              <div className="tags" style={{ marginBottom: '2rem' }}>
                <span className="tag">VMware ESXi</span>
                <span className="tag">Administration Réseau</span>
                <span className="tag">VPN</span>
                <span className="tag">Reconnaissance Faciale</span>
                <span className="tag">Sécurité Système</span>
              </div>

              {/* Galerie Photos */}
              <h4>Galerie Médias — Équipements et Supervision</h4>
              <div className="image-gallery">
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2967.jpg`} alt="Serveur rack ouvert" />
                  <span className="image-caption">Maintenance matérielle et inspection des composants internes d'un serveur[cite: 1]</span>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2906.jpg`} alt="Baie informatique IBM" />
                  <span className="image-caption">Gestion de l'armoire réseau et des baies de stockage IBM[cite: 1]</span>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2981.jpg`} alt="Console VMware ESXi et câblage" />
                  <span className="image-caption">Configuration des switchs, câblage de la baie et déploiement de l'hyperviseur VMware ESXi[cite: 1]</span>
                </div>
              </div>

              {/* Contacts */}
              <div className="supervision-box">
                <h5>Encadrement et Contacts :</h5>
                <ul>
                  <li><strong>Tuteur en entreprise :</strong> M. Stéphane Eveillard (aco@cm-mp.fr — 01 80 70 60 00)[cite: 1]</li>
                  <li><strong>Maître de stage :</strong> Mme. Haifa Zargayouna (haifa.zargayouna@lipn.univ-paris13.fr)[cite: 1]</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h4>Témoignage Professionnel</h4>
              <blockquote className="testimonial">
                "Durant ses 4 mois de stage au sein de notre agence, Ryan fait preuve d'un professionnalisme exemplaire. C'est un jeune homme sérieux, ponctuel et doté d'un excellent sens relationnel. Bien qu'autonome sur la conception technique, il a su parfaitement s'intégrer à l'équipe et communiquer clairement. Les retours sur son travail sont très positifs, et son attitude a été irréprochable. Nous recommandons vivement son profil."
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
                  <li><strong>Systèmes :</strong> Linux, Windows Server, VMware ESXi[cite: 1]</li>
                  <li><strong>Sécurité :</strong> Kali Linux, Wireshark, Nmap, SQLMap, pfSense</li>
                  <li><strong>Outils Pro :</strong> Git/GitHub, Docker, Jenkins, Ansible, Méthodes Agiles (TDD/BDD)</li>
                </ul>
              </div>
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
                  <td>14/20</td>
                  <td>Autonome de bout en bout. Maîtrise des architectures MVC/Repository et développement Python. Capacité à piloter une IA avec esprit critique.</td>
                  <td>Besoin de plus de rigueur initiale pour limiter le refactoring de code.</td>
                </tr>
                <tr>
                  <td><strong>Optimiser</strong></td>
                  <td>12/20</td>
                  <td>Optimisation des requêtes SQL et nettoyage des contraintes inutiles dans le code.</td>
                  <td>Approfondir les calculs de complexité théorique et l'usage de profilers pour optimiser par défaut.</td>
                </tr>
                <tr>
                  <td><strong>Collaborer</strong></td>
                  <td>13/20</td>
                  <td>Bon esprit d'équipe, transparence technique, interface entre dév et design.</td>
                  <td>S'investir davantage dans des rôles de leadership formel (Lead Dev/Scrum Master).</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case 'avenir':
        return (
          <div className="section-content">
            <h3>Bilan & Avenir</h3>
            <div className="card">
              <h4>Objectifs de carrière</h4>
              <p>Objectif : Intégrer une école d'ingénieurs pour approfondir la cybersécurité. Mon but est de devenir Pentester et d'apporter mon expertise sur la sécurisation des systèmes critiques à l'international.</p>
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
          <span>|</span> <span>07.66.18.56.72</span>
          <span>|</span> <a href="https://www.linkedin.com/in/ryan-agin-069b012a3/" target="_blank" rel="noreferrer">LinkedIn</a>
          <span>|</span> <a href="https://github.com/KAKRI21" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <nav className="nav-tabs">
        <button className={`tab-button ${activeTab === 'accueil' ? 'active' : ''}`} onClick={() => setActiveTab('accueil')}>À propos</button>
        <button className={`tab-button ${activeTab === 'stage' ? 'active' : ''}`} onClick={() => setActiveTab('stage')}>Stages</button>
        <button className={`tab-button ${activeTab === 'sae' ? 'active' : ''}`} onClick={() => setActiveTab('sae')}>SAÉ</button>
        <button className={`tab-button ${activeTab === 'perso' ? 'active' : ''}`} onClick={() => setActiveTab('perso')}>Perso</button>
        <button className={`tab-button ${activeTab === 'competences' ? 'active' : ''}`} onClick={() => setActiveTab('competences')}>Compétences</button>
        <button className={`tab-button ${activeTab === 'avenir' ? 'active' : ''}`} onClick={() => setActiveTab('avenir')}>Avenir</button>
      </nav>

      <main>{renderTabContent()}</main>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: '#94a3b8' }}>
        <p>© 2026 Ryan Agin. Portfolio BUT 3 Informatique.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
