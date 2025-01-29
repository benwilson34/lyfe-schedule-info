# LyfeSchedule Marketing Site and Docs

This is the source for the [marketing site](https://lyfeschedule.com) and [docs](https://lyfeschedule.com/docs) for [LyfeSchedule](https://github.com/benwilson34/lyfe-schedule), the todo app for people who get things done eventually™. It's built with [Remix](https://remix.run/), [Tailwind](https://tailwindcss.com/), and [MDX](https://mdxjs.com/). It's hosted on [GitHub Pages](https://pages.github.com/) and uses [GitHub Actions](https://github.com/features/actions) to automatically deploy the site when I push up changes.

This app is configured for static site generation (SSG). Read more here:

- [generate-static-pages script](./generate-static-pages.js)
- [How to Generate a Static Site Using Remix Run Framework](https://habibhinn.com/blog/how-to-generate-a-static-site-using-remix-run-framework) by Habib Hinn
- [remix-ssg-example](https://github.com/mjackson/remix-ssg-example) by Michael Jackson

Read more about how I set up and configured this project in [this article](https://benz.house/about).

## Development

Install Node 20. Clone this repo and `cd` into it. Install project dependencies:

```shellscript
npm install
```

Then run the dev server:

```shellscript
npm run dev
```

## Building the site

```shellscript
npm run build
```

When complete, the build will be in the `./build/client` directory.

## Deployment

Changes are automatically built and deployed via a GitHub Actions [workflow](./.github/workflows/main.yml).
