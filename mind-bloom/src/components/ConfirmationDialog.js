import React from "react";
import { toast } from "react-toastify";
import ButtonSecondary from "./ButtonSecondary";
import ButtonTernary from "./ButtonTernary";

const ConfirmationDialog = ({message, onConfirm, onCancel}) => {
    return (
        <div className="p-4 rounded-lg shadow-lg bg-white text-black">
        <div className="mb-4">{message}</div>
        <div className="flex justify-end space-x-2">
            <ButtonSecondary text="Cancel" onClick={onCancel} />
            <ButtonTernary text="Confirm" onClick={onConfirm} />
      </div>
    </div>
    );
};

export const showConfirmationDialog = (message, onConfirm) => {
    const toastId = toast(
        <ConfirmationDialog
            message={message}
            onConfirm={() => {
                toast.dismiss(toastId);
                onConfirm();
            }}
            onCancel={() => toast.dismiss(toastId)}
        />,
        {autoClose: false, closeOnClick: false, draggable: false}
    );
};

export default ConfirmationDialog;