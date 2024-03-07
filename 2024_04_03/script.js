const { fakerDE } = require("@faker-js/faker");

function generateData() {
    const email = fakerDE.internet.email();
    const firstName = fakerDE.person.firstName();
    const lastName = fakerDE.person.lastName();
    const city = fakerDE.location.city();
    const iban = fakerDE.finance.iban();

    console.log(`Vorname: ${firstName}, Nachname: ${lastName}, E-Mail: ${email} wohnt in ${city} und hat eine IBAN: ${iban}.`);
}

for (let i = 0; i < 10; i++) {
generateData();
}
