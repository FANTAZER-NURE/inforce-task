import { useEffect, useMemo, useState } from 'react';
import { getComments } from '../../api/getComments';
import {  useAppSelector } from '../../app/hooks';
import { Comment } from '../../types/Comment';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentModal } from '../CommentModal/CommentModal';
import { Loader } from '../Loader/Loader';

type Props = {
  setIsCommentsOpen: (value: boolean) => void,
  comments: Comment[],
  id: number,
};

export const CommentsList: React.FC<Props> = ({ comments, setIsCommentsOpen, id }) => {
  const [visibleComments, setVisibleComments] = useState<Comment[]>(comments);
  const [hasModal, setHasModal] = useState(false);
  let reduxComments = useAppSelector((state) => state.comments.items);

  reduxComments = reduxComments.filter((comment) => comment.postId === id);

  return (
    <div className="column has-text-centered">
      <div className="column has-text-centered">
          <button
            className="button is-link mb-3 mr-5"
            onClick={() => {
              setHasModal(true);
            }}
          >
            Add comment
          </button>

          <button
            className="button is-danger"
            onClick={() => {
              setIsCommentsOpen(false);
            }}
          >
            Close comments
          </button>

          {[...reduxComments, ...visibleComments].map((comment: Comment) => (
            <CommentItem
              comment={comment}
              comments={visibleComments}
              setVisibleComments={setVisibleComments}
              key={comment.id}
            />
          ))}
        </div>

      {hasModal && (
        <CommentModal hasModal={hasModal} setHasModal={setHasModal} id={id} />
      )}
    </div>
  );
};
