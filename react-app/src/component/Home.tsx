import Alert from "./Alert";
import ListGroup from "./ListGroup";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
//Main page
function Home() {
  //we prepare a list of item to provide to the children component
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //we catch the event from the children component
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //we prepare the different redirections
  const nav = useNavigate();
  const toP1 = () => {
    nav("/page1");
  };
  const toP2 = () => {
    nav("/page2");
  };
  const toP3 = () => {
    nav("/kanban-init");
  };
  const toP4 = () => {
    nav("/kanban");
  };
  const toP5 = () => {
    nav("/kanban-reduce");
  };
  const toP6 = () => {
    nav("/kanban-http");
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Alert>
        my <b>Alert</b> Message
      </Alert>
      <MyButton text="btnText"></MyButton>
      <button type="button" className="btn btn-primary" onClick={toP1}>
        page1
      </button>
      <button type="button" className="btn btn-primary" onClick={toP2}>
        page2
      </button>
      <button type="button" className="btn btn-primary" onClick={toP3}>
        kanban state
      </button>
      <button type="button" className="btn btn-primary" onClick={toP4}>
        kanban effect
      </button>
      <button type="button" className="btn btn-primary" onClick={toP5}>
        kanban reduce
      </button>
      <button type="button" className="btn btn-primary" onClick={toP6}>
        kanban http
      </button>
    </div>
  );
}

export default Home;
