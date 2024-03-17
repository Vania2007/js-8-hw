let users = ["Артем", "Дмитро", "Ірина", "Віктор", "Валерій", "Юлія"];
function check(nameOfCheckedUser) {
  let exist = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i] == nameOfCheckedUser) {
      exist = true;
      break;
    }
  }
  if (exist == true) {
    return true;
  } else {
    return false;
  }
}
function show() {
  for (let i = 0; i < users.length; i++) {
    document.write(`User ${i + 1}: ${users[i]};<br/>`);
  }
}
function add() {
  let nameUser = prompt("Уведіть ім'я нового користувача");
  if (check(nameUser) == false) {
    users.push(nameUser);
  } else {
    alert("Помилка! Користувач з таким іменем вже використаний");
  }
}
