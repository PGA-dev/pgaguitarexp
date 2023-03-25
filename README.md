# Guitar Buying Guide for Guitar Players
### A Guide for all your guitar needs
## A NuCamp React.JS Project
### by PGA

### **Main GH:**
#### https://github.com/PGA-dev/PGAGuitar

### **Images Repo:**
#### https://github.com/PGA-dev/guitarImage


### **JSON Server:**
#### https://github.com/PGA-dev/guitarJSON
## Final Updates
- site photos: https://github.com/PGA-dev/guitarImage
- Added blur effect borders to the cards -- was very much inspired by Kevin Powell's version of the same effect
- updated CSS to work cleanly with dark dropdowns and dark contact form; updated the font color to aqua on these too
- These CSS updates were a cool way to learn more about animation and learn more about the @keyframes and @property CSS variable rules



## Portfolio Project Perspectives
One of the most interesting questions I get asked as a guitar instructor is: "what paramaters are relevant to buying a guitar?" The answer, like most issues in life, varies with the needs of the student, or musician asking the question. While most beginner players don't really need a lot of information to get them started, potentially realizing that too much overkill on specifics might end up killing their "enjoyable" new hobby, they do often need solid technical data to inform them and educate them to make future musical decisions and purchases. Advanced, or pro-level players, often need a great deal more information on each instrument, and a way of comparing relevant brands and models for their particular musical needs. For these reasons I have decided to attempt a guide site to all guitar related buying. 

## Prospective Features for Website Users
- Links to major manufactuers
- diferences in product features
 - Links to buying guides
 - YouTube links to gear demo vids
 - eventually I will update a great deal of my own knowledge, as a guitar teacher and musician, regarding how musicians can better buy guitar gear, but for now I need to keep it simple.

## Prospective technology
- React
- Node.js for server-side scripting
- Mongo.db if we get that far and extend into backend course with this project
- JSX 
- css/SCSS
- Mostly Vanilla Javascript
- gitlab for local git editing
- GitHub repositories
- Design Guide -- UX will center on the Neon Sign approach, a visual shock and awe

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
- Currently Data is in JSON format, and being fetched from a JSON server -- eventually will be a Mongo List, or a PostGres DB

## Node JS Endpoints
- Site Ref **GET**
- Site Map **GET**
- Guitar ALL Guitar **GET**
- Contact Feedback **POST**
- Contact Feedback **GET**
- Guitar Stat **GET**
- Guitar Stat2 **GET**
- Guitar Stat3 **GET**
- Guitar Stat4 **GET**
- Guitar Stat5 **GET**
- Front Carousel **GET**
- GuitarID **GET**
## To Do Still
- Need to add my buyng guide tips
- Must imbed YouTube, rather than use links
- Must improve upon the sheer scope of material
- Must add a real database to this, likely postgres, possibly Mongo, but not a fan 
- Updated About and About Guide pages
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