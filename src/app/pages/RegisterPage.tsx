import { Link, useNavigate } from 'react-router';
import { Home, Users, Building2, Mail, Lock, Phone, User } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Navigate based on role
    if (role === 'student') {
      navigate('/student');
    } else if (role === 'hostel-owner') {
      navigate('/hostel-owner');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">LiviSync</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <div className={`flex-1 h-1.5 rounded-full transition-colors ${step >= 1 ? 'bg-emerald-600' : 'bg-gray-200'}`} />
              <div className={`flex-1 h-1.5 rounded-full transition-colors ${step >= 2 ? 'bg-emerald-600' : 'bg-gray-200'}`} />
            </div>
            <p className="text-xs font-medium text-gray-600">Step {step} of 2</p>
          </div>

          {/* Step 1: Role Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Join LiviSync</h2>
              <p className="text-gray-600 mb-8">Choose your role to get started</p>

              <div className="space-y-4">
                {/* Student Card */}
                <button
                  onClick={() => handleRoleSelect('student')}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Users className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-600 transition-colors">I'm a Student</h3>
                      <p className="text-gray-600 text-sm">Find compatible roommates and explore verified hostels</p>
                    </div>
                  </div>
                </button>

                {/* Hostel Owner Card */}
                <button
                  onClick={() => handleRoleSelect('hostel-owner')}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50/50 transition-all text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-orange-600 transition-colors">I'm a Hostel Owner</h3>
                      <p className="text-gray-600 text-sm">List your property and connect with quality students</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Account Creation */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Create Account</h2>
              <p className="text-gray-600 mb-8">
                Registering as a <span className="font-semibold text-emerald-600">{role === 'student' ? 'Student' : 'Hostel Owner'}</span>
              </p>

              <form onSubmit={handleRegister} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2.5">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 font-semibold transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 font-semibold transition-all"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Sign In
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="text-center text-xs text-gray-600 mt-4">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
}
