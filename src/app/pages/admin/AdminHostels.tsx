import { Search, MapPin, Users, DollarSign, CheckCircle, XCircle, Eye } from 'lucide-react';
import { useState } from 'react';

export default function AdminHostels() {
  const [searchTerm, setSearchTerm] = useState('');

  const hostels = [
    { id: 1, name: 'Green Valley Hostel', owner: 'Mr. Muhammad Farooq', location: 'Lahore, Punjab', students: 45, capacity: 60, price: '₹8,000/month', status: 'Verified', revenue: '₹45,000' },
    { id: 2, name: 'Students Paradise', owner: 'Ms. Aisha Malik', location: 'Karachi, Sindh', students: 32, capacity: 40, price: '₹7,500/month', status: 'Verified', revenue: '₹32,000' },
    { id: 3, name: "Scholar's Lodge", owner: 'Mr. Hassan Raza', location: 'Islamabad, Federal', students: 28, capacity: 50, price: '₹10,000/month', status: 'Pending', revenue: '₹0' },
    { id: 4, name: 'Elite Residence', owner: 'Ms. Hira Ahmed', location: 'Peshawar, KPK', students: 55, capacity: 80, price: '₹9,000/month', status: 'Verified', revenue: '₹55,000' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hostel Management</h1>
        <p className="text-gray-600">Manage all registered hostels and verify new listings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 text-sm mb-1">Total Hostels</p>
          <p className="text-3xl font-bold">89</p>
          <p className="text-sm text-green-600 mt-2">+5 this month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 text-sm mb-1">Verified</p>
          <p className="text-3xl font-bold">76</p>
          <p className="text-sm text-gray-500 mt-2">85% approval rate</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 text-sm mb-1">Pending</p>
          <p className="text-3xl font-bold">13</p>
          <p className="text-sm text-yellow-600 mt-2">Awaiting review</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 text-sm mb-1">Total Students</p>
          <p className="text-3xl font-bold">1,234</p>
          <p className="text-sm text-blue-600 mt-2">Across all hostels</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search hostels by name, owner, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hostel</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Owner</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Occupancy</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Revenue</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {hostels.map((hostel) => (
              <tr key={hostel.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">{hostel.name[0]}</span>
                    </div>
                    <p className="font-medium">{hostel.name}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{hostel.owner}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {hostel.location}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{hostel.students}/{hostel.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                    <div
                      className="bg-indigo-600 h-1.5 rounded-full"
                      style={{ width: `${(hostel.students / hostel.capacity) * 100}%` }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    {hostel.price}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{hostel.revenue}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    hostel.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {hostel.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Details">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    {hostel.status === 'Pending' && (
                      <>
                        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Approve">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Reject">
                          <XCircle className="w-4 h-4 text-red-600" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
