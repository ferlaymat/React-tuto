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
  const navP1 = useNavigate();
  const navP2 = useNavigate();
  const toP1 = () => {
    navP1("/page1");
  };
  const toP2 = () => {
    navP2("/page2");
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
    </div>
  );
}

export default Home;
