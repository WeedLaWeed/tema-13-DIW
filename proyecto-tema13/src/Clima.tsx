import { ReactNode } from "react";

interface ClimaCardProps {
    day: string;
    icon: ReactNode;
    maxTemp: number;
    minTemp: number;
}

function ClimaCard({ day, icon, maxTemp, minTemp }: ClimaCardProps) {
    return (
        <div className="card text-center p-3 m-2" style={{ width: "120px" }}>
            <div className="fs-4">{day}</div>
            <div className="fs-1">{icon}</div>
            <div className="fs-5">{maxTemp}° / {minTemp}°</div>
        </div>
    );
}

export default ClimaCard;
