/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */
var numshots = 0;
var numhits = 0;
var numRan = 0;

var numshots2 = 0;
var numhits2 = 0;
var numRan2 = 0;
var resetNum = 0;

 $(function(){

$("#teamone-shoot").click(function() {
         
         
               
        numRan = Math.floor((Math.random()* 11) + 1);
    
        
        if (numRan == 10) {
        	$("html").css("background-color", "red");
            numhits++;
            $("#teamone-numhits").html(numhits);
            numshots++;
            $("#teamone-numshots").html(numshots);
            
        } else {
            
            numshots++;
            $("#teamone-numshots").html(numshots);
        
        
      	}
  
        });

$("#teamtwo-shoot").click(function() {
         
               
        numRan2 = Math.floor((Math.random()* 11) + 1);
    
        
        if (numRan2 == 10) {
        	$("html").css("background-color", "blue");
            numhits2++;
            $("#teamtwo-numhits").html(numhits2);
            numshots++;
            $("#teamtwo-numshots").html(numshots2);
            
            
        } else {
            
            numshots2++;
            $("#teamtwo-numshots").html(numshots2);
        }
        
        });

$("#reset").click(function(){
       
       numshots = 0;
       numshots2 = 0;
       numhits = 0;
       numhits2 = 0;
       
       resetNum++;
       $("html").css("background-color", "white");
       $("#teamtwo-numshots").html(numshots2);
       $("#teamtwo-numhits").html(numhits2);
       $("#teamone-numhits").html(numhits);
       $("#teamone-numshots").html(numshots);
       $("#num-resets").html(resetNum);	

   });



 })