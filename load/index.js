$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div");
$("footer").load("./inc.html footer>div");

function head() {
  $("header a").onclick(function () {
    alert("해라!!!");
  });
}
