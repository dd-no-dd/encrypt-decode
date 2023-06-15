
	/**
	 * key是密钥;plaintext为待处理文本;ciphertext为输出文本
	 */
    function encrypt() {
        let plainText = document.getElementById("plaintext").value.toLowerCase();
        let key = document.getElementById("key").value.toLowerCase();
        plainText = plainText.replace(/[^a-z]/g, '');
        let cipherText = '';
        let rows = Math.ceil(plainText.length / key.length);
        let encryptedMatrix = [];

        // If plaintext length is not divisible by key length
        if(plainText.length % key.length != 0) {
            for(let i=plainText.length % key.length; i < key.length; i++){
                plainText += String.fromCharCode(97 + (i % 26));
            }
        }

        // Construct encrypted matrix
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < key.length; j++) {
                let index = i * key.length + j;
                row.push(plainText[index]);
            }
            encryptedMatrix.push(row);
        }

        // Append columns based on key to ciphertext
        let sortedKey = key.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        for (let i = 0; i < sortedKey.length; i++) {
            let columnIndex = key.indexOf(sortedKey[i]);
            for (let j = 0; j < rows; j++) {
                cipherText += encryptedMatrix[j][columnIndex];
            }
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（加密）'
        document.getElementById("ciphertext").value = cipherText;
    }

    function decrypt() {
        let cipherText = document.getElementById("plaintext").value;
        let key = document.getElementById("key").value.toLowerCase();
        let rows = Math.ceil(cipherText.length / key.length);
        let plainText = '';
        let decryptedMatrix = Array(rows).fill(0).map(() => Array(key.length).fill(0));
        let sortedKey = key.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        let k = 0;

        for (let i = 0; i < sortedKey.length; i++) {
            let columnIndex = key.indexOf(sortedKey[i]);
            for (let j = 0; j < rows; j++) {
                decryptedMatrix[j][columnIndex] = cipherText[k++];
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < key.length; j++) {
                plainText += decryptedMatrix[i][j];
            }
        }
        document.getElementById('basic-addon2').innerHTML = '输出文本（解密）'
        document.getElementById("ciphertext").value = plainText;
    }