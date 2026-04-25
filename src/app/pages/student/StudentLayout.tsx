import { Outlet, Link, useLocation } from 'react-router';
import { LayoutDashboard, Building2, Users, UserPlus, MessageCircle, User, LogOut, Home } from 'lucide-react';

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
      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-6 border-b border-indigo-800">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-indigo-300" />
            <div>
              <h1 className="text-xl font-bold">LiviSync</h1>
              <p className="text-xs text-indigo-300">Student Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      active
                        ? 'bg-indigo-600 text-white'
                        : 'text-indigo-200 hover:bg-indigo-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-indigo-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-indigo-200 hover:bg-indigo-800 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
