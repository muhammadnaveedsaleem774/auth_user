import { useAuth } from '../context/AuthContext';
import { Card, Button, Container, Alert } from 'react-bootstrap';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <Container className="py-5">
      <Card className="mx-auto shadow" style={{ maxWidth: '500px' }}>
        <Card.Body className="text-center p-4">
          <div className="mb-4">
            <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" 
                 style={{ width: '100px', height: '100px' }}>
              <span className="text-primary fs-2 fw-bold">
                {user?.fullName?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          
          <h2 className="mb-3">Profile</h2>
          
          {user ? (
            <>
              <Alert variant="success" className="mb-4">
                <Alert.Heading>Welcome back, {user.fullName}!</Alert.Heading>
                <p className="mb-0">
                  You're logged in with email: <strong>{user.email}</strong>
                </p>
              </Alert>
              
              <div className="text-start mb-4">
                <p><strong>User ID:</strong> {user.id}</p>
                <p><strong>Full Name:</strong> {user.fullName}</p>
                {user.email && <p><strong>Email:</strong> {user.email}</p>}
              </div>
              
              <Button 
                variant="outline-danger" 
                onClick={logout}
                className="w-100 py-2"
              >
                Logout
              </Button>
            </>
          ) : (
            <Alert variant="warning">
              You need to be logged in to view this page.
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;