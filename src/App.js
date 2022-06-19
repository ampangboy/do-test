import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataRoute, RootRoute, PrivateRoute } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />} />
      <Route
        path="/data"
        element={
          <PrivateRoute>
            <DataRoute />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
