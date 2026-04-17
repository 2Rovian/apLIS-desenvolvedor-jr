

export default function SidebarComp({isMenuOpen, handleCloseMenu, handleOpenMenu, setView}) {

    if(!isMenuOpen) {
        return(
            <button className="border-2 border-l-none border-t-none text-blue-200 border-blue-200 bg-blue-950 rounded-sm py-1 px-6 mb-2 cursor-pointer size-fit"
            onClick={handleOpenMenu}
            >
                Abrir Menu
            </button>
        )
    }

    return(
        <aside className="border-r-2 border-b-2 rounded-br-md bg-blue-950 border-blue-950 p-4 h-full fixed z-50">
            <button className="border-2 text-blue-200 border-blue-200 rounded-sm py-1 px-6 mb-2 cursor-pointer"
            onClick={handleCloseMenu}
            >
                Fechar Menu
            </button>
            <div className="flex flex-col gap-y-2">
                <button className="primary-btn"
                onClick={() => {
                    setView("medicos");
                    handleCloseMenu();
                }}
                >Médicos</button>
                <button className="primary-btn"
                onClick={() => {
                    setView("pacientes");
                    handleCloseMenu();
                }}
                >Pacientes</button>
            </div>
        </aside>
    )
}