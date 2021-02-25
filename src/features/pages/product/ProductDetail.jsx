import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ProductDetail = () => {
  return (
    <div className="small-container">
      <Grid columns={2}>
        <Grid.Column>
          <Image />
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  );
};

export default ProductDetail;
