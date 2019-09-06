function bold() {
    if (document.getElementById("textarea").style.fontWeight =='bold') {
        document.getElementById("textarea").style.fontWeight = 'normal';
    } else {
        document.getElementById("textarea").style.fontWeight = 'bold';
      }
    }
function italic() {
    if(document.getElementById("textarea").style.fontStyle =='italic') {
        document.getElementById("textarea").style.fontStyle = 'normal';
    } else {
       document.getElementById("textarea").style.fontStyle ='italic';
    }
}
function underline() {
    if(document.getElementById("underline").style.textDecoration =='underline') {
        document.getElementById("textarea").style.textDecoration ='none';
    }else document.getElementById("textarea").style.textDecoration ='underline';
    }

function sizechange(){
    document.getElementById("textarea").style.fontSize=document.getElementById("size").value
}
function stylechange(){
   document.getElementById("textarea").style.fontFamily=document.getElementById("police").value
}
$(".image").hover(function(){
    $(this).css("opacity","0.5")
    $(this).find("button").show()
},function(){
    $(this).css("opacity","1")
    $(this).find("button").hide()
})

$(".image button").click(function(){
    $("#ex1").modal()
})














































