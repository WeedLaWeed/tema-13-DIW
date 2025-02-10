// import Titulo from "./Titulo";
// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App(){
  // return <Titulo />
  // return <Titulo> </Titulo>
  const nombres = ["pepito", "juanito", "pepe"];
  const handleSelect = (elemento: string) => {
    console.log("imprimir", elemento);
  }
  const handleSelect2 = (elemento: string) => {
    console.log("imprimiendo", elemento);
  }
  return (
    // <CardBody title= {"Hola Mundo"} text={"este es el texto de cardbody"} />
    <Card>
      <CardBody 
        title={"Hola Mundos"} text={"este es el texto"}>
      </CardBody>
      <List data={nombres} onSelect={handleSelect}/>
    </Card>
  );
}
export default App;