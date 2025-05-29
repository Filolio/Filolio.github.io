let w_type = "width";

class Card {
    constructor(data, data_size) {

        this.data = data;
        this.data_size = data_size;
        this.i = 0;
    }
    newCard() {
        $("#content").animate({ opacity: 0 }, 0);
        $("#img").css("width", data[this.i][w_type]);
        $("#h3").html(data[this.i]['h3']);
        $("#s").attr("srcset", 'media/im_' + data[this.i]['img'] + "_full.png");
        $("#img").attr("src", "media/im_" + data[this.i]['img'] + "_half.png");
        $("#img").attr("alt", data[this.i]['h3']);
        $("#img").attr("title", data[this.i]['h3']);
        $("#content").animate({ opacity: 1 }, 1000);
    }
    nextCard() {
        this.i++;
        if (this.i > this.data_size) { this.i = 0; }
        this.newCard();
    }
    prevCard() {
        this.i--;
        if (this.i < 0) { this.i = this.data_size; }
        this.newCard();
    }
    updateWidth() {
        //alert(w_type);
        $("#img").css("width", data[this.i][w_type]);
    }
}

const data = [
    {
        'h3': "Кружка из серебра с черневым узором ВИНОГРАД",
        'img': 'f',
        'width': "40%",
        'phone_width': "90%"
    },
    {
        'h3': 'Фляжка "ГЛУХАРЬ"',
        'img': 's',
        'width': "15%",
        'phone_width': "50%"
    },
    {
        'h3': 'Чаша из серебра с черневым узором КРЫЖОВНИК',
        'img': 't',
        'width': "20%",
        'phone_width': "60%"
    },
    {
        'h3': 'Серебряная вилка для лимона с черневым узором',
        'img': 'fo',
        'width': "30%",
        'phone_width': "90%"
    }
];
let card = new Card(data, 3);
function phoneCheck() {
    let x = window.matchMedia("(width<768px)");
    if (x.matches) { // Если медиа запрос совпадает
        w_type = "phone_width";
        card.updateWidth();
        //alert("phone");
    } else {
        w_type = "width";
        card.updateWidth();
        //alert("NOphone");
    }
}


phoneCheck();
window.onresize = phoneCheck;


$(document).ready(function () {
    $("#next_pic").click(() => {
        //alert("asd");
        card.nextCard();
    });
    $("#prev_pic").click(() => {
        //alert("asd");
        card.prevCard();
    });
});