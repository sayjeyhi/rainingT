class Student
    attr_accessor :firstname, :lastname, :email

    def initialize(firstname, lastname, email, username, major)
        @firstname = firstname
        @lastname = lastname
        @email = email
        @username = username
        @major = major
    end

    def to_s
        puts "Hello, #{@firstname}, #{@lastname}!, #{@email}, #{@username}, #{@major}"
    end

end

jafar = Student.new('Jafar', 'Rezaei', 'j.ws@gmail.com', 'usss', '2')

puts jafar
