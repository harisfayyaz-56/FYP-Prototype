import { Send, Search, MoreVertical, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function StudentChat() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Fatima Khan',
      lastMessage: 'Hey! Are you free to chat tomorrow?',
      lastMessageTime: '2h ago',
      unreadCount: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Ava Thompson',
      lastMessage: 'Sounds good, see you then!',
      lastMessageTime: '1d ago',
      unreadCount: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Aisha Malik',
      lastMessage: 'Thanks for the info!',
      lastMessageTime: '3d ago',
      unreadCount: 0,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'them',
      text: "Hi Ali! I saw we have a 94% compatibility match. That's amazing!",
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'me',
      text: "Hey Fatima! Yes, I noticed that too. Our preferences seem really aligned.",
      time: '10:32 AM',
    },
    {
      id: 3,
      sender: 'them',
      text: "I saw you're also looking at Green Valley Hostel. Have you visited it yet?",
      time: '10:35 AM',
    },
    {
      id: 4,
      sender: 'me',
      text: "Not yet, but I'm planning to go next week. Would you like to visit together?",
      time: '10:37 AM',
    },
    {
      id: 5,
      sender: 'them',
      text: "That would be great! I'm free on Thursday afternoon. Does that work for you?",
      time: '10:40 AM',
    },
    {
      id: 6,
      sender: 'me',
      text: "Perfect! Thursday at 3 PM?",
      time: '10:42 AM',
    },
    {
      id: 7,
      sender: 'them',
      text: "Hey! Are you free to chat tomorrow?",
      time: '2 hours ago',
    },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  const currentChat = conversations.find((c) => c.id === selectedChat);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-gray-600">Chat with your potential roommates</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" style={{ height: 'calc(100vh - 250px)' }}>
        <div className="flex h-full">
          <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left ${
                    selectedChat === conversation.id ? 'bg-indigo-50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{conversation.name[0]}</span>
                      </div>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold truncate">{conversation.name}</h3>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          {conversation.lastMessageTime}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        {conversation.unreadCount > 0 && (
                          <div className="w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-bold flex-shrink-0 ml-2">
                            {conversation.unreadCount}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {currentChat && (
              <>
                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{currentChat.name[0]}</span>
                      </div>
                      {currentChat.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold">{currentChat.name}</h3>
                      <p className="text-xs text-gray-500">
                        {currentChat.online ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-200 rounded-lg">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-md px-4 py-3 rounded-2xl ${
                          msg.sender === 'me'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white border border-gray-200 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === 'me' ? 'text-indigo-200' : 'text-gray-500'
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send
                    </button>
                  </div>
                </form>
              </>
            )}

            {!currentChat && (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">Select a conversation</p>
                  <p className="text-sm">Choose a friend to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-blue-900 mb-1">Safety First</h3>
          <p className="text-sm text-blue-800">
            Never share personal financial information or send money to people you haven't met in person. Report any suspicious behavior to the admin.
          </p>
        </div>
      </div>
    </div>
  );
}
