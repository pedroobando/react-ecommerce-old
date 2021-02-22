import React from 'react';
import { Grid, Header, Image, Rating } from 'semantic-ui-react';

const LatestProductSection = () => {
  return (
    <div className="products">
      <div className="small-container">
        <Header as="h2" className="title" content="Latest Products"></Header>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Image src="/assets/products/product-5.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-6.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-7.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-8.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image src="/assets/products/product-9.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-10.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-11.jpg" />
              <Header as="h4" content="Red Printed T-Shirt" />
              <Rating disabled icon="star" defaultRating={3} maxRating={5} />
              <p>$49.90</p>
            </Grid.Column>
            <Grid.Column>
              <Image src="/assets/products/product-12.jpg" />
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

export default LatestProductSection;
