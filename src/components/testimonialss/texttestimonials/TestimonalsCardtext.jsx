import React, { useState } from 'react';
import im from "../../../assets/hanuman1.jpg";
import MyComponent from '../pagetestimonials/MyComponent/MyComponent';
const testimonials = Array(12).fill({
  image: im,
  title: "Noteworthy technology acquisitions 2021",
  description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
});
const ITEMS_PER_PAGE = 3; // Number of cards per page
function TestimonalsCardtext() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedItems = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  return (
    <>      <MyComponent />
      <div className="flex flex-wrap justify-center gap-4 m-18">
        {displayedItems.map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={item.image} alt="Testimonial" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-blue">{item.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 m-18">
        {displayedItems.map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={item.image} alt="Testimonial" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-blue">{item.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>


         <div className="flex flex-wrap justify-center gap-4 m-18">
        {displayedItems.map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={item.image} alt="Testimonial" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-blue">{item.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>   
      <div className="flex flex-wrap justify-center gap-4 m-18">
        {displayedItems.map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={item.image} alt="Testimonial" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-blue">{item.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      


<nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    </>
  );
}
export default TestimonalsCardtext;
