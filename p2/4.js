class Calendar {
    constructor(){
    }
  
    printCalendar(m, y) {}
  
    isLeapYear(y){
        if(y%400==0 || y%4==0 && y%100!=0){
            return true;
        }else{
            return false;
        }
    }
  
    todayPlus(d, n) {
        return (d+n)%7
    }
  
    firstDayYear(y) {
        return (y+Math.floor((y-1)/4)-Math.floor((y-1)/100)+Math.floor((y-1)/400))%7
    }
  }
  
  (function useCalendar(){
      let c1=new Calendar();
      console.log("Metodo Print Calendar")
      console.log("Método is Leap Year, año 2020")
      console.log(c1.isLeapYear(2020))
      console.log("Metodo Today Plus, Dia Martes mas 5")
      console.log(c1.todayPlus(2,5))
      console.log("Metodo First Day Year, año 2020")
      console.log(c1.firstDayYear(2020))
  })();