

const CardTest = ({item}) => {
    return (
        <div className="flex justify-center">
            <div className="px-4 py-2 rounded-xl shadow-lg bg-[#7D30F5] max-w-sm my-1">
                <h5 className="text-white text-base font-medium mb-3">{item?.symbol}</h5>
                    {/* <img src={item?.symbol} alt={item?.name} className="h-10 aspect-square object-fit" /> */}
                    <p className="text-white text-sm mb-1">
                    {item?.name}
                    </p>
                </div>
        </div>
    )
}

export default CardTest;