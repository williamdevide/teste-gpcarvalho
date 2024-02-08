
function ValidateForm() {
    
    //e.preventDefault();
    const fieldsValids = isValid();

    if (fieldsValids == 0) {
        return true;
        //formulario.submit();
        //alert('Formulário enviado.');
    }
    return false;
}

function isValid() {
    let formulario = document.querySelector('.registerForm');
    let valid = 0;

    for (let errorText of formulario.querySelectorAll('.error-text')) {
        errorText.remove();
    }

    for (let field of formulario.querySelectorAll('.validate')) {
        const label = formulario.querySelector('label[for="' + field.id + '"]').innerText;

        valid += validBlank(field, label);

        if (field.classList.contains('name')) {
            valid += validSize(field, label, 2, 15);
            valid += validCaracters(field, label);
        }

        if (field.classList.contains('email')) {
            valid += validSize(field, label, 6, 40);
        }

        if (field.classList.contains('confirmEmail')) {
            valid += validSize(field, label, 6, 40);
            valid += validEquals(field, label, formulario.querySelector('.email'), formulario.querySelector('label[for="email"]').innerText);
        }

        if (field.classList.contains('phone')) {
            valid += validSize(field, label, 11, 11);
        }

        if (field.classList.contains('cpf')) {
            valid += validSize(field, label, 11, 11);
            valid = validCPF(field, label);
        }

        if (field.classList.contains('password')) {
            valid += validSize(field, label, 4, 12);
        }

        if (field.classList.contains('confirmPassword')) {
            valid += validSize(field, label, 4, 12);
            valid += validEquals(field, label, formulario.querySelector('.password'), formulario.querySelector('label[for="password"]').innerText);
        }
    }
    return valid;
}

function validEquals(field, label, compareField, compareLabel) {
    if (field.value != compareField.value) {
        createError(field, `Campo ${compareLabel} e ${label} precisam ser iguais.`);
        return 1;
    }
    return 0;
}

function validCPF(field, label) {
    const cpf = new ValidarCPF(field.value);
    if (!cpf.valida()) {
        createError(field, `Campo "${label}" inválido.`);
        return 1;
    }
    return 0;
}

function validBlank(field, label) {
    if (!field.value) {
        createError(field, `Campo "${label}" não pode estar em branco.`);
        return 1;
    }
    return 0;
}

function validSize(field, label, minSize, maxSize) {
    if (field.value.length < minSize || field.value.length > maxSize) {
        if (minSize === maxSize) {
            createError(field, `Campo "${label}" precisa ter exatamente ${maxSize} caractere(s).`);
        } else {
            createError(field, `Campo "${label}" precisa ter entre ${minSize} e ${maxSize} caracteres.`);
        }
        return 1;
    }
    return 0;
}

function validCaracters(field, label) {
    if (!field.value.match(/^[a-zA-Z0-9]+$/g)) {
        createError(field, `Campo "${label}" precisa conter apenas letras e/ou números. Não utilize caracteres especiais ou caracteres acentuados.`);
        return 1;
    }
    return 0;
}

function createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
}

function preventSubmit(event) {
    event.preventDefault();
}