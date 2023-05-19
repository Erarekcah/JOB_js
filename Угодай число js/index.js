let admin = 'Salman';
let greeting = 'Привет. Как тебя зовут?';
let user = prompt(greeting);

while(user == '' || user == null){
    user = prompt(greeting);
}

alert( user + ', я загодал число от 1 до 100. Попробуй отгодать его за наименьшее количество попыток. После каждой попытке я  скажу "мало", "много" или "угодал".');

let number =  random(100);

if(user == admin){
  alert('Здравствуйте ADMIN я загодал ичсло ' + number)
}
let guess = prompt('Так какое число я загодал?');
let quatityOfguesses = 1;

while(guess != number){
  quatityOfguesses++;
  if(guess > number){
      guess = prompt('Много, повтори ещё раз.'); 
      }else if(guess < number){
        guess = prompt('Мало, повтори ещё раз.');   
      }
}

alert('Ты угодал, это число ' + number + '. Тебе понадобилось ' + quatityOfguesses +' попыток.');

