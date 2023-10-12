        // Sélectionne le bouton par son ID
        const submitButton = document.getElementById('submit-button');
        const eventTypeElement = document.getElementById('event-type');

        // Écoute l'event de soumission sur le bouton
        submitButton.addEventListener('click', (event) => {
            // Récupére le type de l'event
            const eventType = event.type;

            // Affiche le type de l'event dans le doc HTML
            eventTypeElement.textContent = `Type de l'événement : ${eventType}`;

            // Affiche également dans la console
            console.log(`Type de l'événement : ${eventType}`);
        });
