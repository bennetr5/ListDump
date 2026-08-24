import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function Login() {
    let apiUrl = import.meta.env.VITE_URL;
    const navigate = useNavigate();
    
    async function handleSubmit(event) {
      event.preventDefault();
      // Get form data
      const formData = new FormData(document.getElementById("loginForm"));
  
      // Send to server endpoint
      const res = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        body: new URLSearchParams(formData)
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data) 
        if (data.success === true) {
          navigate("/manage")
          console.log("Login successful!")
        }
        else {
          console.log("invalid login.")
        }
      });
    }
  
    return (
      <>
        <Container
            fluid
            className="d-flex flex-column align-items-center justify-content-center flex-grow-1 pb-5"
        >
         <div className="d-flex flex-column align-items-start text-start bg-dark rounded px-4 py-4">
          <h2 className="mb-4">Login</h2>
          <Form
            onSubmit={handleSubmit}
            method="POST"
            id="loginForm"
            style={{ width: '100%', maxWidth: '300px'}}
          >
            <Form.Group className="mb-4 d-flex align-items-center" controlId="username">
                <Form.Control name="username" type="text" placeholder='Username'/>
            </Form.Group>

            <Form.Group className="mb-4 d-flex align-items-center" controlId="password">
                <Form.Control name="password" type="password" placeholder='Password'/>
            </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                Login
                </Button>
            </Form>
         </div>
        </Container>
      </>
    );
  }