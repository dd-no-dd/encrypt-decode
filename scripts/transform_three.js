
	/**
	 * key是密钥;plaintext为待处理文本;ciphertext为输出文本
	 */
    function encrypt() {
        var plaintext = document.getElementById("plaintext").value;
        var key = document.getElementById("key").value || 5;
        plaintext = plaintext.replace(/\s/g, '');
        var rows = Math.ceil(plaintext.length / key);
        var ciphertext = "";
    
        for (var row = 0; row < rows; row++) {
            var rowText = "";
            for (var col = 0; col < key; col++) {
                var index = row * key + col;
                if (index < plaintext.length) {
                    rowText = plaintext.charAt(index) + rowText;
                }
            }
            ciphertext += rowText;
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
            var rowText = "";
            for (var col = 0; col < key; col++) {
                var index = row * key + col;
                if (index < ciphertext.length) {
                    rowText = ciphertext.charAt(index) + rowText;
                }
            }
            plaintext += rowText;
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（解密）'
        document.getElementById("ciphertext").value = plaintext;
    }
    