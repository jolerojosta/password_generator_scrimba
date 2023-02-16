const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementsByClassName("pass1")
let pass2El = document.getElementsByClassName("pass2")
let aaa = document.getElementById("aaa")
let passLength = 15
let stringA = ""
let stringB = ""



function randSymbol()
{
    let symb = Math.floor(Math.random()*characters.length)
    return characters[symb]
}

function generatePasswords()
{
    stringA = ""
    stringB = ""
    for (let i = 0; i < passLength; i++)
    {
        stringA += randSymbol()
        pass1El[0].textContent = stringA
        stringB += randSymbol()
        pass2El[0].textContent = stringB
    }
}
// from          stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function copy (i)
{
    let copyText = ""
    if (i === 1)
        {copyText = pass1El[0].textContent}
    else {copyText = pass2El[0].textContent}
    copyToClipboard(copyText)
    alert("Copied to clipboard: " + copyText)
}



