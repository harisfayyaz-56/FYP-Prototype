import { Users, Filter, UserPlus, MessageCircle, Sparkles, Heart, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function StudentMatches() {
  const [filterLevel, setFilterLevel] = useState<'all' | '80+'>('all');
  const [hostelFilter, setHostelFilter] = useState('all');

  const matches = [
    {
      id: 1,
      name: 'Fatima Khan',
      compatibility: 94,
      hostel: 'Green Valley Hostel',
      matchedPreferences: ['Non-smoker', 'Early riser', 'Clean', 'Quiet', 'No pets'],
      bio: 'Engineering student, love to study in silence. Looking for like-minded roommate.',
      college: 'FAST-NUCES Lahore',
      yearOfStudy: '3rd Year',
      status: 'not-friends',
    },
    {
      id: 2,
      name: 'Hira Ahmed',
      compatibility: 89,
      hostel: 'Green Valley Hostel',
      matchedPreferences: ['Vegetarian', 'No guests', 'Budget-conscious', 'Clean'],
      bio: 'Medical student seeking quiet and peaceful environment.',
      college: 'Aga Khan University Karachi',
      yearOfStudy: '2nd Year',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Ava Thompson',
      compatibility: 87,
      hostel: 'Students Paradise',
      matchedPreferences: ['Study-focused', 'No pets', 'Early sleeper'],
      bio: 'MBA student, very organized and tidy.',
      college: 'IBA Karachi',
      yearOfStudy: '1st Year',
      status: 'friends',
    },
    {
      id: 4,
      name: 'Hassan Raza',
      compatibility: 82,
      hostel: 'Green Valley Hostel',
      matchedPreferences: ['Non-smoker', 'Moderate social', 'Shares items'],
      bio: 'Computer Science major, friendly and respectful.',
      college: 'FAST-NUCES Lahore',
      yearOfStudy: '3rd Year',
      status: 'not-friends',
    },
    {
      id: 5,
      name: 'Zara Noor',
      compatibility: 78,
      hostel: "Scholar's Lodge",
      matchedPreferences: ['Clean', 'Quiet hours', 'No smoking'],
      bio: 'Architecture student with a passion for design.',
      college: 'NED University Karachi',
      yearOfStudy: '4th Year',
      status: 'not-friends',
    },
  ];

  const filteredMatches = matches.filter((match) => {
    if (filterLevel === '80+' && match.compatibility < 80) return false;
    if (hostelFilter !== 'all' && match.hostel !== hostelFilter) return false;
    return true;
  });

  const getButtonText = (status: string) => {
    switch (status) {
      case 'friends':
        return 'Message';
      case 'pending':
        return 'Request Sent';
      default:
        return 'Add Friend';
    }
  };

  const getButtonStyle = (status: string) => {
    switch (status) {
      case 'friends':
        return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'pending':
        return 'bg-gray-400 text-white cursor-not-allowed';
      default:
        return 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30 text-white';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Your Perfect Match 🎯</h1>
        <p className="text-lg text-gray-600">Discover students with compatible lifestyles and preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 flex gap-4">
            <button
              onClick={() => setFilterLevel('all')}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                filterLevel === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Users className="w-5 h-5 inline-block mr-2" />
              All Matches ({matches.length})
            </button>
            <button
              onClick={() => setFilterLevel('80+')}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                filterLevel === '80+'
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-600/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Sparkles className="w-5 h-5 inline-block mr-2" />
              High Matches (80%+)
            </button>
          </div>

          <div className="flex gap-3">
            <select
              value={hostelFilter}
              onChange={(e) => setHostelFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Hostels</option>
              <option value="Green Valley Hostel">Green Valley Hostel</option>
              <option value="Green Valley">Green Valley</option>
              <option value="Campus Residency">Campus Residency</option>
            </select>
            <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredMatches.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">{match.name[0]}</span>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{match.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {match.college} • {match.yearOfStudy}
                    </p>
                    <p className="text-sm text-gray-500">{match.hostel}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{match.compatibility}%</div>
                      <div className="flex flex-col">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Compatibility</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">{match.bio}</p>

                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-600 mb-2">Matched Preferences:</p>
                  <div className="flex flex-wrap gap-2">
                    {match.matchedPreferences.map((pref) => (
                      <span
                        key={pref}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium"
                      >
                        ✓ {pref}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    disabled={match.status === 'pending'}
                    className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 ${getButtonStyle(
                      match.status
                    )}`}
                  >
                    {match.status === 'friends' ? (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        {getButtonText(match.status)}
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        {getButtonText(match.status)}
                      </>
                    )}
                  </button>
                  <button className="px-6 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 font-medium transition-colors">
                    View Full Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">No matches found</h3>
          <p className="text-gray-600">Try adjusting your filters or updating your preferences</p>
        </div>
      )}
    </div>
  );
}
