$(document).ready(function(){
   loadDoc("repoTable", "https://api.github.com/users/tkasozi/repos");
});

function loadDoc(id,url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse( this.responseText);
        for(let x = 0; x <= this.responseText.length; ++x){
            let elm = $("<a></a>").html(data[x].name).addClass("list-group-item")
            let new_url = "'"+x.html_url+"'";
            console.log(new_url)
            $("#"+id).append(elm.attr("href",new_url));
        }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }