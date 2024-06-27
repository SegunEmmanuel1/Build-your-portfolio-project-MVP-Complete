mport React from 'react';
import { Link } from 'react-router-dom';

const BusCard = ({ bus }) => {
  return (
    <div style={styles.card}>
      <h3>{bus.name}</h3>
      <p>Departure Time: {bus.time}</p>
      <Link to={`/booking/${bus._id}`}>Book Now</Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '16px',
    borderRadius: '8px',
  },
};

export default BusCard;
