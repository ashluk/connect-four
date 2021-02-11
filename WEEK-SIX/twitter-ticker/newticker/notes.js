/* When a users mouses onto a headline, the animation should pause 
(which will require cancelAnimationFrame) and the headline should turn
 blue and gain an underline to indicate that it can be clicked. 
 If the user mouses out without clicking, the animation should resume.*/

//we need to add an event listing to each of the links independantly

/*(function () {
     var headlines = document.getElementById('headlines');
     var links = document.getElementsByTagName('a');
     var left = headlines.offsetLeft;
     var requestId;

     console.log('links:',links);

     for(var i=0; i< links.length, i++) {
         //console.log('links[i]: ',links[i]);
         links[i].addEventListener('mouseenter', function (e) {
             console.log('e.target:', e.target);
             //update the style of that specific link...
             //stop the ticker... cancel animation frame can go here
         })
         links[i].addEventListener('mouseleave', function(e) {
             console.log('e.target mouse leave: ', e.target)
             //restart our headlines moving
         })
     }
 })

 function moveHeadlines() {

 }

 requestId is equal to whatever the requestAnimationFrame returns
*/
