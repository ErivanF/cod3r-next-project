# Getting Started

create a .env.local file using the .env.local.example as a template with a FireBase database

Intstall the dependencies

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Technologies used

NEXT.js
Firebase

## Includes

One layout, including links to the registration and list pages

Main page ("/"), that fetches from the database and displays a list with the registred users

Form page ("/form"), that allow the creation of a new registration

User page ("/user/[id]"), acessible only through the edit button on the main page used to modify the user
