import { Accessories, Face, FacialHair, Hair, StandingPose } from "react-peeps";
import * as Peep from "react-peeps";

function getRandom<T>(items: T): keyof T {
  const keys = Object.keys(items) as (keyof T)[];
  return keys[(keys.length * Math.random()) | 0];
}

const RandomPeep = ({ size, rotation }) => {
  return (
    <Peep.default
      style={{
        width: "auto",
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      viewBox={{ x: "-550", y: "-200", width: "1800", height: "3200" }}
      body={getRandom(StandingPose)}
      hair={getRandom(Hair)}
      face={getRandom(Face)}
      facialHair={getRandom(FacialHair)}
      accessory={getRandom(Accessories)}
      strokeColor="black"
      backgroundColor="transparent"
      wrapperBackground="transparent"
    />
  );
};

export default RandomPeep;
