import { Reply, Retweet, Like, Share, VerifiedBadge } from './İcons';

export default function Tweets(){
    return(
        <>
        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src='https://randomuser.me/api/portraits/women/50.jpg' className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-black">AdemCan Man  <VerifiedBadge/></span>
                <span className="ml-2 text-black">@CertelAdemcan</span>
                <div className="mx-2 text-black">·</div>
                <span className="text-black">49m</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-black overflow-hidden">
                        Photography Workshop @ Photo Studio
                        <img className="mt-3 rounded-xl" src="https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg"/>
                    </p>
                    <ul className="flex justify-between mt-2">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>20</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>5</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>9,9K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>2</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src='https://randomuser.me/api/portraits/women/57.jpg' className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-black">AdemCan Certel <VerifiedBadge/></span>
                <span className="ml-2 text-black">@CertelAdemcan</span>
                <div className="mx-2 text-black">·</div>
                <span className="text-black">1h</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-black overflow-hidden">
                        <span className="text-primary-tweets_hover_colors2">Cocktail Mixology Class</span> 
                        <img className="mt-3 rounded-xl" src="https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg"/>
                    </p>
                    <ul className="flex justify-between mt-2">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>40</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>1</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>7K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src='https://randomuser.me/api/portraits/women/57.jpg' className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-black">AdemCan Certel <VerifiedBadge/></span>
                <span className="ml-2 text-black">@CertelAdemcan</span>
                <div className="mx-2 text-black">·</div>
                <span className="text-black">1h</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-black overflow-hidden">
                        <span className="text-primary-tweets_hover_colors2">#Workshops</span> Digital Marketing Workshop
                        <img className="mt-3 rounded-xl" src="https://images.pexels.com/photos/3787329/pexels-photo-3787329.jpeg"/>
                    </p>
                    <ul className="flex justify-between mt-2">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>40</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>1</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>7K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src='https://randomuser.me/api/portraits/women/34.jpg' className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-black">ABex Jacobo <VerifiedBadge/></span>
                <span className="ml-2 text-black">@CertelAdemcan</span>
                <div className="mx-2 text-black">·</div>
                <span className="text-black">1h</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-black overflow-hidden">
                        <span className="text-primary-tweets_hover_colors2">#Packages</span> Digital Marketing Workshop
                        <img className="mt-3 rounded-xl" src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"/>
                    </p>
                    <ul className="flex justify-between mt-2">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>40</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>1</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>7K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}