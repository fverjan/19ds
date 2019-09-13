// O(f(n))
let x=5
let y=8

function lcm(x, y) {
    let temp=x*y;
    while(y) {
        let t = y;
        y = x % y;
        x = t;
      }
      return temp/x;
    }

    console.log("Lcm de "+x+" y "+y+": "+lcm(x,y)) //Variables declaradas al inicio