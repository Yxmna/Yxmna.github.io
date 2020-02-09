function next(x) {
  document.getElementById("n1").classList.remove("selected");
  document.getElementById("n2").classList.remove("selected");
  document.getElementById("n3").classList.remove("selected");
  document.getElementById("n4").classList.remove("selected");
  document.getElementById("n5").classList.remove("selected");
  document.getElementById("n6").classList.remove("selected");
  document.getElementById("n7").classList.remove("selected");
  document.getElementById("n8").classList.remove("selected");
  document.getElementById("n9").classList.remove("selected");
  document.getElementById("n" + x).classList.add("selected");
  document.getElementById("v").classList.remove("show");
  document.getElementById("code").classList.remove("show");
  clear();
};




function aside(x) {
  clear();
  if (x==3) {
    document.getElementById("v").classList.add("show")
  } else if (x==12){
    document.getElementById("code").classList.add("show");
  } else {
    document.getElementById("i" + x).classList.add("show");
  }
};

function clear() {
  document.getElementById("i1").classList.remove("show");
  document.getElementById("i2").classList.remove("show");
  document.getElementById("i4").classList.remove("show");
  document.getElementById("i5").classList.remove("show");
  document.getElementById("i6").classList.remove("show");
  document.getElementById("i7").classList.remove("show");
  document.getElementById("i8").classList.remove("show");
  document.getElementById("i9").classList.remove("show");
  document.getElementById("i10").classList.remove("show");
  document.getElementById("i11").classList.remove("show");
  document.getElementById("code").classList.remove("show");
  document.getElementById("v").classList.remove("show");
};
