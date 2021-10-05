# udemy-microfrontends-with-react

Code for Steven Grider's Udemy Course "Microfrontends With React"

## section-01

A very generic microfrontend app with a container, cart, and products. All built in vanilla JS with Webpack in support.

## section-04

The second project in the course. A not-so-generic microfrontend with simulated auth and marketing built in React, a dashboard in Vue, and a container in plain JS. There are some project requirements:

- No coupling between child projects
- Near-zero coupling between container and child apps
- CSS from one project shouldn't affect any of the others
- Version control (monorepo v. separate) shouldn't have any impact on the overall project
- Container should be able to decide to always use the latest version of a microfrontend **or** specify a specific version

Based on all of these requirements, we also have to set up a GIT monorepo, and deploy to Amazon S3 and Cloudfront using Git Actions for CI/CD -- pretty cool! The app also covers CSS library coverage, navigation, authentication, and other small goodies.

Note: The application login _only_ handles changing the state of login, and that's it. It does not set levels or authenticate or anything else. This should be kept loosely coupled for security reasons, namely it's only one place to go to handle all of the cases of someone browsing directly to, say, marketing instead of the container.

A great course overall. Be sure to look in the Q&A if you can't get something working. There were a couple of bugs that weren't covered in the videos.
