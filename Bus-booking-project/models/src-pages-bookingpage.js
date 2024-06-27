mport React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBusById, bookBus } from '../api';

const BookingPage = () => {
  const { busId } = useParams();
  const [bus, setBus] = useState(null);
  const [seatNumber, setSeatNumber] = useState('');

  useEffect(() => {
    const getBus = async () => {
      try {
        const response = await fetchBusById(busId);
        setBus(response.data);
      } catch (error) {
        console.error('Error fetching bus:', error);
      }
    };
    getBus();
  }, [busId]);

  const handleBooking = async () => {
    try {
      const bookingData = { busId, seatNumber };
      await bookBus(bookingData);
      alert('Bus booked successfully!');
    } catch (error) {
      console.error('Error booking bus:', error);
      alert('Failed to book bus');
    }
  };

  if (!bus) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <h2>Booking for {bus.name}</h2>
      <p>Departure Time: {bus.time}</p>
      <div>
        <label>
          Seat Number:
          <input
            type="number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleBooking} style={styles.button}>
        Confirm Booking
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
  },
};

export default BookingPage;
