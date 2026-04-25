import { MapPin, DollarSign, Users, Wifi, Dumbbell, Building2, Check } from 'lucide-react';
import { useState } from 'react';

export default function StudentHostels() {
  const [selectedHostel, setSelectedHostel] = useState<number | null>(null);

  const hostels = [
    {
      id: 1,
      name: 'Green Valley Hostel',
      location: 'Mall Road, Lahore',
      price: 8000,
      available: 15,
      total: 60,
      amenities: ['WiFi', 'Gym', 'Laundry', 'Mess', 'Security'],
      distance: '2.5 km from campus',
      rating: 4.5,
      matchingStudents: 45,
    },
    {
      id: 2,
      name: 'Students Paradise',
      location: 'Defence, Lahore',
      price: 7500,
      available: 8,
      total: 40,
      amenities: ['WiFi', 'Mess', 'AC Rooms', 'Parking'],
      distance: '3.2 km from campus',
      rating: 4.3,
      matchingStudents: 32,
    },
    {
      id: 3,
      name: "Scholar's Lodge",
      location: 'DHA, Lahore',
      price: 9000,
      available: 25,
      total: 80,
      amenities: ['WiFi', 'Gym', 'Study Room', 'Security', 'Hot Water'],
      distance: '1.8 km from campus',
      rating: 4.7,
      matchingStudents: 55,
    },
  ];

  const amenityIcons: Record<string, any> = {
    'WiFi': Wifi,
    'Gym': Dumbbell,
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Hostels 🏠</h1>
        <p className="text-lg text-gray-600">Find and select your perfect hostel home</p>
      </div>

      <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by location..."
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Price Ranges</option>
            <option>Under ₹7,000</option>
            <option>₹7,000 - ₹9,000</option>
            <option>Above ₹9,000</option>
          </select>
          <select className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Amenities</option>
            <option>WiFi</option>
            <option>Gym</option>
            <option>Mess</option>
          </select>
          <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-600/30 font-medium transition-shadow">
            Apply Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {hostels.map((hostel) => (
          <div
            key={hostel.id}
            className={`bg-white rounded-xl shadow-sm border-2 transition-all ${
              selectedHostel === hostel.id
                ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                : 'border-gray-100 hover:border-emerald-200 hover:shadow-md'
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{hostel.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{hostel.location}</span>
                    </div>
                    <p className="text-xs text-gray-500">{hostel.distance}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹{hostel.price.toLocaleString()}</div>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <p className="text-xs text-gray-600">Available</p>
                  </div>
                  <p className="text-lg font-bold text-emerald-700">
                    {hostel.available}/{hostel.total}
                  </p>
                </div>
                <div className="bg-teal-50 border border-teal-200 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Matching Students</p>
                  <p className="text-lg font-bold text-teal-700">{hostel.matchingStudents}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {hostel.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity];
                    return (
                      <span
                        key={amenity}
                        className="flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium"
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        {amenity}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedHostel(hostel.id)}
                  className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                    selectedHostel === hostel.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-600/30'
                  }`}
                >
                  {selectedHostel === hostel.id ? (
                    <>
                      <Check className="w-5 h-5 inline-block mr-2" />
                      Selected
                    </>
                  ) : (
                    'Select Hostel'
                  )}
                </button>
                <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedHostel && (
        <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-emerald-900 mb-1">✓ Hostel Selected!</h3>
              <p className="text-sm text-emerald-800">
                You can now view compatibility matches with students in{' '}
                {hostels.find((h) => h.id === selectedHostel)?.name}
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-600/30 font-medium transition-shadow">
              View Matches
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
