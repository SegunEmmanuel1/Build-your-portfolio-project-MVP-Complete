mport React from 'react';

const ProfilePage = () => {
  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
};

export default ProfilePage;
