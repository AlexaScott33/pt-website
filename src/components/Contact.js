import React, { Component } from 'react';
import Header from './Header';
import ContactForm from './ContactForm';

class Contact extends Component {
  render() {
    return (
      <div>
          <Header />
          Contact Page

          <ContactForm />
      </div>
    );
  }
}

export default Contact;