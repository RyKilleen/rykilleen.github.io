webpackJsonp([0x9a70ba7112e1],{491:function(e,t){e.exports={data:{markdownRemark:{html:'<p><em>Originally released with my wonderful employer, <a href="https://thinkcompany.com">Think Company</a>.\n(We\'re <a href="https://www.thinkcompany.com/careers/">hiring</a>! Reach out and we\'ll chat about what it\'s like to work there.)</em></p>\n<h3 id="it-started-when-a-developer-on-a-clients-team-approached-me-with-a-question-hey-you-know-d3js-right-could-you-help-us-visualize-some-data"><a href="#it-started-when-a-developer-on-a-clients-team-approached-me-with-a-question-hey-you-know-d3js-right-could-you-help-us-visualize-some-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>It started when a developer on a client’s team approached me with a question: “Hey, you know D3.js right? Could you help us visualize some data?”</h3>\n<p>“Of course,” I said. That’s one of the reasons they brought us in, after all! “What are you trying to achieve?” Asking one seemingly simple question was the difference between delivering the requested solution and implementing a solution that went beyond the request to expose even more useful information.</p>\n<p>We were in the middle of reskinning a legacy application built in a tech stack from a bygone era. Most of the codebase was decades old; a gnarly, tangled rubber-band ball of dependencies—the epitome of what developers refer to as “spaghetti code”, full of bad practices. One notable challenge affected us daily: there was no file naming convention, and often there were duplicate files in different folders, so no one knew where the definitive version of any particular asset resided without a lot of hunting and guessing. Every time a change was required, work started with spelunking into the code base — or even worse, searching the database. It was the proverbial haystack, and we were always looking for a hay-colored needle.</p>\n<p>For this and other reasons, the client developer recognized what we were up against. Any development task inevitably led to the questions,  “What is the risk of this change? What else will be affected?”</p>\n<p>The team set out to make a spreadsheet of all the dependencies. File A depends on File B, File B depends on File D, etc. But once we had compiled all of that data, it still wasn’t useful to humans. That’s when I was asked “You know D3.js, right?” D3.js is a JavaScript-based data visualization library that we leverage on a fairly regular basis. The hope was that I could visualize all these dependencies — about 3,519 of them — to paint a picture of what we already knew for the rest of the organization: things were a mess.</p>\n<p>The pivotal moment came from a seemingly simple question. Before just following orders, I asked “What are you trying to achieve?” We spoke about what the data was, what sort of questions we’d want to answer, and I had an epiphany: D3 is a great tool for custom visualizations (and as in this case, is often requested/prescribed by the client at the outset), but like all tools, you need to know when to use it.</p>\n<p>Some time ago, I was introduced to a tool called Neo4j, a Graph Database engine. I had barely tinkered with it, but I understood the general concept. Graph databases are primarily concerned with storing two things: nodes (“things”) and relationships. Any point of data is a node, and how it relates to other nodes is, well, the relationship. Graph databases are perfect for asking questions about how things are related, and how relationships are shared.</p>\n<p>So a graph database seemed like the direction to go: instead of a simple visualization generated after several hours of development, we had useful, pretty graphs we could query within minutes. We could ask all kinds of questions: “What files have the most relationships? What files have no relationships? What files include ExampleFile.cfm?” Suddenly, we had a map. Because of the nature of Neo4j, we could easily add additional data as we wanted to ask more questions: “What files use this global variable? What files make direct database calls?” And as a bonus, all the visualizations are done with… you guessed it… D3, right out of the box.</p>\n<p>Say we want to make a change that involves a particular file, but we need to know the impact it will have on the current codebase?</p>\n<p>We can ask Neo4j “Hey, what files rely on ‘exampleFile.cfm’?” :</p>\n<p><img src="/images/graphExample.gif" alt="A neo 4j query showing results "></p>\n<p>Or “Show us all the relationships in our application”:</p>\n<p><img src="/images/allGraph.gif" alt="A neo 4j query showing results "></p>\n<p>Instead of a static visualization, we have our data in a queryable format! The most important thing I learned is to always get to the root of what the client is trying to do. “What are you trying to achieve?” is a powerful question, and can be the difference between a satisfactory outcome and a robust solution for the client. When exposed to the dev team at large, they were immediately inspired to ask more questions of the graph database. Instead of a good-enough tool, we leveraged a tool that got us even closer to making our case and solving the issue. The whole journey was a good reminder: expand your horizons outside your discipline, and always look for the right problem to solve—not necessarily the literal question you’re presented with. This approach leads to solutions that exceed expectations.</p>',timeToRead:3,excerpt:"Originally released with my wonderful employer,  Think Company .\n(We're  hiring ! Reach out and we'll chat about what it's like to work…",frontmatter:{title:"Identifying The True Challenge Within The Question",cover:"https://unsplash.it/1152/300/?random?BirchintheRoses",date:"01/25/2018",category:"tech",tags:["Consulting","Neo4j","Technology","Soft Skills"],author:"ryan"},fields:{slug:"/identifying-the-true-challenge-within-the-question"}},prev:{excerpt:"Today's the Day (or night?) I'm finally getting this personal site into a functional space, to post my findings…",frontmatter:{title:"New Platforms for New Hopes and Dreams",cover:"https://unsplash.it/1152/300/?random?BirchintheRoses",date:"03/04/2018"},fields:{slug:"/new-platforms-for-new-hopes-and-dreams"}},next:{excerpt:"Today's the Day (or night?) I'm finally getting this personal site into a functional space, to post my findings…",frontmatter:{title:"New Platforms for New Hopes and Dreams",cover:"https://unsplash.it/1152/300/?random?BirchintheRoses",date:"03/04/2018"},fields:{slug:"/new-platforms-for-new-hopes-and-dreams"}},authors:{edges:[{node:{id:"ryan",name:"Ryan Killeen",image:"https://pbs.twimg.com/profile_images/970486175541719040/LW_9cT86_400x400.jpg",url:"https://www.ryankilleen.com/",bio:"Ryan is a web developer specializing in UI. He's moved jQuery to React, and he's moved companies from FTPing files to staged deployment. He feels strongly that all development is human-focused, from database design to dev-ops."}},{node:{id:"test",name:"Ryan Killeen",image:"https://pbs.twimg.com/profile_images/970486175541719040/LW_9cT86_400x400.jpg",url:"https://www.ryankilleen.com/",bio:"Ryan is a web developer specializing in UI. He's moved jQuery to React, and he's moved companies from FTPing files to staged deployment. He feels strongly that all development is human-focused, from database design to dev-ops."}}]}},pathContext:{slug:"/identifying-the-true-challenge-within-the-question",total:2,prev:"/new-platforms-for-new-hopes-and-dreams",next:"/new-platforms-for-new-hopes-and-dreams"}}}});
//# sourceMappingURL=path---identifying-the-true-challenge-within-the-question-8fbbb744a99087d4d58c.js.map