const answer = prompt('Email: ').trim();
const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

console.log({ answer });

!regex.test(answer)
    ? alert('Please insert a valid email')
    : alert('The email is valid, proceed with the email:' + answer);
