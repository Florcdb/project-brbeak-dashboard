const date = new Date();
const datecontainer = document.getElementById('date');
const [day, month, year] = [
    date.getDate(),
    date.getMonth() +1,
    date.getFullYear(),
]

const dateinfo = `
 ${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}
`;

datecontainer.textContent = dateinfo;