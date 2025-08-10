import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import indian from '../../assets/resources/indian.png';
import italian from '../../assets/resources/italian.jpeg';
import mexican from '../../assets/resources/mexican.png';
import chinese from '../../assets/resources/chinese.jpg';
import mediterranean from '../../assets/resources/spanish.jpg';
import { getAllCuisines } from './../../services/userServices';
import { Button } from '../ui/button';
import { toast } from 'react-toastify';

const Cuisines = () => {
  const [showAll, setShowAll] = useState(false);
  const [cuisines, setCuisines] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const images = [indian, italian, mexican, chinese, mediterranean]

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const getCuisines = async () => {
      const result = await getAllCuisines();
      setCuisines(result);
    }
    getCuisines();
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearch = async () => {
    if (searchText) {
      navigate(`/customer/search/${searchText}`)
    }
    else {
      toast.error("No search text...")
    }
  }

  return (
    <div className="px-6 py-4 bg-orange-600">
      {/* button for searching food  */}

      <div className="relative text-center text-white rounded-lg mb-10">
        <h1 className="text-5xl font-bold mb-10 text-white">Order delicious food online. <br /> Discover top restaurants. Taste the best!</h1>
        <input
          type="text"
          onChange={handleSearchTextChange}
          placeholder="Search for your favourite food..."
          className="w-full h-14 rounded-4xl max-w-md px-4 py-2 shadow text-black bg-amber-50"
        />
        <Button onClick={handleSearch} className="h-14 rounded-4xl px-4 py-2 shadow bg-amber-50 ml-2 text-orange-600 hover:bg-orange-100">Search</Button>
      </div>


      <h2 className="text-2xl font-semibold mb-6 text-center text-white">Explore Cuisines</h2>

      {/* <div className="grid grid-cols-9 gap-3 "> */}
      <div className="flex justify-center items-center gap-10 ">
        {cuisines.map((item, index) => (
          <div key={index} className="text-center">
            <Link to={`/customer/cuisine/${item.id}`}>
              <img
                src={images[index]}
                alt={item.name}
                className="rounded-full h-28 w-28 object-cover mx-auto mb-2"
              />
              <p className="text-white">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={toggleShow}
          className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
        >
          {showAll ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Cuisines;
