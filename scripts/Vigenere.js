
	/**
	 * key是密钥;plaintext为待处理文本;ciphertext为输出文本
	 */
    function charToIndex(char) {
        return char.toUpperCase().charCodeAt(0) - 65;
    }
    
    function indexToChar(index) {
        return String.fromCharCode((index % 26) + 65);
    }
    
    function encrypt() {
        var plaintext = document.getElementById("plaintext").value;
        var key = document.getElementById("key").value;
        var ciphertext = "";
    
        for (var i = 0, j = 0; i < plaintext.length; i++) {
            var letter = plaintext[i];
            if ((letter < "a" || letter > "z") && (letter < "A" || letter > "Z")) {
                ciphertext += letter;
                continue;
            }
            var encryptedIndex = (charToIndex(letter) + charToIndex(key[j % key.length])) % 26;
            ciphertext += indexToChar(encryptedIndex);
            j++;
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（加密）'
        document.getElementById("ciphertext").value = ciphertext;
    }
    
    function decrypt() {
        var ciphertext = document.getElementById("plaintext").value;
        var key = document.getElementById("key").value;
        var decrypted = "";
    
        for (var i = 0, j = 0; i < ciphertext.length; i++) {
            var letter = ciphertext[i];
            if ((letter < "a" || letter > "z") && (letter < "A" || letter > "Z")) {
                decrypted += letter;
                continue;
            }
            var decryptedIndex = (charToIndex(letter) - charToIndex(key[j % key.length]) + 26) % 26;
            decrypted += indexToChar(decryptedIndex);
            j++;
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（解密）'
        document.getElementById("ciphertext").value = decrypted;
    }
    