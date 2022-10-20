import classNames from 'classnames';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import * as commentsActions from '../../features/commentsSlice';

/*
 * I will keep comments that user adds
 * in the Redux, but will load all other comments
 * from the API in order to optimize(load comments
 * only if needed), I'm not using POST request,
 * because it will not be saved on JSON server
 */

type Props = {
  hasModal: boolean;
  setHasModal: (value: boolean) => void;
  id: number;
};

export const CommentModal: React.FC<Props> = ({
  hasModal,
  setHasModal,
  id,
}) => {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (!email || !body) {
      setHasError(true);

      return;
    }

    const newComment = {
      id: Math.floor(Math.random() * 100),
      postId: id,
      email,
      name: 'Lorem, ipsum dolor.',
      body,
    };

    dispatch(commentsActions.add(newComment));
    setHasModal(false);
  };

  return (
    <div className={classNames('modal', { 'is-active': hasModal })}>
      <div className="modal-background"></div>
      <div className="modal-card box">
        <header className="modal-card-head has-background-white">
          <p className="modal-card-title">New Comment</p>
          <button
            className="delete"
            aria-label="close"
            onClick={(e) => {
              e.preventDefault();
              setHasModal(false);
            }}
          />
        </header>

        <section className="modal-card-body">
          <input
            type="text"
            className="input mb-3"
            placeholder="Name"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <textarea
            className="input mb-3"
            placeholder="Type your comment"
            value={body}
            onChange={(e) => {
              setBody(e.currentTarget.value);
            }}
          />
        </section>

        {hasError && (
          <p className="is-block has-text-danger">
            All fields has to be filled
          </p>
        )}

        <footer className="modal-card-foot has-background-white">
          <button
            className="button is-success"
            onClick={() => {
              handleSubmit();
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
};
