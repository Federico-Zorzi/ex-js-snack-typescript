import "./style.css";

/* SNACK 1 */

let valore: unknown = "Stringa di prova";
// let valore: unknown = 6;
// let valore: unknown = true;
// let valore: unknown = null;
// let valore: unknown = ["test1", "test2", "test3"];
/*let valore: unknown = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();

    if (randomNum > 0.5) {
      resolve("Operazione riuscita");
    } else reject("Operazione fallita");
  }, 2000);
});*/

if (typeof valore === "string") {
  console.log(valore.toUpperCase());
} else if (typeof valore === "number") {
  console.log(valore * 2);
} else if (typeof valore === "boolean") {
  console.log(valore ? "Sì" : "No");
} else if (valore === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(valore)) {
  console.log("lunghezza array", valore.length);
} else if (valore instanceof Promise) {
  valore.then((data) => console.log(data));
} else {
  console.log("Tipo non supportato");
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

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: Linguaggi[];
  certificazioni: string[];
};

type ProjectManager = Dipendente & {
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

const nuovoDev: Developer = {
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

const nuovoDev2: Developer = {
  nome: "Acaso",
  cognome: "Tizio",
  annoNascita: 1998,
  sesso: "m",
  anniDiServizio: [2019, 2020],
  emailAziendale: "federico@gmail.com",
  contratto: "indeterminato",

  livelloEsperienza: "Senior",
  linguaggi: ["JavaScript", "React", "Angular", "TypeScript"],
  certificazioni: ["certificazione web development1"],
};

const nuovoPj: ProjectManager = {
  nome: "Tizio",
  cognome: "Acaso",
  annoNascita: 1997,
  sesso: "m",
  anniDiServizio: [2019, 2022],
  emailAziendale: "tizio@gmail.com",
  contratto: "determinato",

  teamSize: 5,
  budgetGestito: 2000,
  stakeholderPrincipali: ["stackholder1"],
};

const nuovoTeam: Team = {
  nome: "Nome nuovo team",
  progettoAttuale: null,
  budget: 1000,
  membri: [nuovoPj, nuovoDev, nuovoDev2],
};
