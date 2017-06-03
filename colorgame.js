


var r =null;
var g =null;
var b =null;
var mode="hard";
var randomRgb =null;

var ansSq = Math.floor(Math.random()*100) % 6;

var rgbdis = document.querySelectorAll("#rgbDisplay");


var sq= document.querySelectorAll(".square");
var gamedecider = document.querySelector("#gamedecider");

var esyBtn = document.querySelector("#esyBtn");
var hrdBtn = document.querySelector("#hrdBtn");

var topclr = document.querySelector(".top");

var playagain1 = document.querySelector("#playagain");


playagain1.addEventListener("click",function(){


              playagain1.textContent = "NEW COLOR";
             gamedecider.textContent=  "";
             topclr.style.background="steelblue";
    if(mode=="easy")
    {
    	easymode();
    }
    else
    {
    	hardmode();
    }
     

    });



  esyBtn.addEventListener("click",easymode);



    function easymode()
    {

          mode="easy";
            gamedecider.textContent=  "";
         hrdBtn.classList.remove("selected");
         esyBtn.classList.add("selected");

           ansSq = Math.floor(Math.random()*100) % 3;
            r=Math.floor(Math.random()*10000) %256;
			g=Math.floor(Math.random()*10000) %256;
			b=Math.floor(Math.random()*10000) %256;

			 randomRgb = "rgb("+r+", "+g+", "+b+")";
            
            rgbDisplay.textContent= randomRgb;

              
               for(var k=0;k<sq.length;k++)
               {
            	var r1=Math.floor(Math.random()*10000) %256;
				var g1=Math.floor(Math.random()*10000) %256;
				var b1=Math.floor(Math.random()*10000) %256;

			  

                var temprgb = "rgb("+r1+", "+g1+", "+b1+")";

                 if(k==ansSq)
                 {
                 	sq[k].style.background=randomRgb;
                 }
                 else if(k>2)
                 {
                 		sq[k].style.display= "none";
                 }
                 else
                 {
                    sq[k].style.background=temprgb;
                 }

                    
              
              }

           


    }
      
      hrdBtn.addEventListener("click",hardmode);


  function hardmode()
  {
            
            mode="hard";
              gamedecider.textContent=  "";
             hrdBtn.classList.add("selected");
	         esyBtn.classList.remove("selected");
            r=Math.floor(Math.random()*10000) %256;
			g=Math.floor(Math.random()*10000) %256;
			b=Math.floor(Math.random()*10000) %256;

			 randomRgb = "rgb("+r+", "+g+", "+b+")";
			rgbDisplay.textContent= randomRgb;

          ansSq = Math.floor(Math.random()*100) % 6;
          for(var i=0;i<sq.length;i++)
          {
          			 if(i == ansSq)
				 	 {
				 	sq[i].style.background = randomRgb;
				    }
				    else
				    {
				    	// r1=Math.floor(Math.random()*1000) %81;
     //    g1=Math.floor(Math.random()*1000) %31;
     //    b1=Math.floor(Math.random()*1000) %91;

				var r1=Math.floor(Math.random()*10000) %256;
				var g1=Math.floor(Math.random()*10000) %256;
				var b1=Math.floor(Math.random()*10000) %256;

			  

		          var temprgb = "rgb("+r1+", "+g1+", "+b1+")";

		          
		         sq[i].style.background = temprgb;
				    }

          }


     
  }


  hardmode();
  

 for(var i=0;i<sq.length;i++)

 {
 	
 	sq[i].addEventListener("click",function(){
 		var col =this.style.background;
 		  
         
          if( col == randomRgb)
          {
          		 playagain1.textContent = "Play Again?";
             gamedecider.textContent=  "       Correct :-)";
         

              for(var j=0;j<sq.length;j++)
              {
              	sq[j].style.background= randomRgb;

              }
              topclr.style.background = randomRgb; 
             
          }
          else
          {
          	
             this.style.background = "#232323";
             gamedecider.textContent=  "       Tryagain :-("
              

          }


 	});
 }

