// fetch("./data.xml")
//   .then((res) => {
//     console.log(res.text());
//   })
//   .then(function (data) {
//     console.log(data);
//   });
$.ajax({
  url: "./data.xml",
  beforSend: function () {
    console.log("준비");
  },
  complete: function () {
    console.log("완료");
  },
  error: function () {
    console.log("데이터 실패");
  },
  success: function (data) {
    console.log("데이터 성공");
    let tag = "",
      url,
      title;
    $(data)
      .find("item")
      .each(function (key, value) {
        url = $(value).find("url").text();
        title = $(value).find("title").text();
        tag += `<figure>
        <img src='${url}'>
        <figcaotion>${title}</figcaption>
        </figure>
        `;
      });
    $(".gallery > div").html(tag);
    $(".gallery figure").click(function () {
      let key = $(this).index();
      let detail = $(data).find("item").eq(key).find("detail").html();
      alert(detail);
    });
    //     $("body").prepend(`<img src="${$(value).find("url").text()}">`);
    //   });
    // $(data).find("item").eq(0).find("detail") 내가 원하는걸 찾는작업
  },
});

// $("선택자").method();
