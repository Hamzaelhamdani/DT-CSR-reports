const companyProfile = [
  { k: "Siege", v: "Bonn, Allemagne" },
  { k: "Annee de creation", v: "1995" },
  { k: "Societes consolidees", v: "326" },
  { k: "Segments", v: "Germany, USA, Europe, Systems Solutions" },
  { k: "Connexions totales", v: "298 millions" },
  { k: "Trafic reseau", v: "245,000 PB" },
  { k: "Employes (2025)", v: "~199,000" },
  { k: "Mix workforce (2021)", v: "~61% international / 39% domestique" },
  { k: "Periode rapports", v: "2009-2025" },
  { k: "Objectif climat", v: "-55% Scopes 1-3 d'ici 2030 (vs 2020)" },
];

const kpiCards = [
  { label: "Scope 1 (2025)", value: "223,790 tCO2e" },
  { label: "Scope 2 MB (2025)", value: "16,375 tCO2e" },
  { label: "Scope 2 LB (2025)", value: "3,736,800 tCO2e" },
  { label: "Scope 3 (2025 est.)", value: "8,509 ktCO2e" },
  { label: "Net zero operations", value: "Atteint en 2025" },
  { label: "Digital society reach", value: "40M personnes (2025)" },
];

const emissions = {
  years: [2021, 2022, 2023, 2024, 2025],
  scope1: [218971, 212044, 239602, 236355, 223790],
  scope2Market: [27290, 21019, 17957, 16212, 16375],
  scope2Location: [4634657, 4232913, 3979565, 4002218, 3736800],
};

const carbonIntensity = {
  years: [2023, 2024, 2025],
  market: [95, 86, 73],
  location: [130, 121, 105],
};

const indexed = {
  labels: ["2020", "2024", "2025", "2030"],
  scope12: [100, 10.4, 9.8, 5.0],
  scope3: [100, 89.3, 73.4, 45.0],
};

const sdgMentions = {
  years: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  values: [0, 0, 0, 0, 0, 0, 3, 42, 75, 89, 53, 57, 85, 83, 88, 38, 43],
};

const analysisExtras = {
  waterfall: {
    labels: ["Baseline 2020", "Scope 1+2 reduction", "Scope 3 reduction", "Residual/other", "Net 2025"],
    values: [13781, -3387, -3090, 1205, 8509],
  },
  materiality: {
    axes: ["Climate", "Circularity", "Supply chain", "Digital inclusion", "Cyber/Data trust", "Human capital"],
    impact: [9, 8, 8, 7, 6, 7],
    financial: [9, 7, 8, 6, 9, 7],
  },
  targets2030: [
    { label: "Scope 1+2", progress: 90.2, target: 95 },
    { label: "Scope 3", progress: 26.6, target: 55 },
    { label: "Circularity", progress: 62, target: 100 },
    { label: "Digital society", progress: 96.25, target: 100 },
  ],
};

const scopeTimeline = [
  [2009, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2010, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2011, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2012, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2013, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2014, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2015, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2016, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2017, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2018, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2019, "NA", "NA", "NA", "NA", "Refs Scope presentes, table non exploitable automatiquement"],
  [2020, "NA", "NA", "NA", "11,595 kt", "Baseline Scope 3 issue du transition plan"],
  [2021, "218,971", "27,290", "4,634,657", "NA", "Table historique CR recente"],
  [2022, "212,044", "21,019", "4,232,913", "NA", "Table historique CR recente"],
  [2023, "239,602", "17,957", "3,979,565", "10,693 kt (total emissions)", "Valeur issue CR2023 (total emissions)"],
  [2024, "236,355", "16,212", "4,002,218", "10,354 kt (est.)", "Calcul via reduction 10.7% vs baseline"],
  [2025, "223,790", "16,375", "3,736,800", "8,509 kt (est.)", "Calcul via reduction 26.6% vs baseline"],
];

