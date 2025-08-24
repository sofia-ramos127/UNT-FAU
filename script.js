// --- Datos de la malla ---
// Estructura completa: 1°, 2° y 3° Ciclo

const data = [
  // ---------------- 1° CICLO ----------------
  {
    cicloId: "c1",
    cicloNombre: "1° Ciclo",
    years: [
      {
        yearId: "y1",
        yearNombre: "1er año",
        materias: [
          { id: "rep1", nombre: "Sistema de Representación", req: [] },
          { id: "morf1", nombre: "Morfología I", req: [] },
          { id: "tallerIntro", nombre: "Introducción al Taller de Proyecto", req: [] },
          { id: "matApl", nombre: "Matemática Aplicada", req: [] },
          { id: "introTec", nombre: "Introducción Técnica", req: [] },
          { id: "cultura", nombre: "Cultura y Producción Arquitectónica", req: [] },
          { id: "tecno", nombre: "Tecnología", req: [] },
        ],
      },
    ],
  },
  // ---------------- 2° CICLO ----------------
  {
  cicloId: "c2",
  cicloNombre: "2° Ciclo",
  years: [
    { yearId: "y2", yearNombre: "2do año", materias: [
      { id: "td1", nombre: "Técnicas Digitales I", req: ["rep1"] },
      { id: "morf2", nombre: "Morfología II", req: ["morf1","matApl","rep1"] },
      { id: "tpa1", nombre: "TPA1", req: ["tallerIntro"] },
      { id: "tpa2", nombre: "TPA2", req: ["tpa1"] },
      { id: "estruc1", nombre: "Estructuras I", req: ["introTec","tecno"] },
      { id: "cons1", nombre: "Construcciones I", req: ["introTec","tecno"] },
      { id: "acondAmb", nombre: "Acondicionamiento Ambiental", req: ["tecno"] },
      { id: "hist1", nombre: "Historia de la Arquitectura I", req: ["cultura"] },
      { id: "teoria", nombre: "Teoría de la Arquitectura", req: ["cultura"] },
      { id: "elec1", nombre: "Materia Electiva I", req: [] },
    ]},
    { yearId: "y3", yearNombre: "3er año", materias: [
      { id: "td2", nombre: "Técnicas Digitales II", req: ["td1"] },
      { id: "morf3", nombre: "Morfología III", req: ["morf2"] },
      { id: "tpa3", nombre: "TPA3", req: ["tpa2"] },
      { id: "tpa4", nombre: "TPA4", req: ["tpa3"] },
      { id: "estruc2", nombre: "Estructuras II", req: ["estruc1","cons1"] },
      { id: "cons2", nombre: "Construcciones II", req: ["cons1","estruc1"] },
      { id: "cons3", nombre: "Construcciones III", req: ["cons2"] },
      { id: "disInst1", nombre: "Diseño de instalaciones I", req: ["acondAmb"] },
      { id: "hist2", nombre: "Historia de la Arquitectura II", req: ["hist1"] },
      { id: "elec2", nombre: "Materia Electiva II", req: ["elec1"] },
      { id: "elec3", nombre: "Materia Electiva III", req: ["elec2"] },
    ]},
    { yearId: "y4", yearNombre: "4to año", materias: [
      { id: "tpa5", nombre: "TPA5", req: ["tpa4"] },
      { id: "tpa6", nombre: "TPA6", req: ["tpa5"] },
      { id: "estruc3", nombre: "Estructuras III", req: ["estruc2","cons2"] },
      { id: "disInst2", nombre: "Diseño de instalaciones II", req: ["disInst1","estruc2","cons2","hist2"] },
      { id: "acondArt", nombre: "Acondicionamiento Artificial", req: ["tpa4","cons2","estruc2","disInst1"] },
      { id: "eco1", nombre: "Economía de la Construcción I", req: ["cons2","estruc2","disInst1","hist2"] },
      { id: "hist3", nombre: "Historia de la Arquitectura III", req: ["teoria","hist2"] },
      { id: "urb1", nombre: "Urbanística I", req: ["teoria"] },
      { id: "elec4", nombre: "Materia Electiva IV", req: ["elec3"] },
      { id: "elec5", nombre: "Materia Electiva V", req: ["elec4"] },
    ]},
  ],
},
  // ---------------- 3° CICLO ----------------
  {
  cicloId: "c3",
  cicloNombre: "3° Ciclo",
  years: [
    { yearId: "y5", yearNombre: "5to año", materias: [
      { id: "tpa7", nombre: "TPA7", req: ["tpa6"] },
      { id: "tpa8", nombre: "TPA8", req: ["tpa7","estruc3","acondArt"] },
      { id: "tallerUrb1", nombre: "Taller de Urbanismo y Planificación I", req: ["urb1"] },
      { id: "tallerUrb2", nombre: "Taller de Urbanismo y Planificación II", req: ["tallerUrb1","td2"] },
      { id: "eco2", nombre: "Economía de la Construcción II", req: ["eco1"] },
      { id: "legis", nombre: "Legislación y Ejercicio Profesional", req: ["eco2"] },
      { id: "urb2", nombre: "Urbanística II", req: ["urb1","hist3","teoria"] },
      { id: "elec6", nombre: "Materia Electiva VI", req: ["elec5"] },
    ]},
    { yearId: "y6", yearNombre: "6to año (PFC - PPA)", materias: [
      { id: "pfc", nombre: "Proyecto Final de Carrera", req: ["tpa8","cons3","tallerUrb2","eco2","legis"] },
      { id: "ppa", nombre: "Práctica Profesional Asistida", req: ["tpa8","cons3","tallerUrb2","eco2","legis"] },
    ]},
  ],
},
];

