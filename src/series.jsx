import Navigation from "./components/Navigation/nav";

export default function Series() {
    return (
        <>
            <Navigation/>
            <div className="flex justify-center gap-4 my-20 px-4 max-[1010px]:flex-col max-[320px]:min-w-36">
                <div className="bg-[#1b1429] rounded-2xl px-4 py-3 pb-4">
                    <div className="gap-4 grid grid-cols-5
                    max-[1130px]:grid-cols-4 max-[1010px]:grid-cols-7
                    max-[950px]:grid-cols-6 max-[824px]:grid-cols-5 max-[696px]:grid-cols-4
                    max-[575px]:grid-cols-3 max-[450px]:grid-cols-2 max-[320px]:grid-cols-1">
                        {/* <GamesList /> */}
                    </div>

                    <div className="flex justify-center mt-2.5 max-[355px]:hidden">
                        {/* 
                        FIXME: Make this page scroll to limit the games that can be
                        shown on each page.
                        */}
                        <div className="bg-black rounded-lg flex gap-5 p-2">
                            <span className="cursor-pointer">&#8676;</span>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p style={{cursor: "default"}}>...</p>
                            <p>481</p>
                            <span className="arrows">&#8677;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}