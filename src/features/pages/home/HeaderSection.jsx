import React from 'react';
import { Button, Grid, Header, Image, Container } from 'semantic-ui-react';

const HeaderSection = ({ Navbar }) => {
  return (
    <div className="headers">
      {Navbar}
      <Container fluid>
        <Grid columns={2} className="present">
          <Grid.Column>
            <Header as="h1">
              Give Your Workout
              <br />A New Style!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br />
              Excepturi, odit accusamus labore sunt culpa facilis delectus mollitia,
              maxime odio deserunt distinctio vero quo nam tempora autem nesciunt
              exercitationem!
            </p>
            <Button href="" circular>
              Explore Now &#8680;
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Image src="/assets/images/image1.png" alt="Deportes AM" />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default HeaderSection;
