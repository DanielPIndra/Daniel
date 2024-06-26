class Person {
    #name;
    #gender;
    #groesseM;
    #gewichtKG;
  
    constructor(name, gender, groesseM, gewichtKG) {
        this.#name = name;
        this.#gender = gender;
        this.#groesseM = groesseM;
        this.#gewichtKG = gewichtKG;
  
      if (gender !== "m" && gender !== "f") {
          throw new Error("Wrong gender");
      }
    }
  
    groesseCM() {
        return this.#groesseM * 100;
    }
  
    vorName() {
        return this.#name.split(" ")[0];
    }
  
    nachName() {
        return this.#name.split(" ")[1];
    }
  
    toString() {
        return `${this.#name} (${this.groesseCM()}cm, ${this.#gewichtKG}kg)`;
    }
  
    getBmi() {
        return this.#gewichtKG / (this.#groesseM * this.#groesseM);
    }
  
    getGewichtType() {
        const bmi = this.getBmi();
        if (this.#gender === "f" && bmi >= 19 && bmi <= 24) {
            return "Normalgewicht";
        } else if (this.#gender === "m" && bmi >= 20 && bmi <= 25) {
            return "Normalgewicht";
        } else if (bmi < 19) {
            return "Untergewicht";
        } else {
            return "Übergewicht";
        }
    }
  }
  
  
  const Mama = new Person("Katja Uccusic", "f", 1.66, 60);
  const Papa = new Person("Alexander Indra", "m", 1.85, 93);
  const Schwester = new Person("Xenia Indra", "f", 1.67, 63)
  
  console.log(Mama.toString());
  console.log(Mama.vorName());
  console.log(Mama.nachName());
  console.log(Mama.getBmi());
  console.log(Mama.getGewichtType());
  
  console.log(Papa.toString());
  console.log(Papa.vorName());
  console.log(Papa.nachName());
  console.log(Papa.getBmi());
  console.log(Papa.getGewichtType());
  
  console.log(Schwester.toString());
  console.log(Schwester.vorName());
  console.log(Schwester.nachName());
  console.log(Schwester.getBmi());
  console.log(Schwester.getGewichtType());