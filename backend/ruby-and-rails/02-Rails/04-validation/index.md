

### Model validation
- we can use `before_save { self.email: email.downcase }` to lowercase emails before saving on user
- add required field `validates :title, presence: true` like:
    ```ruby
    class Article < ApplicationRecord
       validates :title, presence: true, length: { minimum: 6, maximum: 100}
       validates :description, presence: true, length: { minimum: 10, maximum: 500}
    end
    ```

| name       | description                                                                                        | sample                                                                                                                               |   |
|------------|---------------------------------------------------------------------------------------------------- |--------------------------------------------------------------------------------------------------------------------------------------|---|
| acceptance | This method validates that a checkbox on the user interface was checked when a form was submitted. | `class   Person   <   ApplicationRecord     validates   :terms_of_service ,   acceptance:  {   message:  'must be abided'   }   end` |   |
| validates_associated  |    You should use this helper when your model has associations with other models and they also need to be validated | `class Library < ApplicationRecord has_many :books  validates_associated :books  end` |                                                                                                                                      |   |
| confirmation | You should use this helper when you have two text fields that should receive exactly the same content This validation creates a virtual attribute whose name is the name of the field that has to be confirmed with "_confirmation" appended. | `class Person < ApplicationRecord validates :email, confirmation: { case_sensitive: false }  end` |                                                                                                                                      |   |
| comparison | This check will validate a comparison between any two comparable values. `:greater_than` - Specifies the value must be greater than the supplied value. The default error message for this option is "must be greater than %{count}".`:greater_than_or_equal_to`,`:equal_to`,`:less_than`,`:less_than_or_equal_to`,`:other_than`  | `class Promotion < ApplicationRecord validates :start_date, comparison: { greater_than: :end_date }  end`          |   |
| exclusion | This helper validates that the attributes' values are not included in a given set. In fact, this set can be any enumerable object. | ` validates :subdomain, exclusion: { in: %w(www us ca jp), message: "%{value} is reserved." }` | |
| format | This helper validates the attributes' values by testing whether they match a given regular expression, which is specified using the :with option. | `validates :legacy_code, format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }` | |
| inclusion | This helper validates that the attributes' values are included in a given set. In fact, this set can be any enumerable object. | `validates :size, inclusion: { in: %w(small medium large), message: "%{value} is not a valid size" }` | |
| length | This helper validates the length of the attributes' values. It provides a variety of options, so you can specify length constraints in different ways: | `validates :name, length: { minimum: 2 } validates :bio, length: { maximum: 500 } validates :password, length: { in: 6..20 } validates :registration_number, length: { is: 6 }` | |
| numericality | This helper validates that your attributes have only numeric values. By default, it will match an optional sign followed by an integer or floating point number. | `validates :points, numericality: true validates :games_played, numericality: { only_integer: true }` | |
| presence | This helper validates that the specified attributes are not empty. It uses the blank? method to check if the value is either nil or a blank string, that is, a string that is either empty or consists of whitespace. | `validates :name, :login, :email, presence: true` | |
| absence | This helper validates that the specified attributes are absent. It uses the present? method to check if the value is not either nil or a blank string, that is, a string that is either empty or consists of whitespace. | `  validates :name, :login, :email, absence: true ` | |
| uniqueness | This helper validates that the attribute's value is unique right before the object gets saved. It does not create a uniqueness constraint in the database, so it may happen that two different database connections create two records with the same value for a column that you intend to be unique. To avoid that, you must create a unique index on that column in your database.  | `validates :email, uniqueness: true` | |
| validates_with | This helper passes the record to a separate class for validation. | `validates_with GoodnessValidator` and `class GoodnessValidator < ActiveModel::Validator   def validate(record) ...` | |

> Note: most of the time we can use `presence: { message: "must be given please" }` and `allow_nil: true`, `allow_blank: true` with these validations
