import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contact from "./pages/Contact.js";
import SharedLayout from "./pages/SharedLayout";
import SingleProject from "./pages/SingleProject";
import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProjectLayout from "./pages/SharedProjectLayout";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="projects" element={<SharedProjectLayout />}>
            <Route index element={<Projects />} />
            <Route path=":projectId" element={<SingleProject />} />
          </Route>

          <Route path="/login" render={() => <Contact />} />
          <Route path="contact" element={<Contact />} />

          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
