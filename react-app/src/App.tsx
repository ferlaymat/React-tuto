import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Home from "./component/Home";
import Board from "./component/kanban/board/Board";
import BoardInit from "./component/kanban/board/BoardInit";
import BoardReduce from "./component/kanban/board/BoardReduce";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* we define routes for the application */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
          <Route path="/kanban" element={<Board />}></Route>
          <Route path="/kanban-init" element={<BoardInit />}></Route>
          <Route path="/kanban-reduce" element={<BoardReduce />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
