$(document).ready(function(){
    $("#pretty_print").append("Appended text here.");
    $("#submit").click(function(){
        var input = $("#parity_check_matrix").val().split('\n');
        var len = input.length;
        var matrix = [];
        for (var index = 0; index < input.length; index++) {
            var line = input[index].split(' ');
            matrix.push(line);
        }
    });
});
