$(document).ready(function(){
    $("#submit").click(function(){
        var input = $("#parity_check_matrix").val().split('\n');
        var len = input.length;
        var matrix = [];
        for (var index = 0; index < input.length; index++) {
            var line = input[index].split(' ');
            matrix.push(line);
        }
        var debug = "\\[\\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}\\]";
        $("#pretty_print").text(debug);
        MathJax.Hub.Queue(['Typeset',MathJax.Hub,'pretty_print']);
    });
});
