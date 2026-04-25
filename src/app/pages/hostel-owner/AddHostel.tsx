import { Building2, MapPin, DollarSign, Save } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function AddHostel() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    floors: 1,
    roomsPerFloor: 10,
    studentsPerRoom: 2,
    pricePerStudent: '',
    amenities: [] as string[],
    description: '',
  });

  const amenitiesOptions = [
    'WiFi',
    'Gym',
    'Laundry',
    'Mess/Cafeteria',
    'Parking',
    'Security',
    'AC Rooms',
    'Hot Water',
    'Study Room',
    'Recreation Room',
  ];

  const toggleAmenity = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Hostel added successfully! Awaiting admin verification.');
    navigate('/hostel-owner/hostels');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Add New Hostel</h1>
        <p className="text-gray-600">Fill in the details to list your hostel on LiviSync</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-purple-600" />
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Hostel Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Green Valley Hostel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your hostel and what makes it special..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-purple-600" />
            Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Street Address *</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="e.g., 123 Mall Road"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">City *</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g., Lahore"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">State *</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                placeholder="e.g., Punjab"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">ZIP Code *</label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                placeholder="e.g., 560001"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="text-xl font-bold mb-6">Capacity & Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Number of Floors *</label>
              <input
                type="number"
                min="1"
                value={formData.floors}
                onChange={(e) => setFormData({ ...formData, floors: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Rooms per Floor *</label>
              <input
                type="number"
                min="1"
                value={formData.roomsPerFloor}
                onChange={(e) => setFormData({ ...formData, roomsPerFloor: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Students per Room *</label>
              <input
                type="number"
                min="1"
                value={formData.studentsPerRoom}
                onChange={(e) => setFormData({ ...formData, studentsPerRoom: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Price per Student (₹/month) *
              </label>
              <input
                type="number"
                min="0"
                value={formData.pricePerStudent}
                onChange={(e) => setFormData({ ...formData, pricePerStudent: e.target.value })}
                placeholder="e.g., 8000"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="md:col-span-2 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Total Capacity:</strong> {formData.floors * formData.roomsPerFloor * formData.studentsPerRoom} students
                ({formData.floors} floors × {formData.roomsPerFloor} rooms × {formData.studentsPerRoom} students)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="text-xl font-bold mb-6">Amenities</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenitiesOptions.map((amenity) => (
              <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                  className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                />
                <span className="text-sm">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => navigate('/hostel-owner/hostels')}
            className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Submit for Verification
          </button>
        </div>
      </form>
    </div>
  );
}
