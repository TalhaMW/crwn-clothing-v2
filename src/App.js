import { Routes, Route } from 'react-router-dom';
import Home from './componets/routes/home/home.component';
import MainHeader from './componets/routes/MainHeader/MainHeader';
import Signup from './componets/routes/Signup';

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
          path='/sign-up'
          element={<Signup />}
        />
      </Route>
    </Routes>
  );
};

export default App;
