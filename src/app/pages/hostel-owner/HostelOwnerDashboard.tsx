import { Users, DollarSign, Building2, TrendingUp, AlertCircle, CheckCircle2, Home, Plus } from 'lucide-react';
import { Link } from 'react-router';

export default function HostelOwnerDashboard() {
  const stats = [
    { label: 'Total Students', value: '45', icon: Users, color: 'from-emerald-500 to-teal-600', change: '+5 this month', trend: 'up' },
    { label: 'Revenue (MTD)', value: '₹45,000', icon: DollarSign, color: 'from-orange-500 to-amber-600', change: '+12%', trend: 'up' },
    { label: 'My Hostels', value: '1', icon: Building2, color: 'from-blue-500 to-cyan-600', change: 'Active', trend: 'neutral' },
    { label: 'Occupancy Rate', value: '75%', icon: TrendingUp, color: 'from-purple-500 to-pink-600', change: '45/60 rooms', trend: 'up' },
  ];

  const recentStudents = [
    { name: 'Ali Hassan', email: 'ali@email.com', room: '201-A', joinedAt: '2 days ago', status: 'Active', avatar: 'A' },
    { name: 'Fatima Khan', email: 'fatima@email.com', room: '305-B', joinedAt: '1 week ago', status: 'Active', avatar: 'F' },
    { name: 'Hira Ahmed', email: 'hira@email.com', room: '102-C', joinedAt: '2 weeks ago', status: 'Active', avatar: 'H' },
    { name: 'Hassan Raza', email: 'hassan@email.com', room: '403-A', joinedAt: '3 weeks ago', status: 'Pending', avatar: 'H' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Farooq! 👋</h1>
        <p className="text-lg text-gray-600">Here's what's happening with your hostel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  stat.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Students */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-orange-600" />
              Recent Student Registrations
            </h2>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold">View All →</a>
          </div>

          <div className="divide-y divide-gray-200">
            {recentStudents.map((student, idx) => (
              <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-orange-200">
                      <span className="font-bold text-orange-700">{student.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        student.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {student.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Room {student.room}</p>
                    <p className="text-xs text-gray-500">{student.joinedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-emerald-600" />
              Revenue
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50 transition-colors">
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-emerald-700">₹45,000</p>
              <p className="text-xs text-gray-500 mt-1">45 students × ₹1,000</p>
            </div>

            <div className="p-4 hover:bg-gray-50 transition-colors">
              <p className="text-sm text-gray-600 mb-1">Last Month</p>
              <p className="text-2xl font-bold text-blue-700">₹40,000</p>
              <p className="text-xs text-gray-500 mt-1">40 students × ₹1,000</p>
            </div>

            <div className="p-4 hover:bg-gray-50 transition-colors">
              <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-purple-700">₹3,20,000</p>
              <p className="text-xs text-gray-500 mt-1">Lifetime earnings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-xl p-6 flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-orange-900 mb-1">Platform Fee Information</h3>
          <p className="text-sm text-orange-800 mb-3">
            LiviSync charges ₹1,000 per student registered through the platform. This fee helps us maintain and improve our services.
          </p>
          <p className="text-sm font-semibold text-orange-900">Your current monthly fee: ₹45,000 for 45 registered students</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/hostel-owner/add-hostel" className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Add New Hostel</h3>
          <p className="text-sm text-gray-600">List another property</p>
        </Link>

        <Link to="/hostel-owner/profile" className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Home className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Update Profile</h3>
          <p className="text-sm text-gray-600">Manage your information</p>
        </Link>
      </div>
    </div>
  );
}
