/*var x;
for (x = 0; x < 10; x++){
  alert('Current Number: '+ x);
}
console.log(7*(x % 2));*/
function doCanvasStuff()
{
  var canvas = document.getElementById('ourCanvas');
  var context = canvas.getContext('2d');
  context.strokeStyle = '#888888';
  context.fillStyle = 'rgb(200,45,130)';
  context.fillRect(100, 100, 200, 200);
}
