This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project description

This project is a demo webpage designed to help customers with information about various types of loss reports such as lost cards, IDs, and other documents. The primary goal is to provide a clear and user-friendly interface that retrieves and displays menus and content from specific API endpoints.

## Execution

Fetching Data:
Implemented API calls using Next.js built-in API routing and fetch to retrieve menus and content from the given endpoints.
Created separate functions to fetch data.
Note: Due to time constraints, I prioritized content over functionality and some styling of the navigation and header.
Component Structure:
Broke down the page into smaller, reusable components, inspired by file structure from React.
Utilized the Radix.ui component library.
Used props to pass data between components and hooks to manage state and page lifecycle.
Styling and UX:
Used Tailwind CSS to quickly and efficiently style components, providing flexibility to create a responsive and modern design.
Focused on creating a user-friendly layout with clear navigation and readable content.
Strived for accessibility by following best practices in link naming, JSX structuring, color usage, sizing, and content division into sections with clear headings.
Project Overview
This project demonstrates my solution for the task of creating a webpage to help customers with information about various loss reports such as cards, IDs, etc.

## Tech Stack

Framework: Next.js
Language: TypeScript
Styling: Tailwind CSS
Component Library: Radix.ui https://www.radix-ui.com/
Icons: https://www.radix-ui.com/icons https://docs.fontawesome.com/

## Notes

Due to time constraints, I prioritized certain aspects of the project. The primary focus was on the content and ensuring the core functionality was present, with less emphasis on the navigation and header styling. Future improvements would include more detailed styling and additional functionality.
