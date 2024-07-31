import { Search, SettingsIcon, Circle, VerifiedBadge } from './İcons';

export default function AllBox() {
    return (
        <>
            <div className="flex items-center space-x-5 p-3 m-3 border rounded-full bg-primary-search_box text-black focus-within:ring-2 focus-within:ring-primary-search_box_color focus:ring-1">
                <Search />
                <div>
                    <input className="focus:outline-none bg-transparent w-full" type="text" placeholder="Search Infimuse" />
                </div>
            </div>
            <div className="items-center p-3 m-3 mt-4 bg-primary-trends_fy_color rounded-xl">
                {/* Host Communities Card */}
                <div className="rounded border border-gray-500 cursor-pointer">
                    <div className="">
                        <div className="flex flex-row items-center category_1">
                            <span className="text-lg font-bold text-black p-2">My Communities</span>
                            <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                                <Circle />
                            </div>
                        </div>
                    </div>
                    <div className="topic">
                        <div className="text-gray-700 font-bold">
                            <span>SquidGames</span>
                        </div>
                    </div>
                    <div className="TopicCount">
                        <span className="text-gray-700">30K Posts</span>
                    </div>
                    <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer mb-3">
                        <div className="topic">
                            <div className="text-gray-700 font-bold">
                                <span>Apple</span>
                            </div>
                        </div>
                        <div className="TopicCount">
                            <span className="text-gray-700">1.485 Tweets</span>
                        </div>
                    </div>
                </div>

                {/* New Card */}
                <div className="rounded border border-gray-500 cursor-pointer mt-4">
                    <div className="">
                        <div className="flex flex-row items-center category_1">
                            <span className="text-lg font-bold text-black p-2">My Communities</span>
                            <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                                <Circle />
                            </div>
                        </div>
                    </div>
                    <div className="topic">
                        <div className="text-gray-700 font-bold">
                            <span>NewTopic</span>
                        </div>
                    </div>
                    <div className="TopicCount">
                        <span className="text-gray-700">10K Posts</span>
                    </div>
                    <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer mb-3">
                        {/* <div className="">
                            <div className="flex flex-row items-center category_1">
                                <span className="text-sm text-gray-700">Category . Trending</span>
                                <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                                    <Circle />
                                </div>
                            </div>
                        </div> */}
                        <div className="topic">
                            <div className="text-gray-700 font-bold">
                                <span>AnotherTopic</span>
                            </div>
                        </div>
                        <div className="TopicCount">
                            <span className="text-gray-700">500 Tweets</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
                    <span className="text-primary-button">Show more</span>
                </div>
            </div>
            <div className="wtf p-3 m-3 flex flex-col rounded-xl mt-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
                <div className="p-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
                    <span className="text-primary-button">Show more</span>
                </div>
            </div>
        </>
    );
}