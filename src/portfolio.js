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

            <div className="card">
              <h4>Visite du Musée des Arts et Métiers</h4>
              <p>
                Dans le cadre de ma formation, j'ai visité le Musée des Arts et Métiers à Paris. Ce qui m'a particulièrement frappé, c'est de voir comment l'innovation technique a toujours reposé sur les mêmes fondamentaux : observer la nature, comprendre ses mécanismes, et s'en inspirer pour créer. L'Avion 3 de Clément Ader en est l'exemple parfait : une machine conçue en s'inspirant directement de la morphologie de la chauve-souris. Un ingénieur du XIXe siècle qui "reverse engineering" la nature, c'est finalement pas si éloigné de ce qu'on fait nous, quand on analyse un système pour en comprendre le fonctionnement.
              </p>
              <div className="image-gallery" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/muse.jpg`} alt="L'Avion 3 de Clément Ader suspendu dans le hall du musée des Arts et Métiers" style={{ height: '300px', objectFit: 'cover' }} />
                  <span className="image-caption">L'Avion 3 de Clément Ader (1893-1897) suspendu dans le grand hall du Musée des Arts et Métiers, Paris. Une machine inspirée de la chauve-souris, pionnière de l'aviation.</span>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/des.jpg`} alt="Panneau explicatif sur l'Avion 3 et la chauve-souris" style={{ height: '300px', objectFit: 'cover' }} />
                  <span className="image-caption">Clément Ader s'est inspiré de la morphologie de la chauve-souris pour concevoir son Avion 3. Les essais ont eu lieu les 12 et 14 octobre 1897 à Satory, avant que l'avion ne soit donné au Conservatoire des Arts et Métiers en 1903.</span>
                </div>
              </div>
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
                En début de troisième année, j'ai participé à la conception d'une application mobile appelée MIAAM. L'idée générale ? Créer un outil qui aide les gens à réduire leur gaspillage alimentaire au quotidien en leur proposant des recettes intelligentes basées sur leurs ingrédients disponibles et leurs préférences. Le slogan qu'on a choisi, "Réduire le gaspillage, un repas à la fois", résume bien l'approche progressive qu'on a voulue : pas culpabilisant, juste pratique et accessible.
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
                En fin de troisième année, j'ai eu un projet un peu différent : il fallait créer une application capable de générer et visualiser des diagrammes de Voronoï à partir d'un fichier de coordonnées. Mais le vrai sujet de fond n'était pas juste d'implémenter l'algo : c'était d'évaluer comment les IA génératives pouvaient nous aider dans le développement, et quels étaient les risques associés.
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
              <h4>Bot de Trading Algorithmique - Marché de l'Or (XAU/USD)</h4>

              <p>
                En dehors de mes études, j'ai développé un bot de trading autonome sur le marché de l'or, en collaboration avec un trader professionnel. Pour ceux qui ne connaissent pas le trading : l'or (aussi appelé XAU/USD) est un actif financier qui fluctue en permanence en fonction de l'actualité mondiale, des décisions des banques centrales, de l'inflation, etc. Des milliers de traders achètent et vendent de l'or chaque seconde pour tenter de profiter de ces variations de prix. Mon idée : automatiser entièrement ce processus avec du code Python, pour qu'un programme prenne ces décisions à ma place, plus vite et sans émotion.
              </p>

              <p>
                La première brique du projet, c'est la collecte de données. Le bot se connecte en temps réel aux marchés financiers via l'API MetaTrader 5 (un logiciel professionnel utilisé par les traders du monde entier) et récupère en permanence les prix de l'or à la milliseconde. À partir de ces données brutes, il calcule des indicateurs techniques comme la EMA (moyenne mobile qui lisse les variations de prix pour repérer une tendance), le RSI (qui indique si l'or est suracheté ou survendu), ou encore l'ATR (qui mesure à quel point le prix bouge fortement). Ce sont des outils classiques en analyse technique que les traders humains utilisent pour décider quand acheter ou vendre.
              </p>

              <p>
                En plus des indicateurs classiques, j'ai intégré une logique plus avancée : la détection de patterns institutionnels. L'idée derrière ça, c'est que les grandes banques et fonds d'investissement (qu'on appelle les "institutions") laissent des traces dans les graphiques de prix quand ils passent de très gros ordres. Ces traces s'appellent des Order Blocks ou des Fair Value Gaps. Mon bot est capable de les repérer automatiquement et d'adapter ses décisions en conséquence, comme s'il "lisait" le marché à la façon d'un trader expérimenté.
              </p>

              <p>
                Le marché de l'or réagit aussi très fortement aux grandes annonces économiques : les chiffres de l'emploi américain (NFP), les décisions de la banque centrale américaine (FOMC), ou encore les données sur l'inflation (CPI). Quand ces chiffres sont publiés, le prix de l'or peut bouger de plusieurs centaines de dollars en quelques secondes. Pour capter ces opportunités, j'ai développé un moteur de veille asynchrone qui surveille en permanence plusieurs sources d'actualités financières. Il utilise du NLP (traitement du langage naturel, la même technologie que les assistants vocaux) pour analyser le sentiment des articles : est-ce une bonne ou une mauvaise nouvelle pour l'or ? En fonction de ce score, le bot décide d'agir ou non.
              </p>

              <p>
                La gestion du risque, c'est la partie que j'ai soignée le plus. Un bot qui trade sans protection peut perdre tout le capital en quelques minutes si le marché va à l'encontre de ses positions. J'ai donc mis en place deux mécanismes : un Kill Switch qui coupe automatiquement toutes les positions si les pertes dépassent un seuil défini, et un Trailing Stop qui sécurise les gains au fur et à mesure que le prix évolue favorablement, sans avoir besoin d'intervenir manuellement.
              </p>

              <p>
                En ce moment, le bot tourne sur un compte démo (un compte fictif qui simule les vraies conditions du marché, sans argent réel). L'objectif est de valider que la stratégie est rentable sur plusieurs mois avant de passer en production avec de l'argent réel. À terme, j'aimerais rendre le système compatible avec des flux de données institutionnels comme Bloomberg ou Reuters pour avoir accès à des informations encore plus rapides et précises.
              </p>

              <div className="image-gallery" style={{ gridTemplateColumns: '1fr', marginTop: '1.5rem' }}>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/trading.jpg`} alt="Bot de trading en cours d'exécution sur MetaTrader 5" style={{ height: '380px', objectFit: 'cover' }} />
                  <span className="image-caption">Le bot en production sur MetaTrader 5 - On voit les graphiques XAUUSD (or) en temps réel à gauche, et les logs d'exécution du bot dans le terminal PowerShell à droite. Chaque ligne correspond à un cycle d'analyse : le bot récupère les données, calcule les indicateurs, analyse deux stratégies (Pullback et Breakout) et attend le prochain signal.</span>
                </div>
              </div>

              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">asyncio & aiohttp</span>
                <span className="tag">Pandas & Numpy</span>
                <span className="tag">MetaTrader5 API</span>
                <span className="tag">NLP</span>
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
                  <td>13/20</td>
                  <td>Je sais développer une application de bout en bout et m'adapter aux contraintes techniques au fur et à mesure. Sur MIAAM et Voronoï, j'ai réussi à livrer des projets fonctionnels en utilisant des architectures comme MVC et en structurant mon code de façon lisible.</td>
                  <td>Je manque encore de réflexe sur certains aspects de la conception en amont. Il m'arrive de devoir retravailler mon code après coup parce que je n'avais pas anticipé certaines contraintes dès le départ.</td>
                </tr>
                <tr>
                  <td><strong>Optimiser</strong></td>
                  <td>12/20</td>
                  <td>J'ai su optimiser les requêtes SQL sur MIAAM pour que l'app tourne correctement en hors-ligne sans vider la batterie. Sur Voronoï, j'ai aussi identifié et supprimé une contrainte inutile que l'IA avait introduite dans le code.</td>
                  <td>L'optimisation reste encore souvent une étape que je fais après coup, pas dès le départ. Je n'ai pas encore les automatismes pour évaluer la complexité d'un algorithme avant de le coder.</td>
                </tr>
                <tr>
                  <td><strong>Collaborer</strong></td>
                  <td>14/20</td>
                  <td>Je m'intègre bien dans une équipe et je communique facilement sur l'avancement de mon travail. Sur les projets en groupe, j'ai su m'adapter aux autres et contribuer autant sur la partie technique que sur des aspects comme le design ou la communication.</td>
                  <td>Je n'ai pas encore eu l'occasion de gérer une équipe ou de prendre un rôle de référent technique. C'est quelque chose que j'aimerais expérimenter pour progresser sur cet aspect.</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case 'parcours':
        return (
          <div className="section-content">
            <h3>Mon Parcours Scolaire</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>De Garges-lès-Gonesse à Villetaneuse, voici les étapes qui m'ont construit.</p>

            {/* ===== COLLEGE ===== */}
            <div className="card" style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h4 style={{ margin: 0 }}>Collège Henri Wallon - Garges-lès-Gonesse</h4>
                <span className="badge-year">Collège</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.3rem' }}><em>Garges-lès-Gonesse (95)</em></p>
              <p>
                Le collège, c'est là où tout commence. À Henri Wallon, j'ai découvert les premières bases qui allaient finalement orienter toute ma trajectoire. C'est à cette période que j'ai eu mon premier ordinateur, et que cette curiosité naturelle pour "comment ça marche" a vraiment pris forme. Je passais des heures à bidouiller, tester, comprendre. Je ne savais pas encore que ça deviendrait mon métier, mais le déclic était là.
              </p>
              <p>
                Au-delà de l'informatique, le collège m'a surtout appris à travailler avec les autres. J'ai développé un sens du collectif assez tôt, que ce soit sur les projets de classe ou dans les activités parascolaires. Ce goût pour le travail en équipe, je le retrouve encore aujourd'hui dans chacun de mes projets universitaires.
              </p>
            </div>

            {/* ===== LYCEE ===== */}
            <div className="card" style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h4 style={{ margin: 0 }}>Lycée Simone de Beauvoir - Bac STI2D</h4>
                <span className="badge-year">Lycée</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.3rem' }}><em>Garges-lès-Gonesse (95)</em></p>
              <p>
                J'ai choisi la filière STI2D (Sciences et Technologies de l'Industrie et du Développement Durable) parce que c'était la voie qui se rapprochait le plus de ce que j'aimais : la technique, la conception, comprendre comment les systèmes fonctionnent. C'est un bac exigeant, avec beaucoup de travaux pratiques et de projets concrets, et ça m'a vraiment convenu. J'ai toujours mieux appris en faisant qu'en écoutant.
              </p>
              <p>
                Le lycée Simone de Beauvoir m'a aussi donné une première culture de la rigueur technique. On apprenait à réfléchir en ingénieur, à poser les problèmes correctement avant de chercher des solutions. C'est une façon de penser que j'ai gardée et qui me sert encore aujourd'hui, autant en développement qu'en cybersécurité. Et c'est là que j'ai décidé de m'orienter vers l'informatique plutôt que vers d'autres filières techniques : l'immatériel m'attirait plus que le hardware.
              </p>
            </div>

            {/* ===== BUT INFORMATIQUE ===== */}
            <div className="card" style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h4 style={{ margin: 0 }}>BUT Informatique - IUT Villetaneuse</h4>
                <span className="badge-year">2023 - 2026</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.3rem' }}><em>Université Sorbonne Paris Nord, Villetaneuse (93)</em></p>
              <p>
                Intégrer le BUT Informatique à Villetaneuse en 2023, c'était un vrai choix réfléchi. Je voulais une formation courte mais dense, avec une forte composante pratique et une reconnaissance professionnelle rapide. Le BUT, c'est exactement ça : trois ans qui combinent du développement, des réseaux, de la gestion de projet, de la base de données, du système... Un tour complet du métier d'informaticien.
              </p>
              <p>
                La première année a été un choc de rythme. On passe du lycée, où on a du temps, à un programme très chargé avec des projets en permanence. J'ai mis quelques semaines à trouver mes marques, mais une fois lancé, j'ai vraiment pris goût à la pédagogie par les SAÉ (Situations d'Apprentissage et d'Évaluation). Le principe : on nous donne un projet à réaliser, et on apprend les notions théoriques en les appliquant directement. Pour moi qui apprends mieux en pratiquant, c'était idéal.
              </p>
              <p>
                Ces trois années m'ont donné une vision globale du monde informatique que je n'aurais pas eue ailleurs. J'ai touché à tout : du développement web et mobile, à l'administration système et réseau, en passant par les bases de données, la gestion de projet en méthode Agile, et même les bases de la cybersécurité. C'est cette transversalité qui fait aujourd'hui ma force, et qui m'a permis de mener des projets aussi variés qu'une app mobile Flutter, un générateur de diagrammes Python piloté par IA, et un bot d'automatisation pour une auto-école.
              </p>
              <p>
                L'IUT de Villetaneuse, c'est aussi une équipe pédagogique impliquée. Des enseignants-chercheurs comme Haïfa Zargayouna ou Jean-Christophe Dubacq qui encadrent des projets ambitieux et poussent vraiment les étudiants à aller au fond des choses. Ce cadre m'a aidé à progresser, même sur les matières qui ne m'attiraient pas naturellement.
              </p>
              <p>
                En juin 2026, je termine ce cycle avec un bilan que je juge positif, malgré des hauts et des bas. J'aurais pu être plus régulier sur certaines matières théoriques, je le reconnais. Mais les compétences que je retire de ces trois ans, techniques comme humaines, sont solides et directement applicables. La suite ? Une école d'ingénieurs, avec en ligne de mire la cybersécurité.
              </p>
            </div>
          </div>
        );
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
        <button className={`tab-button ${activeTab === 'parcours' ? 'active' : ''}`} onClick={() => setActiveTab('parcours')}>Mon Parcours</button>
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
