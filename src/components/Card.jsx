import { useEffect, useState } from "react";

function Card({ link, fnToggle }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(link);
      const datos = await res.json();
      console.log(datos.results);
      setData(datos);
    };
    getData();
  }, []);
  return (
    <div className="card" onClick={fnToggle}>
      <img src={data?.sprites.front_default} alt="" />
    </div>
  );
}

export default Card;
