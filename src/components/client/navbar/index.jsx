import React, { useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [skip, setSkip] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    let debounceTimer = setTimeout(() => {
      if (search.length > 0) {
        axios
          .get(`search/?query=${search}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setData(response.data));
      }
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [search, token]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setSkip(true);
  };

  useEffect(() => {
    if (search.length === 0) setSkip(false);
  }, [search]);

  useEffect(() => {
    if (!skip) setSearch('');
  }, [skip]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkip(false);
  };

  const close = () => {
    setSkip(false);
    setSearch('');
  };

  const minusPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <nav className="   border-gray-200 dark:bg-gray-900 w-[1,170px] h-[60px]">
        <div className="flex flex-wrap  items-center justify-between mx-auto">
          <span className="font-black text-2xl">Exclusive</span>
          <div className="flex md:order-2">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input 
                type="text"
                id="search-navbar"
                className="block  p-2 w-96 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={search}
                onChange={handleInputChange}
              />
              {data?.result?.products?.map((value, index) => (
                <div className='absolute z-10 w-96 h-7 justify-center rounded-md bg-slate-400' key={index + 1}>
                  <NavLink className="no-underline" to={`/product/${value?.id}`}>
                    <p className="container flex items-center ml-12 md:ml-0 gap-2 cursor-pointer">
                      <span>
                        {' '}
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </span>{' '}
                      {value?.title}
                    </p>
                  </NavLink>
                </div>
              ))}
            </div>
            <CiHeart className="w-[40px] h-[30px] mt-1 ml-4" />
            <SlBasket className="w-[40px] h-[25px] mt-1 ml-4" />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to={'/'}>
                <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Home
                </a>
              </Link>
              <Link to={'/about'}>
                <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </a>
              </Link>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </a>
              </li>
              <Link to={'/sign'}>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Sign up
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
