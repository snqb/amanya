import { useState } from "react";
import Peep, {
  Accessories,
  Face,
  FacialHair,
  Hair,
  StandingPose,
} from "react-peeps";

function getRandom(items) {
  const keys = Object.keys(items);
  return keys[(keys.length * Math.random()) | 0];
}

const rebuildLooks = () => {
  return {
    body: getRandom(StandingPose),
    hair: getRandom(Hair),
    face: getRandom(Face),
    facialHair: getRandom(FacialHair),
    accessory: getRandom(Accessories),
  };
};

export default function PeepGenerator(props) {
  const { size, rotation } = props;

  const [loo, setLoo] = useState(rebuildLooks());

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
        background: "floralwhite",
        padding: "8px",
      }}
    >
      {/* @ts-ignore */}
      <Peep
        style={{
          width: "auto",
          height: size,
          transform: `rotate(${rotation}deg)`,
        }}
        viewBox={{ x: "-550", y: "-200", width: "1800", height: "3200" }}
        {...loo}
        strokeColor="#4d4d4d"
        backgroundColor="transparent"
        wrapperBackground="transparent"
      />
      <button
        style={{
          borderRadius: "4px",
          background: "transparent",
          padding: "8px",
          border: "1px dashed darkred",
          width: "50%",
        }}
        onClick={() => setLoo(rebuildLooks())}
        type="button"
      >
        🔀
      </button>
    </div>
  );
}
