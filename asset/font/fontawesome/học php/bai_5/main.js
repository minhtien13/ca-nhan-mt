function clldata(){
    let ip = $("#ip").val();
    if(ip.trim().length == 0){
        alert('Vui lòng nhập IP');
    }else{

        var url = 'http://ip-api.com/json/' + ip;

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: url,
            success: function(result) {
                if (result.status == 'success') {
                    var html = '';
                    for (var i in result) {
                        html += '<li>'+ i +': '+ result[i]  +'</li>';
                    }

                    $('#items').append(html);
                } else {
                    alert('IP: '+ ip + ' lỗi');
                }
            }
        });

    }
}