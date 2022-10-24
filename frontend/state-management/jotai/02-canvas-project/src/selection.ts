import { atom } from "jotai";

import { ShapeAtom } from "./types";
import { saveHistoryAtom } from "./history";

const selectedShapeAtomAtom = atom<ShapeAtom | null>(
  null
);

export const selectAtom = atom(
  null,
  (_get, set, shapeAtom: ShapeAtom) => {
    set(selectedShapeAtomAtom, shapeAtom);
  }
);

export const selectedAtomCreator = (
  shapeAtom: ShapeAtom
) => {
  const isSelectedAtom = atom(
    (get) => shapeAtom === get(selectedShapeAtomAtom)
  );
  return isSelectedAtom;
};

export const setColorAtom = atom(
  (get) => {
    const selectedShapeAtom = get(
      selectedShapeAtomAtom
    );
    if (selectedShapeAtom) {
      return get(selectedShapeAtom).color || "";
    }
    return null;
  },
  (get, set, color: string) => {
    const selectedShapeAtom = get(
      selectedShapeAtomAtom
    );
    if (selectedShapeAtom) {
      set(saveHistoryAtom, null);
      set(selectedShapeAtom, (prev) => ({
        ...prev,
        color
      }));
    }
  }
);

export const selectedAtom = atom((get) =>
  get(selectedShapeAtomAtom)
);

export const unselectAtom = atom(
  null,
  (_get, set, _update) => {
    set(selectedShapeAtomAtom, null);
  }
);
