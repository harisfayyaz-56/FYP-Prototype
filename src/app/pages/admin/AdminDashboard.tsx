import { Users, Building2, AlertCircle, DollarSign, TrendingUp, UserCheck, CheckCircle2, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Students', value: '1,234', icon: Users, color: 'from-emerald-500 to-teal-600', change: '+12%', trend: 'up' },
    { label: 'Hostel Owners', value: '56', icon: Building2, color: 'from-orange-500 to-amber-600', change: '+8%', trend: 'up' },
    { label: 'Active Hostels', value: '89', icon: Building2, color: 'from-blue-500 to-cyan-600', change: '+5%', trend: 'up' },
    { label: 'Revenue (MTD)', value: '₹89,000', icon: DollarSign, color: 'from-purple-500 to-pink-600', change: '+18%', trend: 'up' },
    { label: 'Pending Reports', value: '7', icon: AlertCircle, color: 'from-red-500 to-rose-600', change: '-2', trend: 'down' },
    { label: 'Matches Made', value: '456', icon: UserCheck, color: 'from-indigo-500 to-purple-600', change: '+24%', trend: 'up' },
  ];

  const recentUsers = [
    { name: 'Ali Hassan', email: 'ali@email.com', role: 'Student', status: 'Active', joinedAt: '2 hours ago', avatar: 'A' },
    { name: 'Fatima Khan', email: 'fatima@email.com', role: 'Student', status: 'Active', joinedAt: '5 hours ago', avatar: 'F' },
    { name: 'Green Valley Hostel', email: 'contact@greenvalley.pk', role: 'Hostel Owner', status: 'Pending', joinedAt: '1 day ago', avatar: 'G' },
    { name: 'Hassan Raza', email: 'hassan@email.com', role: 'Student', status: 'Active', joinedAt: '2 days ago', avatar: 'H' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-lg text-gray-600">Complete overview of platform performance and metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className={`w-4 h-4 ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`} />
                  <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Users */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              Recent User Registrations
            </h2>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold">View All →</a>
          </div>

          <div className="divide-y divide-gray-200">
            {recentUsers.map((user, idx) => (
              <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-emerald-200">
                      <span className="font-bold text-emerald-700">{user.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        user.status === 'Active' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {user.status}
                      </span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">{user.role}</span>
                    </div>
                    <p className="text-xs text-gray-500">{user.joinedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              Quick Actions
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            <button className="w-full py-4 px-6 hover:bg-gray-50 text-left transition-colors group">
              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600">Review Reports</h4>
              <p className="text-sm text-gray-600">Check 7 pending reports</p>
            </button>

            <button className="w-full py-4 px-6 hover:bg-gray-50 text-left transition-colors group">
              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600">Verify Hostels</h4>
              <p className="text-sm text-gray-600">3 pending verification</p>
            </button>

            <button className="w-full py-4 px-6 hover:bg-gray-50 text-left transition-colors group">
              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600">Revenue Report</h4>
              <p className="text-sm text-gray-600">View detailed breakdown</p>
            </button>

            <button className="w-full py-4 px-6 hover:bg-gray-50 text-left transition-colors group">
              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600">Export Data</h4>
              <p className="text-sm text-gray-600">Download user/hostel data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
