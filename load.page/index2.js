let css = `
        <style>
            main{opacity:0; transition:1s; }
            .active{opacity:1;}
        </style>`;

$("body").append(css);

function pageLoad(pageUrl, i) {
  history.pushState({ page: i, url: pageUrl }, "test");

  $("main").removeClass("active");

  setTimeout(function () {
    $("main").load(pageUrl, function () {
      $(this).addClass("active");
    });
  }, 500);

  //addClass(), removeClass(), toggleClass(), hasClass()
  $("header a").css("color", "blue").eq(i).css("color", "red");
}
pageLoad("main.html");

$("header a").on("click", function (e) {
  e.preventDefault();
  let url = $(this).attr("href");
  let idx = $(this).index();

  //let url = this.getAttribute('href');

  pageLoad(url, idx);
});

$(window).on("popstate", function () {
  let idx = history.state.page;
  let url = history.state.url;
  pageLoad(url, idx);
});
