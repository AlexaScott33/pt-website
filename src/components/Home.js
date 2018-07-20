import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="img-container">
            <img className="img-background overlay" src="https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4e8aa54cc5343da938471b049f8be33&auto=format&fit=crop&w=1350&q=80" alt="home-background"></img>
            <div className="img-text">Insert something clever here</div>
          </div>
          <h3 className="about-title">About Our Mission</h3>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies lorem eleifend lectus sagittis iaculis. Donec in iaculis ipsum. Duis mattis, ipsum sit amet scelerisque tempus, nisl sapien viverra augue, ac aliquet neque massa vel magna. Phasellus dapibus, erat pellentesque gravida convallis, magna dui dictum elit, quis tempus nibh purus a diam. Donec ornare felis ut faucibus accumsan. Vestibulum nunc tellus, lobortis ac magna id, luctus eleifend mauris. Curabitur gravida elit nulla, a dictum arcu convallis sit amet. Curabitur augue nisl, lacinia non nibh eu, lobortis finibus felis. Nam consequat sed elit a congue. In a auctor turpis. Integer sollicitudin ullamcorper risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

          Nunc semper laoreet nibh laoreet dignissim. Aenean hendrerit quis risus non fringilla. Nulla facilisi. Nunc euismod sollicitudin dui a porta. Pellentesque vel tempus est, non consequat arcu. Sed aliquet enim nibh, eget interdum elit consectetur nec. Vivamus mattis augue id mauris porta dignissim. Etiam metus mauris, sollicitudin eu posuere id, sagittis at diam. In vestibulum volutpat dignissim.
          </p>
          <footer>
            <Footer />
          </footer>
      </div>
    );
  }
}

export default Home;