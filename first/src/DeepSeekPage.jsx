import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeepSeekPage = () => {
  const navigate = useNavigate(); // Hook to navigate
  const [showQR, setShowQR] = useState(false); // Track hover state

  // Function to handle "Start Now" click
  const handleStartNowClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      backgroundImage: 'url("https://cdn.deepseek.com/blog/banner-background.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
            alt="DeepSeek Logo" 
            style={{ width: '36px', height: '36px' }}
          />
          <span style={{ 
            color: '#4169E1', 
            fontWeight: 'bold', 
            marginLeft: '8px',
            fontSize: '18px'
          }}>
            deepseek
          </span>
        </div>
        <div>
          <a href="#" style={{ textDecoration: 'none', color: '#333', marginRight: '16px' }}>
            API Platform ↗
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            中文
          </a>
        </div>
      </header>

      {/* Announcement Banner */}
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '12px',
        textAlign: 'center',
        borderRadius: '4px',
        margin: '20px auto',
        width: '80%',
        maxWidth: '1000px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <span style={{ fontSize: '14px', color: '#333' }}>
          🎉 DeepSeek-R1 is now live and open source, rivaling OpenAI's Model o1. Available on web, app, and API. Click for details.
        </span>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        width: '100%',
        boxSizing: 'border-box',
        padding: '0 20px'
      }}>
        <h1 style={{ fontSize: '64px', color: '#4169E1', margin: '16px 0', fontWeight: '500' }}>
          deepseek
        </h1>
        <h2 style={{ fontSize: '32px', color: '#333', margin: '16px 0 48px 0', fontWeight: '500' }}>
          Into the unknown
        </h2>

        {/* Cards Container */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1000px',
          gap: '24px',
          marginTop: '32px'
        }}>
          {/* Start Now Card */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '32px',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
            onClick={handleStartNowClick} // Add click handler for routing
          >
            <h2 style={{ color: '#4169E1', fontSize: '24px', marginBottom: '16px' }}>
              Start Now
            </h2>
            <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '8px' }}>
              Free access to DeepSeek-V3.
            </p>
            <p style={{ color: '#666', lineHeight: '1.5' }}>
              Experience the intelligent model.
            </p>
          </div>

          {/* Get App Card with Hover QR Code */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '32px',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              position: 'relative',
              textAlign: 'center'
            }}
            onMouseEnter={() => setShowQR(true)} // Show QR on hover
            onMouseLeave={() => setShowQR(false)} // Hide QR when not hovered
          >
            <h2 style={{ color: '#4169E1', fontSize: '24px', marginBottom: '16px' }}>
              Get DeepSeek App
            </h2>
            <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '8px' }}>
              Chat on the go with DeepSeek-V3.
            </p>
            <p style={{ color: '#666', lineHeight: '1.5' }}>
              Your free all-in-one AI tool
            </p>

            {/* QR Code Image (Only Visible on Hover) */}
            {showQR && (
              <img
                src="data:image/jpeg;base64,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" // Replace with the actual path
                alt="Scan to Download"
                style={{
                  width: '220px',
                  height: '220px',
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepSeekPage;
