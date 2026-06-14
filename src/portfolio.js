import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#05070c",
  surface: "rgba(255, 255, 255, 0.02)",
  surfaceAccent: "rgba(0, 207, 255, 0.03)",
  border: "rgba(99, 220, 255, 0.08)",
  borderActive: "rgba(0, 207, 255, 0.3)",
  cyan: "#00cfff",
  violet: "#7c3aed",
  green: "#10b981",
  textPrimary: "#f1f5f9",
  textSecondary: "#94a3b8",
  mono: "#38bdf8",
  danger: "#ef4444",
};

// Custom hook to detect when an element is visible on screen
function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      ...style
    }}>{children}</div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: "3rem", borderBottom: `1px solid ${COLORS.border}`, paddingBottom: "0.75rem" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", color: COLORS.cyan, fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 700 }}>
        {children}
      </span>
    </div>
  );
}

function GlassCard({ children, style = {}, glow = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${hovered ? COLORS.borderActive : COLORS.border}`,
        borderRadius: "8px",
        boxShadow: (glow || hovered) ? "0 0 25px rgba(0,207,255,0.04)" : "none",
        transition: "all 0.3s ease",
        ...style
      }}>{children}</div>
  );
}

function ProgressBar({ label, score, caption }) {
  const ref = useRef();
  const inView = useInView(ref);
  const pct = (score / 20) * 100;
  return (
    <div ref={ref} style={{ marginBottom: "1.2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ color: COLORS.textPrimary, fontSize: "0.88rem", fontWeight: 500 }}>{label}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", color: COLORS.cyan, fontSize: "0.85rem" }}>{score}/20</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "2px", height: "4px", overflow: "hidden", marginBottom: "4px" }}>
        <div style={{
          width: inView ? `${pct}%` : "0%", height: "100%",
          background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.violet})`,
          transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
        }} />
      </div>
      <p style={{ color: COLORS.textSecondary, fontSize: "0.78rem", margin: 0 }}>{caption}</p>
    </div>
  );
}

