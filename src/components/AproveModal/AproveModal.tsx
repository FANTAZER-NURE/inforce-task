import classNames from 'classnames';
import * as productsActions from '../../features/productsSlice';
import { Product } from '../../types/Product';
import { useAppDispatch } from '../../app/hooks';

type Props = {
  isActive: boolean;
  setHasAproveModal: (value: boolean) => void;
  product: Product;
};

export const AproveModal: React.FC<Props> = ({
  isActive,
  setHasAproveModal,
  product,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classNames('modal', { 'is-active': isActive })}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-danger">Confirm</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => {
              setHasAproveModal(false);
            }}
          />
        </header>

        <section className="modal-card-body">
          You really want to delete this product?
        </section>

        <footer className="modal-card-foot">
          <button
            className="button is-danger"
            onClick={(e) => {
              e.preventDefault();

              dispatch(productsActions.deleteProduct(product));
            }}
          >
            Confirm
          </button>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setHasAproveModal(false);
            }}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
