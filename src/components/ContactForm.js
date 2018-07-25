import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                message: ''
            }
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            message: event.target.value
        });
    }   
  render() {
      console.log(this.state);
    return (
      <div>
          <h2>Contact Us</h2>

          <form 
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            let messageInput = event.target.message.value;
            event.target.message.value = '';
            console.log(messageInput);
            }}>
            <label>Message</label>
            <input
            className="message-input"
            id="message"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Enter your message here"
            required
            >
            </input>
            <div className="btn">
            <button 
            className="cancel-btn"
            >Submit</button>
            </div>
          </form>
      </div>
    );
  }
}

export default ContactForm;