function TypeWriter({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const target = texts[idx];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 50);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);
  return (
    <span style={{ fontFamily: "'Space Grotesk',sans-serif", color: COLORS.cyan, fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
      {displayed}<span style={{ borderRight: `2px solid ${COLORS.cyan}`, marginLeft: "2px", animation: "blink 1s step-end infinite" }} />
    </span>
  );
}

function Tag({ children, color = COLORS.cyan }) {
  return (
    <span style={{
      border: `1px solid ${color}`, color: color,
      background: "rgba(0, 207, 255, 0.02)",
      fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem",
      padding: "2px 8px", borderRadius: "4px", display: "inline-block",
      margin: "2px 4px 2px 0"
    }}>{children}</span>
  );
}

function ObstacleCard({ icon, title, problem, solution }) {
  return (
    <GlassCard style={{ padding: "1.25rem", flex: "1 1 240px", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ fontSize: "1.25rem", marginBottom: "6px" }}>{icon} <span style={{ color: COLORS.textPrimary, fontWeight: 600, fontSize: "0.9rem" }}>{title}</span></div>
      <p style={{ color: COLORS.danger, fontSize: "0.8rem", margin: "0 0 4px" }}><strong>Fix:</strong> {problem}</p>
      <p style={{ color: COLORS.green, fontSize: "0.8rem", margin: 0 }}><strong>Rebond:</strong> {solution}</p>
    </GlassCard>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectTab, setProjectTab] = useState(0);
  const [stageTab, setStageTab] = useState(0);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "À propos", id: "about" },
    { label: "Projets (SAE)", id: "projets" },
    { label: "Parcours Stages", id: "stage" },
    { label: "Compétences", id: "skills" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.textPrimary, minHeight: "100vh", fontFamily: "'Inter', sans-serif", paddingBottom: "5rem" }}>
      
      {/* NAVIGATION */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(5,7,12,0.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${COLORS.border}`, height: "60px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }} onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>
            R.AGIN<span style={{ color: COLORS.cyan }}>_</span>
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1.25rem" }} className="nav-desktop">
              {menuItems.map(item => (
                <button key={item.id} onClick={() => scroll(item.id)} style={{ background: "none", border: "none", color: COLORS.textSecondary, cursor: "pointer", fontSize: "0.85rem", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color=COLORS.cyan} onMouseLeave={e => e.target.style.color=COLORS.textSecondary}>{item.label}</button>
              ))}
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: COLORS.textPrimary, fontSize: "1.25rem", cursor: "pointer" }} className="nav-mobile-btn">☰</button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: COLORS.bg, zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: COLORS.textPrimary, fontSize: "1.5rem" }}>✕</button>
          {menuItems.map(item => (
            <button key={item.id} onClick={() => scroll(item.id)} style={{ background: "none", border: "none", color: COLORS.textPrimary, fontSize: "1.5rem", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700 }}>{item.label}</button>
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", padding: "100px 1.5rem 3rem", maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center", width: "100%" }}>
          <FadeIn>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", color: COLORS.cyan, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              Portfolio Universitaire · BUT Informatique S6
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, margin: "0 0 0.5rem", lineHeight: 1.1 }}>Ryan Agin</h1>
            <div style={{ marginBottom: "1.5rem", minHeight: "1.8rem" }}>
              <TypeWriter texts={["Futur Ingénieur Cybersécurité", "Spécialisation Pentest & SecOps", "Développeur Scripting / Automation"]} />
            </div>
            <p style={{ color: COLORS.textSecondary, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem", maxWidth: "480px" }}>
              Passionné par la rétro-ingénierie, l'administration d'infrastructures sécurisées et le contournement de protections complexes. Je développe des solutions robustes tout en analysant leurs faiblesses.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button onClick={() => scroll("stage")} style={{ background: COLORS.cyan, color: COLORS.bg, border: "none", padding: "10px 18px", borderRadius: "4px", cursor: "pointer", fontWeight: 700, fontSize: "0.85rem", fontFamily: "'Space Grotesk',sans-serif" }}>Découvrir mes stages</button>
              <button onClick={() => scroll("contact")} style={{ border: `1px solid ${COLORS.border}`, color: COLORS.textPrimary, background: "transparent", padding: "10px 18px", borderRadius: "4px", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem" }}>Me contacter</button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "180px", height: "180px", borderRadius: "8px", border: `1px solid ${COLORS.borderActive}`, background: "linear-gradient(135deg, rgba(0,207,255,0.1), rgba(124,58,237,0.1))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                {/* Image Placeholder - Représentant la photo en costume/cravate */}
                <span style={{ fontSize: "3rem" }}>👨‍💼</span>
              </div>
              <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                <Tag>Rigoureux</Tag><Tag>Analytique</Tag><Tag>Engagé</Tag>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUI SUIS-JE ? */}
      <section id="about" style={{ padding: "4rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <FadeIn><SectionTitle>// 01. Profil & Alignement</SectionTitle></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <FadeIn delay={0.1}>
            <p style={{ color: COLORS.textSecondary, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: "1rem" }}>
              Mon parcours informatique a débuté par une fascination pour le fonctionnement interne des systèmes. Au fil de mon parcours à l'IUT de Villetaneuse, j'ai orienté mes compétences de développement vers une vision globale de l'infrastructure et de la sécurité offensive.
            </p>
            <p style={{ color: COLORS.textSecondary, lineHeight: 1.7, fontSize: "0.92rem" }}>
              Mon objectif ultime est d'évoluer en tant que **Pentester** (Hacker Éthique). Mes expériences en administration réseau (virtualisation durcie) combinées à mon expertise en automatisation avancée me permettent d'appréhender les failles de sécurité non pas comme des éléments isolés, mais comme des défauts logiques d'architecture.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GlassCard style={{ padding: "1.25rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: COLORS.mono, lineHeight: 1.6 }}>
              <div><span style={{ color: COLORS.cyan }}>$</span> whoami</div>
              <div style={{ color: COLORS.textPrimary, marginBottom: "0.75rem" }}>&gt; Ryan Agin | Étudiant BUT Info Spé. Cyber</div>
              <div><span style={{ color: COLORS.cyan }}>$</span> cat focus_technique.json</div>
              <div style={{ color: COLORS.textSecondary, marginBottom: "0.75rem" }}>
                {`{
  "offensive": ["Pentesting", "API Bypassing", "Scripting Bot"],
  "defensive": ["Hardening ESXi", "VPN Tunnels", "Logs Analysis"],
  "languages": ["Python", "JavaScript", "SQL", "Dart"]
}`}
              </div>
              <div><span style={{ color: COLORS.cyan }}>$</span> echo $target</div>
              <div style={{ color: COLORS.green }}>&gt; Master / École d'Ingénieur en Cybersécurité █</div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* PROJETS SAE */}
      <section id="projets" style={{ padding: "4rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <FadeIn><SectionTitle>// 02. Projets Majeurs (SAÉ)</SectionTitle></FadeIn>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
          {["SAÉ S5 — Application Miaam", "SAÉ S6 — Voronoï & IA Générative"].map((t, i) => (
            <button key={t} onClick={() => setProjectTab(i)} style={{
              padding: "8px 16px", borderRadius: "4px", cursor: "pointer",
              background: projectTab === i ? "rgba(0, 207, 255, 0.1)" : "transparent",
              border: `1px solid ${projectTab === i ? COLORS.cyan : COLORS.border}`,
              color: projectTab === i ? COLORS.cyan : COLORS.textSecondary,
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.8rem", fontWeight: 600, transition: "all 0.2s"
            }}>{t}</button>
          ))}
        </div>

        {projectTab === 0 ? (
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              <GlassCard style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.3rem" }}>MIAAM — Assistant Éco-Responsable</h3>
                    <span style={{ color: COLORS.cyan, fontSize: "0.8rem", fontStyle: "italic" }}>« Réduire le gaspillage, un repas à la fois »</span>
                  </div>
                  <div>
                    <Tag>Flutter</Tag><Tag>SQLite</Tag><Tag>Pattern MVC</Tag><Tag>Repository</Tag>
                  </div>
                </div>
                <p style={{ color: COLORS.textSecondary, fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                  Application mobile intelligente conçue pour lutter contre le gaspillage alimentaire à domicile. Le système embarque un algorithme de recommandation basé sur une topologie culturelle mondiale (cartographie de plus de 100 traditions culinaires) et calcule l'impact carbone en temps réel.
                </p>
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{ fontSize: "0.9rem", color: COLORS.textPrimary, marginBottom: "0.75rem" }}>Obstacles Techniques & Solutions</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ObstacleCard icon="🍜" title="Algorithme Recommandation" problem="Éviter les suggestions redondantes ou déconnectées des habitudes." solution="Développement d'une matrice de proximité culturelle liant les cuisines par héritage géographique." />
                    <ObstacleCard icon="🔋" title="Contrainte Énergétique" problem="Calculer l'éco-score et l'empreinte sans connexion réseau continue." solution="Architecture locale via SQLite embarqué, requêtes optimisées limitant les cycles CPU." />
                  </div>
                </div>
                <h4 style={{ fontSize: "0.9rem", color: COLORS.textPrimary, marginBottom: "0.75rem" }}>Auto-Évaluation des Compétences Mobilisées</h4>
                {[
                  { label: "Réaliser", score: 16, caption: "Implémentation complète Flutter et gestion du stockage local asynchrone." },
                  { label: "Optimiser", score: 15, caption: "Factorisation via patrons d'architecture (MVC, Repository) pour la maintenabilité." },
                  { label: "Collaborer", score: 16, caption: "Travail coordonné à 6 développeurs. Gestion de l'interface et de la charte graphique anti-culpabilisation." }
                ].map(b => <ProgressBar key={b.label} {...b} />)}
              </GlassCard>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              <GlassCard style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.3rem" }}>Diagrammes de Voronoï & Analyse IAGen</h3>
                    <span style={{ color: COLORS.textSecondary, fontSize: "0.8rem" }}>Encadré par J-C. Dubacq, M. Mayero, H. Zargayouna</span>
                  </div>
                  <div>
                    <Tag>Python</Tag><Tag>DeepSeek</Tag><Tag>Prompt Engineering</Tag><Tag>SVG/PNG Export</Tag>
                  </div>
                </div>
                <p style={{ color: COLORS.textSecondary, fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                  Projet comparatif visant à développer un moteur de génération de diagrammes de Voronoï. Phase 1 : écriture algorithmique pure (sans IA). Phase 2 : génération assistée par IA de pointe en analysant l'efficacité du Prompt Engineering. Phase 3 : Audit global des risques (Souveraineté, maintenance, qualité).
                </p>
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{ fontSize: "0.9rem", color: COLORS.textPrimary, marginBottom: "0.75rem" }}>Gestion des Anomalies d'Ingénierie IA</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ObstacleCard icon="🔧" title="Architecture Imports Cassée" problem="L'IA (DeepSeek) génère une arborescence brisant les résolutions de modules." solution="Analyse méthodique des logs d'erreurs, injection corrective de fichiers __init__.py." />
                    <ObstacleCard icon="🚫" title="Contrainte Arbitraire" problem="L'IA a injecté une limitation masquée forçant l'usage de minimum 3 points." solution="Audit du code source généré, identification de la structure conditionnelle abusive et patch." />
                  </div>
                </div>
                <div style={{ padding: "1rem", background: "rgba(0, 207, 255, 0.02)", borderLeft: `3px solid ${COLORS.cyan}`, marginBottom: "1.5rem", fontSize: "0.85rem", color: COLORS.textSecondary }}>
                  <strong>Aperçu Géopolitique Tech :</strong> Choix délibéré d'évaluer le LLM non-américain <em>DeepSeek</em> (26 prompts itératifs, &lt; 1h de traitement) pour analyser les avancées technologiques de la Chine face aux solutions de la Silicon Valley, touchant directement aux problématiques de souveraineté logicielle.
                </div>
                <h4 style={{ fontSize: "0.9rem", color: COLORS.textPrimary, marginBottom: "0.75rem" }}>Auto-Évaluation des Compétences Mobilisées</h4>
                {[
                  { label: "Conduire", score: 16, caption: "Pivot agile rapide (abandon de Grok inefficace vers DeepSeek), gestion des versions." },
                  { label: "Optimiser", score: 14, caption: "Correction drastique du rendu des arêtes de cellules (tracé SVG noir opaque) via consignes visuelles." },
                  { label: "Gérer", score: 14, caption: "Suivi rigoureux du workflow de prompts et documentation des temps de correction." }
                ].map(b => <ProgressBar key={b.label} {...b} />)}
              </GlassCard>
            </div>
          </FadeIn>
        )}
      </section>

      {/* PARCOURS STAGES */}
      <section id="stage" style={{ padding: "4rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <FadeIn><SectionTitle>// 03. Expériences Professionnelles sur le Terrain</SectionTitle></FadeIn>
        
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
          {["2026 : Automation Mobile (Europermis)", "2025 : Administration Systèmes & Réseaux (CM-MP)"].map((t, i) => (
            <button key={t} onClick={() => setStageTab(i)} style={{
              padding: "8px 16px", borderRadius: "4px", cursor: "pointer",
              background: stageTab === i ? "rgba(124, 58, 237, 0.1)" : "transparent",
              border: `1px solid ${stageTab === i ? COLORS.violet : COLORS.border}`,
              color: stageTab === i ? COLORS.violet : COLORS.textSecondary,
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.8rem", fontWeight: 600, transition: "all 0.2s"
            }}>{t}</button>
          ))}
        </div>

        {stageTab === 0 ? (
          <FadeIn>
            <GlassCard style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.25rem" }}>Développeur Python · Automatisation Avancée</h3>
                  <span style={{ color: COLORS.textSecondary, fontSize: "0.85rem" }}>Auto-école MILAR (Europermis) — Sarcelles (4 mois)</span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.8rem", color: COLORS.violet }}>Mai 2026 — Sept. 2026</span>
              </div>
              
              <p style={{ color: COLORS.textSecondary, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                <strong>Mission critique :</strong> Conception de bout en bout d'un bot asynchrone ultra-rapide de réservation automatique de créneaux d'examen pour la plateforme gouvernementale (<code style={{ color: COLORS.mono }}>pro.permisdeconduire.gouv.fr</code>). L'objectif était d'analyser les flux réseaux, détecter les places à la milliseconde et finaliser la réservation en moins de 200ms.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ padding: "1rem", background: "rgba(255,255,255,0.01)", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
                  <div style={{ color: COLORS.mono, fontWeight: 600, fontSize: "0.85rem", marginBottom: "4px" }}>Bypass Cloudflare & Akamai</div>
                  <p style={{ color: COLORS.textSecondary, fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>Contournement des protections anti-bot (Turnstile) en pilotant l'instance Chrome de l'utilisateur via le protocole natif <strong>CDP (Chrome DevTools Protocol)</strong>.</p>
                </div>
                <div style={{ padding: "1rem", background: "rgba(255,255,255,0.01)", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
                  <div style={{ color: COLORS.mono, fontWeight: 600, fontSize: "0.85rem", marginBottom: "4px" }}>Bypass Keycloak SSO</div>
                  <p style={{ color: COLORS.textSecondary, fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>Le bouton de connexion se désactivait lors des injections JavaScript directes. Résolu en simulant informatiquement de vraies frappes clavier physiques, caractère par caractère.</p>
                </div>
                <div style={{ padding: "1rem", background: "rgba(255,255,255,0.01)", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
                  <div style={{ color: COLORS.mono, fontWeight: 600, fontSize: "0.85rem", marginBottom: "4px" }}>Analyse Réseau Évoluée</div>
                  <p style={{ color: COLORS.textSecondary, fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>Interception et analyse des flux via l'extraction de fichiers <strong>HAR</strong> pour corriger une boucle infinie générée par les caches de l'API d'État. Implémentation d'un backoff exponentiel (Rate Limiting 429).</p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", alignItems: "center", borderTop: `1px solid ${COLORS.border}`, paddingTop: "1rem" }}>
                <span style={{ fontSize: "0.8rem", color: COLORS.textPrimary, marginRight: "0.5rem" }}>Stack :</span>
                <Tag color={COLORS.violet}>Python</Tag><Tag color={COLORS.violet}>Playwright</Tag><Tag color={COLORS.violet}>Asyncio</Tag><Tag color={COLORS.violet}>CDP</Tag><Tag color={COLORS.violet}>API REST</Tag><Tag color={COLORS.violet}>Analyse HAR</Tag>
              </div>
            </GlassCard>
          </FadeIn>
        ) : (
          <FadeIn>
            <GlassCard style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.25rem" }}>Administrateur Système et Réseau · Déclic Cybersécurité</h3>
                  <span style={{ color: COLORS.textSecondary, fontSize: "0.85rem" }}>CM-MP — Nanterre, 92000 (BUT 2)</span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.8rem", color: COLORS.violet }}>Janv. 2025 — Fév. 2025</span>
              </div>

              <p style={{ color: COLORS.textSecondary, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                <strong>L'expérience fondatrice :</strong> Une immersion totale au cœur de la sécurité opérationnelle d'un parc informatique à destination de TPE et PME. Ce stage m'a apporté une prise de conscience majeure : la sécurité n'est pas une simple suite logicielle, c'est une culture de la rigueur où chaque configuration est une faille potentielle.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: COLORS.cyan, margin: "0 0 0.5rem" }}>🛡️ Durcissement Infrastructure</h4>
                  <ul style={{ color: COLORS.textSecondary, fontSize: "0.8rem", paddingLeft: "1.2rem", margin: 0, lineHeight: 1.5 }}>
                    <li>Installation et configuration d'hyperviseurs bare-metal <strong>VMware ESXi</strong>.</li>
                    <li>Gestion, déploiement et isolation de serveurs d'infrastructure d'entreprise (IBM / Dell).</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: COLORS.cyan, margin: "0 0 0.5rem" }}>🌐 Sécurisation des Flux</h4>
                  <ul style={{ color: COLORS.textSecondary, fontSize: "0.8rem", paddingLeft: "1.2rem", margin: 0, lineHeight: 1.5 }}>
                    <li>Mise en place et routage de tunnels <strong>VPN chiffrés</strong> pour le télétravail sécurisé.</li>
                    <li>Configuration des règles de pare-feu et contrôle d'accès réseau inter-sites.</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: COLORS.cyan, margin: "0 0 0.5rem" }}>👁️ Contrôle d'Accès & Incidents</h4>
                  <ul style={{ color: COLORS.textSecondary, fontSize: "0.8rem", paddingLeft: "1.2rem", margin: 0, lineHeight: 1.5 }}>
                    <li>Intégration de solutions de sécurité physique par <strong>reconnaissance faciale biométrique</strong>.</li>
                    <li>Participation directe à l'analyse et à la réponse aux alertes d'incidents de sécurité du réseau.</li>
                  </ul>
                </div>
              </div>

              <div style={{ padding: "0.85rem", background: "rgba(255,255,255,0.01)", borderRadius: "4px", border: `1px solid ${COLORS.border}`, fontSize: "0.82rem", color: COLORS.textSecondary, marginBottom: "1rem" }}>
                <strong>Enseignement clé :</strong> Contact direct et pédagogique avec les clients PME pour vulgariser les risques numériques. Encadrement de haut niveau par M. Stéphane Eveillard (Directeur technique) et suivi académique par Mme. Haifa Zargayouna.
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", color: COLORS.textPrimary, marginRight: "0.5rem" }}>Mots-clés :</span>
                <Tag color={COLORS.violet}>VMware ESXi</Tag><Tag color={COLORS.violet}>VPN Config</Tag><Tag color={COLORS.violet}>SysAdmin Windows/Linux</Tag><Tag color={COLORS.violet}>Incident Response</Tag><Tag color={COLORS.violet}>Firewalling</Tag>
              </div>
            </GlassCard>
          </FadeIn>
        )}
      </section>

      {/* SYNTHÈSE COMPÉTENCES */}
      <section id="skills" style={{ padding: "4rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <FadeIn><SectionTitle>// 04. Compétences & Vision d'Évolution</SectionTitle></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          
          <GlassCard style={{ padding: "1.25rem" }}>
            <h3 style={{ color: COLORS.cyan, fontSize: "0.95rem", marginTop: 0, fontFamily: "'JetBrains Mono',monospace" }}>[ Réaliser ]</h3>
            <p style={{ color: COLORS.textSecondary, fontSize: "0.82rem", lineHeight: 1.6 }}>
              <strong>Acquis :</strong> Capacité à coder des architectures robustes et packagées de bout en bout (MVC, Repository) en Flutter ou Python, en exploitant l'asynchronisme ou les bases embarquées.
            </p>
            <p style={{ color: COLORS.mono, fontSize: "0.78rem", margin: "8px 0 0" }}>
              <em>Axe d'amélioration :</em> Acquérir plus d'expérience sur la résilience applicative native dès le premier jet de code.
            </p>
          </GlassCard>

          <GlassCard style={{ padding: "1.25rem" }}>
            <h3 style={{ color: COLORS.cyan, fontSize: "0.95rem", marginTop: 0, fontFamily: "'JetBrains Mono',monospace" }}>[ Optimiser ]</h3>
            <p style={{ color: COLORS.textSecondary, fontSize: "0.82rem", lineHeight: 1.6 }}>
              <strong>Acquis :</strong> Force d'analyse pour traquant les contraintes aberrantes cachées (comme le bug des 3 points min sur Voronoï) et optimiser les flux de requêtes SQL locaux pour préserver le matériel.
            </p>
            <p style={{ color: COLORS.mono, fontSize: "0.78rem", margin: "8px 0 0" }}>
              <em>Axe d'amélioration :</em> Automatiser l'intégration d'outils de profiling avancés et l'étude fine de complexité.
            </p>
          </GlassCard>

          <GlassCard style={{ padding: "1.25rem" }}>
            <h3 style={{ color: COLORS.cyan, fontSize: "0.95rem", marginTop: 0, fontFamily: "'JetBrains Mono',monospace" }}>[ Collaborer ]</h3>
            <p style={{ color: COLORS.textSecondary, fontSize: "0.82rem", lineHeight: 1.6 }}>
              <strong>Acquis :</strong> Intégration fluide au sein de grands groupes (projets à 6 développeurs). Partage transparent des connaissances et aptitude naturelle à l'écoute et à la cohésion d'équipe.
            </p>
            <p style={{ color: COLORS.mono, fontSize: "0.78rem", margin: "8px 0 0" }}>
              <em>Axe d'amélioration :</em> Prendre le lead managérial complet sur des rôles de Scrum Master ou Lead Dev.
            </p>
          </GlassCard>

        </div>
      </section>

      {/* CONTACT & REFERENCES */}
      <section id="contact" style={{ padding: "4rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <FadeIn><SectionTitle>// 05. Réseau & Contact</SectionTitle></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          
          <FadeIn delay={0.1}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Témoignage Professionnel</h3>
            <GlassCard style={{ padding: "1.25rem", fontStyle: "italic", background: "rgba(255,255,255,0.01)" }}>
              <p style={{ color: COLORS.textSecondary, fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 1rem" }}>
                « Durant ses 4 mois de stage au sein de notre agence Europermis à Sarcelles, Ryan a fait preuve d'un sérieux et d'un professionnalisme exemplaires. Autonome sur la partie technique, ponctuel et doté d'un excellent sens relationnel, ses livrables d'automatisation ont été très performants. Attitude irréprochable. »
              </p>
              <span style={{ color: COLORS.cyan, fontFamily: "'JetBrains Mono',monospace", fontSize: "0.78rem", fontWeight: 600 }}>
                — Hélène Aydin, Référente RH & Secrétaire Administrative (Europermis)
              </span>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Canaux de Communication</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="mailto:aginryan951@gmail.com" style={{ textDecoration: "none", color: COLORS.textSecondary, fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: COLORS.cyan }}>[ Mail ]</span> aginryan951@gmail.com
              </a>
              <a href="tel:0766185672" style={{ textDecoration: "none", color: COLORS.textSecondary, fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: COLORS.cyan }}>[ Tél ]</span> 07 66 18 56 72
              </a>
              <a href="https://linkedin.com/in/ryan-agin-069b012a3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: COLORS.textSecondary, fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: COLORS.cyan }}>[ LinkedIn ]</span> ryan-agin-069b012a3
              </a>
              <a href="https://github.com/KAKRI21" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: COLORS.textSecondary, fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: COLORS.cyan }}>[ GitHub ]</span> KAKRI21
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
