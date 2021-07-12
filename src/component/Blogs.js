import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Blogs = props => {
  const { blogs, loading, history, currentPage, blogsPerPage } = props;
  useEffect(() => {
    history.push({
      pathname: '/blogs',
      search: `?page=${currentPage}&limit=${blogsPerPage}`
    });
  }, [currentPage]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {blogs.map(blog => (
        <div key={blog.id} className="alert alert-primary">
          <h4 className="alert-heading">{blog.title}</h4>
          <p>{blog.content}</p>
          <Link
            to={{
              pathname: `/blogs/${blog.id}`,
              state: { blog: blog }
            }}
          >
            <button type="button" className="btn btn-info">
              Info
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

React.memo(Blogs);

export default Blogs;
