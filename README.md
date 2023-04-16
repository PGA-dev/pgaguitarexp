# Guitar Buying Guide for Guitar Players
### A Guide for all your guitar needs
## A NuCamp React.JS Project
### by PGA

### **Main GH:**
#### https://github.com/PGA-dev/PGAGuitar

### **Express Server**
#### https://github.com/PGA-dev/pgaguitarServer
### **Images Repo:**
#### https://github.com/PGA-dev/guitarImage


### **JSON Server:**
#### https://github.com/PGA-dev/guitarJSON



## Portfolio Project Perspectives
One of the most interesting questions I get asked as a guitar instructor is: "what paramaters are relevant to buying a guitar?" The answer, like most issues in life, varies with the needs of the student, or musician asking the question. While most beginner players don't really need a lot of information to get them started, potentially realizing that too much overkill on specifics might end up killing their "enjoyable" new hobby, they do often need solid technical data to inform them and educate them to make future musical decisions and purchases. Advanced, or pro-level players, often need a great deal more information on each instrument, and a way of comparing relevant brands and models for their particular musical needs. For these reasons I decided to create a guide site to all guitar related buying.

The React project was an attempt to integrate the React Async Redux approach that we learned in the two React courses. The original thought was to keep the architecture fairly similar, as an attempt to master the approach used in class, but much of the adaptation required a bit of modification, especially on the JSX component side. Redux was difficult to adapt to, despite it being fairly well covered in class, but once in place it gave a simple understanding of how the state could be managed without too much of a hodge - podge, multi-faceted approach. The original project uses a JSON server for its data, locally hosting all of the images off of the local public folder on that server. The CSS on the site was a bit difficult as the overall design was a bit out of scope for NuCamp; I had originally envisioned the layout to be one of a neon sign. Using a few CSS courses, some React Spring material, and a bunch of Kevin Powell resources, I found it fairly manageable to create a site that popped out graphically.

When approaching the backend for the project I decided to go against my best intentions and use a Mongo DB, with an express server to run the show. My original idea was to incorporate a SQL backend, but time permitting, I was not able to pursue the route; it is fairly likely that I will attempt this at a future juncture. Early on in the server development I realized that the new server wasn't talking to the front end, and found that I had a CORS, or Cross Origin Resource Sharing problem. As this CORS issue was framed in class, 2 weeks after I first encountered it (oh would I have loved to have had sccess to week 4 material at this time), multiple sources on a site need to have some whitelist handling, especially on the DELETE and PUT requests. I also found the the original React project looked a bit like a black and blue dungeon, so I incorporated even more CSS and updated some card borders and made some title blocks to illuminate things a bit -- see the blur card effect. 

Overall, for a full stack attempt this turned out fairly well I think, but left a great deal of room for improvement. My postman usage is working full stack, for  links, contact and the front carousel, but the full integration to the front is still only working with GET requests; most of the front end for my full stack material, such as site admin login and edit page, are not yet finished, so aren't available even though the server is ready. The main guitar guide content hosting endpoints on the express server are also only half done as the routing will go quite a few layers deep ('http://localhost:3004/guitar/guitarId/guitarstats/guitarstats2/...etc...'), and faces a myriad of nested javascript callback hell issues. Despite these setbacks, I found the project engaging and challenging, really forcing me to tackle challenges not faced in class. I hope to publish the site on my Netlify account and keep developing the content for actual use by musicians!

## Prospective Features for Website Users
- Links to major manufactuers
- diferences in product features
 - Links to buying guides
 - YouTube links to gear demo vids
 - eventually I will update a great deal of my own knowledge, as a guitar teacher and musician, regarding how musicians can better buy guitar gear, but for now I need to keep it simple.


## Layout 
- Home Page
- General Guide About Page
- About the Guide Author (About Page)
- Contact Page
- Directory Page for Guides:
    - Basic Guides are:
        - Guitar Brands
        - Guitar Body
        - Guitar Necks
        - Guitar Strings
        - Guitar Bridges
        - Guitar Pickups
        - Guitar Frets
        - Guitar Electronics
        - Guitar Picks
- Guide Site References page
- Site Map

# Site Architecture and Features-- some highlights
## Front End
### Technology
- React
- JSX 
- css/SCSS
- Redux for state
    - Thunk middleware
    - logger middleware
- Mostly Vanilla Javascript
- gitlab for local git editing
- GitHub repositories
- Design -- UX will center on the Neon Sign approach, a visual shock and awe

### Features
- React.js
    - Redux
        - Global State solution
            - Some small implementation of local state using useState hooks
        - Async using Thunk middleware
        - Fetch, using ***await*** on Promise returns
        - Conversion of Thunks to call back end express endpoints (prospective not yet implemented)

