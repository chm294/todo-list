# To Do Application
Simple To Do List Application built with React

## Instructions
+ type in the insert new task bar to add new task items
+ hover over your entries to highlight; click to move the items when they are done
+ accomplished items will appear in a separate list below


## Implementation
The application follows a top-down unidirectional data flow

#### App.js
+ This is the high-up container that other lower components receive props from and report state change to
+ Holds state of all done and undone tasks in an object
+ Holds count for tasks done and tasks undone

#### Input.jsx 
+ detects state change from the user as a new string is typed and submitted
+ passes submitted strings up to App.js

#### todoList.jsx & accomplishedList.jsx
+ These List components map the tasks down to **todoEntry.jsx** and **accomplishedEntry** respectively to render each  task item as an individual component with a click-handler to toggle its done / undone state in App.js
