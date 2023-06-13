import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushis, setSushis] = useState([]);
  const[money, setMoney] = useState(100);
  const [index, setIndex] = useState(0);
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((sushis) =>
    setSushis(sushis.map((sushi) => ({ ...sushi, eaten: false})))
    );
  }, []);

  const eatSushi = (id, price) => {
    if (money >= price) {
      setSushis(
        sushis.map((sushi) =>
        sushi.id === id ? { ...sushi, eaten: true } : sushi
        )
      );
      setMoney(money - price);
      setPlates([...plates, 1]);
    }
};

  return (
    <div className="app">
      <SushiContainer
      sushis={sushis.slice(index, index + 4)}
      eatSushi={eatSushi}
      moreSushi={() => setIndex(index + 4)}
      />
      <Table money={money} plates={plates} />
    </div>
  );
}

export default App;
