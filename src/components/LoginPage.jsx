import React from 'react';
    import { Link } from 'react-router-dom';

    function LoginPage() {
      return (
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="container">
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input type="text" name="username" />
              </label>
              <br />
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <footer className="footer">
            <p>&copy; 2024 Vidhya Bandhu</p>
          </footer>
        </div>
      );
    }

    export default LoginPage;
