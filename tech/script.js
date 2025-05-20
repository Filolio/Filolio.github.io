
$(document).ready(function () {
    let index = 0, cnt = 4, arr=[];
    $("#prev").hide();
    for (i = 0; i < cnt; i++) {
        arr.push(cnt - i);
    }
    for (i = 1; i < cnt; i++) {

        $("#stage" + (i + 1))
            .animate({ right: "+=20%", opacity: 0 }, 0).hide();

    }

    $("#next").click(() => {
        NewPosition(true, cnt, arr);
    });
    $("#prev").click(() => {
        NewPosition(false, cnt, arr);
    });

});
function NewPosition(nextOrPrev, cnt, arr) {

 
     let nextIndex = 0, prevIndex = 0, currentIndex = 0;
     for (i = 0; i < cnt; i++) {
         if (arr[i] == cnt) {
             nextIndex = i + 1;
             prevIndex = i - 1;
             currentIndex = i;
         }
 
     }
     if (nextOrPrev) {
        if (nextIndex == cnt - 1) $("#next").animate({ opacity: 0 }, 500).hide(500);
        $("#prev").animate({ opacity: 1 }, 500).show(500);
        $("#stage" + (currentIndex + 1))
            .animate({ left: "+=20%", opacity: 0 }, 1000).hide(0);
        $("#stage" + (nextIndex + 1))
        .show().animate({ left: "+=20%", opacity: 1 }, 1000);

             let tmp = arr[cnt - 1], prevArr=[];
             for(i=0;i<cnt;i++){
                 prevArr.push(arr[i]);
                
             }

             for (i = 1; i < cnt; i++) {
                 arr[i]=prevArr[i - 1]

             }
             arr[0]=tmp;


    } else {
        if (prevIndex == 0) $("#prev").animate({ opacity: 0 }, 500).hide(500);
        $("#next").animate({ opacity: 1 }, 500).show(500);

        $("#stage" + (currentIndex + 1))
            .animate({ left: "-=20%", opacity: 0 }, 1000).hide(0);
        $("#stage" + (prevIndex + 1))
        .show().animate({ left: "-=20%", opacity: 1 }, 1000);

             let tmp = arr[0], prevArr=[];
             for(i=0;i<cnt;i++){
                 prevArr.push(arr[i]);
                
             }
             for (i = 0; i < cnt - 1; i++) {
                 arr[i]=prevArr[i+1];
             }
             arr[cnt-1]=tmp;
    }
 }