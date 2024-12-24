function verifyAge() {
    const year = 2024;
    const bornYear = document.getElementById('year').value;
    const elementsGender = document.getElementsByName('gender');
    let gender = '';

    for (let i = 0; i < elementsGender.length; i++) {
        if (elementsGender[i].checked) {
            gender = elementsGender[i].value;
        }
    }

    const resultDiv = document.getElementById('result');

    if (!bornYear || !gender) {
        resultDiv.innerHTML = "Por favor, insira o ano de nascimento e selecione o sexo.";
        resultDiv.style.display = "block";
        resultDiv.classList.add('error');
        return;
    }

    if (bornYear > year) {
        resultDiv.innerHTML = 'Por favor, verifique os dados inseridos.';
        resultDiv.style.display = 'block';
        resultDiv.classList.add('error');
        return;
    }

    resultDiv.classList.remove('error');

    if (gender === 'masculino') {
        gender = 'Homem';
    } else {
        gender = 'Mulher';
    }

    const age = year - parseInt(bornYear);

    resultDiv.style.height = 'auto';
    resultDiv.innerHTML = `${gender} com ${age} anos`;
    resultDiv.style.display = "block";
}