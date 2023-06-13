import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, eatSushi, moreSushi }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} />
      ))}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
