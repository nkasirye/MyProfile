$(document).ready(function(){
   loadDoc("repoTable", "https://api.github.com/users/nkasirye/repos");
   const elm = $('.btn');
   $(".btn").on("mouseover", function() {
    $(this).addClass('big-font');
}).on('mouseleave',()=> {
  $(elm).removeClass('big-font');
});

});

function loadDoc(id,url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse( this.responseText);
        for(let x = 0; x <= this.responseText.length; ++x){
            let new_url = data[x].html_url;            
            let elm = $("<a></a>").html(data[x].name).addClass("list-group-item").attr("href",new_url)
            .attr("target","blanck");
            console.log(new_url)
            $("#"+id).append(elm);
        }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }