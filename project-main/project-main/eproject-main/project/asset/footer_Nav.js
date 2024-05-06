$(document).ready(()=>{
    $.get('../../navbar/nav.html',(data)=>{
        $("#nav-container").html(data)
    })
})

$(document).ready(()=>{
    $.get('../../footer/footer.html',(data)=>{
        $("#footer-container").html(data)
    })
})