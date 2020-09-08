import React, { useState } from "react";
import Color from "color";

export default function Home() {
  const [state, setState] = useState({
    baseColor: "#FF0000",
    whiten: 0,
    blacken: 0,
    lighten: 0,
    darken: 0,
    saturate: 0,
    desaturate: 0,
  });

  const changeValue = (key) => (e) => {
    setState({ ...state, [key]: e.target.value });
  };

  const {
    baseColor,
    whiten,
    blacken,
    lighten,
    darken,
    saturate,
    desaturate,
  } = state;
  let color;
  try {
    color = Color(baseColor);
  } catch {
    color = Color("#FFF");
  }
  return (
    <div>
      <div>
        baseColor:
        <input onChange={changeValue("baseColor")} value={baseColor} />
        whiten: <input onChange={changeValue("whiten")} value={whiten} />
        blacken: <input onChange={changeValue("blacken")} value={blacken} />
        lighten: <input onChange={changeValue("lighten")} value={lighten} />
        darken: <input onChange={changeValue("darken")} value={darken} />
        saturate: <input onChange={changeValue("saturate")} value={saturate} />
        desaturate:
        <input onChange={changeValue("desaturate")} value={desaturate} />
      </div>
      <div>{JSON.stringify(state)}</div>
      <div
        style={{
          backgroundColor: color
            .whiten(whiten)
            .blacken(blacken)
            .lighten(lighten)
            .darken(darken)
            .saturate(saturate),
          width: 100,
          height: 100,
        }}
      />
      <div>
        color: {color}
        hsl: {color.hsl()}
        hex: {color.hex()}
        object: {color.object()}
      </div>
    </div>
  );
}
