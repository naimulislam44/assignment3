/*function kilometerToMeter()*/

function kilometerToMeter(Kilometer)

    {
    const Meter= Kilometer*1000;

    return Meter;
    }

    const a=[1,10,100];

    const value1= kilometerToMeter(a[0]);

    console.log(value1);

    const value2= kilometerToMeter(a[1]);

    console.log(value2);

     const value3= kilometerToMeter(a[2]);

    console.log(value3);


 

 //-------------------------------
 

/*function budgetCalculator()*/

 function budgetCalculator(watch,mobile,laptop)
 
    {

    var result= watch*50+mobile*100+laptop*500;

    return result;
    }


    var total=budgetCalculator( 1, 2, 1);

console.log(total);



  //-------------------------------
 
 
 /*function hotelCost()*/
 
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



 //-------------------------------

 /*
 function megaFriend();
 */
 function megaFriend(name)

 {
     var element=name[0];
 
     for(i=0;i<name.length;i++)
     {
         if(name[i].length > element.length)
             {
                 element=name[i];
 
             }
     
     }
 
     return element;
 }
 
 var name_list=["messi","ronaldo","eminem","cristiano"];

 
 console.log(megaFriend(name_list));