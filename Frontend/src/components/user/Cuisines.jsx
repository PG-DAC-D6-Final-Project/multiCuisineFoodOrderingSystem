import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import indian from '../../assets/resources/indian.png';
import italian from '../../assets/resources/italian.jpeg';
import chinese from '../../assets/resources/chinese.jpg';
import mexican from '../../assets/resources/mexican.png';
import southIndian from '../../assets/resources/southIndian.jpg';
import thai from '../../assets/resources/thai.jpg';
import american from '../../assets/resources/american.jpg';
import japanese from '../../assets/resources/japanese.jpg';
import korean from '../../assets/resources/korean.jpg';
import turkish from '../../assets/resources/turkish.jpg';
import spanish from '../../assets/resources/spanish.jpg';
import french from '../../assets/resources/french.jpg';
import greek from '../../assets/resources/greek.jpg';
import vietnamese from '../../assets/resources/vietnamese.jpg';

const cuisines = [
  { name: 'Indian', img: indian },
  { name: 'Chinese', img: chinese },
  { name: 'Italian', img: italian },
  { name: 'Mexican', img: mexican },
  { name: 'South Indian', img: southIndian },
  { name: 'Thai', img: thai },
  { name: 'American', img: american },
  { name: 'Japanese', img: japanese },
  { name: 'Korean', img: korean },
  { name: 'Turkish', img: turkish },
  { name: 'Spanish', img: spanish },
  { name: 'French', img: french },
  { name: 'Greek', img: greek },
  { name: 'Vietnamese', img: vietnamese },
];

const Cuisines = () => {
  const [showAll, setShowAll] = useState(false);

  let visibleCuisines = cuisines;
  if (!showAll) {
    visibleCuisines = cuisines.slice(0, 9);
  }

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-6 py-4 bg-orange-600">
      {/* button for searching food  */}

      <div className="relative text-center text-white rounded-lg mb-10">
        <h1 className="text-5xl font-bold mb-10 text-white">Order delicious food online. <br /> Discover top restaurants. Taste the best!</h1>
        <input
          type="text"
          placeholder="Search for food or restaurants..."
          className="w-full h-14 rounded-4xl max-w-md px-4 py-2 shadow text-black bg-amber-50"
        />
      </div>

      
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">Explore Cuisines</h2>

      <div className="grid grid-cols-9 gap-3">
        {visibleCuisines.map((item, index) => (
          <div key={index} className="text-center">
            <Link to={`/restaurants/${item.name.toLowerCase()}`}>
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full h-20 w-20 object-cover mx-auto mb-2"
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
