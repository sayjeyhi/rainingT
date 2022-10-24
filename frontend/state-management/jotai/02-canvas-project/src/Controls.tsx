import { useAtom } from "jotai";

import { setColorAtom } from "./selection";
import { deleteSelectedShapeAtom } from "./SvgShapes";
import { undoAtom } from "./history";

const colors = [
  { value: "", label: "Default" },
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" }
];

export const Controls = () => {
  const [currentColor, setColor] = useAtom(
    setColorAtom
  );
  const [isSelected, deleteShape] = useAtom(
    deleteSelectedShapeAtom
  );
  const [hasHistory, undo] = useAtom(undoAtom);
  return (
    <div>
      Color:
      {colors.map(({ value, label }) => (
        <button
          key={value}
          disabled={
            currentColor === null ||
            currentColor === value
          }
          onClick={() => setColor(value)}
        >
          {label}
        </button>
      ))}
      <br />
      <button
        disabled={!isSelected}
        onClick={deleteShape}
      >
        Delete
      </button>
      <button disabled={!hasHistory} onClick={undo}>
        Undo
      </button>
    </div>
  );
};
