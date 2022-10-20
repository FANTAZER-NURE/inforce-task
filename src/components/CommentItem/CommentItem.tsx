import { useAppDispatch } from '../../app/hooks';
import { Comment } from '../../types/Comment';
import * as commentsActions from '../../features/commentsSlice';


type Props = {
  comment: Comment;
  comments: Comment[],
  setVisibleComments: (value: Comment[]) => void,
};

export const CommentItem: React.FC<Props> = ({ comment, comments, setVisibleComments }) => {
  const dispatch = useAppDispatch();


  const handleDelete = () => {
    const newComments = comments.filter(item => item.id !== comment.id);

    dispatch(commentsActions.deleteComment(comment));
    setVisibleComments(newComments);
  }

  return (
    <div className="card mb-5">
      <header className="card-header">
        <p className="card-header-title">{comment.email}</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <p>{comment.body}</p>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button
            className="button is-danger"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  );
};
