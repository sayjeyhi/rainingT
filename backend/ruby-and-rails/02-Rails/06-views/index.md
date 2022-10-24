
### Render views

- we can use `@global` vars on controller to fill a variable in view
- we can debug app by adding `byebug` wherever we want to debug and we can run `continue` to keep going.
- controller helpers: `render 'xx'`(renders a `xx.erb` file), `redirect_to @var`(moves user to some route if @var, it mean created one), `flash[:notice] = "message"`(creates a flash message), `session['name'] = xxxx`(change session var)
- view helpers: `form_with(model: @Name, local: true ) do |f|`, `link_to 'Title', '#'`(we can add `,method: :delete`, even `,data: { confirm: "message" }`) , we can use `render 'template'` to render a partial
- show image: `image_tag(src, alt: "sss")`
- we can create custom helpers inside on `helpers/application.helper` for example `current_user`(memoize with `@currentUser ||= Users.find(session['user_id']) if session['user_id']`) or `avatar`
- we can have a `logged_in` helper and use `!!@currentUser`
- if we want a helper to be used in both views and controllers, we can put it is `application_controller` and put `helper_method :current_user` above it, we can use it in controllers and views
