import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Home() {
  // Get .env stuff
  let apiUrl = import.meta.env.VITE_URL;

  const[message, setMessage] = useState("");
  
  // Fetch from api endpoint
  useEffect(() => {
    fetch(`${apiUrl}/api/home`)
    .then(response => response.json())
    .then(data => {
      setMessage(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    })
  }, []);
  return <div><h1>Home</h1>
    <p>{message.message}</p>
  </div>;
}

function Login() {
  let apiUrl = import.meta.env.VITE_URL;
  
  async function handleSubmit(event) {
    event.preventDefault();
    // Get form data
    const formData = new FormData(document.getElementById("loginForm"));

    // Send to server endpoint
    const res = await fetch(`${apiUrl}/api/login`, {
      method: "POST",
      body: new URLSearchParams(formData)
    });

    // Log server response
    console.log(await res.text());
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} method="POST" id="loginForm">
        Username: <input name="username" type="text"></input>
        <br></br>
        Password: <input name="password" type="password"></input>
        <br></br>
        <input type="submit" value="Login"></input>
      </form>
    </>
  );
}

function Manage() {
  // Get .env stuff
  let apiUrl = import.meta.env.VITE_URL;

  const[message, setMessage] = useState("");
  
  // Fetch from api endpoint
  useEffect(() => {
    fetch(`${apiUrl}/api/manage`)
    .then(response => response.json())
    .then(data => {
      setMessage(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    })
  }, []);
  return <div><h1>Manage</h1>
    <p>{message.message}</p>
  </div>;
}

function App() {
  return (
    <>
    <BrowserRouter>
        <nav>
        <Link to="/">home</Link>
         --
        <Link to="/login">login</Link>
         --
        <Link to="/manage">manage</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
