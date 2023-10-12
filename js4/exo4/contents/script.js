        // Sélectionne l'élément HTML
        const userAgentContainer = document.getElementById('user-agent-container');

        // Récupére le User-Agent
        const userAgent = navigator.userAgent;

        // Affiche le User-Agent dans la console
        console.log(`User-Agent : ${userAgent}`);

        // Affiche le User-Agent dans le doc HTML
        userAgentContainer.textContent = `User-Agent : ${userAgent}`;