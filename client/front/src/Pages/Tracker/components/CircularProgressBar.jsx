import React from "react";

const CircularProgressBar = ({ value, goal, size = 120, strokeWidth = 15 }) => {
    const percentage = (value / goal) * 100;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width={size} height={size}>
            {/* Background circle */}
            <circle
                stroke="#eee"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            {/* Progress circle */}
            <circle
                stroke="red"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
            {/* Text in the middle */}
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="16"
                fill="#333"
            >
                {Math.round(percentage)}%
            </text>
        </svg>
    );
};

export default CircularProgressBar;
