import { Link, useNavigate } from 'react-router';
import { Home, Mail, Lock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo navigation based on role
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'hostel-owner') {
      navigate('/hostel-owner');
    } else {
      navigate('/student');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">LiviSync</span>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Sign in to continue to your dashboard</p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Role Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2.5">Login As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white transition-colors"
              >
                <option value="student">Student</option>
                <option value="hostel-owner">Hostel Owner</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 font-semibold transition-all flex items-center justify-center gap-2 mt-6"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">New to LiviSync?</span>
            </div>
          </div>

          {/* Register Link */}
          <Link to="/register" className="w-full py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-emerald-300 hover:text-emerald-600 font-semibold transition-colors text-center block">
            Create Account
          </Link>

          {/* Footer Text */}
          <p className="text-center text-xs text-gray-600 mt-6">
            By signing in, you agree to our{' '}
            <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
}