// ------------------------------------------------------
// El resto del código de renderizado y lógica permanece igual
// --- Datos de la malla ---
// Estructura por Ciclo y Año (Nivel). En esta versión incluimos completo el 1° Ciclo (1er año).
// Los siguientes ciclos quedan listos para completar (placeholders).

// Cada materia: { id, nombre, req: ["id1","id2",... ] }

const data = [
  {
    cicloId: "c1",
    cicloNombre: "1° Ciclo",
    years: [
      {
        yearId: "y1",
        yearNombre: "1er año",
        materias: [
          { id: "rep1", nombre: "Sistema de Representación", req: [] },
          { id: "morf1", nombre: "Morfología I", req: [] },
          { id: "tallerIntro", nombre: "Introducción al Taller de Proyecto", req: [] },
          { id: "matApl", nombre: "Matemática Aplicada", req: [] },
          { id: "introTec", nombre: "Introducción Técnica", req: [] },
          { id: "cultura", nombre: "Cultura y Producción Arquitectónica", req: [] },
          { id: "tecno", nombre: "Tecnología", req: [] },
        ],
      },
    ],
  },
  {
    cicloId: "c2",
    cicloNombre: "2° Ciclo",
    years: [
      // 2° CICLO: 2do, 3ro y 4to año
      // 🔽 PLACEHOLDER para completar (dejo las cabeceras; podés pegar aquí las materias cuando quieras expandir):
      { yearId: "y2", yearNombre: "2do año", materias: [
        // Segundo Nivel (desde lo que pasaste):
        // Técnicas Digitales I (req: rep1)
        // Morfología II (req: morf1, matApl, rep1)
        // TPA1 (req: tallerIntro)
        // TPA2 (req: tpa1)
        // Estructuras I (req: introTec, tecno)
        // Construcciones I (req: introTec, tecno)
        // Acondicionamiento Ambiental (req: tecno)
        // Historia de la Arquitectura I (req: cultura)
        // Teoría de la Arquitectura (req: cultura)
        // Materia Electiva I (req: [])
      ]},
      { yearId: "y3", yearNombre: "3er año", materias: [
        // Tercer Nivel:
        // Técnicas Digitales II (req: td1)
        // Morfología III (req: morf2)
        // TPA3 (req: tpa2)
        // TPA4 (req: tpa3)
        // Estructuras II (req: estruc1, cons1)  // según tu lista habilita desde ambas
        // Construcciones II (req: cons1, estruc1) // idem
        // Construcciones III (req: cons2)
        // Diseño de instalaciones I (req: acondAmb)
        // Historia de la Arquitectura II (req: hist1)
        // Materia Electiva II (req: elec1)
        // Materia Electiva III (req: elec2)
      ]},
      { yearId: "y4", yearNombre: "4to año", materias: [
        // Cuarto Nivel:
        // TPA5 (req: tpa4)
        // TPA6 (req: tpa5)
        // Estructuras III (req: estruc2, cons2)
        // Diseño de instalaciones II (req: disInst1, estruc2, cons2, hist2) // según tu texto habilitada por varias
        // Acondicionamiento Artificial (req: tpa4, cons2, estruc2, disInst1) // habilitaciones previas
        // Economía de la Construcción I (req: cons2, estruc2, disInst1, hist2)
        // Historia de la Arquitectura III (req: teoria, hist2)
        // Urbanística I (req: teoria)
        // Materia Electiva IV (req: elec3)
        // Materia Electiva V (req: elec4)
      ]},
    ],
  },
  {
    cicloId: "c3",
    cicloNombre: "3° Ciclo",
    years: [
      // 3° CICLO: 5to y 6to año
      { yearId: "y5", yearNombre: "5to año", materias: [
        // Quinto Nivel:
        // TPA7 (req: tpa6)
        // TPA8 (req: tpa7, estruc3, acondArt) // por tu lista se habilita desde varias en niveles previos
        // Taller de Urbanismo y Planificación I (req: urb1)
        // Taller de Urbanismo y Planificación II (req: urb2, td2) // y otras previas
        // Economía de la Construcción II (req: eco1)
        // Legislación y Ejercicio Profesional (req: eco2)
        // Urbanística II (req: urb1, hist3, teoria)
        // Materia Electiva VI (req: elec5)
      ]},
      { yearId: "y6", yearNombre: "6to año (PFC - PPA)", materias: [
        // Sexto Nivel / PFC-PPA:
        // Proyecto Final de Carrera (req: tpa8, cons3, urb2, eco2, legis)
        // Práctica Profesional Asistida (req: tpa8, cons3, urb2, eco2, legis)
      ]},
    ],
  },
];

