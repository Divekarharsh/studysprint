# StudySprint — Student Task Planner

StudySprint is a responsive student task planner built with HTML, CSS, and JavaScript. It helps students organize study tasks, set subjects and priorities, track completion, and save tasks in the browser.

## Objectives
- Build a useful and responsive website.
- Practise Git and GitHub version control.
- Use automated tests to validate core task utilities.
- Integrate a Jenkins CI pipeline that runs tests after code changes.

## Features
- Add tasks with subject, priority, and optional due date.
- Mark tasks as complete or incomplete.
- Delete individual tasks and clear all completed tasks.
- Filter all, pending, and completed tasks.
- View task counts and daily completion progress.
- Persist tasks with browser `localStorage`.
- Responsive layout for desktop and mobile.

## Technology stack
- HTML5
- CSS3
- Vanilla JavaScript
- Node.js built-in test runner
- Git and GitHub
- Jenkins Pipeline

## Project structure
```text
student-task-manager/
├── index.html
├── style.css
├── script.js
├── package.json
├── Jenkinsfile
├── .gitignore
├── README.md
├── tests/
│   └── app.test.js
└── screenshots/
    └── (add your own evidence screenshots here)
```

## Run the website
1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Add a task to verify the basic functionality.

No server is required for the front-end website.

## Run automated tests
Install a current Node.js LTS version. From the project folder, run:

```bash
node --version
npm test
```

The test command uses Node.js's built-in test runner and does not require installing an extra testing package.

## Git and GitHub workflow
Configure Git once on your computer:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Initialize and commit the project:

```bash
git init
git add .
git commit -m "Initial StudySprint website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example remote with your own GitHub repository URL. For each meaningful change:

```bash
git status
git add .
git commit -m "Describe the actual change"
git push
```

## Suggested meaningful commits
Make these commits as you implement and verify each change; do not create commits that misrepresent the work.

1. `Initial StudySprint website structure`
2. `Add responsive styling`
3. `Implement task management and local storage`
4. `Add automated task utility tests`
5. `Add Jenkins CI pipeline and documentation`

## Jenkins CI integration
The included `Jenkinsfile` defines a pipeline that checks out the repository and runs the automated tests. Configure a Jenkins Pipeline job to use your GitHub repository and the `Jenkinsfile` in the repository root.

1. Install and start Jenkins using the official installation instructions.
2. Ensure the Jenkins agent has Git and a compatible Node.js installation available.
3. In Jenkins, create **New Item → Pipeline**.
4. Under Pipeline, choose **Pipeline script from SCM**.
5. Select **Git**, enter your repository URL, and select branch `*/main`.
6. Set Script Path to `Jenkinsfile`, save, and click **Build Now**.
7. Open the build and inspect **Console Output**. Capture a screenshot of a successful test run for your evidence.

If your Jenkins installation uses a different agent or tool configuration, adjust the Node.js setup accordingly. Do not put credentials or secret tokens in the repository.

## Evidence screenshots to add
Save your own screenshots in the `screenshots/` folder and update this list with their filenames:
- `website-desktop.png` — website open in a desktop browser.
- `website-mobile.png` — responsive website on a narrow/mobile viewport.
- `github-repository.png` — repository and folder structure.
- `github-commits.png` — meaningful commit history.
- `jenkins-success.png` — successful Jenkins pipeline and test output.

Screenshots should be genuine captures of your own work. Do not add placeholder images as evidence.

## DevOps workflow
1. Developer updates source files.
2. Git records the changes in commits.
3. GitHub stores the repository.
4. Jenkins checks out the latest code.
5. Jenkins runs automated tests.
6. The build result helps identify problems before submission.

## Limitations
- Tasks are stored in the current browser's local storage, not in a shared database.
- Data does not automatically synchronize between different devices or browsers.
- Jenkins must be configured and run separately; the pipeline is not active merely because the `Jenkinsfile` exists.

## Academic integrity
Personalize the design or add a feature of your own, understand the code, and take your own screenshots and commit history. Follow your instructor's rules for individual work.

## Author
Harsh Divekar
B.Tech CSE(AIML)
TY AIML B 
Roll No. 60

## Features

- Add, complete, and delete student tasks.
- Organize tasks by subject and priority.
- Set due dates for assignments.
- Filter tasks by their status.
- Track task completion progress.
- Save tasks in the browser using localStorage.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js built-in test runner
- Jenkins for CI/CD automation

## Testing

Run the automated tests using:

```bash
npm test
```

