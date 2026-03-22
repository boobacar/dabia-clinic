import { useMemo, useState } from "react";
import Seo from "../components/Seo";

const STORAGE_KEY = "dabia_seo_manager_v1";

const createProject = (name = "dabia-clinic", repoUrl = "https://github.com/boobacar/dabia-clinic") => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  name,
  repoUrl,
  kpis: {
    clicks: 0,
    impressions: 0,
    ctr: 0,
    avgPosition: 0,
  },
  keywords: [
    { keyword: "dentiste dakar", page: "/dentiste-dakar", position: 0, status: "À pousser" },
    { keyword: "clinique dentaire dakar", page: "/cabinet-dentaire-dakar", position: 0, status: "À pousser" },
    { keyword: "urgence dentaire dakar", page: "/urgence-dentaire-dakar", position: 0, status: "À pousser" },
  ],
  tasks: [
    { title: "Optimiser 1 page money", owner: "Boubacar", priority: "P1", status: "Todo" },
    { title: "Publier 1 article blog SEO", owner: "Fallcon", priority: "P1", status: "Todo" },
    { title: "Soumettre URLs à indexation", owner: "Fallcon", priority: "P2", status: "Todo" },
  ],
});

const defaultState = {
  projects: [createProject()],
  activeProjectId: null,
};

function loadState() {
  try {
    const savedRaw = localStorage.getItem(STORAGE_KEY);
    if (!savedRaw) {
      const initial = {
        ...defaultState,
        activeProjectId: defaultState.projects[0].id,
      };
      return initial;
    }

    const saved = JSON.parse(savedRaw);

    // Migration depuis l'ancien format mono-projet
    if (saved && saved.project && !saved.projects) {
      const migratedProject = {
        ...createProject(saved.project, "https://github.com/"),
        kpis: saved.kpis || createProject().kpis,
        keywords: saved.keywords || createProject().keywords,
        tasks: saved.tasks || createProject().tasks,
      };
      return {
        projects: [migratedProject],
        activeProjectId: migratedProject.id,
      };
    }

    if (!saved.projects?.length) {
      const fallback = createProject();
      return { projects: [fallback], activeProjectId: fallback.id };
    }

    return {
      projects: saved.projects,
      activeProjectId: saved.activeProjectId || saved.projects[0].id,
    };
  } catch {
    const fallback = createProject();
    return { projects: [fallback], activeProjectId: fallback.id };
  }
}

