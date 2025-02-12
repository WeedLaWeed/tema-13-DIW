import { useState, useEffect } from "react";

export default function EscKeyCounter() {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        console.log(`El contador es ${contador}`);
    }, [contador]); // Se ejecuta cuando cambia "contador"

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setContador(prevCount => prevCount + 1);
                setMensaje(`Has presionado ESC ${contador + 1} veces`);
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []); // Se ejecuta solo una vez

    return (
        <div className="p-4 text-center">
            <h1 className="text-xl font-bold">Presiona ESC</h1>
            <p>Has presionado ESC {contador} veces.</p>
            {mensaje && <p className="mt-2 text-red-500">{mensaje}</p>}
        </div>
    );
}
