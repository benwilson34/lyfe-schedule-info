import type { MetaFunction } from "@remix-run/node";
import dayjs from "dayjs";
import { ReactNode } from "react";
import Button from "~/components/Button";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import Page from "~/components/Page";
import TaskCard, { Task } from "~/components/TaskCard";
import { DEMO_URL } from "~/urls";

export const meta: MetaFunction = () => {
  return [
    { title: "LyfeSchedule" },
    {
      name: "description",
      content: "the todo app for people who get things done eventually™",
    },
  ];
};

function FeatureRow({
  leftChildren,
  rightChildren,
  isLineShowing = true,
}: {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
  isLineShowing?: boolean;
}) {
  return (
    <div className="flex flex-row justify-between min-h-64 max-h-64">
      <div className="relative w-1/2 max-w-1/2 px-8 text-right">
        {leftChildren}
      </div>

      <div className="relative">
        <div className="absolute flex flex-col items-center">
          {/* <div className="absolute rounded-full border-4 border-ondark w-8 h-8 -left-4"></div> */}
          <div className="absolute top-2.5 rounded-full bg-general-200 w-3 h-3"></div>

          {isLineShowing && (
            <div className="relative top-8 border-l-2 border-dashed border-general-200 h-56"></div>
          )}
        </div>
      </div>

      <div className="relative w-1/2 max-w-1/2 px-8">{rightChildren}</div>
    </div>
  );
}

