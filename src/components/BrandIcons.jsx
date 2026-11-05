import React from 'react';

export const Github = ({ className = "w-5 h-5", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin = ({ className = "w-5 h-5", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCode = ({ className = "w-5 h-5", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.543 5.592 5.592 0 0 0 1.94-.134 5.753 5.753 0 0 0 1.905-.854l3.708-3.32a1.375 1.375 0 0 0 .092-1.944 1.375 1.375 0 0 0-1.944-.092l-3.709 3.32a3.003 3.003 0 0 1-1.025.463 3.007 3.007 0 0 1-2.02-.275 3.197 3.197 0 0 1-1.428-1.528 3.23 3.23 0 0 1-.148-.567 3.004 3.004 0 0 1 .05-.98 3.076 3.076 0 0 1 .463-1.076 3.178 3.178 0 0 1 .634-.788l3.9-4.175 4.38-4.832a1.374 1.374 0 0 0-.98-2.316zm3.568 7.378a1.375 1.375 0 0 0-1.375 1.375v4.5a1.375 1.375 0 0 0 2.75 0v-4.5a1.375 1.375 0 0 0-1.375-1.375zM10.5 13.5a1.375 1.375 0 0 0 0 2.75h9a1.375 1.375 0 0 0 0-2.75h-9z" />
  </svg>
);
