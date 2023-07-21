import React from "react";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex justify-center item-center">
            {children}
        </div>
    )
}