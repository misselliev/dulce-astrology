/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Use useParams to access route parameters
import { fetchSignInfo } from '../redux/signSlice';

const DailyHoroscope = ({ params }) => {
  const dispatch = useDispatch();
  const { signParam } = useParams(); // Access route parameters
  console.log(params, signParam);
  const signData = useSelector((state) => state.sign.data);

  useEffect(() => {
    // Dispatch an action to fetch data based on the signParam
    dispatch(fetchSignInfo(signParam));
  }, [dispatch, signParam]);
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:w-2/5 text-white font-bold title-font text-center text-2xl mb-2 sm:mb-0">{signData?.name}</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-indigo-500 text-lg title-font font-medium mb-2">Shooting Stars</h2>
            <p className="leading-relaxed text-white text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-indigo-500 text-lg title-font font-medium mb-2">The Catalyzer</h2>
            <p className="leading-relaxed text-white text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-indigo-500 text-lg title-font font-medium mb-2">The 400 Blows</h2>
            <p className="leading-relaxed text-white text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
          </div>
        </div>
        <a href="/horoscopes">
          <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Return to Horoscopes
          </button>
        </a>
      </div>
    </section>
  );
};

export default DailyHoroscope;
