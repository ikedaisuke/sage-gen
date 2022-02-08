$(document).ready(function(){
    $("#submit").click(function(){
        var input = $("#parity_check_matrix").val().split('\n');
        var len = input.length;
        var matrix = [];

        // 行列表示
        $("#pretty_print").text("\\[\\begin{pmatrix}");
        for (var row = 0; row < input.length; row++) {
            var line = input[row].split(' ');
            for (var col = 0; col < line.length - 1; col++) {
                $("#pretty_print").append(line[col]);
                $("#pretty_print").append("&");
            }
            $("#pretty_print").append(line[col]);
            $("#pretty_print").append("\\\\");
            matrix.push(line);
        }
        $("#pretty_print").append("\\end{pmatrix}\\]");
        MathJax.Hub.Queue(['Typeset',MathJax.Hub,'pretty_print']);

        // SageMath 表示
        var chars = [];
        for (var i = 0; i < col + 1; i++) {
            chars.push(String.fromCharCode(i+97));
        }
        $("#sage").text("R.<");
        $("#sage").append(chars.join(','));
        $("#sage").append("> = PolynomialRing(QQ, " + (col + 1) + ", order=\'degrevlex\')");
        $("#sage").append(document.createElement("br"));

        $("#sage").append("A = matrix([");
        var members = [];
        for(let i = 0; i < row; i++) {
            members.push('[' + matrix[i].join(',') + ']');
        }
        $("#sage").append(members.join(','));
        $("#sage").append("])");
        $("#sage").append(document.createElement("br"));

        $("#sage").append("I = ToricIdeal(A, polynomial_ring = R)");
        $("#sage").append(document.createElement("br"));

        $("#sage").append("I");
        $("#sage").append(document.createElement("br"));
    });
});
