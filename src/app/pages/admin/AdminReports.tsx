import { AlertCircle, User, Building2, CheckCircle, XCircle, Eye } from 'lucide-react';

export default function AdminReports() {
  const reports = [
    {
      id: 1,
      type: 'student',
      reporter: 'Fatima Khan',
      reportedUser: 'Ali Hassan',
      reason: 'Inappropriate behavior in chat',
      description: 'User sent offensive messages repeatedly after being asked to stop.',
      date: '2026-04-24',
      status: 'Pending',
      severity: 'High'
    },
    {
      id: 2,
      type: 'hostel',
      reporter: 'Hassan Raza',
      reportedUser: "Scholar's Lodge",
      reason: 'Misleading information',
      description: 'Hostel advertised amenities that are not actually available.',
      date: '2026-04-23',
      status: 'Under Review',
      severity: 'Medium'
    },
    {
      id: 3,
      type: 'student',
      reporter: 'Hira Ahmed',
      reportedUser: 'Karim Hussain',
      reason: 'Spam friend requests',
      description: 'Sending friend requests to multiple users without any prior interaction.',
      date: '2026-04-22',
      status: 'Resolved',
      severity: 'Low'
    },
    {
      id: 4,
      type: 'hostel',
      reporter: 'Ava Thompson',
      reportedUser: 'Budget Stay',
      reason: 'Safety concerns',
      description: 'Multiple students reported security issues and lack of proper facilities.',
      date: '2026-04-21',
      status: 'Pending',
      severity: 'High'
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Under Review':
        return 'bg-blue-100 text-blue-700';
      case 'Resolved':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Reports & Moderation</h1>
        <p className="text-gray-600">Review and manage user reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Total Reports</p>
            <AlertCircle className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold">47</p>
          <p className="text-sm text-gray-500 mt-2">All time</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Pending</p>
            <AlertCircle className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold">7</p>
          <p className="text-sm text-yellow-600 mt-2">Needs action</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Under Review</p>
            <AlertCircle className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-blue-600 mt-2">In progress</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Resolved</p>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold">37</p>
          <p className="text-sm text-green-600 mt-2">Completed</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Reporter</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Reported</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Reason</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Severity</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {report.type === 'student' ? (
                        <User className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Building2 className="w-5 h-5 text-purple-600" />
                      )}
                      <span className="text-sm capitalize">{report.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 text-xs font-semibold">{report.reporter[0]}</span>
                      </div>
                      <span className="text-sm">{report.reporter}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-xs font-semibold">{report.reportedUser[0]}</span>
                      </div>
                      <span className="text-sm font-medium">{report.reportedUser}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{report.reason}</p>
                    <p className="text-xs text-gray-500 mt-1 max-w-xs truncate">{report.description}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Details">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      {report.status !== 'Resolved' && (
                        <>
                          <button className="p-2 hover:bg-gray-100 rounded-lg" title="Resolve">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg" title="Dismiss">
                            <XCircle className="w-4 h-4 text-red-600" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
