
let origArray = [2, 3, 4];


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('textbox1').value = origArray[0];
  document.getElementById('textbox2').value = origArray[1];
  document.getElementById('textbox3').value = origArray[2];

  document.getElementById('btn1').onclick = function() {
    let newArray = origArray.map(function(num) {
      return Math.pow(num, 2);
    });
    document.getElementById('textbox1').value = newArray[0];
    document.getElementById('textbox2').value = newArray[1];
    document.getElementById('textbox3').value = newArray[2];
  };

  document.getElementById('btn2').addEventListener('click', function() {
    let newArray = origArray.map(function(num) {
      return Math.pow(num, 3);
    });
    document.getElementById('textbox1').value = newArray[0];
    document.getElementById('textbox2').value = newArray[1];
    document.getElementById('textbox3').value = newArray[2];
  });

  function fourthPower() {
    let newArray = origArray.map(function(num) {
      return Math.pow(num, 4);
    });
    document.getElementById('textbox1').value = newArray[0];
    document.getElementById('textbox2').value = newArray[1];
    document.getElementById('textbox3').value = newArray[2];
  }
  document.getElementById('btn3').addEventListener('click', fourthPower);

});
