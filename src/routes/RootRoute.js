import React from 'react';
import { Layout, Paper, Title, LoginForm, Container } from '../components';

function RootRoute() {
  return (
    <Layout color="black">
      <Container
        marginTop="10vh"
        marginLeft="10vh"
        marginRight="10vh"
        height="80vh"
        background="white"
      >
        <Paper>
          <Title text="Login" />
          <LoginForm />
        </Paper>
      </Container>
    </Layout>
  );
}

export default RootRoute;
