
import React from 'react'
import { Link } from 'react-router-dom';
const NOTfound404 = () => {
    return(
<div className="pt-60 pr-10	 flex flex-col justify-center items-center pb-10	">
      <h1 className="text-9xl">404 Not Found</h1>
      <p className="pt-20 text-4xl">
        Your visited page not found. You may go home page
      </p>
      <div className="flex hover:bg-red-500 mt-24 justify-center items-center text-3xl bg-red-400 h-20 rounded-lg	w-80">
        <Link className="" to={"/"}>
          <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Home
          </a>
        </Link>
      </div>
    </div>
    )
}
export default NOTfound404