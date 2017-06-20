import React from 'react'
import {
  Jumbotron,
  Button,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import cx from 'classnames'
import Sidebar from '../../../../components/Sidebar'
import styles from '../../../../styles/main.scss'

const SidebarItems = [
  {text: 'Info'},
  {text: 'Info 2'}
]

const Home = () => (
  <Container fluid>
    <Row>
      <Col md={{size: 2}} xs={{size: 12}}  className={cx(["hidden-sm-down"], styles.nopadding)}>
        <Sidebar items={SidebarItems}/>
      </Col>
      <Col md={{size: 10}} sm={{size: 12}} className={styles.nopadding}>
        <Jumbotron>
          <h1 className="display-4">Dashboard</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, enim esse harum id impedit ipsum itaque iusto magnam minus molestias natus nobis placeat praesentium, qui saepe sapiente temporibus tenetur ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cum dolor impedit ipsam iste numquam pariatur porro velit voluptates.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>

  </Container>
);

export default Home
