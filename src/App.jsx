import React, { useEffect, useState } from "react";
import profilesData from "./data/profiles.json";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [profiles, setProfiles] = useState(profilesData);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [search, setSearch] = useState("");
  const [filterArea, setFilterArea] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterSkill, setFilterSkill] = useState("");

  // alternância do tema
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // filtrar perfis
  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch = p.nome.toLowerCase().includes(search.toLowerCase());
    const matchesArea = !filterArea || p.area === filterArea;
    const matchesCity = !filterCity || p.localizacao.includes(filterCity);
    const matchesSkill =
      !filterSkill ||
      p.habilidadesTecnicas.some((h) =>
        h.toLowerCase().includes(filterSkill.toLowerCase())
      );
    return matchesSearch && matchesArea && matchesCity && matchesSkill;
  });

  // recomendar
  const handleRecommend = (id) => {
    setProfiles((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, recommends: (p.recommends || 0) + 1 } : p
      )
    );
  };

  // enviar mensagem (simulado)
  const handleMessage = (id) => {
    alert(`Mensagem enviada para o profissional ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* header */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">
          ReSkill Loop – Rede Profissional
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-400 dark:text-gray-900 transition"
        >
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
        </button>
      </header>

      {/* filtros */}
      <div className="p-4 flex flex-wrap justify-center gap-3 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Filtrar por área..."
          value={filterArea}
          onChange={(e) => setFilterArea(e.target.value)}
          className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Filtrar por cidade..."
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Filtrar por tecnologia..."
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
          className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        />
      </div>

      {/* cards */}
      <main className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProfiles.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProfile(p)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={p.foto}
              alt={p.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.nome}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {p.cargo}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {p.habilidadesTecnicas.slice(0, 3).map((h, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 relative shadow-xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProfile(null)}
              className="absolute top-3 right-4 text-2xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedProfile.foto}
              alt={selectedProfile.nome}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-1">
              {selectedProfile.nome}
            </h2>
            <p className="text-center text-gray-500 mb-4">
              {selectedProfile.cargo}
            </p>

            <div className="space-y-3 text-sm">
              <p>
                <strong>Localização:</strong> {selectedProfile.localizacao}
              </p>
              <p>
                <strong>Área:</strong> {selectedProfile.area}
              </p>
              <p>
                <strong>Formação:</strong>{" "}
                {selectedProfile.formacao
                  ?.map((f) => `${f.curso} - ${f.instituicao}`)
                  .join(", ")}
              </p>
              <p>
                <strong>Experiências:</strong>{" "}
                {selectedProfile.experiencias
                  ?.map((e) => `${e.cargo} (${e.empresa})`)
                  .join(", ")}
              </p>
              <p>
                <strong>Soft Skills:</strong>{" "}
                {selectedProfile.softSkills?.join(", ")}
              </p>
              <p>
                <strong>Tecnologias:</strong>{" "}
                {selectedProfile.habilidadesTecnicas?.join(", ")}
              </p>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => handleRecommend(selectedProfile.id)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                👍 Recomendar ({selectedProfile.recommends || 0})
              </button>
              <button
                onClick={() => handleMessage(selectedProfile.id)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                ✉️ Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
