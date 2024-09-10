'use client';

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from 'next/image';
import { PaperAirplaneIcon, TrashIcon } from '@heroicons/react/24/solid';

type Message = {
  id: number;
  sender: string;
  senderImage: string;
  content: string;
  timestamp: string;
};

const initialMessages: Message[] = [
  { id: 1, sender: 'Designer B', senderImage: '/dev-images/AvatarModal.png', content: 'Hey, have you seen the latest trends?', timestamp: '2024-08-25T10:30:00Z' },
  { id: 2, sender: 'Designer A', senderImage: '/dev-images/fashion1.png', content: 'Yes, I have. They look great!', timestamp: '2024-08-25T10:35:00Z' },
];

const onlineDesigners = [
  { name: 'Designer C', image: '/dev-images/fashion1.jpg' },
  { name: 'Designer D', image: '/dev-images/fashion2.jpg' },
  { name: 'Designer E', image: '/dev-images/fashion3.jpg' },
  { name: 'Designer F', image: '/dev-images/fashion4.jpg' },
];

const MessageComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const timestamp = new Date().toISOString();
      const newMessageObj: Message = {
        id: messages.length + 1,
        sender: 'Designer A', // This should be dynamic based on the logged-in user
        senderImage: '/dev-images/designer-a.jpg', // Replace with the current designer's image
        content: newMessage.trim(),
        timestamp,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleIconClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      handleSendMessage();
    }, 300); // Duration of the animation
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <div className='relative flex items-center'>
            <Image 
              src="/dev-images/fashion1.png" 
              alt="Fashion" 
              width={40} 
              height={40} 
              className="rounded-full object-cover" 
            />
            <span className='absolute bottom-0 left-6 w-4 h-4 bg-green-500 border-2 border-white rounded-full'></span>
            <div className='flex flex-col ml-3'>
              <h4 className="text-xl font-bold">Designer A</h4>
              <p className='text-gray-500 text-sm'>Online</p>
            </div>
          </div>

          <button
            onClick={handleClearChat}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            aria-label="Clear Chat"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="h-48 overflow-y-auto mb-4 border border-gray-300 p-4 rounded-lg">
          {messages.map(message => (
            <div key={message.id} className="flex items-start mb-4">
              <div className="relative">
                <Image
                  src={message.senderImage}
                  alt={`${message.sender}'s profile`}
                  width={32} // Equivalent to w-8 in TailwindCSS
                  height={32} // Equivalent to h-8 in TailwindCSS
                  className="rounded-full mr-3"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{message.sender}</div>
                <div>{message.content}</div>
                <div className="text-sm text-gray-500">{new Date(message.timestamp).toLocaleTimeString()}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            onKeyDown={handleKeyPress}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg"
            placeholder="Type a message..."
          />
          <button
            onClick={handleIconClick}
            className="p-2 text-black rounded-r-lg flex items-center justify-center relative overflow-hidden"
          >
            <PaperAirplaneIcon
              className={`h-5 w-5 transform transition-transform duration-200 paper-airplane-icon ${isAnimating ? 'animate-send' : ''}`}
            />
          </button>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {onlineDesigners.map((designer, index) => (
            <div key={index} className="relative flex-shrink-0">
              <Image
                src={designer.image}
                alt={designer.name}
                width={48}  // Equivalent to w-12 in TailwindCSS
                height={48} // Equivalent to h-12 in TailwindCSS
                className="rounded-full border-2 border-gray-300"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
