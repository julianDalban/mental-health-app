import React from "react";
import brainIcon from "./../pictures/new_logo_face_brain.png";

function LogoNoText() {
    return (
        <div className="p-4 size-[10rem] grid place-items-center max-w-prose mx-auto border-2 border-solid border-slate-100 bg-inherit rounded-xl shadow-sm flex items-center gap-x-4 ">
            <div className="shrink-0 border-2 border-solid border-emerald-100 rounded-xl">
                <img className="size-12 git bg-origin-border" src={brainIcon} alt="Mind Bloom Logo" />
            </div><div>
                <div className="text-black font-bold text-lg text-center font-serif">Mind Bloom</div>
            </div>
        </div>
    );
}

export default LogoNoText;