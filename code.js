export function addElement () {
    // 新しい div 要素を作成します
    var newDiv = document.createElement("div");
    // いくつかの内容を与えます
    var newContent = document.createTextNode("Hi there and greetings!");
    // テキストノードを新規作成した div に追加します
    newDiv.appendChild(newContent);

    // DOM に新しく作られた要素とその内容を追加します
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
