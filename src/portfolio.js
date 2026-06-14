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
                Mon stage chez CM-MP en deuxième année, c'est vraiment là que tout a cliqué pour moi. Pour la première fois, j'ai eu affaire à de vraies infrastructures informatiques : gérer des serveurs en production, configurer des réseaux, intervenir sur des incidents de sécurité réels. Pas du labo, du vrai travail qui a du poids. Ça m'a donné confiance en mes compétences techniques et a confirmé que je voulais faire de la cybersécurité, pas juste en théorie, mais en vrai.
              </p>
            </div>

            <h3>Passeport Culturel & Ouverture</h3>
            <div className="grid-2">
              <div className="card">
                <h4>Événements & Pratique (CTF)</h4>
                <p>Visant une spécialisation en Pentest, je m'entreîne intensivement sur TryHackMe, Root-Me et Hack The Box. Je participe à des CTF (Capture The Flag) pour pratiquer l'intrusion éthique et le reverse engineering. Je me rends aussi régulièrement à des salons informatiques pour échanger avec des experts et voir des démonstrations industrielles.</p>
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
              <h4>Auto-école MILAR (Sarcelles) - Développeur Python / Automatisation</h4>
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
              <h4>CM-MP (Nanterre) - Administrateur Système et Réseau</h4>
              <p><em>Du 27 janvier au 21 février 2025</em></p>
              <h5 className="sub-tagline">Mon premier vrai contact avec la cybersécurité en entreprise</h5>
              
              <p>
                Pour ma deuxième année de BUT, j'ai eu l'opportunité de stager chez CM-MP à Nanterre. Clairement, c'est un stage qui m'a ouvert les yeux sur ce que représente vraiment la cybersécurité en tant que métier.
              </p>
              <p>
                Ce qui m'a le plus marqué, c'est d'avoir enfin vu la sécurité informatique de l'intérieur : pas théorique, mais concret. Je me suis rendu compte que la sécu, ce n'est pas qu'une question de firewall ou d'antivirus, c'est une mentalité, une approche où chaque détail compte quand tu dois protéger les données et les systèmes de vrais clients.
              </p>
              
              <h4>Ce que j'ai vraiment fait</h4>
              <p>
                J'ai pu mettre les mains dans les baies de serveurs : configuration de VMware ESXi, gestion des réseaux, mise en place de VPN, installation de systèmes de reconnaissance faciale, et réaction à des incidents de sécurité en direct. Ce qui m'a marqué aussi, c'est le contact avec les clients (des PME et TPE) où j'ai compris l'importance d'être à l'écoute, de savoir expliquer les choses simplement et d'être rigoureux dans son travail.
              </p>
              
              <h4>L'ambiance, l'équipe</h4>
              <p>
                L'équipe chez CM-MP était vraiment soudée. Tout le monde avait le réflexe de partager ses connaissances et de s'entraider. Ça m'a conforté dans mon envie de faire carrière en cybersécurité. Et franchement, ce stage m'a montré que ce secteur est en perpétuelle évolution : chaque jour c'était quelque chose de nouveau, une config réseau à sécuriser, une tentative d'intrusion à analyser, un serveur à déployer en production.
              </p>

              <h4>Bilan honnête</h4>
              <p>
                J'ai vraiment aimé. Je me suis senti utile, j'ai gagné en confiance et ce stage a verrouillé ma décision : je veux faire de la cybersécurité, point. Pas seulement par passion théorique, mais parce que j'ai vu que c'était un métier où tu fais vraiment la différence. Un grand merci à toute l'équipe CM-MP pour m'avoir accueilli comme ça, pour leur bienveillance et pour la qualité de l'encadrement. C'est une expérience que je n'oublierai pas.
              </p>

              <div className="tags" style={{ marginBottom: '2rem' }}>
                <span className="tag">VMware ESXi</span>
                <span className="tag">Administration Réseau</span>
                <span className="tag">VPN</span>
                <span className="tag">Reconnaissance Faciale</span>
                <span className="tag">Sécurité Système</span>
              </div>

              {/* Galerie Photos avec tes fichiers */}
              <h4>Galerie Médias - Équipements et Infrastructure</h4>
              <div className="image-gallery">
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2967.jpg`} alt="Serveur rack ouvert" />
                  <span className="image-caption">Maintenance des serveurs et inspection des composants internes</span>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2906.jpg`} alt="Baie informatique IBM" />
                  <span className="image-caption">Gestion de l'armoire réseau et des baies de stockage IBM</span>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2981.jpg`} alt="Console VMware ESXi et câblage" />
                  <span className="image-caption">Configuration des switchs et déploiement de l'hyperviseur VMware ESXi</span>
                </div>
              </div>

              {/* Contacts d'encadrement */}
              <div className="supervision-box">
                <h5>Encadrement :</h5>
                <ul>
                  <li><strong>Tuteur en entreprise :</strong> M. Stéphane Eveillard (aco@cm-mp.fr - 01 80 70 60 00)</li>
                  <li><strong>Maître de stage :</strong> Mme. Haifa Zargayouna (haifa.zargayouna@lipn.univ-paris13.fr)</li>
                </ul>
              </div>
            </div>

            {/* Témoignage Europermis */}
            <div className="card">
              <h4>Témoignage Professionnel</h4>
              <blockquote className="testimonial">
                "Durant ses 4 mois de stage au sein de notre agence, Ryan fait preuve d'un professionnalisme exemplaire. C'est un jeune homme sérieux, ponctuel et doté d'un excellent sens relationnel. Bien qu'autonome sur la conception technique, il a su parfaitement s'intégrer à l'équipe et communiquer clairement. Les retours sur son travail sont très positifs, et son attitude a été irréprochable. Nous recommandons vivement son profil."
                <span className="testimonial-author">- Hélène Aydin, Secrétaire & Référente RH (Europermis, Sarcelles)</span>
              </blockquote>
            </div>
          </div>
        );

      case 'sae':
        return (
          <div className="section-content">
            <h3>Projets Universitaires (SAÉ)</h3>
            
            <div className="card">
              <h4>SAÉ S5 : MIAAM - App Mobile Anti-Gaspillage</h4>
              
              <p>
                Pour ma cinquième année, j'ai participé à la conception d'une application mobile appelée MIAAM. L'idée générale ? Créer un outil qui aide les gens à réduire leur gaspillage alimentaire au quotidien en leur proposant des recettes intelligentes basées sur leurs ingrédients disponibles et leurs préférences. Le slogan qu'on a choisi, "Réduire le gaspillage, un repas à la fois", résume bien l'approche progressive qu'on a voulue : pas culpabilisant, juste pratique et accessible.
              </p>

              <p>
                Ma contribution a porté sur deux axes. D'abord, j'ai travaillé avec l'équipe sur l'identité visuelle de l'app : la charte graphique, le logo, les couleurs. On a beaucoup discuté autour de la question du ton. Comment sensibiliser à l'écologie sans adopter un discours moralisateur qui va faire fuir les utilisateurs ? On a opté pour une palette chaleureuse avec du beige clair (pour la douceur) et du brun (pour l'ancrage au quotidien). Ensuite, j'ai géré la logique métier : les systèmes de profils utilisateurs, la personnalisation, l'organisation des données autour des ingrédients et des allergènes.
              </p>

              <p>
                Le vrai défi technique a été de proposer des recettes réellement pertinentes et variées sans dérouter l'utilisateur avec des suggestions trop exotiques ou hors de sa zone de confort culinaire. J'ai développé pour ça un algorithme basé sur une topologie culturelle mondiale. L'idée était de mapper plus de 100 traditions culinaires et de créer des ponts logiques entre elles. Par exemple, si tu aimes la cuisine méditerranéenne, l'algo va progressivement t'introduire à des cuisines proches plutôt que de te proposer soudain un repas thaï. Ça a vraiment amélioré la pertinence des recommandations.
              </p>

              <p>
                Un autre enjeu majeur : tout fonctionne en mode hors-ligne sur le téléphone via une base SQLite embarquée. Ça signifie que l'app doit être extrêmement économe en ressources, sans quoi elle va vider la batterie en deux heures. J'ai donc passé du temps à optimiser drastiquement les requêtes SQL et les traitements pour que la navigation reste fluide même sans réseau.
              </p>

              <p>
                À la fin, on a livré une application complète et performante qui intègre un Éco-Score pour chaque recette. Ce projet m'a vraiment marqué sur un point : l'importance de ne pas opposer architecture technique rigoureuse et expérience utilisateur. C'est l'équilibre entre les deux qui crée un produit vraiment utile.
              </p>

              <div className="tags">
                <span className="tag">Flutter</span>
                <span className="tag">SQLite</span>
                <span className="tag">MVC</span>
                <span className="tag">Algorithmique</span>
                <span className="tag">UX Design</span>
              </div>
            </div>

            <div className="card">
              <h4>SAÉ S6 : Diagrammes de Voronoï & IA Génératives</h4>
              
              <p>
                En sixième année, j'ai eu un projet un peu différent : il fallait créer une application capable de générer et visualiser des diagrammes de Voronoï à partir d'un fichier de coordonnées. Mais le vrai sujet de fond n'était pas juste d'implémenter l'algo : c'était d'évaluer comment les IA génératives pouvaient nous aider dans le développement, et quels étaient les risques associés.
              </p>

              <p>
                Le projet avait trois phases. Phase 1, on développait l'application sans IA, juste nous à la main. Phase 2, on la redéveloppait en utilisant 4 IA génératives différentes pour voir lesquelles étaient les plus efficaces. Phase 3, on analysait les risques : souveraineté numérique, légalité, qualité du code généré, impact environnemental. Pour ma part, j'étais en charge de la Phase 2 comme "Prompt Engineer" attitré, et je devais aussi analyser une dimension des risques.
              </p>

              <p>
                Dès le départ, j'ai choisi de tester DeepSeek, l'IA chinoise, pour avoir une alternative aux solutions américaines dominantes (Claude, ChatGPT, Grok). Ça m'intéressait de confronter les performances, mais aussi de réfléchir aux enjeux de souveraineté technologique. Avec DeepSeek, j'ai lancé le développement, mais rapidement, j'ai rencontré des blocages. L'arborescence du code qu'elle générée était cassée, les imports ne marchaient pas. J'ai eu beau expliquer le problème, elle ne comprenait pas bien. Ça m'a appris une première leçon : l'IA génère vite, mais c'est du code brut qui a besoin de beaucoup de polissage.
              </p>

              <p>
                Le défi vraiment intéressant a été le rendu graphique. L'app était censée afficher les diagrammes en SVG et en PNG, mais au départ, les couleurs étaient confondues, les arêtes du diagramme n'étaient pas tracées correctement. Là, j'ai dû devenir vraiment "prompt engineer" : j'ai fait 26 itérations avec l'IA. À chaque fois, je lui fournissais les logs d'erreurs du terminal et des captures d'écran des défauts visuels pour la forcer à corriger précisément le tracé. C'était long, mais ça a marché. La clé était de guider l'IA avec des informations très concrètes plutôt que des descriptions vagues.
              </p>

              <p>
                En testant l'application, j'ai aussi découvert qu'elle avait une contrainte arbitraire : elle refusait de fonctionner avec moins de 3 points. Pourquoi 3 ? Aucune bonne raison. C'était juste une limite que l'IA avait introduite par défaut sans qu'on le demande. Je l'ai signalé et j'ai demandé la suppression de cette contrainte pour que l'app soit vraiment flexible.
              </p>

              <p>
                En moins d'une heure au total, j'avais un module fonctionnel. Ce projet m'a appris quelque chose de crucial : l'IA générative offre un vrai gain de rapidité et de productivité, c'est indéniable. Mais elle ne remplace absolument pas l'esprit critique d'un développeur. Sans capacités solides en débogage, en lecture de logs, en tests unitaires et en réflexion stratégique, le code généré reste inutilisable. La vraie compétence, c'est de savoir exploiter l'IA tout en gardant un regard critique.
              </p>

              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">DeepSeek</span>
                <span className="tag">Prompt Engineering</span>
                <span className="tag">SVG/PNG Rendering</span>
                <span className="tag">Analyse critique</span>
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
        <button className={`tab-button ${activeTab === 'stage' ? 'active' : ''}`} onClick={() => setActiveTab('stage')}>Stages</button>
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