// --- IDs sugeridos para materias futuras (para usar coherentemente en req):
// td1, td2, morf2, morf3, tpa1, tpa2, tpa3, tpa4, tpa5, tpa6, tpa7, tpa8,
// estruc1, estruc2, estruc3, cons1, cons2, cons3, acondAmb, acondArt,
// disInst1, disInst2, hist1, hist2, hist3, teoria, urb1, urb2,
// elec1, elec2, elec3, elec4, elec5, elec6, eco1, eco2, legis, pfc, ppa

// --- Estado y persistencia ---
const STORAGE_KEY = "malla_arq_unt_progreso_v1";

// Estado en memoria: Set de ids aprobados
let aprobadas = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

// Util: devuelve todas las materias visibles (DOM) con su metadato
function getMateriaMeta(id) {
  for (const ciclo of data) {
    for (const year of ciclo.years) {
      for (const m of (year.materias || [])) {
        if (m.id === id) return m;
      }
    }
  }
  return null;
}

// Render principal
function render() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  data.forEach(ciclo => {
    const cicloEl = document.createElement("section");
    cicloEl.className = "ciclo";

    const h2 = document.createElement("h2");
    h2.className = "ciclo-title";
    h2.textContent = ciclo.cicloNombre;
    cicloEl.appendChild(h2);

    const yearsWrap = document.createElement("div");
    yearsWrap.className = "years";

    (ciclo.years || []).forEach(yr => {
      const nivelEl = document.createElement("div");
      nivelEl.className = "nivel";

      const h3 = document.createElement("h3");
      h3.textContent = yr.yearNombre;
      nivelEl.appendChild(h3);

      const grid = document.createElement("div");
      grid.className = "grid";

      (yr.materias || []).forEach(mat => {
        const div = document.createElement("div");
        div.className = "materia";
        div.dataset.id = mat.id;
        div.title = mat.req?.length ? "Requiere: " + mat.req.join(", ") : "Sin requisitos";

        // Estado inicial según progreso
        if (aprobadas.has(mat.id)) {
          div.classList.add("aprobado");
        } else if ((mat.req || []).every(r => aprobadas.has(r))) {
          div.classList.add("disponible");
        } else {
          div.classList.add("bloqueado");
        }

        div.textContent = mat.nombre;
        grid.appendChild(div);
      });

      nivelEl.appendChild(grid);
      yearsWrap.appendChild(nivelEl);
    });

    cicloEl.appendChild(yearsWrap);
    cont.appendChild(cicloEl);
  });

  wireInteractions();
}

// Manejo de clicks + desbloqueo
function wireInteractions() {
  document.querySelectorAll(".materia").forEach(el => {
    el.addEventListener("click", () => {
      if (!el.classList.contains("disponible") && !el.classList.contains("aprobado")) return;

      // Toggle: disponible -> aprobado ; aprobado -> disponible
      if (el.classList.contains("disponible")) {
        el.classList.remove("disponible");
        el.classList.add("aprobado");
        aprobadas.add(el.dataset.id);
      } else if (el.classList.contains("aprobado")) {
        // Permitir deshacer por si te equivocaste
        el.classList.remove("aprobado");
        aprobadas.delete(el.dataset.id);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify([...aprobadas]));

      // Recalcular estados de TODAS las materias visibles
      recalc();
    });
  });

  // Botón reset
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", () => {
    if (confirm("¿Seguro que querés borrar tu progreso?")) {
      aprobadas = new Set();
      localStorage.removeItem(STORAGE_KEY);
      render();
    }
  });
}

function recalc() {
  document.querySelectorAll(".materia").forEach(el => {
    const id = el.dataset.id;
    const meta = getMateriaMeta(id);
    if (!meta) return;

    // Si está aprobado y lo sacamos de aprobadas desde otro lugar, ajusto
    if (aprobadas.has(id)) {
      el.classList.remove("bloqueado","disponible");
      el.classList.add("aprobado");
      return;
    }

    const requisitos = meta.req || [];
    const ok = requisitos.every(r => aprobadas.has(r));

    el.classList.remove("bloqueado","disponible","aprobado");
    if (ok) el.classList.add("disponible");
    else el.classList.add("bloqueado");
  });
}

// Inicializar
render();