const reports = [
  { year: 2008, file: "../dl-cr-report-08.pdf" },
  { year: 2009, file: "../dl-cr-report-09.pdf" },
  { year: 2010, file: "../dl-cr-report-10.pdf" },
  { year: 2011, file: "../dl-cr-bericht-2011-en.pdf" },
  { year: 2012, file: "../dl-cr-bericht-2012-en.pdf" },
  { year: 2013, file: "../dl-cr-bericht-2013-en.pdf" },
  { year: 2014, file: "../dl-cr-bericht-2014-en.pdf" },
  { year: 2015, file: "../dl-cr-bericht-2015-en.pdf" },
  { year: 2016, file: "../dl-cr-bericht-2016-en.pdf" },
  { year: 2017, file: "../dl-cr-bericht-2017-en.pdf" },
  { year: 2018, file: "../dl-cr-bericht-2018-en.pdf" },
  { year: 2019, file: "../dl-cr-bericht-2019-en.pdf" },
  { year: 2020, file: "../dl-cr-bericht-2020-en.pdf" },
  { year: 2021, file: "../dl-cr-bericht-2021-en.pdf" },
  { year: 2022, file: "../dl-cr-bericht-2022-en.pdf" },
  { year: 2023, file: "../dl-cr-bericht-2023-en.pdf" },
  { year: 2024, file: "../entire-dtag-cr24.pdf" },
  { year: 2025, file: "../entire-dtag-cr25.pdf" },
];

const projects = [
  {
    sdg: "2",
    odd: "ODD 2 - Zero Hunger",
    title: "5G Precision Agriculture",
    date: "2022",
    description: "Solution temps reel pour corriger la precision GPS en agriculture et optimiser semences/fertilisants.",
    kpi: "Reduction emissions et gains de rendement (contribution indirecte SDG2)",
  },
  {
    sdg: "7",
    odd: "ODD 7 - Clean Energy",
    title: "100% Electricite renouvelable",
    date: "2021",
    description: "Sourcing group-wide de 100% d'electricite renouvelable.",
    kpi: "Scope 2 market-based tres faible maintenu 2021-2025",
  },
  {
    sdg: "9",
    odd: "ODD 9 - Industry/Innovation",
    title: "Device as a Service (everphone)",
    date: "2022",
    description: "Gestion circulaire des smartphones/tablettes entreprise sur tout le cycle de vie.",
    kpi: "~50 kgCO2e evites par device; refurbishment >97%",
  },
  {
    sdg: "11",
    odd: "ODD 11 - Sustainable Cities",
    title: "AR FieldAdvisor",
    date: "2022",
    description: "Maintenance distante via realite augmentee pour eviter les deplacements techniques.",
    kpi: "~614 kgCO2e evites / 100 interventions",
  },
  {
    sdg: "11",
    odd: "ODD 11 - Sustainable Cities",
    title: "Mein Telekom Techniker",
    date: "2022",
    description: "App de suivi technicien pour reduire les visites a vide et la logistique inutile.",
    kpi: "~14 kgCO2e evites par intervention (ordre de grandeur rapporte)",
  },
  {
    sdg: "11",
    odd: "ODD 11 - Sustainable Cities",
    title: "Airport CDM (T-Systems)",
    date: "2022",
    description: "Optimisation collaborative des operations aeroportuaires pour reduire retards et fuel burn.",
    kpi: "Jusqu'a 92 kgCO2 evites par decollage",
  },
  {
    sdg: "12",
    odd: "ODD 12 - Responsible Consumption",
    title: "EcoShift mobility platform",
    date: "2022",
    description: "Dashboard carbone mobilite employes (deplacements + trajets domicile-travail).",
    kpi: "~12 tCO2/an economisees pour 100 employes",
  },
  {
    sdg: "4",
    odd: "ODD 4 - Quality Education",
    title: "AwareNessi Cyber Activity",
    date: "2022",
    description: "Magazine pedagogique cybersecurite pour enfants et parents, multi-langues.",
    kpi: "16 langues; 60h volontariat employes par numero",
  },
  {
    sdg: "4",
    odd: "ODD 4 - Quality Education",
    title: "Teachtoday",
    date: "2022",
    description: "Programme de media literacy avec methodes multimedia.",
    kpi: ">2x plus efficace que methodes conventionnelles (etude PwC)",
  },
  {
    sdg: "16",
    odd: "ODD 16 - Institutions",
    title: "Human Rights Impact Assessments",
    date: "2022",
    description: "Evaluations sur sites (Slovaquie, Tchequie, Roumanie) et mesures de remediation.",
    kpi: "Processus RHIA et ateliers de sensibilisation deployes",
  },
  {
    sdg: "13",
    odd: "ODD 13 - Climate Action",
    title: "Net zero own operations",
    date: "2025",
    description: "Atteinte du net zero Scope 1+2 avec reduction profonde + neutralisation residuelle.",
    kpi: ">94% reduction vs 2017; 250,000 tCO2e neutralisees en 2025",
  },
  {
    sdg: "15",
    odd: "ODD 15 - Life on Land",
    title: "Removal projects",
    date: "2025",
    description: "Neutralisation via projets de retrait carbone, incluant reforestation et puits technologiques.",
    kpi: "243,000 tCO2e de projets removal en 2025",
  },
  {
    sdg: "11",
    odd: "ODD 11 - Sustainable Communities",
    title: "Digital society reach",
    date: "2025",
    description: "Programmes de societe numerique inclusive a grande echelle.",
    kpi: "40M personnes touchees en 2025; 77M cumulees (2024-2025)",
  },
];

