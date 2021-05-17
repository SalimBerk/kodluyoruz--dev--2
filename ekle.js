function newElement() {
  const task = document.querySelector("#task");
  let message = task.value;
  let list = document.querySelector("#list");

  let li = document.createElement("li");
  li.setAttribute("class", "list-group-item list-group-item-action");
  li.style.border = "solid #ff7f00";
  li.style.marginBottom = "50px";
  li.style.color = "#ff7f00";
  

  li.innerHTML = message;
  if (message){
    list.appendChild(li);
  }else{
    const alert_dom=document.querySelector("#alert");
    const alert=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>UYARI!</strong>    Veri girişi yapılmadı !!!.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
    alert_dom.innerHTML=alert;
    

  }


  var span = document.createElement("span");
  var text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.addEventListener("click", function () {
    list.removeChild(li);
  });
}