- CSS
    - Custom property variables
    - Custom header using @keyframes for multi-color transform
    - Border blur Conic Gradient effect on all cards
        - Main site cards
        - Carousel title card
        - main goal was to create a UX, or user experience, centered upon a dark neon theme; the approach using keyframes allowed the site architecture colors to be highlighted in flashy, and yet, practical illumination approach -- can't have a dark site that has neon highlights without some sort of lighting effect


- Spring
    - Use of 3 different React.js Springs
        - 2 of these Springs are used in creating an introduction effect upon page load
        - Final Spring is a card flip that is used on the Guide About Page

## Back End

### Technology
- Node.js
- Express
- Mongo DB
- Postman for initial data and testing
### Data Overview
- Currently Data is in JSON format, and being fetched from a JSON server, this is the current server/db 
- the initial goals of the back end re-wire is to create a full crud interaction including adding page material, and deleting page material, on the guitar guide sub-pages. Initially, the link to the page, including the image and URL, will be the full - CRUD material...this will be updated to the actual sub-page content before live release. 
- Since the UI won't initially fully support full-CRUD for some time, but the endpoints will be supported through the use of Postman.
- Postman will also be used for initial testing

### Node JS Endpoints for CRUD
- Site Ref **GET**
- Site Map **GET** *postman && front-end ready* **Mongo**
- Guitar ALL Guitar **GET**  *postman ready--not wired fully*
- Contact Feedback **PUT**  *postman ready*
- Contact Feedback **DELETE** *postman ready*
- Contact Feedback **POST** *postman ready*
- Contact Feedback **GET**  *postman && front-end ready* **Mongo**
- Guitar Stat **GET** **JSON-server**
- Guitar Stat2 **GET**  **JSON-server**
- Guitar Stat3 **GET** **JSON-server**
- Guitar Stat4 **GET**  **JSON-server**
- Guitar Stat5 **GET**  **JSON-server**
- Front Carousel **GET**  **JSON-server**
- GuitarID **GET**  **JSON-server**

### Server and Database
- mongo DB
- Node.js
    - Used for all backend wiring, for the most part
- Express
    - Used to mirror endpoints highlighted by front end Fetch system
- Mongoose middleware for modeling
- CORS
- Pasport (not finished but started)
- HTTP middleware?


## To Do Still
- Need to add my buyng guide tips
- Must imbed YouTube, rather than use links
- Must improve upon the sheer scope of material
- add mongo instance
- add express
- add mongoose
    - models
- Build Admin page
- finish login
- Wire Authentication to login


## Final Site Updates
- site photos: https://github.com/PGA-dev/guitarImage
- Added blur effect borders to the cards -- was very much inspired by Kevin Powell's version of the same effect
- updated CSS to work cleanly with dark dropdowns and dark contact form; updated the font color to aqua on these too
- These CSS updates were a cool way to learn more about animation and learn more about the @keyframes and @property CSS variable rules
- passport installed, not fully implemented
- Cors finished
- Links router finished and fully operational
## Market Survey & Research

While current websites by manufacturers give specifications on each guitar model, often you must look to a maintenance spec sheet, retail outlet marketing, and potentially online reviews...who many times must contact the company for their info...in order to get detailed, and accurate, information on a particular instrument. Most consumers rely on a single point of contact with the company, often provided by a retail outlet; this can be useful, but not often fully relevant, detailed, or understandable.


## Initial References

1. Jemsite
    - Ibanez fansite with forum and manufacturer information; started as a Jem model appreciation site
    - https://www.jemsite.com/
2. Ibanez.com
    - Ibanez home sites for manufacturer infomation on Ibanez guitars
    - https://www.ibanez.com/usa/
    - http://www.hoshinogakki.co.jp/hoshino_e/

3. Reverb
    - Reverb is a retail/e-commerce site for new and used gear; great for assessing current market value
    - https://reverb.com/

4. YouTube
    - Guitar review videos are often full of manufacturer information
    - https://www.youtube.com/

5. Ibanez.fandom.wiki
    - https://ibanez.fandom.com/
    - This site is a standard fan built information site giving specs on the instruments coming from Ibanez - Hoshino Gakki 

6. Keisel.com
    - USA built manufacture/retail-direct-e-commerce site
    - specs on pickups and guitar parts are common, YouTube videos by owner Jeff Kiesel give more detail on product specs
    - https://www.kieselguitars.com/

7. Reverb history:
    - https://reverb.com/news/a-brief-history-of-ibanez-guitars

8. Nuno's interview with Richard Lasner from Ibanez USA (from wayback machine):
    - https://web.archive.org/web/20120309020308/http://www.ibanezregister.com/history/nuno/nuno-richlasner.htm