var sc = 3000;
var s = 0;
var sw = screen.width;
var t = true;

function drop(x) {
  if (x == 0) {
    document.getElementById("folder-1").classList.remove("down");
    document.getElementById("folder-2").classList.remove("down");
  } else if (x == 1) {
    document.getElementById("folder-1").classList.add("down");
    document.getElementById("folder-2").classList.remove("down");
  } else {
    document.getElementById("folder-1").classList.remove("down");
    document.getElementById("folder-2").classList.add("down");
  }
};

function next(x) {
  if (s == 0) {
    document.getElementById("slide" + x).classList.add("slide0");
    s += 1
  } else if (s == 1 && x !== 2) {
    document.getElementById("slide" + x).classList.add("slide1");
    document.getElementById("slide" + x).classList.remove("slide0");
    s += 1
  } else {
    document.getElementById("slide" + x).classList.remove("slide1");
    document.getElementById("slide" + x).classList.remove("slide0");
    s = 0
  }
};

function changeCSS() {
  if (t == true) {
    t = false
    document.getElementById("de").setAttribute("href", "light-design.css");
  } else {
    t = true
    document.getElementById("de").setAttribute("href", "dark-design.css");
  }
  return t;
};

function orientation() {
  if (window.innerWidth > window.innerHeight) {
    document.getElementById("meta").setAttribute("content", "initial-scale=0");
  } else {
    document.getElementById("meta").setAttribute("content", "width=device-width, initial-scale=1.0");
  };
}

window.addEventListener("scroll", () => {
  var sc = window.scrollY;
  if (sc < 294) {
    drop(0);
  } else if (sc < 1709) {
    drop(1);
  } else {
    drop(2);
  }
  // console.log(sc);
});

orientation()

window.addEventListener("orientationchange", function() {
  orientation()
});
