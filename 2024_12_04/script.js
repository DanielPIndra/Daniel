class Kassa {#geldlade
    constructor() {
        this.#geldlade = 10;
    }

    scannen(artikel) {
        console.log(`Artikel gescannt: ${artikel.name} - Preis: ${artikel.preis} €`);
        return artikel.preis;
    }

    bezahlen(betrag, preis) {
        if (betrag < preis) {
            throw new Error('Nicht genug Geld bezahlt!');
        }
        else { 
        this.#geldlade = this.#geldlade + preis;
        const rueckgeld = betrag - preis;
        console.log(`Bezahlt: ${preis.toFixed(2)} € - Rückgeld: ${rueckgeld.toFixed(2)} €`);
        return rueckgeld;
        }
    }

    toString() {
        return `Heute ${(this.#geldlade - 10).toFixed(2)} € eingenommen.`;
    }
    
}


const artikel = {'name': 'Cola', 'preis': 1.89};


const kassa = new Kassa();
const preis = kassa.scannen(artikel);
const rueckgeld = kassa.bezahlen(2.50, preis);
console.log(kassa.toString());






//class Kassa 
