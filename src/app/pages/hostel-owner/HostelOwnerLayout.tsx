import { Outlet, Link, useLocation } from 'react-router';
import { LayoutDashboard, Building2, User, Plus, LogOut, Home } from 'lucide-react';

export default function HostelOwnerLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/hostel-owner', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/hostel-owner/hostels', label: 'My Hostels', icon: Building2 },
    { path: '/hostel-owner/add-hostel', label: 'Add Hostel', icon: Plus },
    { path: '/hostel-owner/profile', label: 'Profile', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/hostel-owner') {
      return location.pathname === '/hostel-owner';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col border-r border-slate-700 shadow-xl">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">LiviSync</h1>
              <p className="text-xs text-slate-400">Hostel Owner</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  active
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${active ? 'scale-110' : ''}`} />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-orange-500/10 hover:text-orange-400 rounded-lg transition-colors font-medium text-sm"
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
