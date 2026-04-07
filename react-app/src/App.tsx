import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Home from "./component/Home";
import Board from "./component/kanban/component/board/Board";
import BoardInit from "./component/kanban/component/board/BoardInit";
import BoardReduce from "./component/kanban/component/board/BoardReduce";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardHttp from "./component/kanban/component/board/BoardHttp";

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
          <Route
            path="/kanban-http"
            element={<BoardHttp key="kanbanHttp" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
