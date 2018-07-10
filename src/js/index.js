$.ajax({
    url: '/api/list',
    dataType: "json",
    success: function(res) {
        if(res.code === "1"){
            var str = "";
            res.msg.forEach(function(item){
                str += `<div class="swiper-slide">`
                    item.list.forEach(function(dlitem){
                        str += `<dl>
                            <dt> <i class="iconfont">${dlitem.url}</i></dt>
                            <dd>${dlitem.title}</dd>
                        </dl>`
                    })            
                str +=`</div>`;
                console.log(str);
                
            })
            $(".swiper-wrapper").html(str);      
        }
        new Swiper(".swiper-container",{
                pagination:".page"
        });
    },
    error: function(error) {
        console.warn(error)
    }
})