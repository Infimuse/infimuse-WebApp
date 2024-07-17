import React from 'react';
// import { VerifiedBadge } from './Icons';

export default function Tweets(){
    return(
        <>
        {[
            // Array of tweet objects (simplified for clarity)
            { id: 1, portrait: 'https://randomuser.me/api/portraits/women/50.jpg', name: 'AdemCan Man', username: '@CertelAdemcan', time: '49m', text: 'Photography Workshop @ Photo Studio', image: 'https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg', replies: 20, likes: 9900, shares: 2 },
            { id: 2, portrait: 'https://randomuser.me/api/portraits/women/57.jpg', name: 'AdemCan Certel', username: '@CertelAdemcan', time: '1h', text: 'Cocktail Mixology Class', image: 'https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg', replies: 40, likes: 7000, shares: 1 },
            { id: 3, portrait: 'https://randomuser.me/api/portraits/women/60.jpg', name: 'AdemCan Certel', username: '@CertelAdemcan', time: '2h', text: 'Painting Workshop @ Art Gallery', image: 'https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg', replies: 30, likes: 8000, shares: 3},
            { id: 4, portrait: 'https://randomuser.me/api/portraits/women/60.jpg', name: 'AdemCan Certel', username: '@CertelAdemcan', time: '2h', text: 'Painting Workshop @ Art Gallery', image: 'https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg', replies: 30, likes: 8000, shares: 3},
            // Add more tweets as needed
        ].map(tweet => (
            <div key={tweet.id} className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
                <img src={tweet.portrait} className="w-11 h-11 rounded-full" alt="" />
                <div className="flex-1">
                    <div className="flex items-center text-sm space-x-2">
                        <span className="ml-1 font-bold text-black">{tweet.name} dffdffd</span>
                        <span className="ml-2 text-black">{tweet.username}</span>
                        <div className="mx-2 text-black">·</div>
                        <span className="text-black">{tweet.time}</span>
                    </div>
                    <div className="ml-1">
                        <p className="items-center text-black overflow-hidden">
                            {tweet.text}
                            <img className="mt-3 rounded-xl" src={tweet.image} alt=""/>
                        </p>
                        <ul className="flex justify-between mt-2">
                            
                            <li className="flex items-center space-x-3 text-primary-gray_colors text-sm">
                                <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-200 cursor-pointer hover:bg-primary-tweets_hover_colors3">
                                    😮
                                </div>
                                <span>{tweet.likes}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-gray_colors text-sm">
                                <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-200 cursor-pointer hover:bg-primary-tweets_hover_colors1">
                                    🗨️
                                </div>
                                <span>{tweet.replies}</span>
                            </li>
                            <li className="ml-auto flex items-center space-x-3 text-primary-gray_colors text-sm">
                                <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-200 cursor-pointer hover:bg-primary-tweets_hover_colors1">
                                    📤
                                </div>
                                <span>{tweet.shares}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}