function oddIconPath(sdg) {
  return `odd-icons/odd-${String(sdg).padStart(2, "0")}.svg`;
}

function initKpis() {
  const wrap = document.getElementById("kpi-grid");
  kpiCards.forEach((kpi) => {
    const div = document.createElement("article");
    div.className = "kpi-card";
    div.innerHTML = `<p class="kpi-label">${kpi.label}</p><p class="kpi-value">${kpi.value}</p>`;
    wrap.appendChild(div);
  });
}

function initCompany() {
  const wrap = document.getElementById("company-grid");
  companyProfile.forEach((item) => {
    const div = document.createElement("article");
    div.className = "company-item";
    div.innerHTML = `<p class="k">${item.k}</p><p class="v">${item.v}</p>`;
    wrap.appendChild(div);
  });
}

function initScopeTable() {
  const tbody = document.querySelector("#scopeTable tbody");
  scopeTimeline.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function pct(a, b) {
  if (a === 0 || a === null || a === undefined || b === null || b === undefined) return null;
  return ((b - a) / a) * 100;
}

function renderAdvancedNumbers() {
  const wrap = document.getElementById("numbersGrid");
  const s1 = emissions.scope1;
  const s2m = emissions.scope2Market;
  const s2l = emissions.scope2Location;
  const combined = s1.map((v, i) => v + s2m[i]);

  const cards = [
    {
      label: "Reduction S1 (2021->2025)",
      value: `${pct(s1[0], s1[s1.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Reduction S2 MB (2021->2025)",
      value: `${pct(s2m[0], s2m[s2m.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Reduction S2 LB (2021->2025)",
      value: `${pct(s2l[0], s2l[s2l.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Reduction S1+S2 MB (2021->2025)",
      value: `${pct(combined[0], combined[combined.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Scope 1 share in S1+S2 (2025)",
      value: `${((s1[s1.length - 1] / combined[combined.length - 1]) * 100).toFixed(1)}%`,
    },
    {
      label: "Delta absolu S1+S2 MB (2021->2025)",
      value: `${formatK(combined[combined.length - 1] - combined[0])} tCO2e`,
    },
    {
      label: "Carbon intensity MB (2023->2025)",
      value: `${pct(carbonIntensity.market[0], carbonIntensity.market[2]).toFixed(1)}%`,
    },
    {
      label: "Carbon intensity LB (2023->2025)",
      value: `${pct(carbonIntensity.location[0], carbonIntensity.location[2]).toFixed(1)}%`,
    },
  ];

  cards.forEach((c) => {
    const card = document.createElement("article");
    card.className = "num-card";
    const isDelta = c.value.includes("-");
    card.innerHTML = `<p class="label">${c.label}</p><p class="value ${isDelta ? "delta-down" : ""}">${c.value}</p>`;
    wrap.appendChild(card);
  });
}

function renderEvolutionTable() {
  const tbody = document.querySelector("#evolutionTable tbody");
  const years = emissions.years;
  const s1 = emissions.scope1;
  const s2m = emissions.scope2Market;
  const s2l = emissions.scope2Location;

  years.forEach((y, i) => {
    const tr = document.createElement("tr");
    const c = s1[i] + s2m[i];

    const yoyS1 = i === 0 ? null : pct(s1[i - 1], s1[i]);
    const yoyS2m = i === 0 ? null : pct(s2m[i - 1], s2m[i]);
    const yoyS2l = i === 0 ? null : pct(s2l[i - 1], s2l[i]);
    const yoyC = i === 0 ? null : pct(s1[i - 1] + s2m[i - 1], c);

    const row = [
      y,
      formatK(s1[i]),
      yoyS1 === null ? "-" : `${yoyS1.toFixed(1)}%`,
      formatK(s2m[i]),
      yoyS2m === null ? "-" : `${yoyS2m.toFixed(1)}%`,
      formatK(s2l[i]),
      yoyS2l === null ? "-" : `${yoyS2l.toFixed(1)}%`,
      formatK(c),
      yoyC === null ? "-" : `${yoyC.toFixed(1)}%`,
    ];

    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = String(cell);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function initDownloads() {
  const wrap = document.getElementById("reportDownloads");
  reports.forEach((r) => {
    const card = document.createElement("article");
    card.className = "download-card";
    card.innerHTML = `
      <p class="year">Rapport ${r.year}</p>
      <a href="${r.file}" download>Télécharger PDF</a>
    `;
    wrap.appendChild(card);
  });
}

function formatK(n) {
  return new Intl.NumberFormat("fr-FR").format(n);
}

function drawAxes(ctx, w, h, left, top, right, bottom) {
  ctx.strokeStyle = "#5c6770";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, h - bottom);
  ctx.lineTo(w - right, h - bottom);
  ctx.stroke();
}

function drawLineChart(canvasId, labels, datasets, opts = {}) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const m = { left: 60, right: 24, top: 20, bottom: 48 };
  const all = datasets.flatMap((d) => d.data);
  const max = opts.max || Math.max(...all) * 1.08;
  const min = opts.min || 0;

  drawAxes(ctx, w, h, m.left, m.top, m.right, m.bottom);

  const plotW = w - m.left - m.right;
  const plotH = h - m.top - m.bottom;
  const xStep = plotW / (labels.length - 1 || 1);

  for (let i = 0; i < 5; i++) {
    const yv = min + ((max - min) * i) / 4;
    const y = h - m.bottom - (plotH * i) / 4;
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.beginPath();
    ctx.moveTo(m.left, y);
    ctx.lineTo(w - m.right, y);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(formatK(Math.round(yv)), 8, y + 4);
  }

  labels.forEach((lb, i) => {
    const x = m.left + i * xStep;
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(lb, x - 14, h - 25);
  });

  datasets.forEach((set) => {
    ctx.strokeStyle = set.color;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    set.data.forEach((v, i) => {
      const x = m.left + i * xStep;
      const y = h - m.bottom - ((v - min) / (max - min || 1)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    set.data.forEach((v, i) => {
      const x = m.left + i * xStep;
      const y = h - m.bottom - ((v - min) / (max - min || 1)) * plotH;
      ctx.fillStyle = set.color;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  datasets.forEach((set, i) => {
    const lx = m.left + i * 230;
    const ly = 16;
    ctx.fillStyle = set.color;
    ctx.fillRect(lx, ly - 7, 12, 12);
    ctx.fillStyle = "#111";
    ctx.font = "12px Segoe UI";
    ctx.fillText(set.name, lx + 18, ly + 3);
  });
}

function drawBarChart(canvasId, labels, values, color) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const m = { left: 60, right: 24, top: 20, bottom: 58 };
  const max = Math.max(...values) * 1.12;
  drawAxes(ctx, w, h, m.left, m.top, m.right, m.bottom);

  const plotW = w - m.left - m.right;
  const plotH = h - m.top - m.bottom;
  const bw = (plotW / values.length) * 0.65;

  values.forEach((v, i) => {
    const x = m.left + (plotW / values.length) * i + 4;
    const bh = (v / max) * plotH;
    const y = h - m.bottom - bh;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, bw, bh);
    if (i % 2 === 0) {
      ctx.fillStyle = "#5c6770";
      ctx.font = "10px Segoe UI";
      ctx.fillText(String(labels[i]), x - 3, h - 35);
    }
  });

  for (let i = 0; i < 5; i++) {
    const yv = (max * i) / 4;
    const y = h - m.bottom - (plotH * i) / 4;
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.beginPath();
    ctx.moveTo(m.left, y);
    ctx.lineTo(w - m.right, y);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(formatK(Math.round(yv)), 8, y + 4);
  }
}

function drawWaterfallChart(canvasId, labels, values) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const m = { left: 70, right: 20, top: 20, bottom: 62 };
  const plotW = w - m.left - m.right;
  const plotH = h - m.top - m.bottom;
  const maxY = 14500;
  const minY = 0;
  drawAxes(ctx, w, h, m.left, m.top, m.right, m.bottom);

  const step = plotW / values.length;
  const barW = step * 0.58;

  function yScale(v) {
    return h - m.bottom - ((v - minY) / (maxY - minY)) * plotH;
  }

  let running = values[0];
  values.forEach((v, i) => {
    const x = m.left + i * step + (step - barW) / 2;
    let yTop;
    let yBottom;
    let color = "#adb5bd";

    if (i === 0 || i === values.length - 1) {
      yTop = yScale(v);
      yBottom = yScale(0);
      color = "#e20074";
      running = v;
    } else {
      const next = running + v;
      yTop = yScale(Math.max(running, next));
      yBottom = yScale(Math.min(running, next));
      color = v < 0 ? "#2b8a3e" : "#d9480f";
      running = next;
    }

    ctx.fillStyle = color;
    ctx.fillRect(x, yTop, barW, Math.max(2, yBottom - yTop));

    if (i > 0) {
      const prevY = yScale(running - v);
      const currY = yScale(running);
      ctx.strokeStyle = "rgba(0,0,0,0.25)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x - 8, prevY);
      ctx.lineTo(x + barW + 8, currY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.fillStyle = "#111";
    ctx.font = "11px Segoe UI";
    ctx.fillText(formatK(Math.round(i === 0 || i === values.length - 1 ? v : running)), x - 2, yTop - 6);

    ctx.save();
    ctx.translate(x + barW / 2, h - 36);
    ctx.rotate(-0.35);
    ctx.fillStyle = "#5c6770";
    ctx.fillText(labels[i], -32, 0);
    ctx.restore();
  });

  for (let i = 0; i < 5; i++) {
    const val = (maxY * i) / 4;
    const y = yScale(val);
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.beginPath();
    ctx.moveTo(m.left, y);
    ctx.lineTo(w - m.right, y);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.fillText(formatK(Math.round(val)), 10, y + 4);
  }
}

function drawRadarChart(canvasId, axes, seriesA, seriesB) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.33;
  const levels = 5;
  const n = axes.length;

  for (let l = 1; l <= levels; l++) {
    const r = (radius * l) / levels;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(0,0,0,0.12)";
    ctx.stroke();
  }

  axes.forEach((ax, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    const x = cx + Math.cos(a) * (radius + 16);
    const y = cy + Math.sin(a) * (radius + 16);
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(ax, x - 30, y + 4);
  });

  function drawSeries(values, fill, stroke) {
    ctx.beginPath();
    values.forEach((v, i) => {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      const r = (radius * v) / 10;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }

  drawSeries(seriesA, "rgba(226,0,116,0.20)", "#e20074");
  drawSeries(seriesB, "rgba(11,114,133,0.20)", "#0b7285");

  ctx.fillStyle = "#e20074";
  ctx.fillRect(20, 20, 12, 12);
  ctx.fillStyle = "#111";
  ctx.fillText("Impact materiality", 38, 30);
  ctx.fillStyle = "#0b7285";
  ctx.fillRect(180, 20, 12, 12);
  ctx.fillStyle = "#111";
  ctx.fillText("Financial materiality", 198, 30);
}

function drawTargetProgressChart(canvasId, rows) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const left = 210;
  const right = 30;
  const top = 34;
  const rowH = 68;
  const barW = w - left - right;

  rows.forEach((r, i) => {
    const y = top + i * rowH;
    ctx.fillStyle = "#111";
    ctx.font = "12px Segoe UI";
    ctx.fillText(r.label, 22, y + 20);

    ctx.fillStyle = "#e9ecef";
    ctx.fillRect(left, y, barW, 20);

    const progressW = Math.max(0, Math.min(barW, (barW * r.progress) / 100));
    ctx.fillStyle = r.progress >= r.target ? "#2b8a3e" : "#e20074";
    ctx.fillRect(left, y, progressW, 20);

    const targetX = left + (barW * r.target) / 100;
    ctx.strokeStyle = "#343a40";
    ctx.beginPath();
    ctx.moveTo(targetX, y - 4);
    ctx.lineTo(targetX, y + 24);
    ctx.stroke();

    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(`Progress: ${r.progress}%`, left, y + 40);
    ctx.fillText(`Target: ${r.target}%`, Math.min(w - 120, targetX + 6), y + 14);
  });
}

function drawOddMixChart(canvasId, data) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const counts = {};
  data.forEach((p) => {
    counts[p.sdg] = (counts[p.sdg] || 0) + 1;
  });

  const entries = Object.entries(counts)
    .map(([sdg, n]) => ({ sdg, n }))
    .sort((a, b) => Number(a.sdg) - Number(b.sdg));

  const labels = entries.map((e) => `ODD ${e.sdg}`);
  const values = entries.map((e) => e.n);

  drawBarChart(canvasId, labels, values, "#495057");
}

function drawYoYChart(canvasId) {
  const yoyS1 = [];
  const yoyS2m = [];
  const yoyS2l = [];
  const years = emissions.years.slice(1);
  for (let i = 1; i < emissions.years.length; i++) {
    yoyS1.push(pct(emissions.scope1[i - 1], emissions.scope1[i]));
    yoyS2m.push(pct(emissions.scope2Market[i - 1], emissions.scope2Market[i]));
    yoyS2l.push(pct(emissions.scope2Location[i - 1], emissions.scope2Location[i]));
  }

  drawLineChart(
    canvasId,
    years,
    [
      { name: "YoY S1 %", data: yoyS1, color: "#e20074" },
      { name: "YoY S2 MB %", data: yoyS2m, color: "#2b8a3e" },
      { name: "YoY S2 LB %", data: yoyS2l, color: "#0b7285" },
    ],
    { min: -25, max: 15 },
  );
}

function drawCarbonIntensityChart(canvasId) {
  drawLineChart(
    canvasId,
    carbonIntensity.years,
    [
      { name: "Intensity MB", data: carbonIntensity.market, color: "#e20074" },
      { name: "Intensity LB", data: carbonIntensity.location, color: "#495057" },
    ],
    { min: 60, max: 140 },
  );
}

function initCharts() {
  drawLineChart(
    "chartScopeMarket",
    emissions.years,
    [
      { name: "Scope 1", data: emissions.scope1, color: "#e20074" },
      { name: "Scope 2 market", data: emissions.scope2Market, color: "#2b8a3e" },
    ],
  );

  drawLineChart(
    "chartScopeLocation",
    emissions.years,
    [{ name: "Scope 2 location", data: emissions.scope2Location, color: "#0b7285" }],
  );

  drawLineChart(
    "chartIndexed",
    indexed.labels,
    [
      { name: "Scope 1+2 index", data: indexed.scope12, color: "#e20074" },
      { name: "Scope 3 index", data: indexed.scope3, color: "#1971c2" },
    ],
    { max: 110 },
  );

  drawBarChart("chartSdgMentions", sdgMentions.years, sdgMentions.values, "#7f5539");

  drawWaterfallChart(
    "chartWaterfall",
    analysisExtras.waterfall.labels,
    analysisExtras.waterfall.values,
  );

  drawRadarChart(
    "chartRadar",
    analysisExtras.materiality.axes,
    analysisExtras.materiality.impact,
    analysisExtras.materiality.financial,
  );

  drawTargetProgressChart("chartTargets", analysisExtras.targets2030);
  drawOddMixChart("chartOddMix", projects);
  drawYoYChart("chartYoY");
  drawCarbonIntensityChart("chartCarbonIntensity");
}

function unique(arr) {
  return [...new Set(arr)];
}

function initFilters() {
  const sdgSel = document.getElementById("filterSdg");
  const yearSel = document.getElementById("filterYear");

  unique(projects.map((p) => p.sdg))
    .sort((a, b) => Number(a) - Number(b))
    .forEach((v) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = `ODD ${v}`;
      sdgSel.appendChild(o);
    });

  unique(projects.map((p) => p.date))
    .sort()
    .forEach((v) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = v;
      yearSel.appendChild(o);
    });

  sdgSel.addEventListener("change", renderProjects);
  yearSel.addEventListener("change", renderProjects);
}

function renderProjects() {
  const sdgVal = document.getElementById("filterSdg").value;
  const yearVal = document.getElementById("filterYear").value;
  const list = document.getElementById("projectList");

  const filtered = projects
    .filter((p) => {
    const bySdg = sdgVal === "all" || p.sdg === sdgVal;
    const byYear = yearVal === "all" || p.date === yearVal;
    return bySdg && byYear;
    })
    .sort((a, b) => {
      const sdgDelta = Number(a.sdg) - Number(b.sdg);
      if (sdgDelta !== 0) return sdgDelta;
      return String(a.date).localeCompare(String(b.date));
    });

  list.innerHTML = "";
  if (!filtered.length) {
    list.innerHTML = "<p>Aucun projet ne correspond aux filtres.</p>";
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-head">
        <img class="odd-icon" src="${oddIconPath(p.sdg)}" alt="ODD ${p.sdg}" />
        <h4>${p.title}</h4>
      </div>
      <div class="meta">${p.odd} • Date: ${p.date}</div>
      <p>${p.description}</p>
      <span class="kpi-chip">KPI: ${p.kpi}</span>
    `;
    list.appendChild(card);
  });
}

function init() {
  initKpis();
  initCompany();
  renderAdvancedNumbers();
  renderEvolutionTable();
  initScopeTable();
  initDownloads();
  initCharts();
  initFilters();
  renderProjects();
}

init();
