export default function SidebarComp({ setView, view }) {
    return (
        <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-300 p-4">

            <div className="flex flex-row md:flex-col gap-2">
                <button
                    className={`w-full cursor-pointer text-left px-4 py-2 rounded-md font-medium transition ${view === "medicos"
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-200"
                        }`}
                    onClick={() => setView("medicos")}
                >
                    Médicos
                </button>

                <button
                    className={`w-full cursor-pointer text-left px-4 py-2 rounded-md font-medium transition ${view === "pacientes"
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-200"
                        }`}
                    onClick={() => setView("pacientes")}
                >
                    Pacientes
                </button>
            </div>
        </aside>
    );
}