// O(f(n))
let x=6
let y=30

function gcd(x, y) {
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  console.log("Gcd de "+x+" y "+y+": "+gcd(x,y))//Variables declaradas al inicio