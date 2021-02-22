import React from 'react';
import { Button, Grid, Header, Image } from 'semantic-ui-react';

const OfferSection = () => {
  return (
    <div className="offers">
      <div className="small-container">
        <Grid columns={2}>
          <Grid.Column>
            <Image src="assets/images/exclusive.png" />
          </Grid.Column>
          <Grid.Column>
            <p>Exclusively Available on RedStrore</p>
            <Header as="h1" content="Smart Band 4" />
            <p>
              <small>
                The Mi Smart Band 4 featires a 39.9% larger (thas Mi Band 3) AMOLED color
                full-touch display with adjustable brightness, so everything is clear as
                can be.
              </small>
            </p>
            <Button circular>Buy Now &#8594;</Button>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default OfferSection;
