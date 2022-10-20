import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { init } from './features/productsSlice';
import { useAppSelector } from './app/hooks';
import './index.css';
import { Loader } from './components/Loader/Loader';
import { Link } from 'react-router-dom';

export const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.products.loading);

  useEffect(() => {
    console.log(1);
    dispatch(init());
  }, []);

  return (
    <div className="block section">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="block has-text-centered">
          <h1 className="title is-size-1">Welcome to my test task!</h1>

          <Link to="./products" className="mb-5 is-size-2">
            Here's the link to the products!
          </Link>
          <p className="has-text-danger mt-5">
            If you go back to this page, you will reset all the products by
            reloading them
          </p>
        </div>
      )}
    </div>
  );
};
