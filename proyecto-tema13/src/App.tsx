import ClimaCard from "./Clima";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const forecast = [
        { day: "Mié", icon: "☀️", maxTemp: 14, minTemp: 0 },
        { day: "Jue", icon: "☀️", maxTemp: 12, minTemp: 1 },
        { day: "Vie", icon: "🌧️", maxTemp: 8, minTemp: 4 },
        { day: "Sáb", icon: "⛅", maxTemp: 13, minTemp: 2 },
        { day: "Dom", icon: "⛅", maxTemp: 13, minTemp: 4 },
        { day: "Lun", icon: "☁️", maxTemp: 13, minTemp: 4 },
        { day: "Mar", icon: "🌧️", maxTemp: 12, minTemp: 5 },
    ];

    return (
        <div className="container text-center mt-4">
            <h2>Clima en Fuenlabrada</h2>
            <p>Despejado - 11°C</p>

            <img
                src="/grafico.png"
                alt="Gráfico de temperatura"
                className="img-fluid my-3"
                style={{ maxWidth: "600px" }}
            />

            <div className="d-flex justify-content-center flex-wrap">
                {forecast.map((day, i) => (
                    <ClimaCard
                        key={i}
                        day={day.day}
                        icon={day.icon}
                        maxTemp={day.maxTemp}
                        minTemp={day.minTemp}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
