import { UserPlus, UserCheck, UserX, MessageCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function StudentFriends() {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests'>('friends');

  const friends = [
    {
      id: 1,
      name: 'Fatima Khan',
      compatibility: 94,
      hostel: 'Green Valley Hostel',
      lastMessage: 'Hey! Are you free to chat tomorrow?',
      lastMessageTime: '2 hours ago',
      unreadCount: 2,
    },
    {
      id: 2,
      name: 'Ava Thompson',
      compatibility: 87,
      hostel: 'Students Paradise',
      lastMessage: 'Sounds good, see you then!',
      lastMessageTime: '1 day ago',
      unreadCount: 0,
    },
    {
      id: 3,
      name: 'Aisha Malik',
      compatibility: 85,
      hostel: 'Green Valley Hostel',
      lastMessage: 'Thanks for the info!',
      lastMessageTime: '3 days ago',
      unreadCount: 0,
    },
  ];

  const friendRequests = [
    {
      id: 4,
      name: 'Hassan Raza',
      compatibility: 82,
      hostel: 'Green Valley Hostel',
      mutualFriends: 2,
      requestTime: '1 hour ago',
    },
    {
      id: 5,
      name: 'Hira Ahmed',
      compatibility: 89,
      hostel: 'Green Valley Hostel',
      mutualFriends: 3,
      requestTime: '5 hours ago',
    },
    {
      id: 6,
      name: 'Samir Khan',
      compatibility: 76,
      hostel: "Scholar's Lodge",
      mutualFriends: 1,
      requestTime: '1 day ago',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Friends & Connections</h1>
        <p className="text-gray-600">Manage your friend list and requests</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('friends')}
            className={`flex-1 px-6 py-4 font-medium transition-colors relative ${
              activeTab === 'friends'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <UserCheck className="w-5 h-5 inline-block mr-2" />
            My Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex-1 px-6 py-4 font-medium transition-colors relative ${
              activeTab === 'requests'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <UserPlus className="w-5 h-5 inline-block mr-2" />
            Friend Requests ({friendRequests.length})
            {friendRequests.length > 0 && (
              <span className="absolute top-2 right-4 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {friendRequests.length}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'friends' && (
          <div className="p-6">
            {friends.length > 0 ? (
              <div className="space-y-4">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{friend.name[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-bold text-lg">{friend.name}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {friend.compatibility}% Match
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{friend.hostel}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-gray-700 truncate max-w-md">
                            {friend.lastMessage}
                          </p>
                          <span className="text-xs text-gray-500 flex-shrink-0">
                            • {friend.lastMessageTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {friend.unreadCount > 0 && (
                        <div className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                          {friend.unreadCount}
                        </div>
                      )}
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Message
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg" title="Remove Friend">
                        <UserX className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <UserCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No friends yet</h3>
                <p className="text-gray-600 mb-6">
                  Start by browsing compatible matches and sending friend requests
                </p>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                  Find Matches
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="p-6">
            {friendRequests.length > 0 ? (
              <div className="space-y-4">
                {friendRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{request.name[0]}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-bold text-lg">{request.name}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {request.compatibility}% Match
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{request.hostel}</p>
                        <p className="text-xs text-gray-500">
                          {request.mutualFriends} mutual friends • {request.requestTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
                        Accept
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <UserPlus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No pending requests</h3>
                <p className="text-gray-600">You're all caught up!</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-yellow-900 mb-1">Connect Before You Decide</h3>
          <p className="text-sm text-yellow-800">
            Choosing the right roommate is important! Chat with your matches before committing to living together. Get to know their habits, schedules, and expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
