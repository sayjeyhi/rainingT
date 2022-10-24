# DATABASE
$users = [
    {
       name: "John",
       last_name: "Doe",
       username: "john@doe.com",
       password: "123456",
    }
];

# WELCOME MESSAGE
puts "Welcome to simple authentication system "
40.times { print '-' }
puts
puts "This program will take input from the user and compare password"
puts "If password is correct, you will get back the user object"
puts

# LOGIN ATTEMPTS TRACKER
attempts = 0

# AUTH FN
def startAuth
    puts "Please enter your username and password"
    puts
    puts "Username: "
    username = gets.chomp

    user = $users.select { |user| user[:username] == username }
    if user
        puts "Password: "
        password = gets.chomp

        if user[0][:password] == password
            puts "Welcome #{user[0][:name]} #{user[0][:last_name]}"
            exit 100
        end
    end
end

# Start auth
while attempts < 3 do
    startAuth
    puts "Opps! wrong credentials..."
    puts "Press n to exit and any other key to continue:"
    input = gets.chomp.downcase
    exit 100 if input == "n"
    attempts += 1
end

puts "You have exceeded the number of attempts" if attempts == 4
