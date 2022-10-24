class Student
    @firstname
    @lastname
    @email
    @username
    @major

    def to_s
        puts "Hello, #{@firstname}!"
    end

    # GETTER and SETTER
    def firstname=(firstname)
        @firstname = firstname
    end
    def firstname
        @firstname
    end
end

jafar = Student.new
puts jafar

jafar.firstname = 'JAFAR'
puts jafar
