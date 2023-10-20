import { useEffect, useState } from "react";

function Card({ link, fnID, setActive }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(link);
      const datos = await res.json();

      setData(datos);
    };
    getData();
  }, []);

  const handleClick = () => {
    fnID(data?.id);
    setActive(true);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={data?.sprites.front_default} alt="" />
    </div>
  );
}

export default Card;
