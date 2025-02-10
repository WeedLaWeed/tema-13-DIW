
import { useState } from "react";

interface ListProps {
    data: string[];
    onSelect?: (elemento: string) => void;
}
function List(props: ListProps) {
    // function handleClick(){
        // console.log("click");
    //}
    const [index, setIndex] = useState(-1);
    const handleClick = (i: number, elemento: string) => {
        setIndex(i);
        props.onSelect?.(elemento);
    };
    return (
        <ul className="list-group">
            {props.data.map((elemento, i)=>(
                <li onClick={()=> handleClick(i, elemento)}
                    key={elemento} 
                    className={`list-group-item ${index == i ? "active" : ""}`}>
                        {elemento}
                </li>
            ))}
        </ul>
    );
}
export default List;
// MIRAR LO DE LOS MAPS EN CASA DICEEEEEE
// map tiene 2 atributos, 1 obligatorio - el nombre de la variable y 1 opcional - el indice