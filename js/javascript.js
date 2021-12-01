

function nota() {
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);
    
    var media = (nota1 + nota2 + nota3)/3;
    if(media >=7)
    if(media == 10)
    alert("Você passou com distinção!");
    else
    alert("parabéns, você foi aprovado!" + media);
    else
    alert("reprovado.");

    }

    