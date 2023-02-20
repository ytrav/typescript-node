console.log("hello worowrldld");

console.log("and hlo agn hi");

function doMath(): void {
  let operation: string | null = prompt(
    "What operation would you like to make?\nType in the name of it here (lowercase) "
  );
  if (operation === null || operation === "") {
    alert("You did not choose the operation type.");
    return;
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
    case "x":
    case "multi":
      op = "multiply";
      break;
    case "div":
    case "divide":
    case "/":
    case "÷":
    case "division":
      op = "division";
      break;
    case "power":
    case "^":
    case "raise":
    case "raise to the power":
    case "raise to the power of":
    case "to the power":
    case "to the power of":
      op = "pow";
      break;

    default:
      alert(`Apologies, I do not know of a math operation, named "${operation}". I am only capable of doing the following number operations for now:\n\naddition,\nsubtraction,\nmultiplication,\ndivision,\nand raising a number to a power of n.`);
      alert(`Let's try this again, shall we?`)
      doMath();
      break;
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
    alert("You did not enter a valid number.");
    return;
  }
  let num2: number = Number(num2s);

  let proceed: string | null;
  
  switch (op) {
    case 'add':
      proceed = prompt(`Now then, you have decided to`)
      break;
  
    default:
      break;
  }


}
