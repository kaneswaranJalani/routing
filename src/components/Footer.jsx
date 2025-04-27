import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>© 2025 Your Company. All Rights Reserved.</p>
        <div style={linksContainerStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const textStyle = {
  marginBottom: '10px',
  fontSize: '16px',
};

const linksContainerStyle = {
  marginTop: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '16px',
};

export default Footer;
