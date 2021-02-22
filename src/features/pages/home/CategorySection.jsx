import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

const CategorySection = () => {
  return (
    <div className="categories" style={{ margin: '70px 0 50px' }}>
      <div className="small-container">
        <Header as="h2" className="title" content="Categories Products"></Header>
        <Grid columns={3} className="categories">
          <Grid.Column>
            <Image src="/assets/category/category-1.jpg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/assets/category/category-2.jpg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/assets/category/category-3.jpg" />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default CategorySection;
