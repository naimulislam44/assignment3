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