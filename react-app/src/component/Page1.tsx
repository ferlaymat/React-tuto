import { useNavigate } from "react-router-dom";

function Page1() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/");
  };

  return (
    <div>
      <h1>Page1</h1>
      <button type="button" className="btn btn-primary" onClick={navigate}>
        Home
      </button>
    </div>
  );
}

export default Page1;
