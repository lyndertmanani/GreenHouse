//password checker
const passwordInput = document.getElementById('password');
const passwordStrengthDiv = document.getElementById('password-strength');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const result = zxcvbn(password);
    const score = result.score;

    let strengthText = '';
    let strengthColor = '';
    let strengthBackgroundColor = '';

    switch (score) {
        case 0:
        case 1:
            strengthText = 'Weak';
            strengthColor = '#d9534f';
            strengthBackgroundColor = '#D95B57';
            break;
        case 2:
            strengthText = 'Fair';
            strengthColor = '#f0ad4e';
            break;
        case 3:
            strengthText = 'Good';
            strengthColor = '#5bc0de';
            break;
        case 4:
            strengthText = 'Strong';
            strengthColor = '#5cb85c';
            break;
        default:
            strengthText = '';
            strengthColor = '';
    }

    passwordStrengthDiv.textContent = strengthText;
    passwordStrengthDiv.style.color = strengthColor;
});
//required
 
