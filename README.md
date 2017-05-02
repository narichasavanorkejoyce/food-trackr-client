## foodTrackr

fridgeTrackr is an app to help people remember what is in their fridge. When I'm out of the house, I often forget what I have in the fridge and it's more likely that I'll buy something I already have. In addition, fridgeTrackr can help you keep track of when food will expire. My hope is that we can reduce accidental food waste if people are more aware of what is in their fridge.

Link to App: [foodTrackr](https://narichasavanorkejoyce.github.io/food-trackr-client/)

![Imgur](http://i.imgur.com/ga6uYgO.png)

## User Stories

- I want to host a browser application on Heroku, deploy online, and share my work through GitHub git repositories (API, client).
- I want to maintain a commit history with detailed commit messages and produce documentation in the form of a README.
- I want to create a mobile-first single-page application called foodTrackr, which will track the contents of a user's refrigerator and help reduce accidental food waste.
- I want my users to have login, logout, and change password functionality.
- I want to build a front-end Javascript application that can render, read, and write from a securely accessible API.
- I want actions that change data to be authenticated, and "owned" by the user performing the change.
- I want to utilize an ORM to create a database table structure and interact with user fridge data.
- I want to create at least 4 RESTful routes for GET/POST/PATCH/DELETE requests.
- I want my application to be free of bugs and console messages.
- I want to use semantic HTML and practice separation of concerns.

## Wireframes
-

## Development Process

Since this was my first experience building a website, I was eager to write some basic code and view it on a deployed GitHub Pages site. I used Bootstrap to quickly create a 3x3 grid. I set up user authorization and added a few log-in features. I typed `grunt deploy`. Then, I had to open my first issue! Turns out, we needed to replace our production URL. Facing this problem right out of the gate taught me how to search through closed issues and ask for help.

Once I was able to successfully deploy, I got to work on the game logic. I used a couple of functions and many conditional statements to switch between X and O, indicate a draw, and refresh the board.

After I had written most of the game logic, I started working with the API. I found curl requests really helpful - it was much faster to write AJAX requests once I had the blueprint of a successful curl request. I spent a lot of time working on the `PATCH` and `GET` requests. The `PATCH` request required re-working much of my game logic code, and it took awhile to figure out how my front-end data could travel to the back.

I enjoyed working out the bugs in my `GET` request. Once I could see an entire history of games played by a user, I calculated the number of wins by player. It was great to see the pieces connect - to transport data from the front-end to the back, to extract data from those objects, and finally to display those values back on the UI.

Once all the AJAX plumbing was in place, my game worked! I then turned my attention to the user interface. I made some marginal improvements to the site's look. I added messages to the AJAX responses so that users would know if they entered a wrong password or had successfully changed a password.

Many thanks to my classmates and instructors! I received A LOT of help on this project - during the next project, one of my goals is to struggle a bit more on my own before asking for help.

## Tech & Dependencies

Install dependencies with `npm install` and `bundle install`

- [JS Template](https://github.com/ga-wdi-boston/browser-template)
- Languages: HTML/CSS/Javascript/jQuery/Ruby

## Next Steps

- Add alert when food item is close to expiration date
- Incorporate recipe third-party API
- Add ability to share food and track items in different locations

## [License](LICENSE)

- All content is licensed under a CC­BY­NC­SA 4.0 license.
- All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
