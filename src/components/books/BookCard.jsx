import {Heart} from 'lucide-react';

const BookCard = ({title, author, description, coverUrl}) =>{
    return(
        <div className="bg-white border border-gray-100 round-2xl overflow-hidden shadow-sm hover:shoadow-xl transition-all duration-300 group  flex flex-col">
            {/* Cover Image Container */}
            <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <img 
                src={coverUrl || "/assets/placeholder.png"}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                {/* Favorite Button Overlay */}
                <button className='absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors'>
                    <Heart size={20} className="text-gray-400 hover:text-red-500 transition-color"/>
                </button>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className='text-xl font-bold text-gray-900 mb-1 line-clamp-1'>{title}</h3>
                <p className='text-purple-600 fon-medium text-sm mb-3'>{author}</p>

                <p className='text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow'>
                    {description || "No description available for this title."}
                </p>
                <button className='w-full py-3.5 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-200'>
                    More Details
                </button>
            </div>
        </div>
    );
};