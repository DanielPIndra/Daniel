const faker = require("faker");

function generateData() {
    const email = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const city = faker.address.city();
    const iban = faker.finance.iban();

    console.log(`Vorname: ${firstName}, Nachname: ${lastName}, E-Mail: ${email} wohnt in ${city} und hat eine IBAN: ${iban}.`);
}

for (let i = 0; i < 10; i++) {
    generateData();
}
