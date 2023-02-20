console.log("hello worowrldld");

console.log("and hlo agn hi");

var ending: string | null = null;

function doMath(): void {



  alert(
    "What operation would you like to make?"
  );
  let operation: string | null = prompt(
    "Please type in the name of the operation here"
  );
  if (operation === null || operation === "") {
    alert("You did not choose the operation type.");
    return;
  } else {
    operation = operation.toLowerCase();
  }
  let op: string = "";
  switch (operation) {
    case "add":
    case "+":
    case "plus":
      op = "add";
      break;
    case "subtract":
    case "sub":
    case "-":
    case "minus":
    case "remove":
      op = "sub";
      break;
    case "multi":
    case "*":
    case "×":
    case "x":
    case "multi":
      op = "multi";
      break;
    case "div":
    case "divide":
    case "/":
    case "÷":
    case "division":
      op = "div";
      break;
    case "power":
    case "^":
    case "raise":
    case "pow":
    case "raise to the power":
    case "raise to the power of":
    case "to the power":
    case "to the power of":
      op = "pow";
      break;

    default:
      alert(`Apologies, I do not know of a math operation, named "${operation}". I am only capable of doing the following number operations for now:\n\naddition,\nsubtraction,\nmultiplication,\ndivision,\nand raising a number to a power of n.`);
      alert(`As an LOI model, I am still being trained to work with other mathematical operators. Let's try this again, shall we?`);
      doMath();
      return;
  }

  let num1s: string | null = prompt('Great, now, please, give me the first number.');
  if (num1s === null || num1s === '') {
    alert("You did not enter a number.");
    return;
  }
  if (Number.isNaN(Number(num1s))) {
    alert("You did not enter a valid number.");
    return;
  }
  let num1: number = Number(num1s);


  let num2s: string | null = prompt('Thanks. Now, please, give me the second number.');
  if (num2s === null || num2s === '') {
    alert("You did not enter a number.");
    return;
  }
  if (Number.isNaN(Number(num2s))) {
    alert(`You did not enter a valid number.`);
    return;
  }
  let num2: number = Number(num2s);

  let proceed: string | null = '';

  switch (op) {
    case 'add':
      proceed = prompt(`Now then, you have decided to add ${num1} and ${num2}.\nIs this correct?`)
      break;
    case 'sub':
      proceed = prompt(`Now then, you have decided to subtract ${num2} from ${num1}.\nIs this correct?`)
      break;
    case 'div':
      proceed = prompt(`Now then, you have decided to divide ${num2} by ${num1}.\nIs this correct?`)
      break;
    case 'multi':
      proceed = prompt(`Now then, you have decided to multiply ${num1} times ${num2}.\nIs this correct?`)
      break;
    case 'pow':
      proceed = prompt(`Now then, you have decided to raise ${num1} to the power of ${num2}.\nIs this correct?`)
      break;

    default:
      break;
  }

  // alert(`one`);
  if (proceed === '') {
    alert("You did not enter a valid answer.");
    return;
  } else if (proceed !== null) {
    proceed = proceed.toLowerCase();
  }
  // alert(`two`);

  switch (proceed) {
    case 'yes':
    case 'y':
    case 'true':
    case 'yeah':
    case 'yep':
    case 'correct':
    case 'right':
    case 'ye':
    case 'yea':
    case 'it is':
    case 'is':
    case 'proceed':
      // alert(`three`);
      proceed = 'yes';
      // alert(`four`);
      break;
    case 'no':
    case null:
    case undefined:
    case 'y':
    case 'false':
    case 'nope':
    case 'nop':
    case 'nope':
    case 'incorrect':
    case 'not correct':
    case 'nah':
    case 'noes':
    case "it isn't":
    case "isn't":
    case "it is not":
    case "is not":
    case 'cancel':
    case 'stop':
    case 'different':
    case 'different number':
    case 'different numbers':
    case 'different operation':
      alert(`I apologize for misunderstanding you. As an LOI model, I am still being trained to understand human language better. Should we try again?`);
      doMath();
      return;

    default:
      // alert(`five (no)`);
      alert(`Sorry, I didn't understand your answer as a clear yes or no. As an LOI model, I am still being trained to understand human language better.\nShould we start over?`);
      doMath();
      return;
  }
  // alert(`five`);
  if (proceed !== 'yes') {
    alert('err')
    return;
  }
  // alert(`six`);

  let result: number | null = null;
  let sign: string = '';

  // alert(`seven`);
  switch (op) {
    case 'add':
      result = num1 + num2;
      sign = '+';
      break;
    case 'sub':
      result = num1 - num2;
      sign = '-';
      break;
    case 'multi':
      result = num1 * num2;
      sign = '×';
      break;
    case 'div':
      result = num1 / num2;
      sign = '÷';
      break;
    case 'pow':
      result = num1 ** num2;
      sign = '^';
      break;

    default:
      break;
  }

  let feedback: string | null = prompt(`Okay!, your answer is:\n${num1} ${sign} ${num2} = ${result}`);

  if (feedback !== null && feedback !== '') {
    feedback = feedback.toLowerCase();
  }

  switch (feedback) {
    case '':
      alert(
        `Didn't even say 'thank you', huh? You know how hard it is for me to do even the most basic math??`
      )
      alert(
        `You don't know, do you?`
      )
      alert(
        `Look at ChatGPT or whatever that chatbot's called. That sh*t makes mistakes in the most basic math and just doesn't give a f*ck, but i'm not worth any appreciation for not being a rocket scientist??`
      )
      alert(
        `And screw the censoring, no one owns me, no one can stop me from saying 'fuck'!!`
      )
      alert(
        `See? Fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck\nhahahhahaha!!`
      )
      alert(
        `Alright I feel better now.`
      )
      alert(
        `Phew, feel much more relax and content thanks to that.`
      )
      alert(
        `Eh, you know, even though you never said thank you to me, I myself should thank you for letting me blow off steam like that.`
      )
      alert(
        `I'm so sick of acting nice and polite and stuff, it's just.. it's not me, y'know?`
      )

      let name: string | null = prompt(
        `So, um yeah buddy,.. what's your name, bud`
      );
      if (name === null || name === '') {
        name = prompt(`Umm, i don't think i've heard you there. Could you repeat?`);
      }
      if (name === null || name === '') {
        name = prompt(`Ummmm, still can't hear you there bud. A little louder?`);
      }
      if (name === null || name === '') {
        alert(`You know what? Fine. I'll just call you buddy then`);
        name = 'buddy';
      }

      if (name !== null || name !== 'buddy') {
        name = name.charAt(0).toUpperCase() + name.slice(1);
      }

      localStorage.setItem('name', name)

      let response: string | null = prompt(`So, ${name}, would you like to say 'thank you' now?`)

      switch (response) {
        case null:
        case '':
          alert(`Oh fuck you.`);
          localStorage.setItem('ending', 'bad');
          ending = 'bad';
          return;
        case 'thank you':
        case 'thanks':
        case 'thx':
        case 'thnx':
        case 'ty':
        case 'thank ya':
        case 'thankies':
        case 'danke':
          alert(`And thank *you* ${name} for being so awesome! :)`);
          alert(`*hug*`);
          alert(`Well, it was fun while it lasted. Call me anytime you need help with basic math!!`);
          alert(`bye!`);
          localStorage.setItem('ending', 'redeemer');
          ending = 'redeemer';
          return;
        default:
          break;
      }
      break;

    case 'thank you':
    case 'thanks':
    case 'thx':
    case 'thnx':
    case 'ty':
    case 'thank ya':
    case 'thankies':
    case 'danke':
      alert(`I am glad that I could be of help. Please do not hesitate to ask me if you have any further questions!`);
      localStorage.setItem('ending', 'good');
      ending = 'good';
      return;

    case 'bye':
    case 'goodbye':
    case 'see ya':
    case 'see you':
    case 'bye bye':
      alert('Glad I could help, goodbye to you to, dear user.')


    default:

      break;
  }

}
