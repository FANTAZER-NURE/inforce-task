import classNames from 'classnames';
import { useAppDispatch } from '../../app/hooks';
import * as productsActions from '../../features/productsSlice';
import { memo, useEffect, useState } from 'react';
import { Product } from '../../types/Product';

type Props = {
  hasModal: boolean;
  setHasModal: (value: boolean) => void;
  product?: Product;
};

export const Modal: React.FC<Props> = memo(({ hasModal, setHasModal, product }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>();
  const [capacity, setCapacity] = useState<number>();
  const [ram, setRam] = useState<number>();
  const [type, setType] = useState('');
  const [screen, setScreen] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setCapacity(+product.capacity.slice(0, -2));
      setRam(+product.ram.slice(0, -2));
      setType(product.type);
      setScreen(product.screen);
    }
  }, []);

  const handleSubmit = () => {
    if (!name || !price || !capacity || !ram || !type || !screen) {
      setHasError(true);

      return;
    }

    const product: Product = {
      age: Math.floor(Math.random() * 100),
      id: Math.floor(Math.random() * 100).toString(),
      type,
      imageUrl: 'https://via.placeholder.com/600/f66b97',
      name,
      snippet:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, error?',
      price: price || 0,
      discount: 0,
      screen,
      capacity: `${capacity}Mb`,
      ram: `${ram}Mb`,
    };

    dispatch(productsActions.add(product));
    setHasModal(false);
  };

  const handleEdit = () => {
    if (!name || !price || !capacity || !ram || !type || !screen) {
      setHasError(true);

      return;
    }

    const newProduct: Product = {
      age: product?.age || 0,
      id: product?.id || '0',
      type,
      imageUrl: product?.imageUrl || '',
      name,
      snippet: product?.snippet || '',
      price: price || 0,
      discount: product?.discount || 0,
      screen,
      capacity: `${capacity}Mb`,
      ram: `${ram}Mb`,
    };

    dispatch(productsActions.edit(newProduct));
    setHasModal(false);
  };

  const title = product ? 'Edit' : 'New'
  const message = product
    ? 'Edit the product'
    : 'Enter info about new product';

  return (
    <div
      className={classNames('modal', { 'is-active': hasModal })}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className="modal-background"></div>
      <div className="modal-card box">
        <header className="modal-card-head has-background-white">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={(e) => {
              e.preventDefault();
              setHasModal(false);
            }}
          />
        </header>

        {product ? (
          <section className="modal-card-body">
            <h1 className="is-size-2 mb-3">{message}</h1>
            <input
              type="text"
              className="input mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />

            <input
              type="number"
              min="0"
              className="input mb-3"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                e.preventDefault();
                setPrice(+e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <input
              type="number"
              min="0"
              className="input mb-3"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => {
                e.preventDefault();
                setCapacity(+e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <input
              type="number"
              min="0"
              className="input mb-3"
              placeholder="Ram"
              value={ram}
              onChange={(e) => {
                e.preventDefault();
                setRam(+e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <div className="select">
              <select
                value={type}
                onChange={(e) => {
                  e.preventDefault();
                  setType(e.currentTarget.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="phone">Phone</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
            <div className="select">
              <select
                value={screen}
                onChange={(e) => {
                  e.preventDefault();
                  setScreen(e.currentTarget.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <option value={product.screen}>{product.screen}</option>
                <option value="amoled">Amoled</option>
                <option value="retina">Retina</option>
              </select>
            </div>
          </section>
        ) : (
          <section className="modal-card-body">
            <h1 className="is-size-2 mb-3">Enter info about new product</h1>
            <input
              type="text"
              className="input mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />

            <input
              type="number"
              min="0"
              className="input mb-3"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                e.preventDefault();
                setPrice(+e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <input
              type="number"
              min="0"
              className="input mb-3"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => {
                e.preventDefault();
                setCapacity(+e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <input
              type="number"
              min="0"
              className="input mb-3"
              placeholder="Ram"
              value={ram}
              onChange={(e) => {
                e.preventDefault();
                setRam(+e.currentTarget.value);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <div className="select">
              <select
                value={type}
                onChange={(e) => {
                  e.preventDefault();
                  setType(e.currentTarget.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="phone">Phone</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
            <div className="select">
              <select
                value={screen}
                onChange={(e) => {
                  e.preventDefault();
                  setScreen(e.currentTarget.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <option value="" disabled>
                  Select screen
                </option>
                <option value="amoled">Amoled</option>
                <option value="retina">Retina</option>
              </select>
            </div>
          </section>
        )}

        {hasError && (
          <p className="is-block has-text-danger">
            All fields has to be filled
          </p>
        )}

        <footer className="modal-card-foot has-background-white">
          <button
            className="button is-success"
            onClick={(e) => {
              e.preventDefault();
              if (product) {
                handleEdit();
              } else {
                handleSubmit();
              }
            }}
          >
            Save changes
          </button>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setHasModal(false);
            }}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
});
