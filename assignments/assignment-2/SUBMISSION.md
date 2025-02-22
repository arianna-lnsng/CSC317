# CSC 317 Assignment 2 Submission

**Name:** Arianna Lansang
**Student ID:** 903307512  
**GitHub Username:** arianna-lnsng  
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
The objective of this assignmenet to was to familiarlize ourselves with HTML5 webpages and writing good, readable code with the proper semantics. 



## Approach / What I Did:
I started by following the instructions for the assignment in the order they were wrirren, then as we learned more in class, I adjusted different parts of the code to accomodate what I thought was better. Toward the end, I moved things around and made sure my semantics made sense.  



## Code Explanation:
These anchor tags link different parts of the webpage. Following the example we were shown in class, I was able to use this feature on my assignment to navigate to certain parts of the page using the ids declared in the later portions of the site. I put these in an unordered list because it seemed the most approriate.


```html
<nav class = "nav-links">
<!-- links to navigate the webpage -->
    <ul>
        <li><a href = "#about">About</a></li>
        <li><a href = "#projects">Projects</a></li>
        <li><a href = "#skills">Skills</a></li>
        <li><a href = "#education">Education</a></li>
        <li><a href = "#contact">Contact</a></li>
    </ul>
</nav>
```

Here is how I set up the projects portion. I used h2 to title it, and within the articles I chose h3's as subheadings to label the projects. I also added paragraphs to provide a subtitle for descriptions.

```html
        <section id = "projects">
            <!-- projects section -->
            <h2>Projects</h2>
            <article class = "project-card"> 
                <h3>Cache Manager</h3>
                <p>C++ Hashmap, Doubly Linked List, and BST integration made for CSC 340</p>
            </article>
            <article class = "project-card"> 
                <h2>Spotify Tracker</h2>
                <p>(description for totally real project that exists)</p>
            </article>
            <article class = "project-card"> 
                <h2>Portfolio Webpage</h2>
                <p>Webpage made for CSC317 using HTML5 and CSS(soon)</p>
            </article>
        </section>
```

Similarly, I looked through what we did in class, and formatted my table accordingly. I put it through ChatGPT to check if it thought I should change anything, and it said I should add <thead> and <tbody> tags, which I found myself agreeing with.

```html
            <!-- relevant coursework -->
                <section class = "coursework-table">
                    <table>
                        <thead>
                            <th>Course Number</th>
                            <th>Course Name</th>
                            <th>Description</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CSC 101 / CSC 215</td>
                                <td>Intro to Computing / Intermediate Programming</td>
                                <td>Harness necessary skills in logic, problem-solving, and developer environments using Java.</td>
                            </tr>
                            <tr>
                                <td>CSC 220</td>
                                <td>Data Structures and Algorithms</td>
                                <td>Foundational knowledge of abstract data types and different searching methods.</td>
                            </tr>
                            <tr>
                                <td>CSC 317</td>
                                <td>Introduction to Web Development</td>
                                <td>Gain skills in web development using HTML5, CSS, Javascript, and Postgres.</td>
                            </tr>
                            <tr>
                                <td>CSC 340</td>
                                <td>Programming Methodology</td>
                                <td>Learn advanced data structures, design patterns, and ADT implementations using C++.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
```