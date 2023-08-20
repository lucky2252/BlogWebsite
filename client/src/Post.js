import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { enIN } from 'date-fns/locale';

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`http://localhost:4000/${cover}`} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), "dd MMM yyyy 'at' hh:mm a", { locale: enIN })}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}