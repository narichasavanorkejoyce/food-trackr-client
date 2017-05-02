## foodTrackr
Link to App: [foodTrackr](https://narichasavanorkejoyce.github.io/food-trackr-client/)

Link to API:
- [GitHub Repo](https://github.com/narichasavanorkejoyce/food-trackr-api)
- [Live API](https://food-trackr.herokuapp.com/)

![Imgur](http://i.imgur.com/ZzUgTGj.png)

## About
foodTrackr is an app to help people remember what is in their kitchen. When I'm out of the house, I often forget what I have in the fridge and it's more likely that I'll buy something I already have. In addition, foodTrackr can help you keep track of when food will expire. My hope is that we can reduce accidental food waste if people are more aware of what is in their fridge.

## User Stories

- I want to host a browser application that interacts with a custom API deployed through Heroku.
- I want to share my work through GitHub git repositories (API, client).
- I want to maintain a commit history with detailed commit messages and produce documentation in the form of a README.
- I want to create a mobile-first single-page application called foodTrackr, which will track the contents of a user's refrigerator and help reduce accidental food waste.
- I want my users to have login, logout, and change password functionality.
- I want to build a front-end Javascript application that can render, read, and write from a securely accessible API.
- I want actions that change data to be authenticated, and "owned" by the user performing the change.
- I want to utilize an ORM to create a database table structure and interact with user data.
- I want to create 4 RESTful routes for GET/POST/PATCH/DELETE requests.
- I want my application to be free of bugs and console messages.
- I want to use semantic HTML and practice separation of concerns.

## Wireframes
- [foodTrackr - I](http://i.imgur.com/y6JB2VG.jpg)
- [foodTrackr - II](http://i.imgur.com/fSSzu65.jpg)

## Development Process

From the beginning, I wanted to keep the app extremely simple. I opted for two tables, one relationship. Though a more complex data model could have permitted food sharing and tracking multiple kitchens, I wanted to first ensure I could effectively CRUD on one relationship.

Prior to project week, I spent a couple of days planning. I drew several versions of wireframes, and plotted out how a user would navigate through the app. Spending time planning helped me tremendously during this project.

After drafting wireframes, I built a simple HTML/CSS skeleton of my front-end. I quickly moved on to the back-end, and scaffolded my ITEMS table. I wrote curl requests for the CRUD actions, and these helped guide me through the process of building an API. I had a bit of trouble with the user authentication - it took me awhile to figure out how to tie each app action to a specific user.

Once all of the curl requests were working, I wrote the AJAX calls. This took considerably more time than I had expected. Translating the curl requests into JS AJAX calls was a challenge, but it also helped me become more familiar with my back-end plumbing. With help from the issue queue and Stack Overflow, I was able to modify the serializer and display a `days to expiration` field. Handlebars were a great way to retrieve and display tables from my database.

With AJAX calls in place, I turned my attention to the UI. One of my goals for this project was to learn a bit of Bootstrap and spend more time on the UX design. Since I imagined a user opening this app in a grocery store or in their kitchen, I designed the site to be mobile-first. Then, I used jQuery click handlers to transition between different states of the app.

I really enjoyed this project! It was rewarding to build something from the ground-up and see how a back-end connects to the front. Many thanks to my classmates and instructors!

## Tech & Dependencies

Install dependencies with `npm install` and `bundle install`

- [JS Template](https://github.com/ga-wdi-boston/browser-template)
- Languages & Tools:
  - HTML/CSS
  - Javascript
  - jQuery
  - Ruby on Rails
  - Bootstrap
  - Handlebars

## Next Steps

- Add alert when food item is close to expiration date
- Incorporate recipe third-party API
- Add ability to share food and track items in different locations

## [License](LICENSE)

- All content is licensed under a CC­BY­NC­SA 4.0 license.
- All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
- Image Credit: [Background Image](http://bojongourmet.com/2016/06/ricotta-and-roasted-beet-tart-with-beet-greens-pesto-gluten-free/)