export default function Index() {
  const today = dayjs();

  function renderDummyTaskCard(task: Omit<Task, "id" | "endDate" | "userId">) {
    const fullTask = {
      ...task,
      id: "_",
      userId: "_",
      endDate: task.startDate.add(task.rangeDays - 1, "day"),
    };
    return <TaskCard task={fullTask} selectedDay={today} />;
  }

  function renderBody() {
    return (
      <>
        <div className="pt-16 bg-general-500 text-ondark max-w-4xl mx-auto">
          {/* <div className="flex flex-col items-center">
            <h1>
              <span className="font-extrabold">Lyfe</span>
              <span className="font-light">Schedule</span>
            </h1>

            <p className="italic text-center">
              the to-do app for people who
              <br />
              get things done eventually™
            </p>

            <div className="flex flex-row justify-between w-64 mt-8">
              <Button type="light">Try the Demo</Button>

              <Button type="light">Sign In</Button>
            </div>
          </div> */}

          <div className="flex flex-row w-full px-4 mt-8">
            <div className="w-1/2 flex flex-col items-center">
              <div className="max-w-lg">
                <h2 className="text-6xl mt-0">
                  The to-do app for people who get things done{" "}
                  <div className="inline-block relative">
                    {/* <span className="absolute top-0.5 -left-0.5 text-ondark">
                      eventually
                    </span> */}

                    <span className="relative top-0 left-0 text-general-200">
                      {/* <span className="relative top-0 left-0 text-general-500"> */}
                      eventually
                    </span>
                  </div>
                  <span className="text-xl align-super"> ™</span>
                </h2>

                <p>Organize and plan your busy lyfe with LyfeSchedule.</p>

                <div className="flex flex-row justify-center mt-12">
                  <Button
                    theme="general-200"
                    onClick={() => {
                      window.location.href = DEMO_URL;
                    }}
                  >
                    Try the Demo
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-end">
              <div className="relative w-2/5">
                <img
                  className="absolute top-0 right-full -rotate-6 rounded-xl shadow-xl"
                  src="img\mobile-screenshot_1.png"
                  alt="Screenshot of LyfeSchedule"
                />
                <img
                  className="absolute top-16 rotate-3 rounded-xl shadow-xl"
                  src="img\mobile-screenshot_2.png"
                  alt="Screenshot of LyfeSchedule"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-48">
            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Date Ranges</h3>
                  <p>
                    Many things we need or want to do don&apos;t have a single,
                    strict &quot;due date&quot;. In short, tasks won&apos;t
                    appear until their start date and won&apos;t be overdue
                    until after their end date.
                  </p>
                </>
              }
              rightChildren={
                <div className="-rotate-3 relative -top-6">
                  {renderDummyTaskCard({
                    title: "Replace water filter",
                    startDate: today.subtract(12, "day"),
                    rangeDays: 45,
                  })}
                </div>
              }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Automatic Priority</h3>
                  <p>
                    A task&apos;s priority automatically scales based on the
                    current date. The most pressing tasks appear at the top of
                    the list.
                  </p>
                </>
              }
              rightChildren={
                <div className="rotate-3 relative -top-1">
                  {renderDummyTaskCard({
                    title: "Drop off package at the post office and buy stamps",
                    startDate: today.subtract(3, "day"),
                    rangeDays: 2,
                    // tags: ["chores", "work"],
                  })}
                </div>
              }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Repeating Tasks</h3>
                  <p>
                    Set up tasks to repeat every day, week, month, year, or
                    somewhere in between.
                  </p>
                </>
              }
              rightChildren={
                <div className="-rotate-3 relative -top-5">
                  {renderDummyTaskCard({
                    title: "Work out",
                    startDate: today.subtract(1, "day"),
                    rangeDays: 2,
                    repeatDays: 1,
                  })}
                </div>
              }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Tags</h3>
                  <p>
                    Organize your tasks with tags and view them with the Tag
                    View.
                  </p>
                </>
              }
              rightChildren={
                <div className="rotate-3 relative -top-2">
                  {renderDummyTaskCard({
                    title: "Update resume and job search resources",
                    startDate: today.subtract(1, "day"),
                    rangeDays: 5,
                    tags: ["career", "weekly-goals"],
                  })}
                </div>
              }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Time Estimates</h3>
                  <p>
                    Estimate how long your tasks will take so you can plan
                    around them.
                  </p>
                </>
              }
              rightChildren={
                <div className="-rotate-3 relative -top-6">
                  {renderDummyTaskCard({
                    title: "Write first draft of review",
                    startDate: today.subtract(1, "day"),
                    rangeDays: 2,
                    timeEstimateMins: 45,
                  })}
                </div>
              }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Postponements</h3>
                  <p>
                    Postpone tasks until a later date when you know you
                    won&apos;t get to them yet (you will eventually™).
                  </p>
                </>
              }
              // rightChildren={
              //   <div className="rotate-3">
              //     {renderDummyTaskCard({
              //       title: "Drop off package at the post office and buy stamps",
              //       startDate: today.subtract(1, "day"),
              //       rangeDays: 1,
              //       tags: ["chores", "work"],
              //     })}
              //   </div>
              // }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Past Completion</h3>
                  <p>
                    Forgot to check something off your list the other day? No
                    problem! Mark it as completed on that day and keep your
                    repeating tasks on track.
                  </p>
                </>
              }
              // rightChildren={
              //   <div className="rotate-3">
              //     {renderDummyTaskCard({
              //       title: "Drop off package at the post office and buy stamps",
              //       startDate: today.subtract(1, "day"),
              //       rangeDays: 1,
              //       tags: ["chores", "work"],
              //     })}
              //   </div>
              // }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Calendar View</h3>
                  <p>
                    See your tasks for any day in the past or future (great for
                    repeating tasks!).
                  </p>
                </>
              }
              // rightChildren={
              //   <div className="rotate-3">
              //     {renderDummyTaskCard({
              //       title: "Drop off package at the post office and buy stamps",
              //       startDate: today.subtract(1, "day"),
              //       rangeDays: 1,
              //       tags: ["chores", "work"],
              //     })}
              //   </div>
              // }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Tasteful UI</h3>
                  <p>
                    The interface is streamlined and attractive without being
                    too engaging. After all, using this app should be one of the
                    least interesting things you do today!
                  </p>
                  <p>
                    Don&apos;t like stats? Turn that section off. Don&apos;t
                    want to see all the fields on the task cards? Turn &apos;em
                    off. You do you.
                  </p>
                </>
              }
              // rightChildren={
              //   <div className="rotate-3">
              //     {renderDummyTaskCard({
              //       title: "Drop off package at the post office and buy stamps",
              //       startDate: today.subtract(1, "day"),
              //       rangeDays: 1,
              //       tags: ["chores", "work"],
              //     })}
              //   </div>
              // }
            />

            <FeatureRow
              leftChildren={
                <>
                  <h3 className="mt-0 mb-1">Respect &amp; Realness</h3>
                  <p>
                    We all live busy lives &mdash; no judgement if/when you
                    don&apos;t get something done. You will be treated like an
                    adult. Your time, attention, and data will be respected.
                  </p>
                </>
              }
              isLineShowing={false}
            />
          </div>
        </div>

        <div className="bg-background text-onlight">
          <div className="bg-background text-onlight py-8 px-4 max-w-xl mx-auto">
            <h2 className="text-center mt-0">
              It&apos;s free forever (seriously)
            </h2>

            <p>
              LyfeSchedule is utterly and completely free &mdash; no features
              are locked behind a paywall and there&apos;s no premium tier or
              subscription model. It&apos;s also{" "}
              <a href="https://github.com/benwilson34/lyfe-schedule">
                open-source
              </a>{" "}
              and there are{" "}
              <a href="https://github.com/benwilson34/lyfe-schedule?tab=readme-ov-file#run-the-app">
                instructions for how you can spin up your own instance
              </a>{" "}
              if you really want to.
            </p>
            <div className="flex flex-col items-center">
              <p>Try it today at no risk!</p>

              <Button
                theme="general"
                onClick={() => {
                  window.location.href = DEMO_URL;
                }}
              >
                Try the Demo
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <Page>
      <Nav />

      <div className="max-h-full">
        <div className="flex flex-col justify-between overflow-x-hidden">
          {renderBody()}

          <Footer />
        </div>
      </div>
    </Page>
  );
}
