/**
 * MDX configured following these resources:
 * @see https://remix.run/docs/en/main/guides/vite#add-mdx-plugin
 */
import mdx from "@mdx-js/rollup";
import path from "path";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { parseBoolean } from "./parse-boolean";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const isDev = parseBoolean(process.env.IS_DEV || "") ?? false;

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app/"),
    },
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            headingProperties: { class: "heading-link" },
            // if I decide to add link icons:
            //   1. `npm install hastscript @fortawesome/fontawesome-free`
            //   2. In `tailwind.css` import CSS:
            //      @import "@fortawesome/fontawesome-free/css/all.css";
            //   3. Update `heading-link` styles (or add a new class)
            //   4. Change `behavior` (above) to one of the other ones, like "append"
            //   5. Uncomment below:
            // content: function () {
            //   return h("i.fa-solid.fa-link.heading-link ");
            // },
          },
        ],
      ],
    }),
    remix({
      // only serve `drafts*` pages in dev
      ...(!isDev && { ignoredRouteFiles: ["**/drafts*"] }),
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});
