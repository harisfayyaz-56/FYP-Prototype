import { Users, DollarSign, Building2, TrendingUp, AlertCircle } from 'lucide-react';

export default function HostelOwnerDashboard() {
  const stats = [
    { label: 'Total Students', value: '45', icon: Users, color: 'bg-blue-500', change: '+5 this month' },
    { label: 'Revenue (MTD)', value: '₹45,000', icon: DollarSign, color: 'bg-green-500', change: '+12%' },
    { label: 'My Hostels', value: '1', icon: Building2, color: 'bg-purple-500', change: 'Active' },
    { label: 'Occupancy Rate', value: '75%', icon: TrendingUp, color: 'bg-indigo-500', change: '45/60 rooms' },
  ];

  const recentStudents = [
    { name: 'Ali Hassan', email: 'ali@email.com', room: '201-A', joinedAt: '2 days ago', status: 'Active' },
    { name: 'Fatima Khan', email: 'fatima@email.com', room: '305-B', joinedAt: '1 week ago', status: 'Active' },
    { name: 'Hira Ahmed', email: 'hira@email.com', room: '102-C', joinedAt: '2 weeks ago', status: 'Active' },
    { name: 'Hassan Raza', email: 'hassan@email.com', room: '403-A', joinedAt: '3 weeks ago', status: 'Pending' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Farooq!</h1>
        <p className="text-gray-600">Here's what's happening with your hostel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-green-600">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Recent Student Registrations</h2>
          <div className="space-y-4">
            {recentStudents.map((student, idx) => (
              <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">{student.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Room {student.room}</p>
                  <p className="text-xs text-gray-500">{student.joinedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Revenue Breakdown</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-green-700">₹45,000</p>
              <p className="text-xs text-gray-500 mt-1">45 students × ₹1,000</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Last Month</p>
              <p className="text-2xl font-bold text-blue-700">₹40,000</p>
              <p className="text-xs text-gray-500 mt-1">40 students × ₹1,000</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-purple-700">₹3,20,000</p>
              <p className="text-xs text-gray-500 mt-1">Lifetime earnings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-yellow-900 mb-1">Platform Fee Information</h3>
          <p className="text-sm text-yellow-800">
            LiviSync charges ₹1,000 per student registered through the platform. This fee helps us maintain and improve our services. Your current monthly fee is ₹45,000 for 45 registered students.
          </p>
        </div>
      </div>
    </div>
  );
}
