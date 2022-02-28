# Table of content

- Git
- Getting Started with Create React App

# Git

## Quick step by step on how to Git:
These are just suggestions on what git commands to use to up your Git game.

### Create a new branch

Note: Make sure you are working in your _own_ branch and not directly in Main branch.

`git branch <name_of_your_branch>`
*This will create a new branch.*

### Switch to a different branch

`git checkout <name_of_the_branch_you_want_to_jump_to`

### Commits and push
a simple step by step on how to commit and push your latest updates

1. Start by typing:
`git status`
*this will show you uncommited files in red and already commited files in green.*

2. Add the files you want to commit:
`git add <name_on_the_file>`
*if you want to add a specific file*

or

`git add .`
*this will add all uncommited files*

3. `git commit -m "type_a_meaningful_message"`

4. `git push origin <name_on_your_branch>`

5. If no error occured then you are Done!

### Check on wich branch you are curently at

`git branch`

or

`git branch -a`
*This will show local and remote branches*

### Merge

***TLDR: Fix conflicts on your local working branch BEFORE merging into Main branch. By doing so, hopefully it will result in less headache. =)***

1. Before merging into main: make sure your local Main branch is upp to date with the latest by doing a: `git pull` from your local Main branch.

Steps:
```
git checkout main
git pull orgin main
````

2. Go back to your working branch then do a git merge main and solve conflicts

Steps:
`git checkout` -your local branch name-
`git merge main`

    - solve any conflicts and test the website to make sure it works properly. Then commit any changes you made, then push.

`git commit -m "come up with a explaining message"`
`git push origing` -your local branch name-

3. When all conflicts are solved and everything is pushed, head back to Main branch to merge your working branch into Main branch.

Steps:
```
git checkout main
git merge -your local branch name-
git push origin main
```

4. Test the website and make sure it is working properly. Done!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
