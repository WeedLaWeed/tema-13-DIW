import { useEffect, useState } from "react";

function App() {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    useEffect(() => {
        const posicionRaton = (evento) => {
            setPosX(evento.clientX);
            setPosY(evento.clientY);
        };

        window.addEventListener("mousemove", posicionRaton);

        return () => {
            window.removeEventListener("mousemove", posicionRaton);
        };
    }, []);

    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    left: posX + 10 + "px",  // +10 para que no cubra el cursor
                    top: posY + 10 + "px",
                    background: "purple",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    fontSize: "14px"
                }}
            >
                X: {posX}, Y: {posY}
            </div>
        </div>
    );
}

export default App;