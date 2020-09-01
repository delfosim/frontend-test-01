import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const TopBar = () =>
<div>
  <Container>
    <Navbar className="bg-light justify-content-between">
      <h1>Delfos</h1>
    </Navbar>
  </Container>
</div>

export default TopBar;
