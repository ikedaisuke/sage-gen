$(document).ready(function(){
    $("#submit").click(function(){
        var mtx = $("#parity_check_matrix").val().split('\n');
        var len = mtx.length;
        var array = [];
        // alert(len);
        for (var i = 0; i < mtx.length; i++) {
            var row = mtx[i].split(' ');
            array.push(row);
        }
        alert(array);
    });
});
