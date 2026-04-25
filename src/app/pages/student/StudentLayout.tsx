import { Outlet, Link, useLocation } from 'react-router';
import { LayoutDashboard, Building2, Users, UserPlus, MessageCircle, User, LogOut, Home, ArrowRight } from 'lucide-react';

export default function StudentLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/student', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/student/hostels', label: 'Browse Hostels', icon: Building2 },
    { path: '/student/matches', label: 'Find Matches', icon: Users },
    { path: '/student/friends', label: 'Friends', icon: UserPlus },
    { path: '/student/chat', label: 'Messages', icon: MessageCircle },
    { path: '/student/profile', label: 'Profile', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/student') {
      return location.pathname === '/student';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col border-r border-slate-700 shadow-xl">
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">LiviSync</h1>
              <p className="text-xs text-slate-400">Student Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  active
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${active ? 'scale-110' : ''}`} />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="px-4 py-3 border-t border-slate-700">
          {/* Profile Quick Access */}
          <div className="mb-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600">
            <p className="text-xs text-slate-400 mb-2">Logged in as</p>
            <p className="text-sm font-semibold">Ali Khan</p>
          </div>

          {/* Logout Button */}
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-colors font-medium text-sm"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
