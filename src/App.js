import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routes from './routes'; 

class App extends Component {
  constructor(props) {
    super(props);

    
    this.initialRoles = localStorage.getItem('roles');
    this.handleStorageChange = this.handleStorageChange.bind(this);

    window.addEventListener('storage', this.handleStorageChange);
  }

  handleStorageChange(event) {
   if (event.key === 'roles') {
      const oldRoles = JSON.parse(event.oldValue || 'null');
      const newRoles = JSON.parse(event.newValue || 'null');

      if (oldRoles !== null && JSON.stringify(oldRoles) !== JSON.stringify(newRoles)) {
        alert(
          `You cannot change roles from ${JSON.stringify(oldRoles)} to ${JSON.stringify(
            newRoles
          )}. If you want to change roles, please log out and log in with different credentials.`
        );

        localStorage.setItem('roles', JSON.stringify(oldRoles));
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Routes />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
