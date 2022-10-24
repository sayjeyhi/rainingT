

### Deployment

- we use heroku so we need to install its cli
- heroku uses PostgreSql so we need to add `gem pg` on production group on Gemfile
- we need to commit and push to `git push heroku master` and it will deploy the code to heroku
- then we need to migrate db on heroku by running `heroku run rails db:migrate`
- we can rename the app using `heroku rename`?
