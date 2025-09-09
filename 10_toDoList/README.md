To-Do List App
A simple and lightweight To-Do List application built  with HTML,CSS and JAVASCRIPT.
This project allows users to add tasks,remove tasks and mark as complete, with localStorage support to persist tasks across browser sessions.

Features
* Add new tasks
* Remove tasks
* Mark tasks as complete/incomplete(toggle)
* Save tasks in localStorage so they stay even after refreshing

Project Structure

To-Do-List/
|
|---index.html # Main HTML structure
|---style.css  # Styling for the app
|---script.js  # Javascript functionality
|---README.md  # Project documentaion

--> How It Works
1. Enter a task in the input field and click Add.
2. The task will appear in the list with a Remove button.
3. Click on a task to mark it as complete(line-through effect).
4. Tasks are stored in localStorage, so they remain after refreshing.

Technologies Used 
* HTML - structure
* CSS  - styling
* Javascript- logic & DOM manipulation
* LocalStorage - persistence

Future Enhancements 
* Edit task inline
* Add start,pause, resume time for tasks
* Add due dates and reminders
* Task filters (All,Completed,Pending)