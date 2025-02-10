import Sidebar from "./Sidebar";

function App() {
    const menuItems = [
        "Inicio", "Buscar", "Explorar", "Reels", "Mensajes",
        "Notificaciones", "Crear", "Panel", "Perfil", " ", " ", " ",
        "Threads", "Más"
    ];

    const handleSelect = (item: string) => {
        console.log(item);
    };

    return (
        <div className="d-flex">
            <Sidebar items={menuItems} onSelect={handleSelect} />
            <div className="p-3">feed de ig</div>
        </div>
    );
}

export default App;
