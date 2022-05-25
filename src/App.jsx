const opciones = async () =>{
  return await fetch ("https://api.genshin.dev/")
}
console.log(opciones());

const App  = () => {
  return (
    <div className="container">
     <h1>Genshin Impact Dex</h1>
     <hr/>
     <select>
       <option value=""> Seleccione el tipo de información</option>
       <option value="artifacts"> Artefactos</option>
       <option value="boss"> Jefes</option>
       <option value="characters"> Personajes</option>
       
     </select>
    </div>
  );
}

export default App;
