"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = ()=> {
    const {user, isLoaded} = useUser()

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white">
                Welcome Back
            </h2>
            <p>
                This is your Financial Overview Report
            </p>
        </div>
    )
}