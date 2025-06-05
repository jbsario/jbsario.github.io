import React from 'react';

function App() {
  const handlePayment = () => {
    window.location.href = 'https://pm.link/kendev-services/test/vPQ7ru8';
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h1>KenDev Web Services</h1>
        <p>Click below to proceed with secure payment via PayMongo</p>
        <button 
          onClick={handlePayment}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem 2rem',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default App;
