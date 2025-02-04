import{j as e}from"./jsx-runtime-BNSfpw-k.js";import{C as t}from"./Callout-PcGz6LIP.js";import"./index-BPUlVCl8.js";function s(a){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tasks",className:"heading-link",children:e.jsx(n.a,{href:"#tasks",children:"Tasks"})}),`
`,e.jsx(n.h2,{id:"fields",className:"heading-link",children:e.jsx(n.a,{href:"#fields",children:"Fields"})}),`
`,e.jsx(n.p,{children:"TODO image/anatomy of a task card"}),`
`,e.jsx(n.h3,{id:"title",className:"heading-link",children:e.jsx(n.a,{href:"#title",children:"Title"})}),`
`,e.jsxs(n.p,{children:[`The task title is simply what it's called. It's recommended to start the title with an action verb to promote
`,e.jsx(n.a,{href:"./recommendations#tasks-should-be-actionable",children:"actionable tasks"}),"."]}),`
`,e.jsx(n.h3,{id:"schedule",className:"heading-link",children:e.jsx(n.a,{href:"#schedule",children:"Schedule"})}),`
`,e.jsx(n.p,{children:'Tasks can be scheduled for one or more days, the last of which is considered the "due date".'}),`
`,e.jsx(t,{type:"todo",children:"TODO make this better"}),`
`,e.jsx(n.p,{children:"For simple tasks, I think about the date range this way:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'"When is the earliest I can start/do this task?" -> start date'}),`
`,e.jsx(n.li,{children:'"When is the latest I can complete this task?" -> end date'}),`
`]}),`
`,e.jsx(n.p,{children:"For repeating tasks, I think about the date range this way:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'"How often is too often?" -> range 1'}),`
`,e.jsx(n.li,{children:'"How often is not often enough?" -> range 2'}),`
`]}),`
`,e.jsx(n.p,{children:"Then you can calculate:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"range 1 = repeat interval"}),`
`,e.jsx(n.li,{children:"range 2 - range 1 = date range"}),`
`]}),`
`,e.jsx(t,{type:"info",children:e.jsx(n.p,{children:`Considered feature: make schedule/dates optional. Determine how this would
work - do these tasks always show up today until they're completed?`})}),`
`,e.jsx(t,{type:"info",children:e.jsx(n.p,{children:`Considered feature: optionally add a time to a date too, for example if you
have a paper due at 10am on the due date.`})}),`
`,e.jsx(n.h3,{id:"priority",className:"heading-link",children:e.jsx(n.a,{href:"#priority",children:"Priority"})}),`
`,e.jsx(n.p,{children:"Priority is automatically assigned based on a task's date(s)."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Blue tasks are upcoming or not pressing (yet)."}),`
`,e.jsx(n.li,{children:"Yellow tasks are approaching their end date (only applies to tasks with a date range)."}),`
`,e.jsx(n.li,{children:"Red tasks are overdue. The number of days they are overdue is shown next to the date(s) on the task card."}),`
`]}),`
`,e.jsx(n.p,{children:"Tasks are sorted by their priority."}),`
`,e.jsx(t,{type:"info",children:"Planned feature: assignable priority"}),`
`,e.jsx(n.h3,{id:"tags",className:"heading-link",children:e.jsx(n.a,{href:"#tags",children:"Tags"})}),`
`,e.jsx(t,{type:"info",children:e.jsx(n.p,{children:`Planned feature: a task can have zero or more tags. Add an entry in the
sidebar for each existing tag; clicking on that entry lets a user view all
tasks with that tag (regardless of their date(s)).`})}),`
`,e.jsx(n.h3,{id:"repeat-interval",className:"heading-link",children:e.jsx(n.a,{href:"#repeat-interval",children:"Repeat interval"})}),`
`,e.jsx(n.p,{children:"If enabled, how many days after a task is completed it should occur again."}),`
`,e.jsx(n.h3,{id:"time-estimate",className:"heading-link",children:e.jsx(n.a,{href:"#time-estimate",children:"Time estimate"})}),`
`,e.jsxs(n.p,{children:[`If enabled, the estimate in minutes for how long the task will take to complete. This is purely for your reference,
but it is recommended to `,e.jsx(n.a,{href:"./recommendations#use-time-estimates",children:"add a time estimate to as many tasks as you can"}),"."]}),`
`,e.jsx(n.h2,{id:"actions",className:"heading-link",children:e.jsx(n.a,{href:"#actions",children:"Actions"})}),`
`,e.jsx(n.h3,{id:"add-a-task",className:"heading-link",children:e.jsx(n.a,{href:"#add-a-task",children:"Add a task"})}),`
`,e.jsx(n.p,{children:"TODO"}),`
`,e.jsx(n.h3,{id:"edit-a-task",className:"heading-link",children:e.jsx(n.a,{href:"#edit-a-task",children:"Edit a task"})}),`
`,e.jsx(n.p,{children:"TODO"}),`
`,e.jsx(n.h3,{id:"complete-a-task",className:"heading-link",children:e.jsx(n.a,{href:"#complete-a-task",children:"Complete a task"})}),`
`,e.jsx(n.p,{children:"Click on the white square on the left of a task card to complete it."}),`
`,e.jsx(t,{type:"warning",children:e.jsx(n.p,{children:`There is currently no way to "un-complete" a task. I'm thinking about it.`})}),`
`,e.jsx(n.h4,{id:"complete-on-a-different-day",className:"heading-link",children:e.jsx(n.a,{href:"#complete-on-a-different-day",children:"Complete on a different day"})}),`
`,e.jsx(n.p,{children:`Sometimes you forget to check something off that you did the other day - no problem, we can adjust for that.
For the task in question:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Click on the three dots on the right of the task card."}),`
`,e.jsxs(n.li,{children:["Click on ",e.jsx(n.strong,{children:"Complete on a previous day"}),"."]}),`
`,e.jsxs(n.li,{children:["In the calendar dialog, choose the day to complete the task and click ",e.jsx(n.strong,{children:"COMPLETE"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"If applicable, the task will repeat based on this chosen complete date."}),`
`,e.jsx(n.h3,{id:"changing-the-date-of-a-task",className:"heading-link",children:e.jsx(n.a,{href:"#changing-the-date-of-a-task",children:"Changing the date of a task"})}),`
`,e.jsxs(n.p,{children:[`Often, you know you're not going to do something today even though it's on your list. In general, this should be
handled by `,e.jsx(n.strong,{children:"postponing"}),' the task, but the entire date range can also be "shifted" by ',e.jsx(n.strong,{children:"editing"})," the task."]}),`
`,e.jsx(n.h4,{id:"postpone-a-task",className:"heading-link",children:e.jsx(n.a,{href:"#postpone-a-task",children:"Postpone a task"})}),`
`,e.jsx(n.p,{children:'Postponing a task effectively "moves" it to a day in the future without changing its date range. To postpone:'}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Click on the three dots on the right of the task card."}),`
`,e.jsxs(n.li,{children:["Under ",e.jsx(n.strong,{children:"Postpone to"}),', choose one of the quick days or choose "Another day" to choose a specific day.']}),`
`,e.jsxs(n.li,{children:['If "Another day" was chosen, click the target day on the calendar picker dialog then click ',e.jsx(n.strong,{children:"POSTPONE"}),"."]}),`
`]}),`
`,e.jsx(t,{type:"warning",children:e.jsx(n.p,{children:`There is currently no way to "un-postpone" a task. I'm thinking about it.`})}),`
`,e.jsx(n.h4,{id:"change-date-range",className:"heading-link",children:e.jsx(n.a,{href:"#change-date-range",children:"Change date range"})}),`
`,e.jsx(n.p,{children:"This is generally discouraged, but if you want to change the entire date range for a task, you can do so by editing the task:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Click on the three dots on the right of the task card."}),`
`,e.jsxs(n.li,{children:["Click on ",e.jsx(n.strong,{children:"Edit"}),"."]}),`
`,e.jsxs(n.li,{children:["Choose the desired date(s) in the edit dialog then click ",e.jsx(n.strong,{children:"SAVE"}),"."]}),`
`]}),`
`,e.jsx(t,{type:"info",children:e.jsx(n.p,{children:`Considered feature: easier "reschedule" action that keeps the number of days
in the range but moves the start date.`})}),`
`,e.jsx(n.h3,{id:"delete-a-task",className:"heading-link",children:e.jsx(n.a,{href:"#delete-a-task",children:"Delete a task"})}),`
`,e.jsx(n.p,{children:"If a task isn't needed anymore, it can be deleted:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Click on the three dots on the right of the task card."}),`
`,e.jsxs(n.li,{children:["Click on ",e.jsx(n.strong,{children:"Delete"}),"."]}),`
`,e.jsxs(n.li,{children:["Confirm that the title is the one you want to delete then click ",e.jsx(n.strong,{children:"DELETE"}),"."]}),`
`]}),`
`,e.jsx(t,{type:"warning",children:e.jsx(n.p,{children:'There is currently no way to "un-delete" a task. This action is permanent.'})}),`
`,e.jsx(t,{type:"info",children:e.jsx(n.p,{children:`Considered feature: "soft delete" or recycle bin type pattern. When a user
deletes a task, it actually goes to the "Trash" for some set amount of time,
maybe 30 days, before it's deleted for good. During that time, the user can
recover the task from the Trash if it was deleted by accident or another
reason.`})}),`
`,e.jsx(n.h1,{id:"repeating-tasks",className:"heading-link",children:e.jsx(n.a,{href:"#repeating-tasks",children:"Repeating Tasks"})}),`
`,e.jsx(n.p,{children:`One of the most powerful features is repeating tasks - these are tasks that re-occur after a
certain amount of time, like many chores. Examples:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wash the dishes every day."}),`
`,e.jsx(n.li,{children:"Sweep and vacuum the house every 2 to 4 weeks."}),`
`,e.jsx(n.li,{children:"Replace the central HVAC filter every 3 to 6 months."}),`
`]}),`
`,e.jsxs(n.p,{children:['A task is only "repeating" if its ',e.jsx(n.a,{href:"#repeat-interval",children:"repeat interval"})," is enabled."]}),`
`,e.jsxs(n.p,{children:["When in ",e.jsx(n.a,{href:"./views#calendar-view",children:"Calendar View"}),", repeating tasks will be ",e.jsx(n.a,{href:"./views#projected-repeating-tasks",children:"projected"}),` onto
future days.`]}),`
`,e.jsx(t,{type:"info",children:e.jsxs(n.p,{children:[`Keep in mind that repeating tasks will repeat based on when the task is
`,e.jsx(n.strong,{children:"completed"})," and ",e.jsx(n.strong,{children:"do not stack"}),`. For example, take the task "Wash the
dishes" that repeats every day. If you take 5 days to wash the dishes, there
will only be one task for it which will be 5 days overdue, rather than 5 tasks
for it. Once you complete the task, it will repeat starting the next day.`]})})]})}function l(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{l as default};
