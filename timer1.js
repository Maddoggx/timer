 //to make our machine perform a system sound
// let myTime = [3, 5, 9, 10, 15];
const myTime = process.argv.slice(2);
const myBeeper = function(delay) {
  setTimeout(function(){
    process.stdout.write('\x07');
  }, delay * 1000);
  
}
const timer = function(times) {
  for (let beep of times) {
    myBeeper(beep);
  }

}
timer(myTime);