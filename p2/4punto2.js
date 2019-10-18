class Calendar {
    constructor(y,m,d){
        this.y=y;
        this.m=m;
        this.d=d;
    }
  
    printCalendar(m, y) {}
  
    isLeapYear(){
        if(this.y%400==0 || this.y%4==0 && this.y%100!=0){
            return true;
        }else{
            return false;
        }
    }
  
    todayPlus(n) {
        return (this.d+n)%7
    }
  
    firstDayYear() {
        return (this.y+Math.floor((this.y-1)/4)-Math.floor((this.y-1)/100)+Math.floor((this.y-1)/400))%7
    }
  }
  
  (function useCalendar(){
      let c1=new Calendar(2020,10,2);
      console.log("Metodo Print Calendar")
      console.log("Método is Leap Year, año "+c1.y)
      console.log(c1.isLeapYear())
      console.log("Metodo Today Plus, Dia "+c1.d+" mas 5")
      console.log(c1.todayPlus(5))
      console.log("Metodo First Day Year, año "+c1.y)
      console.log(c1.firstDayYear())
  })();