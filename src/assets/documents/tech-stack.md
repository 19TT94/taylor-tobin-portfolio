# Choosing The Tech Stack

- - - 

[Article in the Wild](link-to-article) by [Taylor Tobin](https://ttobin.com)

Everyone has an opinion about their tech stack. They have opinions about the languages involved, methodologies used, formatting down to single or double quotes and every other minutiae you can think of. However, there seems to be so little information on how to choose a tech stack. A simple google search usually only yields "choose what you have the most knowledge in". I think this only scratches the surface of the considerations that should be made. And despite popular belief I don't think this single mantra is always the best call.

This article is meant to give one developer's take on how to choose your tech stack and *choose it well*. We will go over a broad overview of the decision making process along with a case study for a project that I am currently working on.

## Background

This section of the article will provide a brief overview of what a Tech Stack is along with some typical stacks and descriptions. If you don't need this refresher please continue to the [Overview](#Overview) section.

### What is a Tech Stack?

A *Tech Stack* is the group of technologies chosen to implement a software project. This usually consists some or all of the following; a Virtual Machine, Web Server, Database Client, Server Side Framework and a Client Side Framework.

The *MEAN* stack for example is a popular stack that consists of a non-relational database called **M**ongoDB, **E**xpress.js, **A**ngularJS and **N**ode.js. This stack doesn't specify the Virtual Machine or Web Server. Typically a MEAN Stack would use [Nginx](https://www.nginx.com/) and [Docker](https://www.docker.com).

Another popular stack is known as the *LAMP* Stack and it is really more of a blueprint or categorization for many stacks. This consists of a stacks using **L**inux, **A**pache, **M**ySql, and **P**HP. An example Lamp Stack implementation might include [Vagrant](https://www.vagrantup.com/),[Apache](https://www.apache.org/), SQL and [Laravel](https://laravel.com/).

The purpose of determining a stack is to have a blueprint for how you will build your project. Determining the stack before implementation will help you understand the components involved in building your project.

## Overview

This section of the document will cover the steps I take to choose and evaluate Tech Stacks. Keep in mind that choosing a tech stack will ultimately be a personal or team decision. As frustrating as it might there are many equally valid options for each problem at hand.

Generally my decision breaks down to choosing the best tool for the job at hand combined with leveraging developer experience. I am not going to suggest that the tech stack that I choose is any better than any other tech stack. I only hope to outline the decisions involved and provide an explanation for my process.

Before making any decisions I suggest starting with a Braindump. By that I mean an old fashioned list. Just start writing everything you think should be considered prior to development. This should include things like developer experience, business requirements, features that require specific tech and even interests. Once you have this list there are several considerations I use for whittling down the list.

The first consideration in choosing a tech stack is identifying your options. Options, for me, include the experience, preference and interests of the development team along with tech that research has proven to work. This goes back to the generic answer of "use what you're good at". While I think this is a good suggestion it may not always be the single source of truth. Based on your experience you can determine the available technologies at your team's disposal. Compile a list of all your technologies you could use and some brief reasoning. I suggest that you break down the options based on frontend, backend, database and server tech or however it makes sense to you. Fill in any gaps with a technology that can be outsourced, your team could/would be interested in learning and/or research has shown would be a good solution.

The second consideration is the timeline. If you have a strict timeline or short turnaround that should help you eliminate technologies right off the bat based on experience and resources. If you are one of the rare few blessed with a longer timeline or more resources this stage may not effect your list much at all.

The third consideration is determining your MVP. This may be third, but it is probably the most important. In order to effectively choose a tech stack you need to know what you're building. For example, what if your project revolves around machine learning? It may make sense for you to choose Flask, which is a python based framework. Based on the [Best Languages For Machine Learning in 2020](https://becominghuman.ai/best-languages-for-machine-learning-in-2020-6034732dd242#:~:text=Python%20is%20the%20leader%2C%20with,wide%20selection%20of%20other%20libraries.) Python is the leading choice of data science and machine learning developers with 57% usage. If you have a larger team or a more complex application requirement, you may consider Django which is a more robust python framework. MVP should really narrow down your tech stack options and be the main consideration. Use whatever strategy you see fit for identifying your MVP or reference this [Article]() if your interested on my take.

Once you have gone through the considerations above you should have a fairly small amount of options left. In order to make these final considerations I suggest that you think about how the product will evolve beyond the MVP. Use cases that may be beyond the scope of v.1 may still add some weight to your early decision making process. A common example of this is if your project will be a web app, but needs to have a mobile app option later on. Using a framework frontend framework like [React](https://www.react.org) or [Vue](https://vuejs.org/) would be a good idea because they have Native JS solutions; NativeScript for Vue and React Native for React. Both framework's web components transfer nicely to native components. This means the transition will be a lot more straightforward and no new languages would be required. Everything is Javascript.

Hopefully this strategy has clarified my approach to choosing a tech stack for a project. The next section will provide a case study for the project that sparked the creation of this article.

## Case Study

### Background

*Consider the following scenario:*

I was tasked with building a web app to create portals for operating Water/Wastewater treatment plants using check sheets, reporting, data visualization, a connection to Zoho APIs and integration with SCADA systems.

Now that we have identified a broad project scope we can begin to consider what will factor into choosing a tech stack. The first step I take is a brain dump of the factors I want to take into consideration.

### Brain Dump
* lone wolf
* mobile app down the road
* data heavy
* archives - data lifespan
* maintainability/extensibility
* searching/sorting
* security
* accuracy
* error reporting
* crons
* clear easy ui
* SCADA integration

### Options

Now that I have brain dumped, I can start listing any and all technologies I would consider using for the project based on my team's experience (me in this case), interests, and research.

The first factor that ways on my options from the brain dump is that I am a lone wolf on this project. I will be the only developer (at this time) so it is a good opportunity for me to branch out with new technology if it is the best tool. This is why there are options that I don't have a lot of experience in on the list.

For me, the options breaks down as follows:

Frontend Tech Knowledge:
* Vue (very knowledgable)
* Ember (knowledgable)
* React (somewhat knowledgable)

Server Side Tech Knowledge:
* Laravel (very knowledgable)
* Node (somewhat knowledgable)
* Django (I know some python)
* Flask (I said I know some python)

Database Knowledge:
* mySQL (knowledgable)
* MongoDB (I think I understand non-relationable databases still not sure I've ran into a application **trigger)

Virtual Machine:
* Vagrant (knowledgable)
* Docker (I should probably learn this if I want anyone to take me seriously)

Developer Experience / Technology Options:
* typical stack: AWS, Vagrant, Apache, SQL, Laravel, Vue, Sass
* most backend experience in PHP
* most frontend experience in Vue.js
* passable knowledge in React
* general knowledge of Python, Javascript
* Docker and Kubernetes is the latest and greatest way to deploy code. Allows for clusters and easily deployable instances of code.

Potential Stack Combinations:
* AWS, Docker, Nginx, Flask, SQL, React
* AWS, Docker, Nginx, Flask, SQL, Vue
* AWS, Docker, Nginx, Django, SQL, React
* AWS, Docker, Nginx, Django, SQL, Vue
* AWS, Docker, Nginx, Node/Express, SQL, React
* AWS, Docker, Nginx, Node/Express, SQL, Vue
* AWS, Vagrant/Homestead, Nginx, Laravel, SQL, Vue

### Timeline

Now that I have my tech stack options, I'm going to go use my strategy to start to weed out some tech.

The next thing to consider is the thing that will mean most to your stakeholders, timeline. In my case, for once, the I have fairly flexible timeline and making the right decisions early on has more priority. I have the ability to provide what I think is a realistic timeline for project completion along with a fair bit of time for planning. This means that my focus will be more on what is the best tool for the job and less on what I know best to get it done fast.

Because I am lucky with my timeline, it really didn't eliminate any options from the list, so we will move on.

### MVP

Now we can consider the MVP. I gave a general outline of the project scope for the MVP in the scenario description, but I will go into some more detail about which of the feature are factors for my tech stack.

#### Maintainability/Scalability

I want this app to be very maintainable and scaleable, so I made the decision to create a [^SPA] for the frontend component of the application and a RESTful api to handle the backend interactions. This because any subsequent versions could use the API and any additional features or separate projects could leverage that api.

This decision can eliminate a few options. I now know that I don't really want to use a server side frameworks templating language. It also means that the api itself will not be as robust an app as if I were handing page rendering on the server side.

Because of this I can eliminate Laravel and it's blade templating language. I also didn't really want to use PHP for this project, so two birds. I also know that if I choose Flask, I won't be using the Jinja templates, which is fairly easy to remove from a flask setup. Django has it's own templating language in the framework, so I can actually eliminate this as an option as well.

Server Side Tech Knowledge:
* ~~Laravel~~ (very knowledgable)
* Node (somewhat knowledgable)
* ~~Django~~ (I know some python)
* Flask (I said I know some python)

This leaves me with two server side options; Flask and Node. Both support api development and integrate well with React or Vue.

#### SCADA Connection

This project is going to need to directly integrate with SCADA[^SCADA] systems. The SCADA system is the system responsible for pulling data off sensors within the facilities. A SCADA system uses a PLC[^PLC] to interface with these sensors and most will have a third party system to interface with the HMI (Human Machine Interface). 

SCADA systems are monitoring tons of data in real time. Our app needs to be able integrate with these systems and process a lot of data.

I learned that beyond integrating with third party software proprietary to many SCADA systems, you can also connect directly to a PLC in both Node and Flask.

Flask has more support for the packages that integrate with PLCs and I learned of the possibility of this connection from a talk at PyCon in 2018. It seems to have more community support and active users that its Node counterpart.

I am still very torn between Flask and Node however. Node is great because all parts of the app would be relying on Javascript. This is a good idea, because there is less complexity overall. It also makes onboarding new developers easier, because as long as the developer has good fundamentals and understands Javascript, they should be able to wrap their head around any aspect of the application.

Ultimately I decided to go with python because of a few good reasons and a few selfish reasons. 

The good reasons are, it is a practical language for data science, machine learning, SCADA Integration and a lot of smart people are using it. The selfish reasons are I want to be more well versed in python for future projects and opportunities.

Server Side Tech Knowledge:
* ~~Laravel~~ (very knowledgable)
* ~~Node~~ (somewhat knowledgable)
* ~~Django~~ (I know some python)
* Flask (I said I know some python)

### Big Data / Archives

Choosing the database started off as an easy decision. I know SQL well I should use mySQL. Also, because I am modeling the Facilities for the portal if fits neatly into an Object Oriented approach. This eliminated MongoDB for me for this project.

The only other consideration was during my research about Docker. I came across a container for PostgreSQl and determined that it has some community support and additional features that my be nice to have in the future. It isn't that far off from a standard mySQL database so it won't be too hard to switch to. Therefore, PostgreSQl you win on this one.

And there you go, we have our Tech Stack. There were definitely more considerations that I'm not going to dig too far into. I'm sure you'd like to do something else with your day.

Database Knowledge:
* ~~mySQL~~ (knowledgable)
* postgreSQL (somewhat knowledgable)
* ~~MongoDB~~

### Maintainability/Extensability Pt. 2

Here is a short and sweet one. I want to use Docker event though I am more familiar with Vagrant for deployment. It is every maintainable and reusable. I am going to learn and use Docker.

Virtual Machine:
* ~~Vagrant~~ (knowledgable)
* Docker (I should probably learn this if I want anyone to take me seriously)

### Goals/Future Scope

Operators will mostly be completing their check sheets on a mobile device (iPhone or iPad) this means that to provide the best experience we will need a mobile app someday. You may have notices I didn't list Swift or Java in the technologies above. I am knowledgable in Java and C++, but it's been a while. I don't have production mobile development experience and I'm not too interested in learning Swift or Java for Android.

This leaves me with two choices. NativeScript using Vue, which was the frontend framework I considered myself most proficient in and React Native which is by far the most popular framework for building JS based mobile apps. This eliminates the use of Ember for me. Ember has a small community and a steep learning curve, but I'm sure I'll find a use case to go back to it some day.

This choice would ultimately lead me to choose React, sorry Vue still love you. The reason for this is because I decided that the community support and usage were more important than the fact that I knew more Vue. I am familiar with the basics of React and confident I could learn what I needed from the docs. React also has the benefit of being a popular language to hire for and it integrates well with a micro service tool provided by Zoho called Catalyst.

Frontend Tech Knowledge:
* ~~Vue~~ (very knowledgable)
* ~~Ember~~ (knowledgable)
* React (somewhat knowledgable)

## Conclusion

We are finally here. I've stopped rambling and we have ourselves a Tech Stack; React, Flask, Postgres, Nginx, Docker. Choosing a Tech Stack is not an easy task and I don't think it should be taken lightly. The choices you make at the beginning of a project can haunt you down the road. Identifying your skillset and your MVP should help you determine a good list of tech for any project. However, what will really help you make the right decision is thinking about long term product goals, the maintainability and scalability of the technology based on community support and trends and what will keep you interested in working on the project. I hope that this long winded explanation of my process helps you to build systems you are proud of. Thanks for reading!

+++
## Tl;Dr

I think people oversimplify their advice for how to choose a Tech Stack and I had a hard time finding anyone outlining the real considerations in their decision making process. Though "use what are experienced in" is a good consideration, it isn't all that should be considered. I like to make the decision for choosing a tech Stack by considering my experience, my timeline, the MVP, future scope and what the team wants to learn.

## References:
* [Comparing Flask and Node](https://www.quora.com/What-advantages-would-Python-Flask-have-over-Node-using-Express-when-developing-a-web-application)
* [Deeper Dive Flask and Node](https://sweetcode.io/espressjs-flask-sweetcode-app-dev/)
* [Best Languages For Machine Learning in 2020](https://becominghuman.ai/best-languages-for-machine-learning-in-2020-6034732dd242#:~:text=Python%20is%20the%20leader%2C%20with,wide%20selection%20of%20other%20libraries.)
