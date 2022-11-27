import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-full shadow-xl bg-green-100 my-14 mx-30 p-2">
  <div className="card-body">
       <h2 className='text-2xl font-bold'>1. What are the different ways to manage a state in a React application.?</h2>
       <p className='text-xl'>There are four main types of state you need to properly manage in React apps:</p>
       <ol className='font-bold text-xl'>
      <li> a.Local state</li>
        <li>b.Global stat</li>
         <li>c.Server state</li>   
        <li>d.URL state</li>
       </ol>
       <p>Let's cover each of these in detail:</p>
       <p><span className='font-bold text-xl'>Local (UI) state-</span>Local state is data we manage in one or another component. </p>
       <p>Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
       <p><span className='font-bold text-xl'>Global (UI) state-</span> Global state is data we manage across multiple components.</p>
       <p>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
       <p><span className='font-bold text-xl'>Server state-</span>Data that comes from an external server that must be integrated with our UI state.</p>
       <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>
       <p><span className='font-bold text-xl'>URL state-</span> Data that exists on our URLs, including the pathname and query parameters.</p>
       <p>URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>

  </div>
</div>

<div className="card w-full bg-green-100 shadow-xl  mx-30 p-2">
  <div className="card-body">
    <h2 className="text-2xl font-bold">2.How does prototypical inheritance work?</h2>
    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
    
  </div>
</div>

<div className="card w-full bg-green-100 shadow-xl my-14 mx-30 p-2">
  <div className="card-body">
    <h2 className="text-2xl font-bold">3.What is a unit test? Why should we write unit tests?</h2>
    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>
    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
   
  </div>
</div>
<div className="card w-full bg-green-100 shadow-xl mb-16 mx-30 p-2">
  <div className="card-body">
    <h2 className="text-2xl font-bold">4.React vs. Angular vs. Vue?</h2>
    <p>Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: 

<p className='font-semibold'>“The modern web developer’s platform”</p>

It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.</p>
<p>React is considered a UI library. They define themselves as:

<p className='font-semibold'>“A JavaScript library for building user interfaces”</p>

Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.</p>
<p>Last but not least, Vue.js is, according to its site:

<p className='font-semibold'>“A progressive JavaScript framework”</p>

Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.

 </p>
 <p className='font-semibold py-2'>According to the NPM trends, React, Angular and Vue.js are the most downloaded frameworks of JavaScript but the battle between these frameworks will continue in 2022. If we estimate the downloads of all three web development frameworks from the last 2 years, undoubtedly React is leading while Vue.js downloads prove to be higher than Angular.</p>
   
  </div>
</div>
        </div>
    );
};

export default Blog;
