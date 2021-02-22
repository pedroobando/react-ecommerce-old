import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const BrandSection = () => {
  return (
    <div className="brands">
      <div className="small-container">
        <Grid columns={5}>
          <Grid.Column>
            <Image src="assets/brands/logo-godrej.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="assets/brands/logo-oppo.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="assets/brands/logo-coca-cola.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="assets/brands/logo-paypal.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="assets/brands/logo-philips.png" />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default BrandSection;
