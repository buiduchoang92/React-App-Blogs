import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { getBlogs } from '../redux-toolkit/blogsSlice';
import SearchPage from '../component/SearchPage';
import Blogs from '../component/Blogs';
import Pagination from '../component/Pagination';
import SortDropdown from '../component/SortPage';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 10;
  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentBlogs = blogs
    .filter(val => {
      if (searchTerm === '') {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
      return null;
    })
    .sort((a, b) => {
      if (typeFilter !== '') {
        if (a[typeFilter].toLowerCase() < b[typeFilter].toLowerCase()) {
          return -1;
        }
        if (a[typeFilter].toLowerCase() > b[typeFilter].toLowerCase()) {
          return 1;
        }
        return 0;
      }
      return 0;
    })
    .slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNum => setCurrentPage(pageNum);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  const searchText = value => {
    setSearchTerm(value);
  };

  const handleSelect = value => {
    setTypeFilter(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      var callApi = async () => {
        const actionResult = await dispatch(getBlogs('blogs'));
        const unwrapCurrentBlogs = unwrapResult(actionResult);
        setBlogs(unwrapCurrentBlogs);
        setLoading(false);
      };
    } catch (error) {
      console.log(error.massage);
    }
    callApi();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="my-5 text-primary text-center">React List Blogs</h1>
        <div className="d-flex justify-content-between mb-4">
          <SortDropdown handleSelect={handleSelect} typeFilter={typeFilter} />
          <SearchPage searchText={searchText} />
        </div>
        <Blogs blogs={currentBlogs} loading={loading} />
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
