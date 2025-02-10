function App(){
    const nombre = ""; // en react unas "" devuelve un FALSE
    if(nombre){
      return <p> hola {nombre}</p>
    }
    return <p> hola mundo </p>
  }
  export default App;