import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Product } from '../../types/Product';
import { Modal } from '../Modal/Modal';
import { ProductItem } from '../ProductItem/ProductItem';

enum SortOrder {
  ALPH = 'alph',
  AGE = 'age',
}

export const ProductsList = memo(() => {
  const products = useAppSelector((state) => state.products.items);
  const [hasModal, setHasModal] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>(SortOrder.ALPH);
  const visileProducts: Product[] = [...products];

  switch (sortOrder) {
    case SortOrder.ALPH:
      visileProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case SortOrder.AGE:
      visileProducts.sort((a, b) => a.age - b.age);
      break;

    default:
      break;
  }

  return (
    <div className="list section box">
      {hasModal && <Modal hasModal={hasModal} setHasModal={setHasModal} />}

      <div className="columns">
        <Link to="/" className="button is-link mb-5">
          Back
        </Link>
      </div>

      <div className="columns">
        <h1 className="title column my-auto">Products List</h1>

        <div className="column my-auto">
          <div className="select has-text-centered">
            <select
              onChange={(e) => {
                setSortOrder(e.currentTarget.value);
              }}
            >
              <option value={SortOrder.ALPH}>Alphabet</option>
              <option value={SortOrder.AGE}>Age</option>
            </select>
          </div>
        </div>

        <button
          className="button has-text-centered is-primary block my-auto"
          onClick={() => {
            setHasModal(true);
          }}
        >
          Add new
        </button>
      </div>

      {visileProducts.map((product) => (
        <ProductItem product={product} key={product.id + Math.random()} />
      ))}
    </div>
  );
});
