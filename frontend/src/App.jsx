import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { AppNavbar } from "./views/Navbar.jsx";
import { Home } from "./views/Home.jsx";
import { Login } from "./views/Login.jsx";
import { Manage } from "./views/Manage.jsx";

function App() {
  return (
      <BrowserRouter>
        <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
