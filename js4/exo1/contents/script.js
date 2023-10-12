const afficherDateLocale = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateLocale = date.toLocaleDateString(undefined, options);
    const timeLocale = date.toLocaleTimeString();

    const dateContainer = document.getElementById('date-container');

    // Affiche la date et l'heure locales dans le doc HTML
    dateContainer.innerHTML = `Date locale : ${dateLocale}, Heure locale : ${timeLocale}`;

    // Affiche également dans la console
    console.log(`Date locale : ${dateLocale}, Heure locale : ${timeLocale}`);
}

// Appel la fonction pour afficher la date locale
afficherDateLocale();