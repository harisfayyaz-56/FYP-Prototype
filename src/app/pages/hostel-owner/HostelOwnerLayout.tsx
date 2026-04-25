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
      <aside className="w-64 bg-purple-900 text-white flex flex-col">
        <div className="p-6 border-b border-purple-800">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-purple-300" />
            <div>
              <h1 className="text-xl font-bold">LiviSync</h1>
              <p className="text-xs text-purple-300">Hostel Owner</p>
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
                        ? 'bg-purple-600 text-white'
                        : 'text-purple-200 hover:bg-purple-800'
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

        <div className="p-4 border-t border-purple-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-purple-200 hover:bg-purple-800 rounded-lg transition-colors"
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
