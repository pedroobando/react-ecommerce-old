import React from 'react';
import { Grid, Header, Image, Rating } from 'semantic-ui-react';

const ProductSection = () => {
  return (
    <div className="products">
      <div className="small-container">
        <Header as="h2" className="title" content="Featured Products"></Header>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Image src="/assets/products/product-1.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-2.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-3.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-4.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default ProductSection;
