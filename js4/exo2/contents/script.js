        // Sélectionne le doc HTML
        const keyValueContainer = document.getElementById('key-value-container');

        // Écoute l'event "keydown" sur le document
        document.addEventListener('keydown', (event) => {
            // Récupére la valeur de la touche du clavier
            const keyValue = event.key;

            // Affiche la valeur de la touche dans l'élément HTML
            keyValueContainer.innerHTML = `Touche du clavier : ${keyValue}`;

            // Affiche également dans la console
            console.log(`Touche du clavier : ${keyValue}`);
        });

