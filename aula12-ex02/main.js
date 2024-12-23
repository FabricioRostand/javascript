function verifyAge() {
    const bornYear = document.getElementById('year').value;
    const elementsGender = document.getElementsByName('gender');
    let gender = '';

    for (let i = 0; i < elementsGender.length; i++) {
        if (elementsGender[i].checked) {
            gender = elementsGender[i].value;
        }
    }

    if (gender === 'masculino') {
        gender = 'Homem';
    } else {
        gender = 'Mulher';
    }

    const age = 2024 - parseInt(bornYear);

    const resultDiv = document.getElementById('result');
    resultDiv.style.height = 
    
    document.getElementById('result').innerHTML = `${gender} com ${age} anos`;
}

function main() {
    verifyAge();
}

main();