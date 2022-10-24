class Student
    attr_accessor :firstname, :lastname, :email
    @firstname
    @lastname
    @email
    @username
    @major

    def to_s
        puts @
    end

    # GETTER and SETTER
#     def firstname=(firstname)
#         @firstname = firstname
#     end
#     def firstname
#         @firstname
#     end
end

jafar = Student.new

jafar.firstname = 'Jafar'
jafar.lastname = 'Molaei'
jafar.email = 'john@doe.com'
puts jafar
