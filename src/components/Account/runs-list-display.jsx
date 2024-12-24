import runs from "./runs-data.jsx";

export default function RunsList() {
    return (
        <>
            {runs.map((run) =>
            <div key={run.id} className="cursor-pointer flex items-center justify-between p-4 rounded-b-lg even:bg-[rgb(40,52,61)] last:hover:rounded-b-lg hover:bg-[#92979b4d]">
                <div className="flex items-center gap-2">
                    <img className="h-12 object-contain rounded-2xl w-12" src={run.image} alt={run.name} />
                    <div>
                        <h4 className="font-bold text-[#49b697] text-sm w-52">{run.name}</h4>
                        <p className="run-info">Last run 5 months ago</p>
                    </div>
                </div>

                <div className="text-[#49b697] text-center">
                    <p>{run.runCount}</p>
                    <p className="run-info">Runs</p>
                </div>
            </div>
            )}
        </>
    )
}