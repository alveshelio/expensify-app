import React from 'react';

import FrontendRoutes from '../../routes/';
import Header from '../../components/Global/Header';

const App = () => (
  <div className='app'>
    <Header />
    <FrontendRoutes />
  </div>
);

export default App;
