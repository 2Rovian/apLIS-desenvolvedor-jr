import SidebarComp from "./components/SidebarComp"
import { useState } from "react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("medicos");

  return (
    <>
      <div className="h-screen">
        <SidebarComp
          isMenuOpen={isMenuOpen}
          handleCloseMenu={() => setIsMenuOpen(false)}
          handleOpenMenu={() => setIsMenuOpen(true)}
          setView={setView}
        />

        <main className="flex-1 p-2 ml-0">
          {view === "medicos" && <h1 className="text-2xl font-bold">Médicos</h1>}
          {view === "pacientes" && <h1 className="text-2xl font-bold">Pacientes</h1>}
        </main>
      </div>
    </>
  )
}

export default App
