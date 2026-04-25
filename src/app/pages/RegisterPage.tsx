import { Link, useNavigate } from 'react-router';
import { Home } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Home className="w-10 h-10 text-indigo-600" />
          <span className="text-3xl font-bold text-gray-900">LiviSync</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-indigo-600' : 'bg-gray-200'} mr-2`} />
              <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`} />
            </div>
            <p className="text-sm text-gray-600">Step {step} of 2</p>
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Join LiviSync</h2>
              <p className="text-gray-600 mb-8">Choose how you want to use LiviSync</p>

              <div className="space-y-4">
                <button
                  onClick={() => handleRoleSelect('student')}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all text-left group"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600">I'm a Student</h3>
                  <p className="text-gray-600">Looking for compatible roommates and hostels</p>
                </button>

                <button
                  onClick={() => handleRoleSelect('hostel-owner')}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all text-left group"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">I'm a Hostel Owner</h3>
                  <p className="text-gray-600">Want to list my property and connect with students</p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Create Account</h2>
              <p className="text-gray-600 mb-8">
                Registering as a {role === 'student' ? 'Student' : 'Hostel Owner'}
              </p>

              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
