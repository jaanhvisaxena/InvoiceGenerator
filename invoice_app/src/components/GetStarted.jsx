import React from 'react';

const GetStarted = () => {
  const redirectToLocalhost3000 = () => {
    window.location.href = 'http://localhost:3000';
  };

  return (
    <button
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        background: '#E3C9FD',
        border: '2px solid black',
        cursor: 'pointer',
        padding: '2px',
      }}
      onClick={redirectToLocalhost3000}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E3C9FD',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Poppins', fontWeight: 'medium', fontSize: '18px', lineHeight: '23.4px', marginTop: '8px' }}>
            <span style={{ backgroundImage: 'linear-gradient(to right, #gradient-color-1, #gradient-color-2)', WebkitBackgroundClip: 'text', color: 'black' }}>
              <strong>Generate</strong>
            </span>
          </p>
        </div>

        <p style={{ fontFamily: 'Poppins', fontWeight: 'medium', fontSize: '18px', lineHeight: '23.4px', marginTop: '-8px' }}>
          <span style={{ backgroundImage: 'linear-gradient(to right, #gradient-color-1, #gradient-color-2)', WebkitBackgroundClip: 'text', color: 'black' }}>
           <strong>Now!</strong> 
          </span>
        </p>
      </div>
    </button>
  );
};

export default GetStarted;
