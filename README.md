# React JS - Starter Application: 

This is starter application of react js. This is seed application made while learning react. Thanks @coryhouse whose tutorial has
been followed to create this repository.

> This project is complete setup including application, server setup, lint setup, test setup, npm scripts and Webpack configuration for complete solution just run `npm start` and everything will fire up. However it is a part of tutorial I was following may have some imperfections.

## Index:
- Objective
- Architecture
- Environment setup
    - Starter kits to use
    - Developing starter kit yourself
- Browser setup
    - React developer tool
    - Redux devtools

## Objective:

The objectives are to meet these requirements to have a complete and powerful environment setup
which will address all needs of application development.
  

1. Automated testing
2. Linting
3. Minification
4. Bundling
5. JSX compilation
6. ES6 transpilation
7. One command to do this

## Architecture:

```
|- Application root
|---- src
    |---- components                    // Components, All pages/Components
        |---- home
            |---- homePage.js
        |---- about
            |---- aboutPage.js
        |---- app.js                    // Appshell/Layout
    |---- styles                        // CSS styles
        |---- style.css                 
    |---- index.html
    |---- index.js                      // All connections made here
    |---- route.js                      // Routing configuration
|---- tools                             // It will contain configuration of other utilities (i.e. server, test)
    |---- srcServer.js                  // Configuration of server
    |---- startMessage.js               // Message to display (pre-start)
    |---- testSetup.js                  // Configuration of test environment
|---- .babelrc                          // Configuration of babel
|---- .eslintrc                         // Configuration of eslint
|---- .gitignore
|---- package.json                      // Packages and NPM Scripts
|---- webpack.config.dev.js
|---- README.md
```

## Environment setup - React starter kit:

### Starter kits used:

1. [React starter kit - React-slingshot - cory house](https://github.com/coryhouse/react-slingshot)
2. [React starter kit - Specific to course - modified slingshot](https://github.com/coryhouse/pluralsight-redux-starter)

### Developing starter kit for react and redux:

##### Libraries:

What kind of libraries we will use.Offcourse we will use React and Redux. React router (V-2.4.0)

1. **React** - Offcourse we are building react application *(V-15.0.2)*
2. **Redux** - Defacto standard for state/data management *(V-3.5.2)*
3. **React-Router** - For front end routing of our application *(V-2.4.0)*
4. **Babel: ES2015/ES6** - Transpile ES6 to ES5. *(V-6.0)*
5. **Babel-polyfills** - Polyfills the features of ES6. 
6. **Webpack** - A popular bundler tool. Extremely powerrful and useful. *(V-1.13)*
7. **Mocha** - testing framework 
8. **ESlint** - Lint javascript

##### Hot reloading:

// TODO: Describe hot reloading properly

There are many ways to achieve and the ways may change in the future. We will use **babel-preset-react-hmre**. There are some points to be taken care of about hot reloading.

- It is Experimental. May have better options.
- Does not load functional components.
- Does not load container functions like **_mapStateToProps_**
- I have seen in some online platforms, It can cause loops and browser may hang in case of you are working on some looping structure.
- Other options exists.

##### NPM scripts: 
//TODO: Describe NPM scripts properly 
Here we will discuss why it is better to use npm scripts over other options as gulp.

- React community endorse it. 
- Simple to learn and use.
- No extra layer of abstraction.
- Simpler debbuging.
- Better documentation.

##### Unit Testing:
//TODO: write about unit testing and libraries used

##### Routing: 
//TODO: write about routing

- We have used React Router.
- To configure router properly process includes.
    1. `route.js` file where we list and link our routes.
        * We have `Route` and `IndexRoute` which will be use to list the routes.
        * We can have nested routes.
        * We link routes and components.
        * Export `Route` component.
    2. `app.js` file which will act as layout/appshell.
        * It will be shell to the app. Where static/common layout (i.e. Header and Footer) as well as dynamic (i.e. main content based on route path).
        * It will display `children` of `props` which it will get based on `route`.
    3. `index.js` file which will connect all the pieces.
        * It will consume all routes described in `route.js`.
        * It will utilize `Router` and `browseHistory` from `react-router`
        * It will link `<div id="app">` element and `browseHistory` to the `Router` element.


## Browser setup - Tools in your help
//TODO: Describe browser dev tools properly

1. [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)
2. [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en)
