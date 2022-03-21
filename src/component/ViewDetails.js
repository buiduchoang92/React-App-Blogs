import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ViewDetails = () => {
  const { state } = useLocation();
  const bl = useSelector(state => state.blogs);
  console.log(bl, 'blog');
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="my-5 text-primary text-center">React ViewDetails</h1>
        <div className="media">
          <LazyLoadImage
            alt={state.blog.title}
            src={state.blog.image}
            className="align-self-center mr-3"
            effect="blur"
            style={{ height: '400px', width: '400px' }}
          />
          <div className="media-body">
            <h5 className="mt-0">{state.blog.title}</h5>
            <p>{state.blog.content}</p>
            <p>{state.blog.createdAt}</p>
          </div>
        </div>
        <Link to="/">
          <button type="button" className="btn btn-primary btn-lg mt-2">
            Back
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ViewDetails;
