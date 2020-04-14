const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "peso",
      message: "qual seu peso patrao",
      validate: function(value) {
        if (value.match(/^[0-9]*$/)) {
          return true;
        }
        return "só vale numero, patrao";
      }
    },
    {
      type: "input",
      name: "altura",
      message: "altura em cm",
      validate: function(value) {
        if (value.match(/^[0-9]*$/)) {
          return true;
        }
        return "só vale numero, patrao";
      }
    }
  ])
  .then(answers => {
    const imc = (
      (answers.peso / ((answers.altura * answers.altura) / 100)) *
      100
    ).toFixed(2);
    console.log(`${imc}%`);
    if (imc > 29.9) {
      console.log("tá obeso, patrao");
    }
  });

  
// const readline = require("readline-sync");

// function imc() {
//   const a = readline.questionFloat("digite seu peso: ");
//   const b = readline.questionFloat("digite sua altura em cm: ");

//   const imc = ((a / ((b * b) / 100)) * 100).toFixed(2);

//   console.log(`IMC: ${imc}%`);
//   if (imc > 29.9) {
//     console.log("tá obeso, patrao");
//   }
// }

// imc();
