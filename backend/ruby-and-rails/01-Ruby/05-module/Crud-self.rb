module Crud
    require "bcrypt"
    puts "Crud module loaded successfully"

    # Or self. will create static methods which we don't need to create instance and we can call these directly.
    def create_user_pass(password)
        BCrypt::Password.create(password)
    end

    def verify_pass_digest(password)
        BCrypt::Password.new(password)
    end

    def check_user_authentication(username, password, users)
        user.each do |user|
            if user[:username] == username && verify_pass_digest(user[:password]) == password
                return user
            end
        end

        nil
    end
end
