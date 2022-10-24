import { PrimitiveAtom } from "jotai";

export type Point = readonly [number, number];

export type ShapeAtomValue = {
  path: string;
  color?: string;
};

export type ShapeAtom = PrimitiveAtom<ShapeAtomValue>;
