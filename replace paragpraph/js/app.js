let text = document.getElementById("demo").innerHTML; 
let result = text.replace(/pakistan|kashmir|islamabad/gi, function (x) {
  return x.toUpperCase();
});
document.getElementById("demo").innerHTML = result;
