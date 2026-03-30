import { useState } from "react";

//definition of parameters provided by the parent component
//Props are immutable
interface Props {
  items: string[];
  heading: string;

  //event to notify the parent
  onSelectItem: (item: string) => void;
}

//definition of a component - can be seen as a class. Each instance are fully independant
//state are mutable
function ListGroup({ items, heading, onSelectItem }: Props) {
  //variable/function to update - state is internal to component
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //uncomment to use a function to get the same message
  /*   const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  }; */

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
