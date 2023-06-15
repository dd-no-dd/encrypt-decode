	/**
	 * key是密钥;plaintext为待处理文本;ciphertext为输出文本
	 */
    function reverseAlphabet() {
        var input = document.getElementById('plaintext').value;
        var output = '';
    
        for (var i = 0; i < input.length; i++) {
            var ascii = input.charCodeAt(i);
    
            if (ascii >= 65 && ascii <= 90) {
                // 处理大写字母
                output += String.fromCharCode(122 - (ascii - 65));
            } else if (ascii >= 97 && ascii <= 122) {
                // 处理小写字母
                output += String.fromCharCode(90 - (ascii - 97));
            } else {
                // 其他字符保持不变
                output += input.charAt(i);
            }
        }
    
        document.getElementById('ciphertext').innerText = output;
    }
    
    