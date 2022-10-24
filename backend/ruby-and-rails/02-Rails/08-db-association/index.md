

### DB association
- In model we put: `has_many :books`
- If we want to delete dependencies when something is deleting, we can put: `has_many :books, dependent: :destroy`
- In models: `belongs_to :user`
- If we don't want to use `scaffold` generator we can create migrate first and start from there
- for pagination we can use `will_paginate` gem
