pub enum Action {
    Drive,
    Turn(Direction),
    Stop
}
pub enum Direction{
    Left,
    Right
}

pub fn print_action(action: Action){
    match action {
        Action::Drive => println!("Drive Forward!"),
        Action::Turn(direction) => match direction {
            Direction::Left => println!("Turn Left!"),
            Direction::Right => println!("Turn Right!"),
        },
        Action::Stop => println!("Stop Driving!"),
    }
}