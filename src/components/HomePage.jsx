import React from 'react';
    import { Link } from 'react-router-dom';

    function HomePage() {
      return (
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="container">
            <h1>Welcome to Vidhya Bandhu</h1>
            <p>Your interactive E-Learning Platform.</p>
          </div>
          <footer className="footer">
            <p>&copy; 2024 Vidhya Bandhu</p>
          </footer>
        </div>
      );
    }

    export default HomePage;
