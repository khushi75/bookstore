import "./App.css";
import Booklist from "./components/Booklist";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const name = "abc";
  return (
    <div>
      {/* <HomePage />
      <Booklist /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" elememt={<HomePage username={name} />} />
          <Route exact path="/books" elememt={<Booklist />} />
          <Route exact path="*" elememt={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
