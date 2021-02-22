import React from 'react';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';

const TestimonialSection = () => {
  return (
    <div className="testimonial">
      <div className="small-container">
        <Grid columns={3}>
          <Grid.Column>
            <Icon name="quote left" color="orange" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              dignissimos, atque obcaecati nostrum minus cum! Id cumque soluta
              reprehenderit deleniti mollitia accusamus quis cum impedit, necessitatibus
              eaque vel, aliquam est.
            </p>
            <Image src="assets/images/user-1.png" circular />
            <Header as="h3" content="Susan Mc Dowel" />
          </Grid.Column>

          <Grid.Column>
            <Icon name="quote left" color="orange" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              dignissimos, atque obcaecati nostrum minus cum! Id cumque soluta
              reprehenderit deleniti mollitia accusamus quis cum impedit, necessitatibus
              eaque vel, aliquam est.
            </p>
            <Image src="assets/images/user-2.png" circular />
            <Header as="h3" content="Sean Parker" />
          </Grid.Column>

          <Grid.Column>
            <Icon name="quote left" color="orange" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              dignissimos, atque obcaecati nostrum minus cum! Id cumque soluta
              reprehenderit deleniti mollitia accusamus quis cum impedit, necessitatibus
              eaque vel, aliquam est.
            </p>
            <Image circular src="assets/images/user-3.png" />
            <Header as="h3" content="Ma Augustin Duc" />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default TestimonialSection;
