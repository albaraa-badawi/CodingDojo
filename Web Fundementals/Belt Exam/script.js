function like(id){
    var element = document.getElementById(id);
    element.innerText = parseInt(element.innerText) + 1;
}

function hide(element){
    element.remove();
}

function search_alert(id){
    var text = document.getElementById(id).value;
    console.log(id);
    alert('You are searching for: "' + text+ '"');
}