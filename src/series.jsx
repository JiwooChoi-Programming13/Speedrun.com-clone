import Navigation from "./components/Navigation/nav.jsx";
import SeriesList from "./components/Series/series-data-list.jsx";

export default function Series() {
    return (
        <>
            <Navigation/>
            <div className="flex justify-center gap-4 my-20 px-4 max-[1010px]:flex-col max-[320px]:min-w-36">
                <div className="bg-[#1b1429] rounded-2xl px-4 py-3 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-2 max-[1130px]:flex-col max-[1130px]:items-start max-[264px]:hidden">
                        <div>
                            {/* 
                            FIXME: Have a sorting list to sort out a list of
                            specific categories
                            */}
                            <h3>Sort by</h3>
                            <select className="options">
                                <option value="Most active players">
                                    Most active players
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="gap-4 grid grid-cols-5 max-[628px]:grid-cols-2">
                        <SeriesList />
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