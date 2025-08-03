import React, { useState } from 'react';

const DeliveryManagement = () => {
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [driverFilter, setDriverFilter] = useState('All Drivers');
  const [areaFilter, setAreaFilter] = useState('All Areas');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800">Delivery Management</h2>
      <p className="text-sm text-gray-500 mb-4">Track and manage food deliveries in real-time</p>

      <div className="flex space-x-6 mb-4">
        <div className="text-center">
          <div className="text-sm text-gray-600">Active Drivers</div>
          <div className="text-green-600 font-bold text-lg">2</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Pending Deliveries</div>
          <div className="text-orange-500 font-bold text-lg">1</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">In Progress</div>
          <div className="text-blue-600 font-bold text-lg">2</div>
        </div>
      </div>

    <div className="flex items-center justify-center gap-3 w-full">
      <input
        type="text"
        placeholder="Search deliveries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className=" p-2 border border-gray-300 rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option>All Status</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select
          value={driverFilter}
          onChange={(e) => setDriverFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option>All Drivers</option>
          <option>Driver A</option>
          <option>Driver B</option>
        </select>

        <select
          value={areaFilter}
          onChange={(e) => setAreaFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option>All Areas</option>
          <option>Downtown</option>
          <option>Uptown</option>
        </select>
      </div>
      </div>
    </div>
  );
};

export default DeliveryManagement;
