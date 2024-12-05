import React from "react";
import LogoNoText from "./LogoNoDescription";

function Modal({isOpen, onClose, children}){
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 bg-gray-600">
            <div className="bg-white p-6 w-[36rem] rounded-lg shadow-lg relative">
                <LogoNoText />
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;