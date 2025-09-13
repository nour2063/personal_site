import React from "react";

interface PhotosProps {
    className?: string
}

export function Photos({className}: PhotosProps) {
    return (
        <div className={className}>
            <hr/>
            <p>
                coming soon...
            </p>
        </div>
    );
}