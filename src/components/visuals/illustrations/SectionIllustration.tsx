"use client";

import type { IllustrationId } from "./types";

const stroke = "var(--mbx-primary)";
const strokeMuted = "rgba(0, 122, 252, 0.35)";
const fillSoft = "rgba(0, 122, 252, 0.12)";
const textMuted = "var(--mbx-text-muted)";

export function SectionIllustration({
  id,
  className = "",
}: {
  id: IllustrationId;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--mbx-bg-neutral-03)] to-[var(--mbx-bg-neutral-02)] p-6 ${className}`}
      aria-hidden
    >
      {renderIllustration(id)}
    </div>
  );
}

function renderIllustration(id: IllustrationId) {
  switch (id) {
    case "power-ai-hub":
      return <PowerAiHub />;
    case "load-flow":
      return <LoadFlow />;
    case "ai-tools":
      return <AiTools />;
    case "collab-platform":
      return <CollabPlatform />;
    case "closed-tools":
      return <ClosedTools />;
    case "open-platform":
      return <OpenPlatform />;
    case "math-foundations":
      return <MathFoundations />;
    case "electrical-studies":
      return <ElectricalStudies />;
    case "ai-phase":
      return <AiPhase />;
    case "community-graph":
      return <CommunityGraph />;
    case "research-diagram":
      return <ResearchDiagram />;
    case "founder-circuit":
      return <FounderCircuit />;
  }
}

function PowerAiHub() {
  const nodes = [
    [120, 140], [280, 80], [440, 140], [600, 80], [680, 200], [500, 280], [300, 280], [120, 200],
  ];
  return (
    <svg viewBox="0 0 800 360" className="h-full w-full max-h-full">
      {nodes.map(([x, y], i) =>
        i > 0 ? (
          <line
            key={`l-${i}`}
            x1={nodes[i - 1][0]}
            y1={nodes[i - 1][1]}
            x2={x}
            y2={y}
            stroke={strokeMuted}
            strokeWidth="2"
            className="power-line"
          />
        ) : null,
      )}
      <line x1="400" y1="180" x2="280" y2="80" stroke={stroke} strokeWidth="2" className="power-line" />
      <line x1="400" y1="180" x2="600" y2="80" stroke={stroke} strokeWidth="2" className="power-line" style={{ animationDelay: "0.3s" }} />
      <rect x="350" y="150" width="100" height="60" rx="8" fill={fillSoft} stroke={stroke} strokeWidth="2" />
      <text x="400" y="175" textAnchor="middle" fill={stroke} fontSize="11" fontFamily="monospace" fontWeight="600">
        OPSAI
      </text>
      <text x="400" y="195" textAnchor="middle" fill={textMuted} fontSize="9" fontFamily="monospace">
        IA + Red
      </text>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="10" fill={fillSoft} stroke={stroke} strokeWidth="2" className="power-node" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </svg>
  );
}

function LoadFlow() {
  return (
    <div className="grid h-full w-full max-w-lg grid-cols-2 gap-4">
      <svg viewBox="0 0 360 320" className="h-full w-full">
        <Bus x={80} y={60} label="Bus 1" />
        <Bus x={80} y={160} label="Bus 2" />
        <Bus x={80} y={260} label="Bus 3" />
        <Line x1={110} y1={70} x2={220} y2={70} />
        <Line x1={110} y1={170} x2={220} y2={170} />
        <Line x1={110} y1={270} x2={220} y2={270} />
        <rect x="230" y="50" width="100" height="40" rx="4" fill={fillSoft} stroke={strokeMuted} />
        <text x="280" y="75" textAnchor="middle" fill={stroke} fontSize="10" fontFamily="monospace">Gen</text>
        <rect x="230" y="150" width="100" height="40" rx="4" fill={fillSoft} stroke={strokeMuted} />
        <text x="280" y="175" textAnchor="middle" fill={stroke} fontSize="10" fontFamily="monospace">Line</text>
        <rect x="230" y="250" width="100" height="40" rx="4" fill={fillSoft} stroke={strokeMuted} />
        <text x="280" y="275" textAnchor="middle" fill={stroke} fontSize="10" fontFamily="monospace">Load</text>
        <path d="M200 170 L230 170" stroke={stroke} strokeWidth="2" markerEnd="url(#arrow)" className="power-line" />
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill={stroke} />
          </marker>
        </defs>
      </svg>
      <div className="flex flex-col justify-center rounded-lg border border-mbx-border bg-[var(--mbx-bg)] p-3 font-mono text-[10px] leading-relaxed text-mbx-text-secondary sm:text-xs">
        <span className="text-mbx-primary"># flujo de carga</span>
        <span className="mt-2 text-theme">[P] = f(V, θ)</span>
        <span className="mt-1">ΔV = J⁻¹ · ΔP</span>
        <span className="mt-3 text-mbx-primary"># Newton-Raphson</span>
        <span className="mt-1">xₖ₊₁ = xₖ − J⁻¹F</span>
        <span className="mt-3 text-mbx-text-muted">converge → |Δ| &lt; ε</span>
      </div>
    </div>
  );
}

function AiTools() {
  return (
    <div className="grid h-full w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="rounded-lg border border-mbx-border bg-[var(--mbx-bg)] p-3 font-mono text-[10px] leading-relaxed sm:text-xs">
        <span className="text-mbx-text-muted">opsai/</span>
        <span className="text-mbx-primary">diagnose</span>
        <span className="text-theme">(network)</span>
        <div className="mt-2 border-l-2 border-mbx-primary/40 pl-2 text-mbx-text-secondary">
          <div>→ fault: Bus 4</div>
          <div>→ V_min: 0.94 pu</div>
          <div>→ recommend: tap +2</div>
        </div>
      </div>
      <svg viewBox="0 0 280 200" className="h-full w-full">
        {[30, 55, 45, 80, 60, 95].map((h, i) => (
          <rect key={i} x={30 + i * 38} y={160 - h} width="24" height={h} rx="3" fill={fillSoft} stroke={strokeMuted} className="transition-all group-hover:fill-[rgba(0,122,252,0.3)]" />
        ))}
        <circle cx="60" cy="40" r="8" fill={fillSoft} stroke={stroke} className="power-node" />
        <circle cx="140" cy="25" r="8" fill={fillSoft} stroke={stroke} className="power-node" style={{ animationDelay: "0.4s" }} />
        <circle cx="220" cy="40" r="8" fill={fillSoft} stroke={stroke} className="power-node" style={{ animationDelay: "0.8s" }} />
        <line x1="60" y1="40" x2="140" y2="25" stroke={strokeMuted} strokeWidth="1.5" />
        <line x1="140" y1="25" x2="220" y2="40" stroke={strokeMuted} strokeWidth="1.5" />
        <text x="140" y="190" textAnchor="middle" fill={textMuted} fontSize="9" fontFamily="monospace">optimización</text>
      </svg>
    </div>
  );
}

function CollabPlatform() {
  return (
    <svg viewBox="0 0 800 360" className="h-full w-full max-h-full">
      <path d="M80 280 C80 200 160 160 240 200 C320 240 400 120 480 160 C560 200 640 100 720 140" fill="none" stroke={strokeMuted} strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="80" cy="280" r="8" fill={stroke} />
      <circle cx="240" cy="200" r="8" fill={stroke} className="power-node" />
      <circle cx="480" cy="160" r="8" fill={stroke} className="power-node" style={{ animationDelay: "0.5s" }} />
      <circle cx="720" cy="140" r="8" fill={stroke} className="power-node" style={{ animationDelay: "1s" }} />
      {[
        { x: 120, y: 60, label: "Sim" },
        { x: 320, y: 60, label: "IoT" },
        { x: 520, y: 60, label: "Twin" },
        { x: 620, y: 60, label: "API" },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width="80" height="44" rx="6" fill={fillSoft} stroke={stroke} strokeWidth="1.5" />
          <text x={m.x + 40} y={m.y + 27} textAnchor="middle" fill={stroke} fontSize="11" fontFamily="monospace">{m.label}</text>
          <line x1={m.x + 40} y1={m.y + 44} x2={m.x + 40} y2={m.y + 80} stroke={strokeMuted} strokeWidth="1.5" className="power-line" />
        </g>
      ))}
      <text x="400" y="330" textAnchor="middle" fill={textMuted} fontSize="10" fontFamily="monospace">git · open source · módulos</text>
    </svg>
  );
}

function ClosedTools() {
  return (
    <svg viewBox="0 0 800 360" className="h-full w-full max-h-full">
      <rect x="220" y="60" width="360" height="240" rx="12" fill="var(--mbx-bg)" stroke="#ef4444" strokeWidth="2" strokeDasharray="8 4" opacity="0.9" />
      <rect x="370" y="140" width="60" height="70" rx="6" fill={fillSoft} stroke="#ef4444" strokeWidth="2" />
      <path d="M385 155 L415 185 M415 155 L385 185" stroke="#ef4444" strokeWidth="2" />
      <text x="400" y="240" textAnchor="middle" fill="#ef4444" fontSize="12" fontFamily="monospace">LICENSED</text>
      <text x="400" y="120" textAnchor="middle" fill={textMuted} fontSize="28" fontFamily="monospace" opacity="0.5">$</text>
      <text x="140" y="180" textAnchor="middle" fill={textMuted} fontSize="10" fontFamily="monospace">sin acceso</text>
      <text x="660" y="180" textAnchor="middle" fill={textMuted} fontSize="10" fontFamily="monospace">sin extensión</text>
      <line x1="180" y1="180" x2="220" y2="180" stroke="#ef4444" strokeWidth="2" />
      <line x1="580" y1="180" x2="620" y2="180" stroke="#ef4444" strokeWidth="2" />
      <path d="M170 180 L190 170 L190 190 Z" fill="#ef4444" opacity="0.6" />
      <path d="M630 180 L610 170 L610 190 Z" fill="#ef4444" opacity="0.6" />
    </svg>
  );
}

function OpenPlatform() {
  return (
    <svg viewBox="0 0 800 360" className="h-full w-full max-h-full">
      <circle cx="400" cy="180" r="50" fill={fillSoft} stroke={stroke} strokeWidth="2" />
      <text x="400" y="185" textAnchor="middle" fill={stroke} fontSize="11" fontFamily="monospace">OPEN</text>
      {[
        [200, 100, "Solar"], [600, 100, "Wind"], [150, 260, "Grid"], [650, 260, "Load"],
      ].map(([x, y, label], i) => (
        <g key={label as string}>
          <line x1="400" y1="180" x2={x as number} y2={y as number} stroke={stroke} strokeWidth="2" className="power-line" style={{ animationDelay: `${i * 0.25}s` }} />
          <circle cx={x as number} cy={y as number} r="28" fill={fillSoft} stroke={stroke} strokeWidth="1.5" />
          <text x={x as number} y={(y as number) + 4} textAnchor="middle" fill={stroke} fontSize="9" fontFamily="monospace">{label as string}</text>
        </g>
      ))}
      <text x="400" y="330" textAnchor="middle" fill={textMuted} fontSize="10" fontFamily="monospace">simulación · conexión · renovables</text>
    </svg>
  );
}

function MathFoundations() {
  return (
    <div className="grid h-full w-full max-w-lg grid-cols-2 gap-3">
      <svg viewBox="0 0 200 280" className="h-full w-full">
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={20 + col * 42}
              y={20 + row * 42}
              width="36"
              height="36"
              rx="3"
              fill={row === col ? fillSoft : "transparent"}
              stroke={strokeMuted}
              strokeWidth="1"
            />
          )),
        )}
        <text x="100" y="210" textAnchor="middle" fill={stroke} fontSize="10" fontFamily="monospace">Y_bus</text>
        <line x1="20" y1="230" x2="180" y2="230" stroke={strokeMuted} />
        <text x="100" y="255" textAnchor="middle" fill={textMuted} fontSize="9" fontFamily="serif">V = 1∠θ pu</text>
      </svg>
      <div className="flex flex-col justify-center font-mono text-[10px] leading-loose text-mbx-text-secondary sm:text-xs">
        <span className="text-theme">Z = R + jX</span>
        <span>Y = G + jB</span>
        <span className="mt-2 text-mbx-primary">π-model:</span>
        <span>──[Z]──</span>
        <span>jB/2  jB/2</span>
        <span className="mt-2 text-mbx-text-muted">{"|Vᵢ| e^{jθᵢ}"}</span>
      </div>
    </div>
  );
}

function ElectricalStudies() {
  return (
    <svg viewBox="0 0 800 300" className="h-full w-full max-h-full">
      <Generator x={60} y={130} />
      <Transformer x={180} y={130} />
      <Bus x={300} y={130} label="Bus A" />
      <Line x1={360} y1={140} x2={480} y2={140} />
      <Bus x={500} y={130} label="Bus B" />
      <Load x={620} y={130} />
      <g transform="translate(420, 100)">
        <line x1="0" y1="0" x2="0" y2="30" stroke="#ef4444" strokeWidth="3" />
        <line x1="-12" y1="10" x2="12" y2="10" stroke="#ef4444" strokeWidth="3" />
        <text x="0" y="-8" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">SC</text>
      </g>
      <text x="400" y="260" textAnchor="middle" fill={textMuted} fontSize="10" fontFamily="monospace">cortocircuito · calidad · conexión GD</text>
    </svg>
  );
}

function AiPhase() {
  return (
    <div className="grid h-full w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
      <svg viewBox="0 0 280 220" className="h-full w-full">
        <path d="M30 180 Q80 40 140 100 T250 60" fill="none" stroke={stroke} strokeWidth="2" />
        <circle cx="140" cy="100" r="6" fill={stroke} className="power-node" />
        <text x="140" y="210" textAnchor="middle" fill={textMuted} fontSize="9" fontFamily="monospace">f(x) → min</text>
      </svg>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg border border-mbx-border bg-[var(--mbx-bg)] p-2 font-mono text-[10px] sm:text-xs">
          <span className="text-mbx-primary">asistente</span>
          <span className="text-theme"> &gt; </span>
          <span className="text-mbx-text-secondary">revisar red radial</span>
        </div>
        <div className="rounded-lg border border-mbx-primary/30 bg-mbx-primary/10 p-2 text-[10px] leading-relaxed text-mbx-text-secondary sm:text-xs">
          Recomendación: aumentar sección en L3. Reporte generado en PDF/LaTeX.
        </div>
      </div>
    </div>
  );
}

function CommunityGraph() {
  const contributors = [
    { x: 400, y: 80, label: "OPSAI" },
    { x: 180, y: 200, label: "Ingeniero" },
    { x: 340, y: 260, label: "Dev" },
    { x: 500, y: 260, label: "Research" },
    { x: 620, y: 200, label: "Estudiante" },
  ];
  return (
    <svg viewBox="0 0 800 360" className="h-full w-full max-h-full">
      {contributors.slice(1).map((c) => (
        <line key={c.label} x1="400" y1="80" x2={c.x} y2={c.y} stroke={strokeMuted} strokeWidth="2" className="power-line" />
      ))}
      {contributors.map((c, i) => (
        <g key={c.label}>
          <circle cx={c.x} cy={c.y} r={i === 0 ? 36 : 28} fill={fillSoft} stroke={stroke} strokeWidth="2" className={i > 0 ? "power-node" : ""} style={{ animationDelay: `${i * 0.2}s` }} />
          <text x={c.x} y={c.y + 4} textAnchor="middle" fill={stroke} fontSize="9" fontFamily="monospace">{c.label}</text>
        </g>
      ))}
    </svg>
  );
}

function ResearchDiagram() {
  return (
    <div className="grid h-full w-full max-w-lg grid-cols-2 gap-3">
      <svg viewBox="0 0 200 260" className="h-full w-full">
        <rect x="30" y="20" width="140" height="180" rx="4" fill="var(--mbx-bg)" stroke={strokeMuted} />
        <line x1="50" y1="50" x2="150" y2="50" stroke={strokeMuted} strokeWidth="2" />
        <line x1="50" y1="70" x2="130" y2="70" stroke={strokeMuted} />
        <line x1="50" y1="85" x2="140" y2="85" stroke={strokeMuted} />
        <rect x="50" y="110" width="100" height="60" rx="3" fill={fillSoft} stroke={stroke} />
        <text x="100" y="145" textAnchor="middle" fill={stroke} fontSize="14" fontFamily="serif">∫∫∇</text>
        <text x="100" y="230" textAnchor="middle" fill={textMuted} fontSize="9" fontFamily="monospace">paper.tex</text>
      </svg>
      <div className="flex flex-col justify-center gap-2 font-mono text-[10px] text-mbx-text-secondary sm:text-xs">
        <span className="text-theme">cite: opsai/2025</span>
        <span>doi: 10.xxxx/opsai</span>
        <span className="mt-2">universidad ↔ opsai</span>
        <span>tesis · maestría · PhD</span>
      </div>
    </div>
  );
}

function FounderCircuit() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="130" r="70" fill="none" stroke={strokeMuted} strokeWidth="1.5" />
      <circle cx="200" cy="130" r="50" fill={fillSoft} stroke={stroke} strokeWidth="2" />
      <path d="M170 110 Q200 90 230 110 Q240 130 230 150 Q200 170 170 150 Q160 130 170 110" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="200" y1="60" x2="200" y2="80" stroke={stroke} className="power-line" />
      <line x1="200" y1="180" x2="200" y2="220" stroke={stroke} className="power-line" style={{ animationDelay: "0.3s" }} />
      <line x1="130" y1="130" x2="150" y2="130" stroke={stroke} />
      <line x1="250" y1="130" x2="270" y2="130" stroke={stroke} />
      <circle cx="200" cy="60" r="6" fill={stroke} className="power-node" />
      <circle cx="200" cy="220" r="6" fill={stroke} className="power-node" style={{ animationDelay: "0.6s" }} />
      <text x="200" y="270" textAnchor="middle" fill={textMuted} fontSize="10" fontFamily="monospace">ingeniería + código</text>
    </svg>
  );
}

function Bus({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + 30} y2={y} stroke={stroke} strokeWidth="4" />
      <text x={x - 10} y={y + 4} textAnchor="end" fill={textMuted} fontSize="9" fontFamily="monospace">{label}</text>
    </g>
  );
}

function Line({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={strokeMuted} strokeWidth="2" />;
}

function Generator({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx="0" cy="0" r="22" fill={fillSoft} stroke={stroke} strokeWidth="2" />
      <text x="0" y="5" textAnchor="middle" fill={stroke} fontSize="10" fontFamily="monospace">G</text>
    </g>
  );
}

function Transformer({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx="-12" cy="0" r="14" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="12" cy="0" r="14" fill="none" stroke={stroke} strokeWidth="2" />
    </g>
  );
}

function Load({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path d="M-15,-15 L15,15 M15,-15 L-15,15" stroke={stroke} strokeWidth="2" />
    </g>
  );
}
