$(document).ready(()=>{
    $.get('../../navbar/nav.html',(data)=>{
        $("#nav-container").html(data)
    })
})