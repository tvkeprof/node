// import chalk from 'chalk';
// console.log(chalk.blue('hello world!'));



//  import figlet from 'figlet';
//  figlet("Hello World!!", function (err, data) {
//     console.log(data);
//   });


// import ora from 'ora';
// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Hello world';
// }, 1000);

// import pokemon from 'pokemon';

// console.log(pokemon.random('en'));

// import { faker } from '@faker-js/faker';
// export function createRandomUser() {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.username(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }

//   console.log(faker.helpers.fake('Hello {{person.prefix}} {{person.lastName}}, how are you today?'));


import inquirer from 'inquirer';

inquirer.prompt([
    {type: "confirm",
      name: 'noname',
      message: 'are you tired?'
    },
    {type: "confirm",
      name: 'nona',
      message: 'are you tired?'

    }
  ]).then(answers => {
    console.info('Answer:', answers.noname);
    console.info('Answer:', answers.nona);
  });
  
// import cowsay from 'cowsay';
// console.log(cowsay.say({
//   text : "buduun er uvsund budrev! :)",
//   e : "oO",
//   T : "U "
// }));
