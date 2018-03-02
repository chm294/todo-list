# To Do Application
Simple To Do List Application Using React


## Implementation

#### The application follows a top-down unidirectional data flow

#### App.js
+ The high-up component that the lower components receive props from and report state change to with functions such as handleNewTask when new tasks are added or deleteTask when tasks are deleted upon click
+ Holds state of all done and undone tasks in an object
+ Holds count for tasks done and tasks undone

#### Input.jsx 
+ The only "smart" or "container" component that detects state change from the user as a new task is typed and submitted

#### todoList.jsx & accomplishedList.jsx
+ These List components map the tasks down to **todoEntry.jsx** and **accomplishedEntry** respectively to render each individual task item as an individual component with a click-handler to toggle its done / undone state in App.js