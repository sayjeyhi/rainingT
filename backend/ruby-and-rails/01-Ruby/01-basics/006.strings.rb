# String concatenation and interpolation
name = "Ali"
last_name = "Rezaei"

puts "#{name} #{last_name}"


# Methods, how to find them
p name.class                 # String
p 10.class                   # Integer
p 10.0.class                 # Float

p name.methods               # Array of methods



# Common methods
p 10.to_s.class              # Convert number to String
p "10".to_i.class            # Convert String to number
p name.length                # Length of the string
p name.reverse               # Reverse the string
p name.upcase                # Uppercase the string
p name.empty?                # Check if the string is empty
p name.sub("Ali", "Reza")    # Replace a string
