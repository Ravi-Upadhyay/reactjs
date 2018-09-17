# Learn React - Tutorial: 

This is repository made in pocess of learning React. I have followed one pluralsight tutorial which has redux included in it.

## Index:
- Environment setup
    - Starter kits to use
    - Developing starter kit yourself
- Browser setup
    - React developer tool
    - Redux devtools

## Environment setup - React starter kit:

### Starter kits to use:

1. [React starter kit - React-slingshot - cory house](https://github.com/coryhouse/react-slingshot)
2. [React starter kit - Specific to course - modified slingshot](https://github.com/coryhouse/pluralsight-redux-starter)

### Developing starter kit for react and redux:

##### Objectives: 

The objectives are to meet these requirements to have a complete and powerful environment setup
which will address all needs of application development.

1. Automated testing
2. Linting
3. Minification
4. Bundling
5. JSX compilation
6. ES6 transpilation
7. One command to do this

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


## Browser setup - Tools in your help
//TODO: Describe browser dev tools properly

1. [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)
2. [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en)
