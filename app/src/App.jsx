import SidebarComp from "./components/SidebarComp";
import { useState } from "react";

function App() {
  const [view, setView] = useState("medicos");

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:mt-10 md:border-2 md:rounded-sm md:border-slate-950">
        <SidebarComp setView={setView} view={view} />

        <main className="flex-1 p-4 md:p-6">
          {view === "medicos" && (
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Médicos</h1>
              <p className="text-slate-500">Cadastro e listagem de médicos.</p>
            </div>
          )}

          {view === "pacientes" && (
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Pacientes</h1>
              <p className="text-slate-500">Cadastro e listagem de pacientes.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;