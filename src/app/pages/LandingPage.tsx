import { Link } from 'react-router';
import { Home, Users, Building2, MessageCircle, Shield, Zap, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">LiviSync</span>
          </div>
          <div className="flex gap-4">
            <Link to="/login" className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Find Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Perfect Roommate</span> Match
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                LiviSync uses advanced compatibility matching to connect students with roommates who truly click. Say goodbye to awkward living situations and hello to meaningful connections.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-semibold flex items-center gap-2">
                  Start Matching <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 flex flex-col justify-between h-64">
                <Users className="w-8 h-8 text-emerald-600" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">2,847</div>
                  <p className="text-sm text-gray-600">Active Students</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 flex flex-col justify-between h-64">
                <Building2 className="w-8 h-8 text-orange-600" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">156</div>
                  <p className="text-sm text-gray-600">Hostels Listed</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 flex flex-col justify-between h-64">
                <Zap className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">94%</div>
                  <p className="text-sm text-gray-600">Match Success</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 flex flex-col justify-between h-64">
                <MessageCircle className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">12K+</div>
                  <p className="text-sm text-gray-600">Conversations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How LiviSync Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A simple, intuitive platform designed to help you find your ideal living situation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Build Your Profile</h3>
                <p className="text-gray-600">Tell us about your preferences - from cleanliness and budget to lifestyle habits and values.</p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Get Matched</h3>
                <p className="text-gray-600">Our intelligent algorithm finds roommates with 80%+ compatibility. No guesswork, no surprises.</p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Connect & Move In</h3>
                <p className="text-gray-600">Chat in real-time, video call, and finalize your living arrangement with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose LiviSync?</h2>
              
              <div className="space-y-4">
                {[
                  'Smart AI-powered compatibility matching',
                  'Verified student and hostel profiles',
                  'Real-time messaging and video calling',
                  'Transparent hostel reviews and ratings',
                  'Secure payment and booking system',
                  'Community guidelines and safety features'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                <TrendingUp className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">95% Success Rate</h3>
                <p className="text-emerald-100">Students find compatible matches within 2 weeks on average</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 text-white">
                <Shield className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">100% Safe</h3>
                <p className="text-orange-100">All profiles verified. No fake accounts or scams</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Roommate?</h2>
            <p className="text-xl text-emerald-100 mb-8">Join thousands of students who've found their ideal living match</p>
            <Link to="/register" className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-lg hover:shadow-xl transition-all font-semibold hover:bg-gray-50">
              Get Started Today
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Home className="w-6 h-6 text-emerald-500" />
                <span className="font-bold text-white">LiviSync</span>
              </div>
              <p className="text-sm">© 2026 LiviSync. Finding roommates, one match at a time.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
