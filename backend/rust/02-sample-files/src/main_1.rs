extern crate rand;  // we added this just by adding (rand = "0.7.3") under dependencies in Cargo.toml and run "cargo update"
mod fibonacci;
mod guess;
mod ownerships;
mod structs;
use guess::{get_guess,handle_guess};
use ownerships::take_ownership_sum;
use structs::{Point2D, add_points};
use std::collections::HashMap; // std::collections is the standard module to create collections
use std::io; // The "io" module is to input/output data from user and etc.
use rand::random;
use crate::ownerships::borrow_ownership_sum;

// related to Code 7
struct User {
    name: String,
    family: String,
    age: i8,
    address: Address
}
// related to Code 7
struct Address {
    country: String,
    city: String,
    address: String,
}
// To run application simply run "cargo run" in project root
// Below is for documentation of code! --> to make docs run "cargo doc --open"!
// --open options opens the doc inside browser
/// This is a doc comment! It gets documented.
/// # Example (This is a markdown!)
/// ```rust
/// println!("Hello World!")
/// ```
fn main() {
    // Code 1 : Fibonacci
    println!("Static Fibonacci : ");
    for i in 1..5{
        let fibonacci: u64 = fibonacci::fb(i);
        println!("{} : {}", i, fibonacci);
    }

    // Code 2 : Dynamic Fibonacci
    println!("Dynamic Fibonacci : ");
    let mut map = HashMap::new();
    for i in 1..5{
        let fibonacci: u64 = fibonacci::fb_dynamic(i, &mut map);
        println!("{} : {}", i, fibonacci);
    }

    // Code 3: Get input from user in print it
    let mut data = String::new();
    println!("Enter the data :");
    io::stdin().read_line(&mut data);
    println!("The data is : {}", data);

    // Code 4: Let's have a guess game!!
    println!("Welcome to Guess Game!!");
    let correct = random::<u8>();
    println!("(This is a help :D :D) Correct value is : {}", correct);
    loop{
        let guess = get_guess();
        if handle_guess(guess, correct) {
            break;
        }
    }

    // Code 5: Ownerships!
    let values: Vec<i32> = vec![1,2,3,4,5];
    //let sum = take_ownership_sum(values); // here take_ownership_sum() takes ownership of values
    // println!("Sum is : {}", sum);
    // below code returns error because the owner ship of "values" was taken by "take_ownership_sum()" function
    // println!("Length of values : {}", values.len()); ----> BOOMM!ERROR!
    let sum = borrow_ownership_sum(&values); // borrow_ownership_sum() borrows ownership of values!
    println!("Sum is : {}", sum);
    println!("Length of values : {}", values.len()); // There is no error!

    // Note : You can give ownership of a value to some function but
    // get the value again from that function and assign to it again

    // Code 6 : Vectors, Strings, strs, Slices
    let a = vec![10,11,12,13,14];
    let sla = &a[1..3];
    // sla is equal to &[11,12,13]
    let b = String::from("Hello!!");
    let slb = &b[0..2];
    // sla is equal to "Hel"

    // Code 7 : Struct and Enums
    let user = User {
        name : String::from("Alireza"),
        family: String::from("Jangi"),
        age: 29,
        address: Address {
            country: String::from("Iran"),
            city: String::from("Tehran"),
            address: String::from("Kargar Street")
        }
    };
    // Note : You should fill all items of struct when you initialize it ;)
    println!("User props =====> name : {} , family : {} , age : {}", user.name, user.family, user.age);
    println!(
        "User Address =====> country : {} , city : {} , address : {}",
         user.address.country,
         user.address.city,
         user.address.address
    );
    let point: structs::Point2D = add_points(Point2D{ x: 1.0, y: 9.0 }, Point2D{ x: 3.0, y: 5.0 });
    println!("Result x: {} , y: {}", point.x, point.y);
}
