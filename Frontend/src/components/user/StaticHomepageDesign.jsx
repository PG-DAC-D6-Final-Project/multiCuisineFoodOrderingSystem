import React from 'react';
import card1 from '../../assets/resources/card1.png';
import card2 from '../../assets/resources/card2.jpg';
import card3 from '../../assets/resources/card3.jpg';

const StaticHomepageDesign = () => {
  return (
    <div className="bg-orange-600 h-[25rem] flex items-center justify-center gap-4 px-6">
      <img src={card1} alt="Food 1" className="h-[19rem] w-[24rem] rounded-md" />
      <img src={card2} alt="Food 2" className="h-[19rem] w-[24rem] rounded-md" />
      <img src={card3} alt="Food 3" className="h-[19rem] w-[24rem] rounded-md" />
    </div>
  );
};

export default StaticHomepageDesign;
