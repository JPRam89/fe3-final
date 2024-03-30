import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Form from '../Components/Form';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  const contactStyle = {
    backgroundColor: state.tema === 'dark' ? '#333' : '#f4f4f4',
    color: state.tema === 'dark' ? '#f4f4f4' : '#333',
    padding: '2rem',
    borderRadius: '8px'
  };

  const titleStyle = {
    marginBottom: '1rem'
  };

  return (
    <div style={contactStyle}>
      <h2 style={titleStyle}>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
