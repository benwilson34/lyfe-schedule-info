import type { MetaFunction } from "@remix-run/node";
import { Frontmatter } from "~/types/Frontmatter";
import { dateLocaleStringOptions } from "~/util/format";

const posts = import.meta.glob("./posts.*.mdx", { eager: true }) as Record<
  string,
  {
    frontmatter: Frontmatter;
  }
>;

export const meta: MetaFunction = () => {
  return [
    { title: "ben'z house" },
    { name: "description", content: "ben wilson's personal site" },
  ];
};

export default function Index() {
  function renderRecentPostLinks() {
    return (
      <div className="flex flex-col">
        {Object.entries(posts)
          .map(([key, value]) => {
            const mostRelevantDate =
              value.frontmatter.dateUpdated || value.frontmatter.datePublished;
            return [key, { ...value, mostRelevantDate }] as const;
          })
          .sort(([, valueA], [, valueB]) =>
            valueA.mostRelevantDate > valueB.mostRelevantDate ? -1 : 1
          )
          .map(([key, value]) => {
            // assert non-null because of the glob pattern in the import
            // TODO replace `.` with `/`?
            const slug = key.match(/posts\.(.+)\.mdx/i)![1];
            const { mostRelevantDate, frontmatter } = value;
            const { title } = frontmatter;
            const shortDate = new Date(mostRelevantDate).toLocaleDateString(
              undefined,
              dateLocaleStringOptions
            );

            return (
              <div key={slug}>
                <span className="my-0">{shortDate}: </span>
                <a href={`/posts/${slug}`}>{title}</a>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col text-4xl mt-6 mb-6 w-fit border-y border-primary">
          <span className="font-semibold tracking-wider">&quot;yer in</span>

          <div className="relative">
            <div className="absolute top-4 left-0 bg-raised h-16 w-full"></div>
          </div>

          <span className="relative -top-2 font-serif text-8xl text-center -rotate-3 leading-[.8]">
            ben&apos;z house
          </span>

          <div className="flex flex-row">
            <span className="grow"></span>

            <span className="font-semibold tracking-wider">
              now, baby&quot;
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-raised mb-10"></div>

      <p>
        Hi, I&apos;m Ben (he/him)! I&apos;m a software engineer specializing in
        full-stack web development. I have a strong DIY ethic and love to learn
        things, make things, and collaborate. Besides making software, I like
        playing drums and guitar, listening to music, playing video games,
        crocheting, playing tennis, woodworking, baking bread, and reading up on
        whatever else interests me.
      </p>

      <p>
        Some recent interests:
        <ul>
          <li>
            learning to{" "}
            <a href="https://youtu.be/NdCia_d1u5c?si=fQmYOh84Rwe6phXW">
              riffle shuffle
            </a>
          </li>
          <li>
            making{" "}
            <a href="https://youtu.be/cF-vuTPdOhQ?si=gM7cpWTmZiO73ppL">
              homemade bagels
            </a>{" "}
            (2nd attempt with this recipe, they came out pretty good!)
          </li>
          <li>
            learning{" "}
            <a href="https://en.wikipedia.org/wiki/Black_Lady">Hearts</a> (and{" "}
            <a href="https://mark.random-article.com/hearts/index.html">
              strategies
            </a>
            )
          </li>
        </ul>
      </p>

      <p>
        This is my personal corner of the internet. This is my house. My
        sanctuary. Stay awhile.
      </p>

      <p>
        If you&apos;re a web geek like me, there are details about how this site
        was made on <a href="/about">the about page</a>.
      </p>

      <h2>recent posts</h2>

      {renderRecentPostLinks()}
    </div>
  );
}
