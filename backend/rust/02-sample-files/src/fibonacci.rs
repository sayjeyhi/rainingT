use std::collections::HashMap;

const FIBONACCI_ZERO: u64 = 1;
const FIBONACCI_ONE:  u64 = 1;
pub fn fb(n: u64) -> u64 {
    if n == 0 {
        FIBONACCI_ZERO
    }else if n == 1 {
        FIBONACCI_ONE
    } else {
        fb(n - 1) + fb(n - 2)
    }
}

pub fn fb_dynamic(n: u64, map: &mut HashMap<u64, u64>) -> u64 {
    match n {
        0 | 1 => 1,
        n => {
            if map.contains_key(&n) {
                *map.get(&n).unwrap()
            }else {
                let val = fb_dynamic(n-1, map) + fb_dynamic(n-2, map);
                map.insert(n, val);
                val
            }
        }
    }
}