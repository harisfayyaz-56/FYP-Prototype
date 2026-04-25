import { Link } from 'react-router';
import { Home, Users, Building2, MessageCircle, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">LiviSync</span>
          </div>
          <div className="flex gap-4">
            <Link to="/login" className="px-6 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
              Login
            </Link>
            <Link to="/register" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect <span className="text-indigo-600">Roommate</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            LiviSync uses smart compatibility matching to connect students with roommates who share their lifestyle preferences. No more awkward living situations.
          </p>
          <Link to="/register" className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 font-semibold">
            Start Matching Today
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <Users className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Smart Compatibility</h3>
            <p className="text-gray-600">
              Our algorithm matches you with roommates based on lifestyle preferences, budget, cleanliness, and more.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <Building2 className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Browse Hostels</h3>
            <p className="text-gray-600">
              Explore verified hostels with detailed information about location, pricing, and available rooms.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <MessageCircle className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Chat & Connect</h3>
            <p className="text-gray-600">
              Message potential roommates in real-time before making your decision. Build connections first.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-indigo-600" />
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h4 className="font-bold text-lg mb-2">Create Your Profile</h4>
              <p className="text-gray-600">Set your preferences about cleanliness, budget, guests, smoking, pets, and more.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h4 className="font-bold text-lg mb-2">View Compatibility Scores</h4>
              <p className="text-gray-600">See your match percentage with other students, sorted from highest to lowest.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h4 className="font-bold text-lg mb-2">Connect & Move In</h4>
              <p className="text-gray-600">Chat with matches, send friend requests, and find your perfect living situation.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Are you a Hostel Owner?</h2>
          <p className="text-gray-600 mb-6">List your property and connect with students looking for accommodation.</p>
          <Link to="/register" className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
            List Your Hostel
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2026 LiviSync. Making roommate matching simple.</p>
        </div>
      </footer>
    </div>
  );
}
