require_relative 'Crud-self'

class Student
    include Crud

    attr_accessor :firstname, :lastname, :email
    @firstname
    @lastname
    @email
    @username
end

jafar = Student.new
p jafar.create_user_pass('223')
