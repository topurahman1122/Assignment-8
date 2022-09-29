import React from 'react';
import './Articles.css'

const Articles = () => {
    return (
        <div className='article-section'>
            {/* How does react work? */}
            <div className='article'>
                <h2>How does react work?</h2>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>

                <p>It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>

                <p>This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>

                <p>The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.</p>

                <p> Whenever there’s a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing.</p>

                <p>By making sure that UI manipulation only affects specific sections of the real DOM tree, rendering the updated version takes less time and uses fewer resources. The practice greatly benefits large projects with intense user interaction.</p>
            </div>

            <div className='article'>
                {/* What is the different between props & state? */}
                <h2>What is the different between props & state?</h2>

                <h3>Props:</h3>
                <p>
                    In React, the term props stands for properties, which refers to the properties of an object. This is because all elements created in React are JavaScript objects. As a result, passing data into a component is done by creating properties and values for the object.</p>

                <p>Understanding how to use props in React can be a little confusing at first due to the unique way it behaves. React props are read-only, that is to say, once the data has been passed to its component, it cannot be changed.</p>

                <p>It may sound like that creates a serious limitation to the use of props in your React code. But it really isn’t, in fact, it adds a layer of protection to both security and performance. Props work through passing data into a component to be used, typically for UI needs.
                </p>

                <h3>State</h3>
                <p>
                    The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. For example, let us think of the clock that we created in this article, we were calling the render() method every second explicitly, but React provides a better way to achieve the same result and that is by using State, storing the value of time as a member of the component’s state. We will look into this more elaborately later in the article.
                </p>

                <ul>
                    <li>Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.</li>
                    <li>States can be used in Class Components, Functional components with the use of React Hooks (useState and other methods) while Props don’t have this limitation.</li>
                    <li>While Props are set by the parent component, State is generally updated by event handlers. For example, let us consider the toggle the theme of the GeeksforGeeks {'IDE'} page. It can be implemented using State where the probable values of the State can be either light or dark and upon selection, the IDE changes its color.</li>
                </ul>
            </div>

            <div className='article'>
                {/* Where useEffect use without data load? */}
                <h2>Where useEffect use without data load?</h2>
                <p>
                    Understanding how the useEffect Hook works is one of the most important concepts for mastering React today. If you have been working with React for several years, it is especially crucial to understand how working with useEffect differs from working with the lifecycle methods of class-based components. In fact, it is a wholesale shift in mindset!
                </p>
                <h3>What are effects, really? Examples are:</h3>
                <ul>
                    <li>Fetching data</li>
                    <li>Reading from local storage</li>
                    <li>Registering and deregistering event listeners</li>
                </ul>
            </div>
        </div>
    );
};

export default Articles;