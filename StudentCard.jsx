// StudentCard.jsx
// This component shows a student's profile card with name, major, year, and a toggleable bio section.

import { useState } from 'react';

function StudentCard({ name, major, year, bio, imageUrl }) {
  // useState manages whether the bio text is currently visible
  const [showBio, setShowBio] = useState(false);

  // When the button is clicked, this function flips showBio between true and false
  const toggleBio = () => setShowBio(!showBio);

  return (
    <div
      style={{
        maxWidth: '360px',
        padding: '24px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        fontFamily: 'Tahoma, sans-serif',
        textAlign: 'center',
        margin: '30px auto',
        backgroundColor: '#fefefe',
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Display profile image */}
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '14px',
          border: '2px solid #00796B',
        }}
      />

      {/* Show name and major/year */}
      <h2 style={{ margin: '8px 0', fontSize: '22px', color: '#333' }}>
        {name}
      </h2>
      <p style={{ margin: '4px 0', fontSize: '16px', color: '#555' }}>
        {major} – {year}
      </p>

      {/* Button to toggle the bio text */}
      <button
        onClick={toggleBio}
        style={{
          marginTop: '14px',
          padding: '8px 18px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#00796B',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* Conditionally render the bio based on showBio */}
      {showBio && (
        <p
          style={{
            marginTop: '18px',
            fontSize: '14px',
            color: '#444',
            lineHeight: '1.5',
          }}
        >
          {bio}
        </p>
      )}
    </div>
  );
}

export default StudentCard;
