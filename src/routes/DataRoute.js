import React from 'react';
import {
  TopBar,
  SecondBar,
  Layout,
  Container,
  SenaraiBar,
  SearchForm,
  SenaraiTable
} from '../components';

function DataRoute() {
  return (
    <>
      <TopBar />
      <SecondBar />
      <Layout color="#ebeef1">
        <Container background="white" marginTop="10px" height="85vh" isElevate>
          <SenaraiBar />
          <SearchForm />
          <SenaraiTable />
        </Container>
      </Layout>
    </>
  );
}

export default DataRoute;
