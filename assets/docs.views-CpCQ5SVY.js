import{j as e}from"./jsx-runtime-BNSfpw-k.js";import{C as i}from"./Callout-PcGz6LIP.js";import"./index-BPUlVCl8.js";function s(n){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"views",className:"heading-link",children:e.jsx(t.a,{href:"#views",children:"Views"})}),`
`,e.jsx(t.p,{children:"There are multiple views of tasks that LyfeSchedule offers."}),`
`,e.jsx(t.h2,{id:"calendar-view",className:"heading-link",children:e.jsx(t.a,{href:"#calendar-view",children:"Calendar view"})}),`
`,e.jsxs(t.p,{children:[`This is the main task view. Click a day in the calendar to view the tasks assigned to that day.
Repeating tasks will be "`,e.jsx(t.a,{href:"#projected-repeating-tasks",children:"projected"}),'" onto future days.']}),`
`,e.jsx(t.p,{children:"TODO instructions on the calendar widget? Like that you can click the month to drill up?"}),`
`,e.jsx(t.p,{children:"Tasks are sorted by descending priority (highest priority is at the top)."}),`
`,e.jsx(i,{type:"info",children:"Planned feature: different sort modes"}),`
`,e.jsx(t.h3,{id:"projected-repeating-tasks",className:"heading-link",children:e.jsx(t.a,{href:"#projected-repeating-tasks",children:"Projected repeating tasks"})}),`
`,e.jsx(t.p,{children:`LyfeSchedule automatically "projects" repeating tasks into the future. This means that a repeating
task's configuration and current conditions are used to calculate the next time it will appear. These are
the assumptions made in order to calculate this:`}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"If the task is on today's list, we assume it will be completed today."}),`
`,e.jsx(t.li,{children:"If the task is in the future (based on its date(s) or postponements), we assume it will be completed that day."}),`
`]}),`
`,e.jsx(i,{type:"info",children:e.jsx(t.p,{children:`Considered feature: allow the user to configure this projection calculation,
for example by using the average complete date instead of the first available
complete date.`})}),`
`,e.jsx(i,{type:"info",children:e.jsx(t.p,{children:`Considered feature: for a given repeating task, show a list of the next
projected repeat dates.`})}),`
`,e.jsx(t.h2,{id:"all-tasks-view",className:"heading-link",children:e.jsx(t.a,{href:"#all-tasks-view",children:"All tasks view"})}),`
`,e.jsx(t.p,{children:"All of your tasks are displayed in this view. They are sorted in order by their start date."}),`
`,e.jsx(i,{type:"info",children:"Planned feature: different sort modes"})]})}function d(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default};
