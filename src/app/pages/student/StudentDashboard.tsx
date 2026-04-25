import { Users, Building2, UserCheck, MessageCircle, TrendingUp, Sparkles, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router';

export default function StudentDashboard() {
  const stats = [
    { label: 'Compatibility Matches', value: '127', icon: Users, color: 'from-emerald-500 to-teal-600', link: '/student/matches' },
    { label: 'High Matches (80%+)', value: '23', icon: Sparkles, color: 'from-orange-500 to-amber-600', link: '/student/matches' },
    { label: 'Friends', value: '12', icon: UserCheck, color: 'from-blue-500 to-cyan-600', link: '/student/friends' },
    { label: 'Unread Messages', value: '3', icon: MessageCircle, color: 'from-purple-500 to-pink-600', link: '/student/chat' },
  ];

  const topMatches = [
    { name: 'Fatima Khan', compatibility: 94, hostel: 'Green Valley Hostel', preferences: ['Non-smoker', 'Early riser', 'Quiet'], image: 'F', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { name: 'Hira Ahmed', compatibility: 89, hostel: 'Green Valley Hostel', preferences: ['Clean', 'No guests', 'Vegetarian'], image: 'H', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { name: 'Ava Thompson', compatibility: 87, hostel: 'Students Paradise', preferences: ['Study-focused', 'No pets', 'Budget-conscious'], image: 'A', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  ];

  const recentActivity = [
    { text: 'Fatima Khan accepted your friend request', time: '2 hours ago', type: 'friend', icon: UserCheck },
    { text: 'New message from Hira Ahmed', time: '5 hours ago', type: 'message', icon: MessageCircle },
    { text: 'Your compatibility score with 5 new students', time: '1 day ago', type: 'match', icon: Sparkles },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Ali! 👋</h1>
        <p className="text-lg text-gray-600">Here's your roommate matching summary</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const [colorStart, colorEnd] = stat.color.split(' to ');
          return (
            <Link
              key={stat.label}
              to={stat.link}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Matches Section */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500" />
              Top Compatibility Matches
            </h2>
            <Link to="/student/matches" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold transition-colors">
              View All →
            </Link>
          </div>

          <div className="divide-y divide-gray-200">
            {topMatches.map((match, idx) => (
              <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-emerald-300">
                      <span className="text-lg font-bold text-emerald-700">{match.image}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                      ♥
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-gray-900">{match.name}</p>
                      <div className="flex items-center gap-1">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full w-${match.compatibility} bg-gradient-to-r from-emerald-500 to-teal-600`} style={{ width: `${match.compatibility}%` }}></div>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">{match.compatibility}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{match.hostel}</p>
                    <div className="flex flex-wrap gap-2">
                      {match.preferences.slice(0, 2).map((pref) => (
                        <span key={pref} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Sidebar */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-500" />
              Recent Activity
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity, idx) => {
              const ActivityIcon = activity.icon;
              const colorMap: Record<string, string> = {
                friend: 'bg-blue-100 text-blue-600',
                message: 'bg-purple-100 text-purple-600',
                match: 'bg-orange-100 text-orange-600',
              };

              return (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[activity.type]}`}>
                      <ActivityIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 font-medium">{activity.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/student/hostels" className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Browse Hostels</h3>
          <p className="text-sm text-gray-600">Explore all available accommodations</p>
        </Link>

        <Link to="/student/profile" className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Complete Profile</h3>
          <p className="text-sm text-gray-600">Improve your compatibility scores</p>
        </Link>
      </div>
    </div>
  );
}
