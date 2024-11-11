import React from "react";

function StatusBar() {
    return (
        <div className="flex justify-center">
            <div className="bg-gray-300/80 px-12 p-1 rounded-lg">
                <div className="text-gray-800 text-sm">
                    Shipwright is officaly a cncf sandbox project now!  
                <a href="https://www.cncf.io/sandbox-projects/" className="text-blue-500 hover:underline">
                    
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 inline-block ml-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </a>
                </div>
            </div>
        </div>
    );
}

export default StatusBar;