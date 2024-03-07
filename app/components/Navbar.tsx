import { pop, sans } from "@/app/core";

export default function Navbar()    {
    return (
        <div className={`p-5 flex flex-row items-end justify-between z-10 fixed top-0 left-0 ${pop}`}>
            <h1 className="text-4xl text-[--yellow] font-semibold">
                { sans`j~nAnadA` }
            </h1>
        </div>
    )
}