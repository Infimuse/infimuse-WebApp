import { TopTIcon } from '@/components/community/İcons';
import TweetBox from '@/components/community/TweetBox';
import Tweets from '@/components/community/Tweets';
import Categories from '@/components/community/categories';
import  Location from '@/components/community/location';

export default function ContainerPage() {
    return(
        <div className=''>
            {/* <header className=" flex justify-between items-center p-4 border-b border-primary-container_border_color bg-white">
                {/* <span className="font-bold text-xl  text-black">Home</span> 
                <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <a title="Top Tweets">
                        <TopTIcon/>
                    </a>
                </div>
            </header> */}
            <div className="flex space-x-4 px-5 py-2 z-20 ">
                    {/* <img className="rounded-full h-11 w-11 mt-1" src="https://randomuser.me/api/portraits/women/57.jpg"/> */}
                    {/* <TweetBox/> */}
                    {/* <Categories/> */}
            </div>

            <div className="flex  px-[150px] py-6 border-b mt-[-56px] ">
                    <Location/>
            </div>

            <div className='px-[300px]'>
                    <Tweets/>
            </div>
        </div>
    )
}
