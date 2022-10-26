mod match_expressions;
use match_expressions::{Action, Direction, print_action};
fn main(){
    // Code 8 : Using enums and match expressions
    let program: Vec<Action> = vec![
        Action::Drive,
        Action::Turn(Direction::Left),
        Action::Drive,
        Action::Turn(Direction::Right),
        Action::Drive,
        Action::Stop
    ];
    for action in program {
        print_action(action);
    }
}