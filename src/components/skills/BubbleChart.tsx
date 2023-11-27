import React from "react";
import * as d3 from "d3";
import "./BubbleChart.css";

import { Tree } from "./data";

type Props = {
  width: number;
  height: number;
  data: Tree;
};

function BubbleChart({ width, height, data }: Props) {
  const hierarchy = d3
    .hierarchy(data)
    .sum((d) => d.level)
    .sort((a, b) => b.value! - a.value!);

  const packGenerator = d3.pack<Tree>().size([width, height]).padding(4);
  const root = packGenerator(hierarchy);

  // Extrahiere Blätter (Bubbles ohne Kinder) aus der Hierarchie
  const leaves = root.leaves();

  // Sortiere die Blätter basierend auf dem Level-Wert
  leaves.sort((a, b) => b.data.level - a.data.level);
  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <g key={node.data.name} transform={`translate(${node.x},${node.y})`}>
            <circle
              r={node.r} // Verwenden Sie die standardisierte Größe
              stroke="#000000"
              strokeWidth={1}
              fill={node.data.color}
              fillOpacity={0.6}
            />
            <foreignObject
              x={-node.r / 2} // Das Bild horizontal zentrieren
              y={-node.r / 2} // Das Bild vertikal zentrieren
              width={node.r}
              height={node.r}
            >
              <img
                src={node.data.img}
                alt={node.data.name}
                style={{ width: "100%", height: "100%" }}
              />
            </foreignObject>
          </g>
        ))}
    </svg>
  );
}

export default BubbleChart;
