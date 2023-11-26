import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold my-8 sm:text-4xl">Blog</h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What are the different ways to manage a state in a React
              application??
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              React's useState is the best option for local state management. If
              you need a global state solution, the most popular ones are Redux,
              MobX, and the built-in Context API. Your choice will depend on the
              size of your project, your needs, and your engineers' expertise
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does prototypical inheritance work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              Everything in Javascript is an object. Even when creating a Class
              is an Object via an Object Literal or Constructor Function. This
              is how Javascript does class-based programming as to other
              traditional Object-Oriented Programming languages where they use
              the keyword ‘class’ and ‘inheritance’.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is a unit test? Why should we write unit tests?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              React vs. Angular vs. Vue?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              React can be used as a UI library to render elements, without
              enforcing a specific project structure, and that’s why it’s not
              strictly a framework.React Elements are the smallest building
              blocks of React apps. They are more powerful than DOM elements
              because the React DOM makes sure to update them efficiently
              whenever something changes.React is based on JavaScript, but it’s
              mostly combined with JSX (JavaScript XML), a syntax extension that
              allows you to create elements that contain HTML and JavaScript at
              the same time.
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              The Vue.js core library focuses on the View layer only. It’s
              called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework. Components in
              Vue are small, self-contained, and can be reused throughout the
              application. Single File Components (SFCs) with the .vue extension
              contain HTML, CSS, and JavaScript so that all relevant code
              resides in one file.
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              AngularJS, the original framework, is an MVC
              (Model-View-Controller) framework. But in Angular 2, there’s no
              strict association with MV*-patterns as it is also
              component-based.Each component in Angular contains a Template, a
              Class that defines the application logic, and MetaData
              (Decorators). The metadata for a component tells Angular where to
              find the building blocks that it needs to create and present its
              view.Angular is built in TypeScript, so its use is recommended to
              get the most seamless experience, but plain JavaScript is also
              supported.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
