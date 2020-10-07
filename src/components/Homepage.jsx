// import React from 'react';

//////////////////  import bootstrap  ///////////////////////
import { Container, Row, Col } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import moment from 'moment';
import axios from 'axios';
import NavBar from './style-components/NavBar.jsx';
import Greeting from './style-components/Greeting.jsx';
import MyProfile from './MyProfile.jsx';
import MyElection from './MyElection.jsx';
import MyBallot from './MyBallot.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import MySupport from './MySupport.jsx';
import PledgeButton from './style-components/Button.jsx';
import Friends from './Friends.jsx';
import logoLg from '../../assets/myvote_lg.png';

// render() {
//   const { page, user, users } = this.state;
//   return (
//     <>
//       <div>
//         <Greeting page={page} user={user} />
//         <NavBar changePage={this.changePage} page={page} />
//       </div>
//       <div>
//         <center><img src={logoLg} /></center>
//       </div>
//     <Container className='pledge' fluid='sm'>
//       <Row>
//         <Col><PledgeButton user={user} /></Col>
//         <Col><Friends users={users} /></Col>
//       </Row>
//     </Container>
//     </>

//     );
//   }
// }
const Homepage = ({ page, user, users }) => {
  return (
    <div className='container'>
      {/* <Greeting user={user} users={users} /> */}
      <NavBar />
      <br></br>
      <div>
        <center>
          <img src={logoLg} />
        </center>
      </div>
      <Container className='pledge' fluid='sm'>
        <Row>
          <Col>
            <PledgeButton user={user} />
          </Col>
          <Col>
            <Friends users={users} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
