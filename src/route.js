import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import CoursePage from './components/course/coursePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="about" component={AboutPage}></Route>
        <Route path="courses" component={CoursePage}></Route>
    </Route>
);