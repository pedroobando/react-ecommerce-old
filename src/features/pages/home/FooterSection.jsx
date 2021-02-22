import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const FooterSection = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Grid columns={4}>
          <Grid.Column className="col-1">
            <Header as="h3" content="Download Our App" />
            <p>Download App Android and IOS mobile phone.</p>
            <div className="app-logo">
              <Image src="assets/images/play-store.png" className="app-logo" />
              <Image src="assets/images/app-store.png" className="app-logo" />
            </div>
          </Grid.Column>
          <Grid.Column className="col-2">
            <Image src="assets/images/logo-white.png" />
            <p>
              Our Purpose Is To Sustainable maje the pleasure and benfits of sports
              Accessible to the Many.
            </p>
          </Grid.Column>
          <Grid.Column className="col-3">
            <Header as="h3">Useful Links</Header>
            <ul>
              <li>Coupons</li>
              <li>Bloq Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </Grid.Column>
          <Grid.Column className="col-4">
            <Header as="h3">Follow us</Header>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </Grid.Column>
        </Grid>
        <hr />
        <p className="copyright">Copyright 2021 - Pedro Obando</p>
      </Container>
    </div>
  );
};

export default FooterSection;
