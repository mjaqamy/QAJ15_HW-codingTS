// 0. У нас поменялись требования к паролю. Юзерам выслана ссылка на смену пароля. Теперь когда они зайдут к нам на сайт, мы должны проверить, что их новый пароль соответствует следующим требованиям:
//      - минимум 8 символов                            | латинские буквы, максимум 15
//      - минимум одна заглавная буква
//      - минимум одна цифра
//      - минимум один специальный символ из набора     | ^!@_$&*()-+
// а. Создайте функцию, которая будет принимать на вход строку (пароль) и возвращать true, если пароль соответствует требованиям и false, если не соответствует.
// б. Нашим аналитикам интересно, какие цифры чаще всего используются юзерами в паролях. модифицируйте функцию так, чтобы она вместо булевого значения возвращала объект по следующим примерам:
//   input: 'Password123!' -> output: { isValid: true, digits: [1, 2, 3] }
//   input: 'myC00!Pa55w0rd' -> output: { isValid: true, digits: [0, 0, 5, 5, 0] }

function checkPassword(pass: string) {
  const passwordLengthMin = 8;
  const passwordLengthMax = 15;
  const hasExpectedLength = pass.length >= passwordLengthMin || pass.length <= passwordLengthMax;
  const hasUpperCase = /[A-Z]/.test(pass); //Проверка на наличие хотя бы одной заглавной буквы
  const hasDigits = /[0-9]/.test(pass); //Проверка на наличие хотя бы одной цифры
  const hasOnlyLatin = /[a-z]/i.test(pass); //Флаг i = ignore case (игнорировать регистр); без i → учитывается регистр; с i → не учитывается
  const hasSpecialChars = /[\^!@_$&\*()\-\+]/.test(pass); // Проверка на наличие хотя бы одного спецсимвола из набора
  return hasExpectedLength && hasUpperCase && hasDigits && hasOnlyLatin && hasSpecialChars;
}
console.log(checkPassword('fffffhe2-'));

function checkDigits(password: string) {
  const isValid = checkPassword(password);
  //onst digits = password.match(/[0-9]/g)?.map(el => Number(el));
  const digits = password.match(/[0-9]/g)?.map(Number) ?? []; // Ищем все цифры в строке; match возвращает массив строк или null; map(Number) превращает строки в числа; ?? [] — если match вернул null, подставляем пустой массив
  if (digits?.length) {
    return { isValid, digits };
  }
  return { isValid, digits };
}
console.log(checkDigits('f5rew45sw*'));
