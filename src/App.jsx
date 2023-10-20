import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const datos = await res.json();
      console.log(datos.results);
      setData(datos.results);
    };
    getData();
  }, []);

  const toggleSideBar = () => setActive(!active);

  return (
    <div id="main">
      <header>
        <h1>Pokedex</h1>
      </header>

      <div id="contenido">
        <div id="divCards">
          {data &&
            data.map((el, i) => (
              <Card key={i} link={el.url} fnToggle={toggleSideBar} />
            ))}
        </div>
        {active && <SideBar />}
      </div>
    </div>
  );
}

export default App;
