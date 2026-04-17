import SidebarComp from "./components/SidebarComp";
import MedicosTableComp from "./components/MedicosTableComp";
import { useState } from "react";

function App() {
  const [view, setView] = useState("medicos");

  return (
    <div className="min-h-screen w-full">
      <div className="w-full bg-white max-w-6xl mx-auto flex flex-col md:flex-row md:mt-10 border border-slate-300 shadow-lg rounded-md overflow-hidden">
        <SidebarComp setView={setView} view={view} />

        <main className="flex-1 p-4 md:p-6">
          {view === "medicos" && (
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Médicos</h1>
              <p className="text-slate-500">Cadastro e listagem de médicos.</p>

              <MedicosTableComp />
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