export default function ShopCard() {
    return (
        <div className=" border rounded-xl border-black mx-auto h-[26rem] ">
            <img
                className="w-full h-56  border-b-2 object-cover rounded-t-xl"
                src="https://fastly.picsum.photos/id/33/5000/3333.jpg?hmac=h5NVRcUXmsWm612YQOroHSA5n9R7gxZgoP60LHBPHtw"
                alt="CardImage"
            />
            <div className="flex flex-col px-6 py-8 gap-4">
                <span className="font-semibold lg:text-lg sm:text-sm">
                    Chocolate cheesecake
                </span>
                <span className="text-xl font-bold">Location</span>
                <div className="flex gap-5 justify-between">
                    <div className="flex gap-3 align-middle">
                        <div>★★★★</div>
                        <small className="p-1">(1150)</small>
                    </div>
                    <div>999 Favs</div>
                </div>
            </div>
        </div>
    );
}
