# [ALPHA-BLOG README](https://laurie-blog-ruby6.herokuapp.com)

[DEMO](https://laurie-blog-ruby6.herokuapp.com)

![App Demo](app/assets/images/alpha_blog_signup.png)

Lurkers can view:
- a list of all articles, 
- article categories
- articles by categoy
- list of all bloggers
- blogger's profile
- individual article

![list of categories](app/assets/images/alpha_blog_showArticlesByUser.png)

Logged-in users:
- can create articles 
- edit or delete their own articles

You can either create a new user or use test@example.com testpassword if using the demo

![list of categories](app/assets/images/alpha_blog_list_cats.png)

Admin users:
- creates the category tags
- can edit articles
- can delete articles
- can delete a blogger's profile, which deletes all asociated articles


The user's profile uses gravatar to link to a photo associated with their blog. If no photo is available, a default logo is shown.

## To use locally: 

- Clone the repository onto your local machine
- Cd into the directory
- Run `bundle install` to install the gems
- Run `npm install`
- Run `rails db:create`
- Run `rails s` to Start the server
- Open your browser and type `localhost:3000`.



This blog was written in Rails 6.1.0 as a first project in the Ruby on Rails Course by Mashrur Hossein, December 2020.

Development database: SQLite3 | Production db: Postgres (Heroku)

STEPS IN TUTORIAL:

* Build Back-end: Article CRUD actions
* Build Front-end: 
	* Show an article -Route -Controller#action - Model/db table - View
* Show list of articles
* Add rest of REST-ful routes
* Map HTTP verbs to CRUD actions (get, post, put/patch, delete) using resources
* Use Bootstrap 4 for styling
* Add users
	* CRUD actions
	* validation
	* one-to-many association with articles
	* use gravatar for user profile picture
* Add authentication
* Add pagination
* Add sessions for each login
* Restrict 
	* user ability to edit or delete articles unless they wrote them
	* user ability to create article unless logged in
	* unauthorized routes
* Add Permissions (roles) - admin
	* Allow admin to edit and delete all articles
* Add Article Category using TDD
## Published to Heroku at this point, end of tutorial

## TODO
	* Add search functionality
	* Add testing
	* Add seed data
	
<!-- - Run `rails db:seed`; -->
<!-- - Run `rails db:migrate`; -->

