

### Rails console
- for console, we can use: `rails c`, then we can use, `Model.create`, `Model.find(x)`, `.last`,`.first`
- we can chain console object like: `Model.find(3).destroy`
- we can create object or assign some objects do our job and then apply it, like: `article = Article.find(2)` then `article.title = "newTitle"` and `article.save`
- we can create an empty placeholder like: `article = Article.new` and then `article.save` and for errors `article.errors.full_messages`, also we can pass options when calling `.new` like `article = Article.new(title: "a", description: "b")`
- we can save a variable for multiple results like: `articles = Article.all`
- we can reload console with `reload!`
