var allBoxes = document.getElementsByClassName('all-boxes');
  // console.log(allBoxes)


document.getElementById("box-1").addEventListener("click", function() {
    document.getElementById("box-1").innerHTML = "Oooh - so close, but no cigar";
  });

  document.getElementById("box-2").addEventListener("click", function() {
    document.getElementById("box-2").innerHTML = "DING DING DING - We have a winner";
  });

  document.getElementById("box-3").addEventListener("click", function() {
    document.getElementById("box-3").innerHTML = " Oops, butter luck next time";
  });

  allBoxes.addEventListener("click", function() {
    this.children[1].classList.hidebutton('hide');
  });