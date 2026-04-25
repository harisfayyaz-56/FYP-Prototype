import { Building2, MapPin, Users, DollarSign, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router';

export default function HostelOwnerHostels() {
  const hostels = [
    {
      id: 1,
      name: 'Green Valley Hostel',
      location: 'Mall Road, Lahore, Punjab',
      floors: 5,
      totalRooms: 60,
      occupiedRooms: 45,
      pricePerStudent: '₹8,000',
      amenities: ['WiFi', 'Gym', 'Laundry', 'Mess'],
      status: 'Verified',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Hostels</h1>
          <p className="text-gray-600">Manage your hostel listings</p>
        </div>
        <Link
          to="/hostel-owner/add-hostel"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
        >
          + Add New Hostel
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {hostels.map((hostel) => (
          <div key={hostel.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{hostel.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hostel.location}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {hostel.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Floors</p>
                <p className="text-2xl font-bold text-blue-700">{hostel.floors}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Rooms</p>
                <p className="text-2xl font-bold text-purple-700">{hostel.totalRooms}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600">Occupancy</p>
                </div>
                <p className="text-2xl font-bold text-green-700">
                  {hostel.occupiedRooms}/{hostel.totalRooms}
                </p>
                <div className="w-full bg-green-200 h-2 rounded-full mt-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${(hostel.occupiedRooms / hostel.totalRooms) * 100}%` }}
                  />
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600">Price/Student</p>
                </div>
                <p className="text-2xl font-bold text-indigo-700">{hostel.pricePerStudent}</p>
                <p className="text-xs text-gray-500 mt-1">per month</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Amenities</p>
              <div className="flex flex-wrap gap-2">
                {hostel.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hostels.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">No hostels yet</h3>
          <p className="text-gray-600 mb-6">Get started by adding your first hostel listing</p>
          <Link
            to="/hostel-owner/add-hostel"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
          >
            Add Your First Hostel
          </Link>
        </div>
      )}
    </div>
  );
}
