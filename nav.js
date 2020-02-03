// Check
//document.getElementById("checkbox").checked = true;

// Uncheck
//document.getElementById("checkbox").checked = false;

function unCheck() {
  if (document.getElementById("navi-toggle").checked == true) {
    document.getElementById("navi-toggle").checked = false;
    document.getElementById("link-1").classList.add("u-disable-link");
    document.getElementById("link-2").classList.add("u-disable-link");
    document.getElementById("link-3").classList.add("u-disable-link");
    document.getElementById("link-4").classList.add("u-disable-link");
  }
}

function check() {
  if (document.getElementById("navi-toggle").checked == true) {
    document.getElementById("link-1").classList.remove("u-disable-link");
    document.getElementById("link-2").classList.remove("u-disable-link");
    document.getElementById("link-3").classList.remove("u-disable-link");
    document.getElementById("link-4").classList.remove("u-disable-link");
  } else {
    document.getElementById("link-1").classList.add("u-disable-link");
    document.getElementById("link-2").classList.add("u-disable-link");
    document.getElementById("link-3").classList.add("u-disable-link");
    document.getElementById("link-4").classList.add("u-disable-link");
  }
}
