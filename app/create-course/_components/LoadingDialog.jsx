"use client";

import React from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader
} from "../../../@/components/ui/alert-dialog";

function LoadingDialog({ loading }) {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent className="bg-transparent shadow-none border-none"> {/* Fully transparent background */}
                <AlertDialogHeader className="flex items-center justify-center h-screen">
                    <div className="flex space-x-2 justify-center items-center">
                        <span className="sr-only">Loading...</span>
                        <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-8 w-8 bg-primary rounded-full animate-bounce"></div>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default LoadingDialog;
