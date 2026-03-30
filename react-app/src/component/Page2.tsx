import { useNavigate } from "react-router-dom";

function Page2() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/");
  };

  return (
    <div>
      <h1>Page2</h1>
      <button type="button" className="btn btn-primary" onClick={navigate}>
        Home
      </button>
    </div>
  );
}

export default Page2;
