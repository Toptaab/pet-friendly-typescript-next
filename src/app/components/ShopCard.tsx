import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface propsType {
    title?: string;
    image?: string;
    reviewScore?: number;
    reviewTotal?: number;
    location?: string;
}

export default function ShopCard({
    title = "title",
    image = "https://fastly.picsum.photos/id/33/5000/3333.jpg?hmac=h5NVRcUXmsWm612YQOroHSA5n9R7gxZgoP60LHBPHtw",
    reviewScore = 3,
    reviewTotal = 999,
    location = "100/100 ",
}: propsType) {
    const stars = [];
    for (let i = 0; i < reviewScore; i++) {
        stars.push(<StarIcon className="h-5 w-5 text-blue-500" />);
    }
    for (let i = 0; i < 5 - reviewScore; i++) {
        stars.push(
            <StarIcon className="h-5 w-5 text-blue-500 fill-none stroke-1 stroke-blue-500 " />
        );
    }

    return (
        <div className=" border rounded-xl border-black w-[20rem] mx-auto h-[26rem]">
            <img
                className="w-full h-56  border-b-2 object-cover rounded-t-xl"
                src={image}
                alt="CardImage"
            />
            <div className="flex flex-col px-6 py-8 gap-5">
                <span className="font-semibold lg:text-lg sm:text-sm">
                    {title}
                </span>
                <div className="flex text-base font-medium gap-2">
                    <MapPinIcon className="w-6 h-6 text-red-500" />
                    <span className="">{location}</span>
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex gap-3 align-middle">
                        <div className="flex">{stars}</div>
                        <small className="p-1">({reviewTotal})</small>
                    </div>
                    {/* <div>999 Favs</div> */}
                </div>
            </div>
        </div>
    );
}
