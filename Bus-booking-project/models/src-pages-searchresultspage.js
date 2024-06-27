mport React, { useEffect, useState } from 'react';
import { fetchBuses } from '../api';
import BusCard from '../components/BusCard';

const SearchResultsPage = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const getBuses = async () => {
      try {
        const response = await fetchBuses();
        setBuses(response.data);
      } catch (error) {
        console.error('Error fetching buses:', error);
      }
    };
    getBuses();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Available Buses</h2>
      {buses.map((bus) => (
        <BusCard key={bus._id} bus={bus} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
};

export default SearchResultsPage;
