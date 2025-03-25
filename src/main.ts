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

/* SNACK 2 */
type Linguaggi =
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "Java"
  | "C#"
  | "React"
  | "Angular";

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
};

type Developer = {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: Linguaggi[];
  certificazioni: string[];
};

type ProjectManager = {
  teamSize: number | null;
  budgetGestito?: number;
  stakeholderPrincipali: string[];
};

type Team = {
  nome: string;
  progettoAttuale: string | null;
  budget: number;
  membri: [ProjectManager, Developer, ...Developer[]];
};

const nuovoDipendente: Dipendente & Developer = {
  nome: "Federico",
  cognome: "Zorzi",
  annoNascita: 1999,
  sesso: "m",
  anniDiServizio: [2019, 2020, 2021, 2022],
  emailAziendale: "federico@gmail.com",
  contratto: "freelance",

  livelloEsperienza: "Junior",
  linguaggi: ["JavaScript", "React"],
  certificazioni: ["certificazione web development"],
};

const nuovoTeam: Team = {
  nome: "Nome nuovo team",
  progettoAttuale: null,
  budget: 1000,
  membri: [
    {
      teamSize: 5,
      budgetGestito: 1000,
      stakeholderPrincipali: ["stakeholder1", "stakeholder2"],
    },
    {
      livelloEsperienza: "Junior",
      certificazioni: ["cert1"],
    },
    {
      livelloEsperienza: "Mid",
      linguaggi: ["Angular", "Java"],
      certificazioni: ["cert1", "cert2"],
    },
  ],
};
