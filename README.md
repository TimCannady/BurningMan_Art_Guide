## 2015 BurningMan Art Guide & Tour Generator

Browse the official art installations at the 2015 Burning Man festival. You can discover new pieces, read their meaning, visit the artist's website and donate to show support. For the more adventurous: create a 'tour guide' to save the pieces you hope to find this year!


## Demo

[2015 BurningMan Art Guide & Tour Generator](https://limitless-sands-7552.herokuapp.com/)

## Technologies

This was a pet project for learning new technologies. I've listed all below and bloded those which were either new or unfamiliar:

Frontend:
* HTML + CSS
* JavaScript
* jQuery + Ajax
*  **React**

Backend:
* Ruby
* Postgresql
* **Rails**

Testing and Scraping:
* **Capybara**
* **Nokogiri**


## How it Works

1) Nokogiri scrapes the art at [BurningMan.org](http://burningman.org/event/brc/2015-art-installations/)

2) Ruby uses four models:
  * Collection (the scraped art)
  * Installation (an individual art installation)
  * Tour (a user-generated tour)
  * Tour_Installation (a join table between the many-to-many Tour <-> Installation relationship)

3) The DB is supported by Postgresql

4) Rails supports the routing and controllers

5) JavaScript supports the one-page nature

5) React handles HTML structure and DOM interaction

I chose React because I liked that it was modular and not too large of an undertaking. I also like that it combines most of the front-end behavior into single components, as opposed to having code spread across multiple files (html, css, js). I chose Nokogiri because I think scraping is really powerful in the absence of an API.

Beyond learning these technologies in general, some specific things I learned included:
* React: passing props and state between a multi-branched tree
* React: using OOJS
* React: using Ajax
* Ajax: using Ajax in a new way, accompanied with JS promises

I also enjoyed learning "how it all comes together." How to use multiple technologies (and languages) in a real-world app.

The challenges I faced had to do with connecting the front-end to the back-end. I had to go from Ruby to JavaScript to Ruby and back. And via asynchronous requests, which I'm comfortable with but was using a new technique with. I'm also somewhat new to JavaScript in general, so keeping everything object-oriended was a fun challenge as well.


I'd use React again. It requires a little more setup than just doing things with jQuery, so it might make the most sense for exceptionally-light projects. But beyond that, I think it's a great technology.

## Invitation

This project is open-source, so please feel free to clone, tinker, refactor, break and rebuild, submit pull requests, issues or feature ideas. Feel free to get in touch [on Twitter](https://twitter.com/TCannadySF)!

## References

**Schema:**
![Schema](http://i.imgur.com/um2gLqs.png)

**Homepage wireframe:**
![Wireframe](http://i.imgur.com/M36zMCM.png)

**General app structure:**
![Appstructure](http://i.imgur.com/clJ9C6G.png)

**React tree:**

![Reacttree](http://i.imgur.com/jgnWM8D.png)


**Docs**

http://facebook.github.io/react/docs/thinking-in-react.html

https://facebook.github.io/react/docs/why-react.html

**Gems**

https://github.com/reactjs/react-rails#component-generator

**Tutorials**

http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/

http://ryanlanciaux.github.io/blog/2014/05/26/trying-out-reactjs-with-the-marvel-api/

https://egghead.io/series/build-your-first-react-js-application


**General**

https://github.com/enaqx/awesome-react

https://www.youtube.com/watch?v=VsVwMrEuaoY

https://www.youtube.com/watch?v=kTSsZrub5iE

https://www.codementor.io/reactjs/tutorial/react-vs-angularjs#/

http://www.quora.com/Is-React-killing-Angular

http://www.funnyant.com/reactjs-what-is-it/

http://chrisharrington.github.io/demos/performance/

http://www.quora.com/Whats-the-best-place-to-learn-React-js

https://devmag.io/post/503/angularjs-vs-reactjs-should-i-be-worried-if-i-plan-to-be-a-mean-stack-developer-by-opting-angular

https://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/
