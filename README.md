This is a [Next.js](https://nextjs.org/) and [Sanity.io](https://sanity.io/) project. For more documentation on this build, I followed: [How to setup Sanity CMS with Next.js & TailwindCSS](https://www.sanity.io/guides/sanity-nextjs-tailwindcss)

## Getting Started

First, clone the repo and install dependancies (for both the next app and sanity studio):

```bash
yarn install
# and
cd admin
npm install
```

Then, you can run both the app and the studio from the root:
```bash
yarn dev
# and
yarn sanity
```
*There is a script in package.json for `yarn sanity` that will cd into the admin directory and then runs a sanity start command*

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend next app.

Open [http://localhost:3333](http://localhost:3333) with your browser to see the sanity studio.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Deploy on Vercel like you would any other NextJS app, the build commands will build out the studio first then will deploy the app. You should be able to access your live studio at `https://yourdomain.com/admin`

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
