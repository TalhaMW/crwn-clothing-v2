import { Routes, Route } from 'react-router-dom';
import Home from './componets/routes/home/home.component';
import MainHeader from './componets/routes/MainHeader/MainHeader';

import Authentication from './componets/routes/Authentication/Authentication';

const Shop = () => <h1>Shop</h1>;
const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainHeader />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/shop'
          element={<Shop />}
        />
        <Route
          path='/auth'
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
