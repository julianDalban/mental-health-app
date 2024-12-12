import React from "react";

function Modal({isOpen, onClose, children}){
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-60 bg-gray-500">
            <div className="bg-white p-6 w-[44rem] rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;