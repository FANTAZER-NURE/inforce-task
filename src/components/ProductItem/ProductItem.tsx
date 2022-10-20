import { useState } from 'react';
import { Product } from '../../types/Product';
import { Modal } from '../Modal/Modal';
import { AproveModal } from '../AproveModal/AproveModal';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

export const ProductItem: React.FC<Props> = ({ product }) => {
  const [hasModal, setHasModal] = useState(false);
  const [hasAproveModal, setHasAproveModal] = useState(false);

  return (
    <Link
      key={product.id + Math.random()}
      className="box mb-5"
      to={`../${product.age}`}
    >
      <div className="columns is-full">
        <h5 className="mb-3 is-size-2 has-text-centered column">
          {product.name}
        </h5>
        <button
          className="delete is-1 is-offset-11"
          aria-label="close"
          onClick={(e) => {
            e.preventDefault();
            setHasAproveModal(true);
          }}
        />
      </div>

      <div className="columns">
        <p className="column">Price</p>
        <p className="column is-3">{product.price}$</p>
      </div>
      <div className="columns">
        <p className="column">Capacity</p>
        <p className="column is-3">{product.capacity}</p>
      </div>
      <div className="columns">
        <p className="column">Ram</p>
        <p className="column is-3">{product.ram}</p>
      </div>
      <div className="columns">
        <p className="column">Screen</p>
        <p className="column is-3">{product.screen}</p>
      </div>
      <div className="columns">
        <p className="column">Type</p>
        <p className="column is-3">{product.type}</p>
      </div>
      <div className="columns">
        <p className="column">Age</p>
        <p className="column is-3">{product.age}</p>
      </div>
      <div className="columns is-centered">
        <button
          className="button is-warning is-centered mb-3"
          onClick={(e) => {
            e.preventDefault();
            setHasModal(true);
          }}
        >
          Edit
        </button>
      </div>

      {hasModal && (
        <Modal
          hasModal={hasModal}
          setHasModal={setHasModal}
          product={product}
        />
      )}

      {hasAproveModal && (
        <AproveModal
          isActive={hasAproveModal}
          setHasAproveModal={setHasAproveModal}
          product={product}
        />
      )}
    </Link>
  );
};
