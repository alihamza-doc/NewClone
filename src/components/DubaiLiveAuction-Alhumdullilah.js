// components/DubaiLiveAuction.js
"use client";

import { useState, useEffect } from 'react';

export default function DubaiLiveAuction() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 30
  });
  const [currentBid, setCurrentBid] = useState(12500);
  const [isLive, setIsLive] = useState(true);
  const [activeLot, setActiveLot] = useState(1);

  const auctionItems = [
    {
      id: 1,
      title: "Luxury Penthouse with Burj Khalifa View",
      description: "3,500 sq ft with private pool and panoramic city views",
      startingBid: 12000,
      image: "/placeholder-penthouse.jpg"
    },
    {
      id: 2,
      title: "Exclusive Palm Jumeirah Villa",
      description: "Beachfront property with 5 bedrooms and private beach access",
      startingBid: 18500,
      image: "/placeholder-villa.jpg"
    },
    {
      id: 3,
      title: "Downtown Dubai Luxury Apartment",
      description: "2,200 sq ft with designer finishes and premium amenities",
      startingBid: 9500,
      image: "/placeholder-apartment.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          setIsLive(false);
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBid = () => {
    setCurrentBid(prev => prev + 500);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl overflow-hidden shadow-2xl max-w-6xl mx-auto my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-800 border-b border-yellow-400">
        <div className="flex items-center bg-red-600 px-3 py-1 rounded-full mb-4 md:mb-0">
          <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
          <span className="font-bold text-sm">LIVE</span>
        </div>
        
        <h2 className="text-2xl font-bold text-yellow-400 uppercase tracking-wide mb-4 md:mb-0">Dubai Live Auction</h2>
        
        <div className="font-mono text-xl font-bold text-yellow-400 bg-gray-900 px-4 py-2 rounded-lg">
          {isLive ? (
            <>
              <span>{formatTime(timeLeft.hours)}</span>:
              <span>{formatTime(timeLeft.minutes)}</span>:
              <span>{formatTime(timeLeft.seconds)}</span>
            </>
          ) : (
            <span>Auction Ended</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {/* Current Item */}
        <div className="md:col-span-2">
          <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded">
              Lot #{activeLot}
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-bold">{auctionItems[activeLot - 1].title}</h3>
              <p className="text-gray-300 mt-2">{auctionItems[activeLot - 1].description}</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">Current Bid</p>
                <p className="text-2xl font-bold text-yellow-400">${currentBid.toLocaleString()}</p>
              </div>
              
              {isLive && (
                <button 
                  onClick={handleBid}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Place Bid (+$500)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Upcoming Items */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-bold text-lg border-b border-gray-700 pb-2 mb-4">Upcoming Lots</h4>
          
          <div className="space-y-4">
            {auctionItems.map(item => (
              <div 
                key={item.id} 
                className={`flex p-3 rounded-lg cursor-pointer transition-colors ${
                  item.id === activeLot ? 'bg-yellow-400 bg-opacity-20 border border-yellow-400' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setActiveLot(item.id)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-purple-700 rounded mr-3 flex items-center justify-center">
                  <span className="text-white font-bold">{item.id}</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-300 mt-1">Starting: ${item.startingBid.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}