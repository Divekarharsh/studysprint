# StudySprint — Student Task Planner

StudySprint is a responsive student task planner built using HTML, CSS, and JavaScript. It helps students organize study tasks, set subjects and priorities, track task completion, and save tasks directly in the browser.

## Objectives

- Build a useful and responsive student task planner.
- Learn Git and GitHub version control.
- Use automated tests to check core task utilities.
- Integrate Jenkins for Continuous Integration (CI).

## Features

- Add tasks with a subject, priority, and optional due date.
- Mark tasks as complete or incomplete.
- Delete individual tasks.
- Clear all completed tasks.
- Filter tasks by All, Pending, and Completed.
- Search and organize study tasks.
- View task counts and completion progress.
- Save tasks using browser `localStorage`.
- Responsive design for desktop and mobile screens.

## Technologies Used

- **HTML5** — webpage structure.
- **CSS3** — styling and responsive layout.
- **JavaScript** — task management and application functionality.
- **Node.js** — running automated tests.
- **Git and GitHub** — version control and source code hosting.
- **Jenkins** — Continuous Integration pipeline.

## Project Structure

```text
studysprint/
├── index.html
├── style.css
├── script.js
├── package.json
├── Jenkinsfile
├── .gitignore
├── .gitattributes
├── README.md
├── tests/
│   └── app.test.js
└── screenshots/
    ├── 01-GitHub-Repository.png
    ├── 02-GitHub-Commits.png
    ├── 03-Jenkins-Pipeline-Success.png
    ├── 04-Jenkins-Console-Output.png
    └── 05-StudySprint-Website.png
```

## How to Run the Website

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Add a task and test the available features.

No web server is required for the basic front-end application.

## Running Automated Tests

Install Node.js first. Open a terminal in the project folder and run:

```bash
node --version
npm test
```

The tests use Node.js's built-in test runner, configured through `package.json`.

## Git and GitHub Workflow

Check the current Git status:

```bash
git status
```

Add and commit your changes:

```bash
git add .
git commit -m "Describe the actual change"
```

Push changes to the GitHub repository:

```bash
git push origin master
```

Use meaningful commit messages that describe the changes you actually made.

## Jenkins CI Integration

StudySprint uses a `Jenkinsfile` to define a Continuous Integration pipeline that checks out the project and runs automated tests.

### Steps to Configure Jenkins

1. Start Jenkins on your computer.
2. Ensure Git and Node.js are available to the Jenkins agent.
3. Open the Jenkins dashboard.
4. Create a new item named `StudySprint-CI`.
5. Select **Pipeline** as the job type.
6. Under Pipeline, select **Pipeline script from SCM**.
7. Select **Git** and enter the repository URL:

   `https://github.com/Divekarharsh/studysprint.git`

8. Set the branch to `*/master`.
9. Set Script Path to `Jenkinsfile`.
10. Save the configuration and click **Build Now**.
11. Open the build and check the Console Output for the result.

A successful build indicates that the configured pipeline completed successfully. Check the test output to confirm whether the automated tests passed.

## Evidence Screenshots

The `screenshots/` folder contains evidence of the project and its development workflow.

1. `01-GitHub-Repository.png` — GitHub repository and project files.
2. `02-GitHub-Commits.png` — Git commit history.
3. `03-Jenkins-Pipeline-Success.png` — successful Jenkins pipeline.
4. `04-Jenkins-Console-Output.png` — Jenkins build console output.
5. `05-StudySprint-Website.png` — running StudySprint website.

## DevOps Workflow

1. The developer makes changes to the source code.
2. Git tracks the changes through commits.
3. GitHub stores the source code in a remote repository.
4. Jenkins checks out the latest code.
5. Jenkins runs the configured automated tests.
6. The build result helps identify problems during development.

## Limitations

- Tasks are saved in the current browser's local storage.
- Task data is not automatically synchronized between devices or browsers.
- The application does not use a shared database or user authentication.
- Jenkins must be configured separately to run the CI pipeline.

## Future Enhancements

- Add user login and authentication.
- Store tasks in a database.
- Add reminders for upcoming deadlines.
- Synchronize tasks across devices.
- Add weekly study schedules and reports.

## Author

**Harsh Divekar**  
B.Tech — Computer Science and Engineering (Artificial Intelligence and Machine Learning)  
TY-B CSE (AIML)  
Roll No. 60

## Conclusion

StudySprint provides a simple way for students to organize academic tasks and monitor their progress. The project demonstrates front-end web development, version control using Git and GitHub, automated testing with Node.js, and CI integration using Jenkins.
