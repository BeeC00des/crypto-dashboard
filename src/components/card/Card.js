import { FaLink } from 'react-icons/fa';

const Card = ({item}) => {
    return (
        <div className="flex justify-center">
            <div className="px-4 py-2 rounded-xl shadow-lg bg-[#7D30F5] max-w-sm my-1">
                <h5 className="text-white text-base font-medium mb-3">{item?.heading}</h5>
                    <p className="text-white text-sm mb-1">
                    {item?.text}
                    </p>
                    <div className='flex justify-end'>
                        <div className='bg-black rounded-lg p-2'>
                            <FaLink color='#2A76B6' size={12} />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Card;