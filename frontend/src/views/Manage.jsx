import { useState, useEffect } from 'react';

export function Manage() {
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