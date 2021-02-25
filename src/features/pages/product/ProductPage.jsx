import React from 'react';
import { Dropdown, Grid, Rating, Image, Header, Pagination } from 'semantic-ui-react';

import './productpage.css';

const ProductPage = () => {
  const optionSort = [
    { key: 1, text: 'Sort by price', value: 1 },
    { key: 2, text: 'Sort by pupularity', value: 2 },
    { key: 3, text: 'Sort by rating', value: 3 },
    { key: 4, text: 'Sort by sales', value: 4 },
  ];

  return (
    <div className="small-container">
      <Grid columns={2} style={{ marginTop: '70px' }}>
        <Grid.Column>
          <Header as="h2" content="All Products" className="title2" />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            placeholder="Select Order Products"
            fluid
            selection
            options={optionSort}
          />
        </Grid.Column>
      </Grid>
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
      <Pagination
        defaultActivePage={1}
        totalPages={5}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        style={{ margin: '50px 0' }}
      />{' '}
    </div>
  );
};

export default ProductPage;
