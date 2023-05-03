import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact.js";
import StyledNavbar from "./components/StyledNavbar";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <BrowserRouter>
      <StyledNavbar />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":projectId" element={<SingleProject />} />
          </Route>
          <Route path="/login" render={() => <Contact />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
