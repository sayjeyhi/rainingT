class Student
    @firstname
    @lastname
    @email
    @username
    @major
end


class Greeter
    def initialize(name = "World")
        @name = name
    end

    def say_hi
        p "Hi #{@name}!"
    end

    def say_bye
        p "Bye #{@name}, come back soon!"
    end
end


ali = Greeter.new("Ali")
ali.say_hi
ali.say_bye

# All object methods
p Greeter.instance_methods

# Only instance itself members
p Greeter.instance_methods(false)
p ali.respond_to?(:random)   # same as ali.respond_to?("random")
p ali.respond_to?(:say_hi)
