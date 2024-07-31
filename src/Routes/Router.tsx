import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../views/App';

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
