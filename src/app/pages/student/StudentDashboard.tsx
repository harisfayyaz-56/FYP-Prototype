import { Users, Building2, UserCheck, MessageCircle, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export default function StudentDashboard() {
  const stats = [
    { label: 'Compatibility Matches', value: '127', icon: Users, color: 'bg-blue-500', link: '/student/matches' },
    { label: 'High Matches (80%+)', value: '23', icon: Sparkles, color: 'bg-purple-500', link: '/student/matches' },
    { label: 'Friends', value: '12', icon: UserCheck, color: 'bg-green-500', link: '/student/friends' },
    { label: 'Unread Messages', value: '3', icon: MessageCircle, color: 'bg-red-500', link: '/student/chat' },
  ];

  const topMatches = [
    { name: 'Fatima Khan', compatibility: 94, hostel: 'Green Valley Hostel', preferences: ['Non-smoker', 'Early riser', 'Quiet'], image: 'P' },
    { name: 'Hira Ahmed', compatibility: 89, hostel: 'Green Valley Hostel', preferences: ['Clean', 'No guests', 'Vegetarian'], image: 'N' },
    { name: 'Ava Thompson', compatibility: 87, hostel: 'Students Paradise', preferences: ['Study-focused', 'No pets', 'Budget-conscious'], image: 'S' },
  ];

  const recentActivity = [
    { text: 'Fatima Khan accepted your friend request', time: '2 hours ago', type: 'friend' },
    { text: 'New message from Hira Ahmed', time: '5 hours ago', type: 'message' },
    { text: 'Your compatibility score with 5 new students', time: '1 day ago', type: 'match' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Ali!</h1>
        <p className="text-gray-600">Find your perfect roommate match</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              to={stat.link}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              Top Compatibility Matches
            </h2>
            <Link to="/student/matches" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {topMatches.map((match, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{match.image}</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{match.name}</p>
                    <p className="text-sm text-gray-600 mb-2">{match.hostel}</p>
                    <div className="flex flex-wrap gap-2">
                      {match.preferences.slice(0, 2).map((pref) => (
                        <span key={pref} className="px-2 py-1 bg-white text-xs rounded-full text-gray-700">
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-indigo-600">{match.compatibility}%</div>
                  <p className="text-xs text-gray-500">Match</p>
                  <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="pb-4 border-b border-gray-100 last:border-0">
                <p className="text-sm text-gray-900 mb-1">{activity.text}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              to="/student/profile"
              className="block w-full py-3 text-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
            >
              Complete Your Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-purple-900 mb-2">💡 Pro Tip: Increase Your Matches</h3>
            <p className="text-sm text-purple-800 mb-4">
              Complete your profile and set detailed preferences to get more accurate compatibility scores. Students with complete profiles get 3x more friend requests!
            </p>
            <Link
              to="/student/profile"
              className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium"
            >
              Update Preferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
