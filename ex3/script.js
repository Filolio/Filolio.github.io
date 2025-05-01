let i=1 ,maxi=7,
prev_btn=document.getElementById("previous_btn"),
next_btn=document.getElementById("next_btn"),
left_img=document.getElementById("left"),
center_img=document.getElementById("center"),
right_img=document.getElementById("right");
function showImages(){
    left_img.src="images/"+i+".bmp";
    center_img.src="images/"+(i+1)+".bmp";
    right_img.src="images/"+(i+2)+".bmp";
}
prev_btn.addEventListener('click', ()=>{
    if(i>1){
        i--;
        showImages();
    }
})
next_btn.addEventListener('click', ()=>{
    if(i<maxi){
        i++;
        showImages();
    }
})
