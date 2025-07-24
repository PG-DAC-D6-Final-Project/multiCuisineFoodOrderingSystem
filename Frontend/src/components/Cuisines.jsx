import React from 'react';

import indian from '../assets/resources/indian.png'
import italian from '../assets/resources/italian.png'
import chinese from '../assets/resources/chinese.png'
import mexican from '../assets/resources/mexican.png'

const cuisines = [
  { name: 'Indian', img: indian },
  { name: 'Chinese', img: chinese },
  { name: 'Italian', img: italian },
  { name: 'Mexican', img: mexican },
];

const Cuisines = () => {
  return (
    <div className="h-[60vh] px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Cuisines</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cuisines.map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.img} alt={item.name} className="rounded-lg mb-2 h-32 w-full object-cover" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
