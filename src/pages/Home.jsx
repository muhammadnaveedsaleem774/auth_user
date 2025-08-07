import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-vh-100 bg-light bg-gradient d-flex flex-column align-items-center justify-content-center p-3">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <div className="card shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-primary p-4 text-center text-white">
            <h1 className="h3 fw-bold mb-2">
              Welcome to Our Platform
            </h1>
            <p className="mb-0 text-white-50">
              {user ? "Your productivity hub" : "Get started today"}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-4">
            {user ? (
              <div className="text-center">
                <div className="d-flex justify-content-center mb-3">
                  <div 
                    className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" 
                    style={{ width: '80px', height: '80px' }}
                  >
                    <span className="text-primary fs-3 fw-bold">
                      {user.fullName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <h2 className="h4 fw-semibold mb-2">
                  Welcome back, {user.fullName}!
                </h2>
                <p className="text-muted mb-4">
                  Ready to pick up where you left off?
                </p>
                <Link
                  to="/profile"
                  className="btn btn-primary px-4 py-2 fw-medium"
                >
                  View Your Profile
                </Link>
              </div>
            ) : (
              <div>
                <div className="text-center mb-4">
                  <h2 className="h4 fw-semibold mb-2">
                    Join Our Community
                  </h2>
                  <p className="text-muted mb-0">
                    Access exclusive features when you create an account
                  </p>
                </div>
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <Link
                      to="/login"
                      className="btn btn-outline-primary w-100"
                    >
                      Login
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="/signup"
                      className="btn btn-primary w-100"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
                <div className="position-relative my-4">
                  <hr className="my-0" />
                  <div className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted small">
                    Or explore as guest
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-light px-4 py-3 text-center">
            <p className="small text-muted mb-0">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;