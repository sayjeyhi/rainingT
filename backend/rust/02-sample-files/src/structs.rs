pub struct Point2D {
    pub x: f64,
    pub y: f64
}

pub fn add_points(p1: Point2D, p2:Point2D) -> Point2D{
    Point2D{
        x: p1.x + p2.x,
        y: p1.y + p2.y
    }
}