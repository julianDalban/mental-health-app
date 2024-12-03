import InfoCard from "./InfoCard";

function Body() {
    return (
        <div className="">
            <div className="bg-green-200 h-150 grid grid-cols-3 gap-5 content-evenly ">
                <div className="p-5 flex-shrink"><InfoCard /></div>
                <div className="p-5 flex-shrink"><InfoCard /></div>
                <div className="p-5 flex-shrink"><InfoCard /></div>
                <div className="p-5 flex-shrink"><InfoCard /></div>
                <div className="p-5 flex-shrink"><InfoCard /></div>
                <div className="p-5 flex-shrink"><InfoCard /></div>
            </div>
        </div>
    );
}

export default Body;
