import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getComments } from '../../api/getComments';
import { useAppSelector } from '../../app/hooks';
import { Comment } from '../../types/Comment';
import { CommentsList } from '../CommentsList/CommentsList';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';

export const ProductPage = () => {
  const { slug } = useParams();
  const products = useAppSelector((state) => state.products.items);
  const product = products.find((item) => item.age === Number(slug));
  const [hasModal, setHasModal] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [serverComments, setServerComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = product?.age || 0;
    getComments(id).then((res) => {
      setServerComments(res);

      setIsLoading(false);
    });
  }, []);

  console.log(serverComments);

  return (
    <div className="section block">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="columns">
            <Link to="/products" className="button is-link mb-5">
              Back
            </Link>
          </div>
          <div className="columns">
            <img
              src="https://via.placeholder.com/500/f66b97"
              alt={product?.name}
              className="column image p-0"
            />

            <div className="container column">
              <h1 className="title has-text-black has-text-centered">
                {product?.name}
              </h1>

              <ul className="mb-3">
                <li>Age: {product?.age}</li>
                <li>Id: {product?.id}</li>
                <li>Type: {product?.type}</li>
                <li>Snippet: {product?.snippet}</li>
                <li>Price: {product?.price}$</li>
                <li>Screen: {product?.screen}</li>
                <li>Capacity: {product?.capacity}</li>
                <li>Ram: {product?.ram}</li>
              </ul>

              <button
                className="button is-warning"
                onClick={() => {
                  setHasModal(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>

          <div className="container has-text-centered">
            {isCommentsOpen ? (
              <CommentsList
                comments={serverComments}
                setIsCommentsOpen={setIsCommentsOpen}
                id={product?.age || 0}
              />
            ) : (
              <button
                className="button is-link"
                onClick={() => {
                  setIsCommentsOpen(true);
                }}
              >
                Open comments
              </button>
            )}
          </div>

          {hasModal && (
            <Modal
              hasModal={hasModal}
              setHasModal={setHasModal}
              product={product}
            />
          )}
        </>
      )}
    </div>
  );
};
