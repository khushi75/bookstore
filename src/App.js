import "./App.css";
import Booklist from "./components/Booklist";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const name = "abc";
  return (
    <>
      <BrowserRouter>
      <div style={(...GlobalStyles.navbar)}>
      </div>
        <Routes>
          <Route exact path="/" element={<HomePage username={name} />} />
          <Route exact path="/books" element={<Booklist />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
