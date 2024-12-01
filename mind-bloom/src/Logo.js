import React from "react";
import brainIcon from './pictures/new_logo_face_brain.png';

function Logo() {
    return (
        <div className="p-6 max-w-sm mx-auto bg-green-600 rounded-xl shadow-lg flex items-center gap-x-4">
            <div className="shrink-0">
                <img className="size-12 bg-origin-border" src={brainIcon} alt="Mind Bloom Logo" />
            </div>
            <div>
                <div className="text-black font-bold text-xl">Mind Bloom</div>
                <p className="text-slate-500-black">Access all resources for mental health</p>
            </div>
        </div>
    );
}

export default Logo;