function like(index){
    var element = document.querySelectorAll(".likes p")[index];
    var text = element.innerText;
    text = text.split(" ");
    text[0] = parseInt(text[0]) + 1;
    element.innerText = text.join(" ");
}