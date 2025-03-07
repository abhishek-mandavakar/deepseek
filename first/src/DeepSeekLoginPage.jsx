import React, { useState } from 'react';

const DeepSeekLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsAgreed: false
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#121212',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
          width: '100%',
        }}>
          <img 
            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
            alt="DeepSeek Logo" 
            style={{ height: '100px' }}
          />
        </div>
        
        <div style={{
          textAlign: 'center',
          marginBottom: '24px',
          color: '#B0B0B0',
          fontSize: '14px',
          lineHeight: '1.5',
          width: '100%',
        }}>
          <p>Only login via email, Google, or +86 phone number</p>
          <p>Login is supported in your region.</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}>
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <input
              type="text"
              name="email"
              placeholder="Phone number / email address"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #333',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                backgroundColor: '#2A2A2A',
                color: '#E0E0E0',
              }}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  backgroundColor: '#2A2A2A',
                  color: '#E0E0E0',
                }}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  color: '#999',
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg 
                  style={{ height: '20px', width: '20px', color: '#999' }} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A10.025 10.025 0 014.22 6.78m6.392-3.193A10.05 10.05 0 0112 3c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-1.49 2.91" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          <div style={{ marginBottom: '24px', width: '100%' }}>
            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontSize: '14px',
              color: '#B0B0B0',
            }}>
              <input
                type="checkbox"
                name="termsAgreed"
                style={{
                  marginRight: '8px',
                  marginTop: '3px',
                  accentColor: '#4285f4',
                }}
                checked={formData.termsAgreed}
                onChange={handleInputChange}
                required
              />
              <span>
                I confirm that I have read, consent and agree to DeepSeek's{' '}
                <a href="#" style={{ color: '#4285f4', textDecoration: 'none' }}>Terms of Use</a> and{' '}
                <a href="#" style={{ color: '#4285f4', textDecoration: 'none' }}>Privacy Policy</a>.
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            style={{
              backgroundColor: '#4285f4',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '16px',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '16px',
            }}
          >
            Log in
          </button>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '16px',
            fontSize: '14px',
            width: '100%',
          }}>
            <a href="#" style={{ color: '#4285f4', textDecoration: 'none' }}>Forgot password?</a>
            <a href="#" style={{ color: '#4285f4', textDecoration: 'none' }}>Sign up</a>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '16px 0',
            color: '#999',
            fontSize: '14px',
            width: '100%',
          }}>
            <div style={{ flex: 1, borderTop: '1px solid #333' }}></div>
            <span style={{ padding: '0 16px' }}>Or</span>
            <div style={{ flex: 1, borderTop: '1px solid #333' }}></div>
          </div>

          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '12px',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#2A2A2A',
              color: '#E0E0E0',
              cursor: 'pointer',
            }}
          >
            <img 
              src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png" 
              alt="Google" 
              style={{ height: '20px', width: '20px', marginRight: '8px' }} 
            />
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeepSeekLoginPage;
