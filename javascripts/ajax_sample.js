let number = 0;
let data = [];

/*cette partie est codé en jquerie */
const button = $("#btn");
const videoArea = $("#video");
const titleArea = $("#title");
const contentArea = $("#content");

/*cette partie est codé en jquerie */
function getData() {
    return $.ajax('ajax.json', {
        type: 'GET',
    })
};

/*cette partie est codé en jquerie */
function changeVideo() {
    button.click(function () {
        getData().then(function (data) {
            console.log(data);//--4
            titleArea.html(data[number].title);
            contentArea.html(data[number].content);
            videoArea.attr('src', data[number].url);
            number == 2 ? number = 0 : number++
        })
    });
}

window.onload = changeVideo;