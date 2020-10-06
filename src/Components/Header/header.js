import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import FormInput from '../FormInput/formInput';
import './header.scss';

const Header = () => (
  <div className="header">
  <Grid divided='vertically' verticalAlign='bottom'>
    <Grid.Row columns={2}>
      <Grid.Column floated='left' width={4} >
      <Container text>
        <h1 className="header__title"><span>Be</span> in Couple</h1>
      </Container>
      </Grid.Column>
      <Grid.Column floated='right' width={4} >
      <Container text>
        <p className="header__infos"><span>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Similique id doloribus alias aspernatur mollitia sint
        </p>
      </Container>
      </Grid.Column>
    </Grid.Row>
    </Grid>
      <FormInput />
      
  </div>
);

export default Header;
