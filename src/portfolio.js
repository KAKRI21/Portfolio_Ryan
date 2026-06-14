import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* HEADER / HERO */}
      <header className="hero">
        <h1 className="typewriter">Ryan Agin</h1>
        <h2>Développeur Full-Stack <span className="text-accent">&</span> Passionné de Cybersécurité</h2>
        <div className="contact-links">
          <a href="mailto:aginryan951@gmail.com" target="_blank" rel="noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/ryan-agin-069b012a3/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/KAKRI21" target="_blank" rel="noreferrer">GitHub</a>
          <span className="font-code text-muted">| 07.66.18.56.72</span>
        </div>
      </header>

      {/* À PROPOS */}
      <section>
        <h2>À propos</h2>
        <p>
          J'ai plongé dans le monde de l'informatique à l'âge de 13 ans avec mon premier ordinateur. Très vite, ma curiosité a dépassé le stade de simple utilisateur : je voulais comprendre ce qui se cachait derrière l'écran, comment les réseaux communiquaient et comment les systèmes étaient sécurisés.
        </p>
        <p>
          Aujourd'hui étudiant en 3ème année de BUT Informatique, je combine une forte appétence pour le développement backend et la cybersécurité (hacking éthique, Pentest). Mon approche ? Décortiquer les systèmes pour comprendre leurs failles et bâtir des architectures robustes. Curieux et persévérant, j'aime aller au bout des problèmes complexes, que ce soit en déjouant des protections réseau complexes ou en optimisant des algorithmes d'intelligence artificielle.
        </p>
      </section>

      {/* EXPÉRIENCE PRO */}
      <section>
        <h2>Expérience Professionnelle</h2>
        <div className="card">
          <div className="card-header">
            <h3>Développeur Python & Automatisation — <span className="text-accent">Auto-école MILAR</span></h3>
            <span className="date">Mai 2026 - Sept 2026</span>
          </div>
          <p><strong>Mission :</strong> Conception de A à Z d'un bot haute performance pour la réservation instantanée de créneaux d'examen de conduite sur la plateforme gouvernementale.</p>
          <ul>
            <li><strong>Le défi :</strong> Détecter et réserver des places en quelques millisecondes dès leur publication, tout en contournant des systèmes antibot majeurs (Cloudflare Turnstile, protection Akamai).</li>
            <li><strong>La solution :</strong> Architecture asynchrone complète. Abandon des navigateurs headless classiques pour piloter une session Chrome réelle via le protocole CDP. Gestion des requêtes API (SSO, OpenID) en répliquant les headers HTTP d'un trafic humain.</li>
            <li><strong>Résultat :</strong> Un bot de production robuste, intégrant un système d'anti-boucle et un backoff exponentiel contre le rate limiting, validant une place en moins de 200ms.</li>
          </ul>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">Asyncio</span>
            <span className="tag">Playwright</span>
            <span className="tag">CDP</span>
            <span className="tag">Analyse Réseau (HAR)</span>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section>
        <h2>Projets Phares</h2>
        
        <div className="card">
          <div className="card-header">
            <h3>Bot de Trading Algorithmique <span className="text-accent">(Projet Personnel)</span></h3>
          </div>
          <p>Développement d'un système de trading automatisé sur le marché de l'or (XAUUSD) en collaboration avec un trader professionnel.</p>
          <ul>
            <li>Collecte de données en temps réel et calcul d'indicateurs techniques (EMA, RSI, Smart Money Concepts).</li>
            <li>Exécution à très faible latence lors des annonces macroéconomiques (NFP, CPI).</li>
            <li>Intégration d'un moteur de veille asynchrone avec scoring NLP pour l'actualité financière et système de gestion des risques autonome (kill switch, trailing stop).</li>
          </ul>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">MetaTrader5 API</span>
            <span className="tag">Pandas</span>
            <span className="tag">Architecture Event-Driven</span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>MIAAM — Application Éco-Responsable <span className="text-accent">(SAÉ S5)</span></h3>
          </div>
          <p>Co-création d'une application mobile luttant contre le gaspillage alimentaire via des recommandations intelligentes.</p>
          <ul>
            <li>Développement de la logique métier et de l'architecture de base de données embarquée pour un fonctionnement 100% hors-ligne.</li>
            <li>Implémentation du pattern MVC/Repository et optimisation des requêtes SQL locales pour préserver l'autonomie du smartphone.</li>
          </ul>
          <div className="tags">
            <span className="tag">Flutter</span>
            <span className="tag">SQLite</span>
            <span className="tag">MVC</span>
            <span className="tag">Algorithmique</span>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>IA & Diagrammes de Voronoï <span className="text-accent">(SAÉ S6)</span></h3>
          </div>
          <p>Développement d'un module de génération de diagrammes avec une approche comparative d'Intelligences Artificielles.</p>
          <ul>
            <li>Rôle de "Prompt Engineer" attitré. Pivot stratégique vers DeepSeek suite à l'échec initial de l'IA Grok.</li>
            <li>Débogage d'un code généré instable par un processus itératif de 26 prompts précis.</li>
            <li>Correction des contraintes arbitraires et des erreurs de rendu graphique complexe (SVG/PNG).</li>
          </ul>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">DeepSeek</span>
            <span className="tag">Prompt Engineering</span>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section>
        <h2>Arsenal Technique</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>🛡️ Sécurité & Réseau</h3>
            <ul>
              <li>Kali Linux, Windows Server</li>
              <li>Wireshark, Nmap, SQLMap</li>
              <li>pfSense, VMware ESXi</li>
              <li>Active Directory</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>💻 Langages & Scripts</h3>
            <ul>
              <li>Python (Avancé)</li>
              <li>JavaScript / TypeScript</li>
              <li>SQL (PostgreSQL, MariaDB)</li>
              <li>Bash, C, Java</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>⚙️ Dév & Infrastructure</h3>
            <ul>
              <li>React, Node.js, Express</li>
              <li>Flutter, Tailwind CSS</li>
              <li>Git / GitHub, Docker</li>
              <li>Architecture MVC / Agile</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section>
        <h2>Recommandation</h2>
        <blockquote className="testimonial">
          "Durant son stage, il a fait preuve d'un professionnalisme exemplaire. Sérieux, autonome sur la conception technique de notre solution, il a su parfaitement s'intégrer à l'équipe avec un excellent sens relationnel et une communication très claire sur l'avancée de ses tâches. Nous recommandons vivement son profil."
          <span className="testimonial-author">— Hélène Aydin, Référente RH (Europermis, Sarcelles)</span>
        </blockquote>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© 2026 Ryan Agin. Conçu avec React.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
