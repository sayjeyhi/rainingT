import { atom, useAtom } from "jotai";

import { Point, ShapeAtom } from "./types";
import { createShapeAtom, SvgShape } from "./SvgShape";
import {
  selectAtom,
  selectedAtom,
  unselectAtom
} from "./selection";

import { shapeAtomsAtom } from "./history";
// const shapeAtomsAtom = atom<ShapeAtom[]>([]);

export const addShapeAtom = atom(
  null,
  (_get, set, update: readonly Point[]) => {
    if (update.length < 2) return;
    const shapeAtom = createShapeAtom(update);
    set(shapeAtomsAtom, (prev) => [
      ...prev,
      shapeAtom
    ]);
    set(selectAtom, shapeAtom);
  }
);

export const deleteSelectedShapeAtom = atom(
  (get) => {
    const isSelected = !!get(selectedAtom);
    return isSelected;
  },
  (get, set, _update) => {
    const selected = get(selectedAtom);
    if (selected) {
      set(shapeAtomsAtom, (prev) =>
        prev.filter((item) => item !== selected)
      );
      set(unselectAtom, null);
    }
  }
);

export const SvgShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomsAtom);
  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        <SvgShape
          key={`${shapeAtom}`}
          shapeAtom={shapeAtom}
        />
      ))}
    </g>
  );
};
