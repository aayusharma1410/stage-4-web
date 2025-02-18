import React from 'react';
    import { Link } from 'react-router-dom';

    function AboutPage() {
      return (
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="container">
            <h2>About Vidhya Bandhu</h2>
            <p>Vidhya Bandhu is an E-Learning platform designed to provide interactive and visually appealing
              learning experiences for students.</p>
          </div>
          <footer className="footer">
            <p>&copy; 2024 Vidhya Bandhu</p>
          </footer>
        </div>
      );
    }

    export default AboutPage;
