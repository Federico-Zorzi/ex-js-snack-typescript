import "./style.css";

/* SNACK 1 */

let valore: unknown = "Stringa di prova";
// let valore: unknown = 6;
// let valore: unknown = true;
// let valore: unknown = null;
// let valore: unknown = ["test1", "test2", "test3"];
/* let valore: unknown = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();

    if (randomNum > 0.5) {
      resolve("Operazione riuscita");
    } else reject("Operazione fallita");
  }, 2000);
}); */

switch (typeof valore) {
  case "string":
    console.log(valore.toUpperCase());
    break;

  case "number":
    console.log(valore * 2);
    break;

  case "boolean":
    console.log(valore ? "Sì" : "No");
    break;

  default:
    console.log("Tipo non supportato");
    break;
}

if (valore === null) {
  console.log("Il dato è vuoto");
}

if (Array.isArray(valore)) {
  console.log("lunghezza array", valore.length);
}

function isPromise(value) {
  return (
    Boolean(value) &&
    typeof value.then === "function" &&
    typeof value.catch === "function"
  );
}

if (isPromise(valore)) {
  console.log(await valore);
}
