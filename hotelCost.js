
 function hotelCost(days)
 {
     var cost=0;
 
     if (days<=10)
         {
             cost= days*100;
         }
     
     
         else if(days<=20)
         
         {
             var first_part=10*100;
             var remaining=days-10;
             var second_part=remaining*80;
             cost=first_part+second_part;
         }
 
 
         else
 
         {
             var first_part=10*100;
             var second_part=10*80;
             var remaining =days-20;
             var third_part=remaining*50;
 
             cost=first_part+second_part+third_part;
         }
 
 
 
     return cost;
 }
 
 var rent= hotelCost(22);
 var rent1= hotelCost(20);
 var rent2= hotelCost(10);   
 console.log(rent);
 console.log(rent1);
 console.log(rent2);
 
 