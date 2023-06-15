
	/**
	 * key是密钥;plaintext为待处理文本;ciphertext为输出文本
	 */
    function monoalphabeticCipher() {
        var key = document.getElementById('key').value.toUpperCase();
        var plaintext = document.getElementById('plaintext').value.toUpperCase();
        var ciphertext = '';
    
        // 创建新的加密字母表
        var newAlphabet = '';
        for (var i = 0; i < key.length; i++) {
            if (newAlphabet.indexOf(key[i]) === -1) {
                newAlphabet += key[i];
            }
        }
        for (var i = 0; i < 26; i++) {
            var letter = String.fromCharCode(65 + i);
            if (newAlphabet.indexOf(letter) === -1) {
                newAlphabet += letter;
            }
        }
    
        // 加密
        for (var i = 0; i < plaintext.length; i++) {
            if (plaintext[i] >= 'A' && plaintext[i] <= 'Z') {
                var index = plaintext[i].charCodeAt() - 65;
                ciphertext += newAlphabet[index];
            } else {
                ciphertext += plaintext[i];
            }
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（加密）'
        document.getElementById('ciphertext').innerText = ciphertext;
    }
    
    function monoalphabeticDecipher() {
        var key = document.getElementById('key').value.toUpperCase();
        var ciphertext = document.getElementById('plaintext').value.toUpperCase();
        var plaintext = '';
    
        // 创建新的加密字母表
        var newAlphabet = '';
        for (var i = 0; i < key.length; i++) {
            if (newAlphabet.indexOf(key[i]) === -1) {
                newAlphabet += key[i];
            }
        }
        for (var i = 0; i < 26; i++) {
            var letter = String.fromCharCode(65 + i);
            if (newAlphabet.indexOf(letter) === -1) {
                newAlphabet += letter;
            }
        }
    
        // 解密
        for (var i = 0; i < ciphertext.length; i++) {
            if (ciphertext[i] >= 'A' && ciphertext[i] <= 'Z') {
                var index = newAlphabet.indexOf(ciphertext[i]);
                plaintext += String.fromCharCode(index + 65);
            } else {
                plaintext += ciphertext[i];
            }
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（解密）'
        document.getElementById('ciphertext').innerText =  plaintext;
    }
    