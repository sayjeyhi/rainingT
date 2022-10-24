import { atom, useAtom } from "jotai";

import { Point } from "./types";
import { SvgShapes } from "./SvgShapes";
import {
  addDotAtom,
  commitDotsAtom,
  SvgDots
} from "./SvgDots";

const drawingAtom = atom(false);

const handleMouseDownAtom = atom(null, (get, set) => {
  set(drawingAtom, true);
});

const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
  set(commitDotsAtom, null);
});

const handleMouseMoveAtom = atom(
  null,
  (get, set, update: Point) => {
    if (get(drawingAtom)) {
      set(addDotAtom, update);
    }
  }
);

export const SvgRoot = () => {
  const [, handleMouseUp] = useAtom(handleMouseUpAtom);
  const [, handleMouseDown] = useAtom(
    handleMouseDownAtom
  );
  const [, handleMouseMove] = useAtom(
    handleMouseMoveAtom
  );
  return (
    <svg
      width="200"
      height="120"
      viewBox="0 0 200 120"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        const {
          x,
          y
        } = e.currentTarget.getBoundingClientRect();
        handleMouseMove([
          e.clientX - x,
          e.clientY - y
        ]);
      }}
    >
      <rect width="200" height="200" fill="#eee" />
      <SvgShapes />
      <SvgDots />
    </svg>
  );
};
