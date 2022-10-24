import { useMemo } from "react";
import { atom, useAtom } from "jotai";

import { Point, ShapeAtom } from "./types";
import {
  selectAtom,
  selectedAtomCreator
} from "./selection";

const pointsToPath = (points: readonly Point[]) => {
  let d = "";
  points.forEach((point) => {
    if (d) {
      d += ` L ${point[0]} ${point[1]}`;
    } else {
      d = `M ${point[0]} ${point[1]}`;
    }
  });
  return d;
};

export const createShapeAtom = (
  points: readonly Point[]
) => atom({ path: pointsToPath(points) });

export const SvgShape = ({
  shapeAtom
}: {
  shapeAtom: ShapeAtom;
}) => {
  const [shape] = useAtom(shapeAtom);
  const [, select] = useAtom(selectAtom);
  const [selected] = useAtom(
    useMemo(() => selectedAtomCreator(shapeAtom), [
      shapeAtom
    ])
  );
  return (
    <g onClick={() => select(shapeAtom)}>
      <path
        d={shape.path}
        fill="none"
        opacity={selected ? "0.3" : "0"}
        stroke="red"
        strokeWidth="12"
      />
      <path
        d={shape.path}
        fill="none"
        stroke={shape.color || "black"}
        strokeWidth="3"
      />
    </g>
  );
};
