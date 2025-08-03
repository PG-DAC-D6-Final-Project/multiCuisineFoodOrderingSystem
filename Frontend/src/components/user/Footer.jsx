import React from 'react';

const Footer = () => {
  return (
    <footer className="h-[50vh] bg-gray-200 text-gray-700 px-6 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About ZomatoLite</h3>
          <p className="text-sm">
            ZomatoLite helps you discover the best restaurants in town.
            Order your favorite meals with ease and enjoy quick doorstep delivery.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Browse Restaurants</a></li>
            <li><a href="#" className="hover:text-orange-500">Login / Signup</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Address: 123 Food Street, Mumbai, India</p>
          {/* <p className="text-sm">Email: </p> */}
          <p className="text-sm">Phone: +91 1234567890</p>

          <div className="mt-3 text-sm">
            <p>Follow us on:</p>
            <p>Facebook | Instagram | Twitter | LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-600">
        © 2025 ZomatoLite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
