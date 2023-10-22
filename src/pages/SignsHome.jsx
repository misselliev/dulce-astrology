import { fetchSignInfo } from '../redux/signSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const signNames = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];

const SignsHome = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const selectSign = (sign) => {
    dispatch(fetchSignInfo(sign));
    navigateTo(`/signs/${sign}`);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500">Zodiac Signs</div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-bold title-font text-center text-2xl mb-2 sm:mb-0">Zodiac Signs</h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {signNames.map((item) => {
            return (
              <div key={item} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1203x503"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-indigo-500 capitalize mt-5">{item}</h2>
                <a className="text-indigo-400 inline-flex items-center mt-3" onClick={() => selectSign(item)}>
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SignsHome;
