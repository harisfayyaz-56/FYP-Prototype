import { Users, Building2, AlertCircle, DollarSign, TrendingUp, UserCheck } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { label: 'Hostel Owners', value: '56', icon: Building2, color: 'bg-purple-500', change: '+8%' },
    { label: 'Active Hostels', value: '89', icon: Building2, color: 'bg-green-500', change: '+5%' },
    { label: 'Revenue (MTD)', value: '₹89,000', icon: DollarSign, color: 'bg-indigo-500', change: '+18%' },
    { label: 'Pending Reports', value: '7', icon: AlertCircle, color: 'bg-red-500', change: '-2' },
    { label: 'Matches Made', value: '456', icon: UserCheck, color: 'bg-teal-500', change: '+24%' },
  ];

  const recentUsers = [
    { name: 'Ali Hassan', email: 'ali@email.com', role: 'Student', status: 'Active', joinedAt: '2 hours ago' },
    { name: 'Fatima Khan', email: 'fatima@email.com', role: 'Student', status: 'Active', joinedAt: '5 hours ago' },
    { name: 'Green Valley Hostel', email: 'contact@greenvalley.pk', role: 'Hostel Owner', status: 'Pending', joinedAt: '1 day ago' },
    { name: 'Hassan Raza', email: 'hassan@email.com', role: 'Student', status: 'Active', joinedAt: '2 days ago' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of platform activity and metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="flex items-center gap-1 text-sm text-green-600 font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Recent User Registrations</h2>
          <div className="space-y-4">
            {recentUsers.map((user, idx) => (
              <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold">{user.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {user.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{user.joinedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              Review Pending Reports
            </button>
            <button className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
              Verify New Hostels
            </button>
            <button className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
              Export User Data
            </button>
            <button className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
              View Revenue Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
