// aaa = 10;
// aaa = "aaaa";
// aaa = [10, 20, 20];
// aaa[0]; //10
// aaa = { x: 0, y: 100 };
// aaa.y; //100

// aaa = [10, { x: 0, y: 100 }];
// aaa[0]; //10
// aaa[1]; //{x:0,y:100}
// aaa[1].y; //100

//index.js
fetch("./data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (gallery) {
    init(gallery.data); //<-- forEach 문이랑 몽땅 때려넣으면됨 init은 그냥 함수이름임
    // console.log(gallery.data);
  });
function init(data) {
  const elGallery = document.querySelector(".gallery div");

  elGallery.innerHTML = `<img src=${data[0].url}>`;

  //   console.log(data[0].url);
}
