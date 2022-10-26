use std::io;
pub fn get_guess() -> u8 {
    loop {
        println!("Enter Your Guess Number : ");
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Could not read data from user!!");
        match guess.trim().parse::<u8>() {
            Ok(value) => return value,
            Err(error) => println!("Could not understand input : {}",error),
        }
    }
}

pub fn handle_guess(guess: u8, correct: u8) -> bool{
    if guess < correct {
        println!("Too low!");
        false
    }else if guess > correct {
        println!("Too High!!");
        false
    }else {
        println!("You Got it!!");
        true
    }
}