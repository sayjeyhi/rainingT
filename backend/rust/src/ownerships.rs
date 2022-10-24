pub fn take_ownership_sum(v: Vec<i32>) -> i32 {
    let mut sum = 0;
    for i in v {
        sum += i
    }
    return sum;
}

pub fn borrow_ownership_sum(v: &Vec<i32>) -> i32 {
    let mut sum: i32 = 0;
    for item in v{
        sum += *item;
    }
    return sum;
}