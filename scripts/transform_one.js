
	/**
	 * key是密钥;plaintext为待处理文本;ciphertext为输出文本
	 */
    function encrypt() {
        var plaintext = document.getElementById("plaintext").value;
        var key = document.getElementById("key").value || 5;
        plaintext = plaintext.replace(/\s/g, '');
        var rows = Math.ceil(plaintext.length / key);
        var ciphertext = "";
    
        for (var col = 0; col < key; col++) {
            for (var row = 0; row < rows; row++) {
                var index = col + row * key;
                if (index < plaintext.length) {
                    ciphertext += plaintext.charAt(index);
                } else {
                    ciphertext += ' ';
                }
            }
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（加密）'
        document.getElementById("ciphertext").value = ciphertext;
    }
    
    function decrypt() {
        var ciphertext = document.getElementById("plaintext").value;
        var key = document.getElementById("key").value || 5;
        var rows = Math.ceil(ciphertext.length / key);
        var plaintext = "";
    
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < key; col++) {
                var index = row + col * rows;
                if (index < ciphertext.length) {
                    plaintext += ciphertext.charAt(index);
                }
            }
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（解密）'
        document.getElementById("ciphertext").value = plaintext.trim();
    }
    