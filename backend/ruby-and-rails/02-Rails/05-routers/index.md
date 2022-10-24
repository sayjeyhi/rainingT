
### Routers validation

- simple single route: `get '/patients/:id', to: 'patients#show'`
- simple single route: `resources :photos', only: [:show]`
- full route: `resources :photos`, A single call to resources can declare all of the necessary routes for your `index`, `show`, `new`, `edit`, `create`, `update`, and `destroy` actions.

| HTTP Verb | Path             | Controller#Action | Used for                                     |
|-----------|------------------|-------------------|----------------------------------------------|
| GET       | /photos          | photos#index      | display a list of all photos                 |
| GET       | /photos/new      | photos#new        | return an HTML form for creating a new photo |
| POST      | /photos          | photos#create     | create a new photo                           |
| GET       | /photos/:id      | photos#show       | display a specific photo                     |
| GET       | /photos/:id/edit | photos#edit       | return an HTML form for editing a photo      |
| PATCH/PUT | /photos/:id      | photos#update     | update a specific photo                      |
| DELETE    | /photos/:id      | photos#destroy    | delete a specific photo                      |

- we can combine multiple resources on single row like: `resources :photos, :books, :videos`
- we can create a `namespace` for routes like:
```ruby
namespace :admin do
  resources :articles, :comments
end
```
then routes will be look like:
| HTTP Verb | Path                     | Controller#Action      | Named Route Helper           |
|-----------|--------------------------|------------------------|------------------------------|
| GET       | /admin/articles          | admin/articles#index   | admin_articles_path          |
| GET       | /admin/articles/new      | admin/articles#new     | new_admin_article_path       |
| POST      | /admin/articles          | admin/articles#create  | admin_articles_path          |
| GET       | /admin/articles/:id      | admin/articles#show    | admin_article_path(:id)      |
| GET       | /admin/articles/:id/edit | admin/articles#edit    | edit_admin_article_path(:id) |
| PATCH/PUT | /admin/articles/:id      | admin/articles#update  | admin_article_path(:id)      |
| DELETE    | /admin/articles/:id      | admin/articles#destroy | admin_article_path(:id)      |

if we don't want to add `admin/` prefix on our controllers we can use:
`resources :articles, path: '/admin/articles'`
then it will be:

| HTTP Verb | Path                     | Controller#Action | Named Route Helper     |
|-----------|--------------------------|-------------------|------------------------|
| GET       | /admin/articles          | articles#index    | articles_path          |
| GET       | /admin/articles/new      | articles#new      | new_article_path       |
| POST      | /admin/articles          | articles#create   | articles_path          |
| GET       | /admin/articles/:id      | articles#show     | article_path(:id)      |
| GET       | /admin/articles/:id/edit | articles#edit     | edit_article_path(:id) |
| PATCH/PUT | /admin/articles/:id      | articles#update   | article_path(:id)      |
| DELETE    | /admin/articles/:id      | articles#destroy  | article_path(:id)      |


#### Nested routes
```ruby
resources :magazines do
    resources :ads
end
```

will be:

| HTTP Verb | Path                                 | Controller#Action | Used for                                                                   |
|-----------|--------------------------------------|-------------------|----------------------------------------------------------------------------|
| GET       | /magazines/:magazine_id/ads          | ads#index         | display a list of all ads for a specific magazine                          |
| GET       | /magazines/:magazine_id/ads/new      | ads#new           | return an HTML form for creating a new ad belonging to a specific magazine |
| POST      | /magazines/:magazine_id/ads          | ads#create        | create a new ad belonging to a specific magazine                           |
| GET       | /magazines/:magazine_id/ads/:id      | ads#show          | display a specific ad belonging to a specific magazine                     |
| GET       | /magazines/:magazine_id/ads/:id/edit | ads#edit          | return an HTML form for editing an ad belonging to a specific magazine     |
| PATCH/PUT | /magazines/:magazine_id/ads/:id      | ads#update        | update a specific ad belonging to a specific magazine                      |
| DELETE    | /magazines/:magazine_id/ads/:id      | ads#destroy       | delete a specific ad belonging to a specific magazine                      |

#### shallow nested routes

```ruby
resources :articles, shallow: true do
  resources :comments
  resources :quotes
  resources :drafts
end
```

will not nest `update`, `destroy` and `read` actions. just adding will be sub route.

