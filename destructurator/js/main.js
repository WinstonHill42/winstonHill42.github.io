
document.querySelector("#inputText").addEventListener("input", translateIt);

function translateIt() {
  let input = document.getElementById("inputText").value;
  const length = input.length;
  let array = [];
  const regex = /\s|\n/g;
  for (let i = 0; i < length; i++) {
    if (input.charAt(i + 1).search(regex) === -1 && input.charAt(i).search(regex) === -1 && input.charAt(i + 1) != "") {
      array.push(input.charAt(i) + '•')
    } else {
      array.push(input.charAt(i))
    }
  }
  document.getElementById('outputText').value = array.join('');
}

function copy() {
  let copyText = document.querySelector("#outputText");
  copyText.select();
  document.execCommand("copy");
}
