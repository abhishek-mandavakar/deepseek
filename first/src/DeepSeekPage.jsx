import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeepSeekPage = () => {
  const navigate = useNavigate(); // Hook to navigate

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
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: '#333',
            marginRight: '16px'
          }}>
            API Platform ↗
          </a>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: '#333' 
          }}>
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
        <h1 style={{ 
          fontSize: '64px', 
          color: '#4169E1',
          margin: '16px 0',
          fontWeight: '500'
        }}>
          deepseek
        </h1>
        <h2 style={{ 
          fontSize: '32px', 
          color: '#333',
          margin: '16px 0 48px 0',
          fontWeight: '500'
        }}>
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
            <h2 style={{ 
              color: '#4169E1', 
              fontSize: '24px',
              marginBottom: '16px'
            }}>
              Start Now
            </h2>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.5',
              marginBottom: '8px'
            }}>
              Free access to DeepSeek-V3.
            </p>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.5' 
            }}>
              Experience the intelligent model.
            </p>
          </div>

          {/* Get App Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ 
              color: '#4169E1', 
              fontSize: '24px',
              marginBottom: '16px'
            }}>
              Get DeepSeek App
            </h2>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.5',
              marginBottom: '8px'
            }}>
              Chat on the go with DeepSeek-V3.
            </p>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.5' 
            }}>
              Your free all-in-one AI tool
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepSeekPage;
