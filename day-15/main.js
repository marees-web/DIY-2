
        var x = 10;
        var y = 20;
         if (y>x )
         {console.log ("y is greater than x");}
         else{console.log ("x is greater than y");}
         var color = "red";
         switch (color) {
          case "red":
          console.log ("hello from case one");
            break;
         
          default:console.log ("hello");
            break;
         }
        
         var k = 1;
         var sum = 0;
         while (k<=10) {
          sum = sum + 10
          k=+1
         }
         console.log ("sum");
      
         for(let i=0; i <5; i++);
         console.log("welcome");
        
         const newObj = [
          {
            id:1,
            orer: "below 500",
            orderPercentage : 10.05,
            restaurant: "punjabi"

          },
          {
            id:2,
            orer: "500-1000",
            orderPercentage : 12.45,
            restaurant: "punjabi"

          },
          {
            id:3,
            orer: "1000-1500",
            orderPercentage : 15.08,
            restaurant: "punjabi"

          },
          {
            id:4,
            orer: "1500-2000",
            orderPercentage : 17.05,
            restaurant: "punjabi"

          }
         ]
         for(let obj of newobj){
          console.log(obj(orderPercentage));
         }

    