export default function SeoManager() {
  const [state, setState] = useState(loadState);
  const [newRepoUrl, setNewRepoUrl] = useState("");

  const save = (next) => {
    setState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const activeProject =
    state.projects.find((p) => p.id === state.activeProjectId) || state.projects[0];

  const patchActiveProject = (patch) => {
    const projects = state.projects.map((p) =>
      p.id === activeProject.id ? { ...p, ...patch } : p
    );
    save({ ...state, projects });
  };

  const addProjectFromRepo = () => {
    const repoUrl = newRepoUrl.trim();
    if (!repoUrl) return;

    let parsedName = repoUrl;
    try {
      const u = new URL(repoUrl);
      parsedName = u.pathname.replace(/^\//, "").replace(/\.git$/, "");
    } catch {
      // garder valeur brute si ce n'est pas une URL valide
    }

    const project = createProject(parsedName, repoUrl);
    const next = {
      projects: [...state.projects, project],
      activeProjectId: project.id,
    };
    save(next);
    setNewRepoUrl("");
  };

  const addKeyword = () => {
    patchActiveProject({
      keywords: [
        ...activeProject.keywords,
        { keyword: "", page: "/", position: 0, status: "À pousser" },
      ],
    });
  };

  const addTask = () => {
    patchActiveProject({
      tasks: [
        ...activeProject.tasks,
        { title: "", owner: "Fallcon", priority: "P2", status: "Todo" },
      ],
    });
  };

  const topKeywords = useMemo(
    () =>
      [...activeProject.keywords]
        .sort((a, b) => (a.position || 999) - (b.position || 999))
        .slice(0, 5),
    [activeProject.keywords]
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <Seo
        title="Dashboard SEO | Clinique Dentaire Dabia"
        description="Interface web simple pour piloter les priorités SEO de vos projets."
        canonicalPath="/seo-manager"
      />

      <section className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900">SEO Manager — Multi-projets</h1>
        <p className="text-sm text-gray-600">
          Ajoute un projet en collant son lien GitHub, puis pilote ses KPI/keywords/exécution.
        </p>

        <div className="grid md:grid-cols-[1fr_auto] gap-2">
          <input
            type="url"
            placeholder="https://github.com/owner/repo"
            className="border rounded-lg px-3 py-2"
            value={newRepoUrl}
            onChange={(e) => setNewRepoUrl(e.target.value)}
          />
          <button className="btn-cta" onClick={addProjectFromRepo}>
            + Ajouter projet via repo
          </button>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-3 items-start">
          <select
            className="border rounded-lg px-3 py-2"
            value={activeProject.id}
            onChange={(e) => save({ ...state, activeProjectId: e.target.value })}
          >
            {state.projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <a
            href={activeProject.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-pink-700 underline break-all"
          >
            {activeProject.repoUrl}
          </a>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["clicks", "impressions", "ctr", "avgPosition"].map((kpi) => (
          <div key={kpi} className="bg-white border rounded-xl p-4">
            <p className="text-xs uppercase text-gray-500">{kpi}</p>
            <input
              type="number"
              className="mt-2 w-full border rounded-lg px-3 py-2"
              value={activeProject.kpis[kpi]}
              onChange={(e) =>
                patchActiveProject({
                  kpis: { ...activeProject.kpis, [kpi]: Number(e.target.value || 0) },
                })
              }
            />
          </div>
        ))}
      </section>

      <section className="bg-white border rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Mots-clés cibles</h2>
          <button className="btn-cta btn-cta-sm" onClick={addKeyword}>+ mot-clé</button>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Keyword</th>
                <th className="py-2">Page</th>
                <th className="py-2">Position</th>
                <th className="py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {activeProject.keywords.map((row, idx) => (
                <tr key={idx} className="border-b last:border-none">
                  <td className="py-2 pr-2">
                    <input
                      className="w-full border rounded px-2 py-1"
                      value={row.keyword}
                      onChange={(e) => {
                        const next = [...activeProject.keywords];
                        next[idx].keyword = e.target.value;
                        patchActiveProject({ keywords: next });
                      }}
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <input
                      className="w-full border rounded px-2 py-1"
                      value={row.page}
                      onChange={(e) => {
                        const next = [...activeProject.keywords];
                        next[idx].page = e.target.value;
                        patchActiveProject({ keywords: next });
                      }}
                    />
                  </td>
                  <td className="py-2 pr-2 w-28">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={row.position}
                      onChange={(e) => {
                        const next = [...activeProject.keywords];
                        next[idx].position = Number(e.target.value || 0);
                        patchActiveProject({ keywords: next });
                      }}
                    />
                  </td>
                  <td className="py-2 w-40">
                    <select
                      className="w-full border rounded px-2 py-1"
                      value={row.status}
                      onChange={(e) => {
                        const next = [...activeProject.keywords];
                        next[idx].status = e.target.value;
                        patchActiveProject({ keywords: next });
                      }}
                    >
                      <option>À pousser</option>
                      <option>Stable</option>
                      <option>En baisse</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-xl p-4 space-y-3">
          <h2 className="text-xl font-semibold">Top mots-clés (priorité)</h2>
          <ul className="space-y-2 text-sm">
            {topKeywords.map((k, i) => (
              <li key={i} className="border rounded-lg p-2 flex items-center justify-between">
                <span>{k.keyword || "(vide)"}</span>
                <span className="font-semibold">#{k.position || "-"}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Exécution SEO</h2>
            <button className="btn-cta btn-cta-sm" onClick={addTask}>+ tâche</button>
          </div>
          <div className="space-y-2">
            {activeProject.tasks.map((t, idx) => (
              <div key={idx} className="border rounded-lg p-2 grid grid-cols-1 md:grid-cols-4 gap-2">
                <input
                  className="border rounded px-2 py-1"
                  value={t.title}
                  onChange={(e) => {
                    const next = [...activeProject.tasks];
                    next[idx].title = e.target.value;
                    patchActiveProject({ tasks: next });
                  }}
                  placeholder="Tâche"
                />
                <input
                  className="border rounded px-2 py-1"
                  value={t.owner}
                  onChange={(e) => {
                    const next = [...activeProject.tasks];
                    next[idx].owner = e.target.value;
                    patchActiveProject({ tasks: next });
                  }}
                  placeholder="Owner"
                />
                <select
                  className="border rounded px-2 py-1"
                  value={t.priority}
                  onChange={(e) => {
                    const next = [...activeProject.tasks];
                    next[idx].priority = e.target.value;
                    patchActiveProject({ tasks: next });
                  }}
                >
                  <option>P1</option>
                  <option>P2</option>
                  <option>P3</option>
                </select>
                <select
                  className="border rounded px-2 py-1"
                  value={t.status}
                  onChange={(e) => {
                    const next = [...activeProject.tasks];
                    next[idx].status = e.target.value;
                    patchActiveProject({ tasks: next });
                  }}
                >
                  <option>Todo</option>
                  <option>Doing</option>
                  <option>Blocked</option>
                  <option>Done</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
