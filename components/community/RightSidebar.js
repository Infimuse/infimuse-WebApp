import { Search, SettingsIcon, Circle, VerifiedBadge } from './İcons';
export default function AllBox() {
    return(
        <>
        <div className="flex items-center space-x-5 p-3 m-3 border rounded-full bg-primary-search_box text-black focus-within:ring-2 focus-within:ring-primary-search_box_color focus:ring-1">
            <Search />
            <div>
                <input className=" focus:outline-none bg-transparent w-full" type="text" placeholder="Search Infimuse"/>
            </div>
        </div>
        <div className="items-center p-3 m-3 mt-4 bg-primary-trends_fy_color rounded-xl">
            <div>
                <div className="p-2 flex items-center justify-between text-black border-gray-500 rounded border mb-10">
                    <span className="text-lg font-bold ">My Communities</span>
                    <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <SettingsIcon/>
                    </div>
                </div>
                <div className="p-2 flex items-center justify-between text-black border-gray-500 rounded border mb-10">
                    <span className="text-lg font-bold ">Host Communities</span>
                    <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <SettingsIcon/>
                    </div>
                </div>
                {/* <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer mb-3"> */}
                {/* <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Science . Trending</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #Space
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-primary-trends_d_color">10.4K Tweets</span>
                </div>
            </div>
            
            <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer mb-3">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Football . Trending</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #Marsilya
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-primary-trends_d_color">3.320K Tweets</span>
                </div>
            </div>

            <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer mb-3">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Technology . Trending</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #Apple
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-primary-trends_d_color">1.485 Tweets</span>
                </div>
            </div> */}

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* <div className="rounded border border-gray-500 cursor-pointer">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-lg font-bold text-black p-2">Host Communities</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                {/* <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #SquidGames
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-primary-trends_d_color">30K Tweets</span>
                </div> 
            </div> */}
            <div className="p-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
            {/* <span className=" text-primary-button">Show more</span> */}
        </div>
            </div>
        </div>
        <div className="wtf p-3 m-3 flex flex-col rounded-xl mt-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
        <div className="tfy flex items-center justify-between text-white">
                    {/* <span className="text-xl font-bold">Who to Follow</span> */}
                </div>
        {/* <div className="hover:bg-primary-trends_hover">
            <div className="flex flex-row items-center ">
                <div className="px-4 py-3">
                    <img className="rounded-full h-11 w-11" src="https://avatars.githubusercontent.com/u/50018633?v=4" />
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-white">
                        <span>Eleven <VerifiedBadge/></span>
                    </div>
                    <div className="text-primary-gray_colors">
                        @eleven
                    </div>
                </div>
                <div className="flex flex-row ml-auto items-center justify-between rounded-full bg-white px-4 py-1">
                    <span className="font-bold">Follow</span>
                </div>
            </div>
        </div> */}
        <div className="p-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
            {/* <span className=" text-primary-button">Show more</span> */}
        </div>
        </div>
        </>
    )
}