function caesarCipher(encrypt) {
    var shift = parseInt(document.getElementById('shift').value);
    if (!encrypt) { shift = -shift; } // 如果是解密，偏移量需要取反

    var input = document.getElementById('input').value;
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var ascii = input.charCodeAt(i);

        if (ascii === 32) {
            // 如果字符是空格，保持不变
            output += input.charAt(i);
        } else if (ascii >= 65 && ascii <= 90) {
            // 处理大写字母
            output += String.fromCharCode((ascii - 65 + shift + 26) % 26 + 65);
        } else if (ascii >= 97 && ascii <= 122) {
            // 处理小写字母
            output += String.fromCharCode((ascii - 97 + shift + 26) % 26 + 97);
        } else {
            // 其他字符保持不变
            output += input.charAt(i);
        }
    }

    document.getElementById('output').innerText = '输出：' + output;
}
