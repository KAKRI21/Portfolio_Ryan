import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('stage');

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
                Mon stage en tant qu'Administrateur Système et Réseau chez CM-MP a été un déclic[cite: 1]. Pour la première fois, je gérais de véritables infrastructures informatiques, configurais des serveurs et intervenais sur des problématiques de sécurité réelles[cite: 1]. Cette immersion a forgé ma confiance technique et confirmé mon ambition de devenir Pentester[cite: 1].
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
            
            {/* STAGE 3EME ANNEE */}
            <div className="card">
              <span className="badge-year">Stage 3ème Année</span>
              <h4>Auto-école MILAR (Sarcelles) — Développeur Python / Automatisation</h4>
              <p><em>Du 18 mai au 18 septembre 2026</em></p>
              <p><strong>Mission :</strong> Développement d'un bot haute performance de réservation automatique de places d'examen de conduite sur la plateforme gouvernementale.</p>
              <p>J'ai conçu une architecture complète pour détecter les créneaux disponibles et les réserver en quelques millisecondes. J'ai géré l'authentification via CDP (Chrome DevTools Protocol) pour contourner les protections, mis en place un scan asynchrone des centres en parallèle, et créé un système de réservation instantanée avec gestion des erreurs.</p>
              
              <h4>Difficultés techniques surmontées</h4>
              <ul>
                <li><strong>Protection Cloudflare/Akamai :</strong> Simulation de trafic humain via réplication des headers HTTP et utilisation de Chrome via CDP[cite: 1].</li>
                <li><strong>SSO Keycloak :</strong> Simulation de frappes clavier réelles pour contourner le blocage des injections JS[cite: 1].</li>
              </ul>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Playwright</span>
                <span className="tag">CDP</span>
                <span className="tag">Analyse HAR</span>
              </div>
            </div>

            {/* STAGE 2EME ANNEE */}
            <div className="card">
              <span className="badge-year">Stage 2ème Année</span>
              <h4>CM-MP (Nanterre) — Administrateur Système et Réseau</h4>
              <p><em>Du 27 janvier au 21 février 2025</em></p>
              <h5 className="sub-tagline">Une immersion réelle dans la sécurité informatique[cite: 1]</h5>
              <p>Ce stage chez CM-MP a été le déclic majeur de mon parcours[cite: 1]. J'ai pu manipuler du matériel professionnel en production et gérer des infrastructures critiques[cite: 1].</p>
              
              <h4>Missions réalisées</h4>
              <ul>
                <li>Installation et configuration de virtualisation sous <strong>VMware ESXi</strong>[cite: 1].</li>
                <li>Sécurisation des architectures réseaux et liaisons <strong>VPN</strong>[cite: 1].</li>
                <li>Mise en place de systèmes de sécurité biométrique[cite: 1].</li>
                <li>Participation active à la réponse aux incidents (Incident Response)[cite: 1].</li>
              </ul>

              <div className="image-gallery">
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2967.jpg`} alt="Serveur rack ouvert" />
                  <span className="image-caption">Maintenance matérielle d'un serveur rack[cite: 1]</span>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2906.jpg`} alt="Baie informatique IBM" />
                  <span className="image-caption">Gestion de la baie système et stockage IBM[cite: 1]</span>
                </div>
                <div className="gallery-item">
                  <img src={`${process.env.PUBLIC_URL}/IMG_2981.jpg`} alt="Console VMware ESXi" />
                  <span className="image-caption">Configuration hyperviseur VMware ESXi[cite: 1]</span>
                </div>
              </div>

              <div className="supervision-box">
                <h5>Contacts :</h5>
                <ul>
                  <li><strong>Tuteur :</strong> M. Stéphane Eveillard (aco@cm-mp.fr)[cite: 1]</li>
                  <li><strong>Maître de stage :</strong> Mme. Haifa Zargayouna[cite: 1]</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'sae':
        return (
          <div className="section-content">
            <h3>Projets Universitaires (SAÉ)</h3>
            <div className="card">
              <h4>SAÉ S5 : MIAAM (App Anti-Gaspillage)</h4>
              <p>Développement d'une application Flutter avec logique métier sur SQLite.</p>
            </div>
            <div className="card">
              <h4>SAÉ S6 : Diagrammes de Voronoï</h4>
              <p>Génération de diagrammes avec Python et analyse comparative de 4 IA génératives (DeepSeek, etc.).</p>
            </div>
          </div>
        );

      case 'perso':
        return (
          <div className="section-content">
            <h3>Projets Personnels</h3>
            <div className="card">
              <h4>Bot de Trading Algorithmique (XAUUSD)</h4>
              <p>Moteur d'analyse en temps réel (EMA, RSI, Order Blocks) via l'API MetaTrader 5 avec architecture asynchrone.</p>
            </div>
          </div>
        );

      case 'competences':
        return (
          <div className="section-content">
            <h3>Compétences & Auto-évaluation</h3>
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
                  <td>Conception d'apps fonctionnelles (MVC, Flutter, SQL) et automatisation Python. Usage critique de l'IA.</td>
                  <td>Besoin de plus de rigueur initiale pour limiter le refactoring.</td>
                </tr>
                <tr>
                  <td><strong>Optimiser</strong></td>
                  <td>12/20</td>
                  <td>Optimisation basique des requêtes et algorithmes.</td>
                  <td>Approfondir les calculs de complexité et l'usage de profilers professionnels.</td>
                </tr>
                <tr>
                  <td><strong>Collaborer</strong></td>
                  <td>14/20</td>
                  <td>Esprit d'équipe, transparence technique, interface entre dév et design.</td>
                  <td>S'investir davantage dans des rôles de leadership formel (Scrum Master).</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case 'avenir':
        return (
          <div className="section-content">
            <h3>Objectifs Professionnels</h3>
            <div className="card">
              <p>Mon ambition est d'intégrer une école d'ingénieurs pour approfondir la cybersécurité, avec pour objectif final de devenir Pentester et expert en sécurisation des systèmes critiques.</p>
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
