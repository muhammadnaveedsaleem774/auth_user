import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Card, Container } from 'react-bootstrap';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(fullName, email, password);
      navigate('/login'); // Redirect after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="w-100 shadow-sm" style={{ maxWidth: '500px' }}>
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">Create Account</h2>
          {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
                placeholder="At least 6 characters"
              />
              <Form.Text className="text-muted">
                Password must be at least 6 characters long
              </Form.Text>
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 mt-3 py-2"
              size="lg"
            >
              Sign Up
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p className="mb-0">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;