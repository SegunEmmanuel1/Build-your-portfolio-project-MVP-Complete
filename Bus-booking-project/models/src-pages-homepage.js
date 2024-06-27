mport React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Bus Booking App</h1>
      <Link to="/search">
        <button style={styles.button}>Search Buses</button>
      </Link>
      <Link to="/profile">
        <button style={styles.button}>My Profile</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default HomePage;
