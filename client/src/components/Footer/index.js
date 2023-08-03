import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="footerSection">
      <div className="container text-center mb-5">
        <h4>anything we may need in a footer, goes here</h4>
      </div>
    </footer>
  );
};

export default Footer;
