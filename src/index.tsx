import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { App } from './App';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductPage } from './components/ProductPage/ProductPage';
import { ProductsList } from './components/ProductsList/ProductsList';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <Routes>
          <Route path="/">
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route index element={<App />} />
            <Route path=":sort" element={<App />} />
          </Route>
        </Routes> */}
        <Routes>
          <Route path="/">
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route index element={<App />} />
            <Route path=":slug" element={<ProductPage />} />
          </Route>
          <Route path="/products">
            <Route index element={<ProductsList />} />
            <Route path=":slug" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
