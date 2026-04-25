import { User, Mail, Phone, Save, Sliders } from 'lucide-react';
import { useState } from 'react';

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences'>('profile');

  const [profileData, setProfileData] = useState({
    name: 'Ali Hassan',
    email: 'ali@email.com',
    phone: '+92 300 1234567',
    bio: 'Computer Science student looking for a clean and quiet living environment.',
    college: 'FAST-NUCES Lahore',
    yearOfStudy: '3rd Year',
  });

  const [preferences, setPreferences] = useState({
    cleanliness: 5,
    budget: 8000,
    smokingFree: true,
    petsAllowed: false,
    guestsAllowed: false,
    sleepSchedule: 'early',
    studyHabits: 'focused',
    socialLevel: 'moderate',
    foodPreference: 'vegetarian',
    musicVolume: 'low',
    temperaturePreference: 'cool',
    sharedItems: true,
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handlePreferencesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Preferences updated successfully!');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your profile and preferences</p>
      </div>

      <div className="max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <User className="w-5 h-5 inline-block mr-2" />
              Profile Information
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'preferences'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Sliders className="w-5 h-5 inline-block mr-2" />
              Preferences
            </button>
          </div>

          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSubmit} className="p-8">
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{profileData.name}</h2>
                  <p className="text-gray-600">{profileData.email}</p>
                  <button
                    type="button"
                    className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                  >
                    Change Photo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">College/University</label>
                  <input
                    type="text"
                    value={profileData.college}
                    onChange={(e) => setProfileData({ ...profileData, college: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Year of Study</label>
                  <select
                    value={profileData.yearOfStudy}
                    onChange={(e) => setProfileData({ ...profileData, yearOfStudy: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              </div>
            </form>
          )}

          {activeTab === 'preferences' && (
            <form onSubmit={handlePreferencesSubmit} className="p-8">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium mb-4">Cleanliness Level (1-10)</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={preferences.cleanliness}
                    onChange={(e) => setPreferences({ ...preferences, cleanliness: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Don't mind mess</span>
                    <span className="font-bold text-indigo-600">Level {preferences.cleanliness}</span>
                    <span>Very clean</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Budget (₹)</label>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    value={preferences.budget}
                    onChange={(e) => setPreferences({ ...preferences, budget: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex items-center gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-300">
                    <input
                      type="checkbox"
                      checked={preferences.smokingFree}
                      onChange={(e) => setPreferences({ ...preferences, smokingFree: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <div>
                      <p className="font-medium">Smoking-Free Zone</p>
                      <p className="text-xs text-gray-500">Prefer non-smoking roommates</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-300">
                    <input
                      type="checkbox"
                      checked={preferences.petsAllowed}
                      onChange={(e) => setPreferences({ ...preferences, petsAllowed: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <div>
                      <p className="font-medium">Pets Allowed</p>
                      <p className="text-xs text-gray-500">Open to roommates with pets</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-300">
                    <input
                      type="checkbox"
                      checked={preferences.guestsAllowed}
                      onChange={(e) => setPreferences({ ...preferences, guestsAllowed: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <div>
                      <p className="font-medium">Guests Welcome</p>
                      <p className="text-xs text-gray-500">Okay with occasional guests</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-300">
                    <input
                      type="checkbox"
                      checked={preferences.sharedItems}
                      onChange={(e) => setPreferences({ ...preferences, sharedItems: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <div>
                      <p className="font-medium">Share Items</p>
                      <p className="text-xs text-gray-500">Willing to share kitchen items, etc.</p>
                    </div>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Sleep Schedule</label>
                    <select
                      value={preferences.sleepSchedule}
                      onChange={(e) => setPreferences({ ...preferences, sleepSchedule: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="early">Early Bird (sleep before 11 PM)</option>
                      <option value="moderate">Moderate (11 PM - 1 AM)</option>
                      <option value="night-owl">Night Owl (after 1 AM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Study Habits</label>
                    <select
                      value={preferences.studyHabits}
                      onChange={(e) => setPreferences({ ...preferences, studyHabits: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="focused">Very Focused</option>
                      <option value="moderate">Moderate</option>
                      <option value="relaxed">Relaxed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Social Level</label>
                    <select
                      value={preferences.socialLevel}
                      onChange={(e) => setPreferences({ ...preferences, socialLevel: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="very-social">Very Social</option>
                      <option value="moderate">Moderate</option>
                      <option value="introverted">Introverted</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Food Preference</label>
                    <select
                      value={preferences.foodPreference}
                      onChange={(e) => setPreferences({ ...preferences, foodPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="vegetarian">Vegetarian</option>
                      <option value="non-vegetarian">Non-Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="no-preference">No Preference</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                >
                  <Save className="w-5 h-5" />
                  Save Preferences
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
