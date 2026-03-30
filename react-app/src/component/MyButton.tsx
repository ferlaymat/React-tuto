import { useState } from "react";

interface Props {
  text: string;
}

function MyButton({ text }: Props) {
  const color = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
    "btn-dark",
  ];
  const [selectColor, onSelectColor] = useState(0);

  let getColor = (index: number) => color[index];
  return (
    <button
      type="button"
      className={"btn " + getColor(selectColor)}
      onClick={() => {
        //we use the state to no lost the previous value set a the previous rendering
        onSelectColor((prev) => (prev + 1) % color.length);
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;
