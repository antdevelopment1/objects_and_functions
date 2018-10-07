// Uses functions to call another function to assign values based on certain conditions

function greet(firstname, lastname, language) {

    language = language || 'en';
    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }

}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en')
}
function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es')
}

greetEnglish('John', 'Doe', 'en');
greetSpanish('John', 'Doe', 'es');