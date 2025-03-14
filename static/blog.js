document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

    const blogPosts = [
        {
            title: "Protegiendo tu bienestar: Guía de salud ocupacional para agentes de Call Center",
            content: "Trabajar en un call center puede ser desafiante para la salud si no se toman medidas preventivas. En Call Expert Hub, nos preocupamos por el bienestar de nuestros colaboradores...",
            link: "publicacion1" // Enlace a la página de la publicación
        },
        {
            title: "PNL en el call center: Transforma tu mentalidad y mejora tu rendimiento",
            content: "La Programación Neurolingüística (PNL) es una herramienta poderosa para mejorar la comunicación, la confianza y la gestión del estrés en los agentes de call center...",
            link: "publicacion2"
        },
        {
            title: "Emprendimiento desde el call center: De agente a empresario",
            content: "Muchos grandes empresarios comenzaron en trabajos operativos. Trabajar en un call center no es solo un empleo, sino también una escuela de ventas, comunicación y resolución de problemas...",
            link: "publicacion3"
        },
        {
            title: "Gestión del estrés en call centers: 5 estrategias clave",
            content: "El estrés es uno de los mayores desafíos en los call centers. Saber gestionarlo es clave para mantener un buen rendimiento y bienestar...",
            link: "publicacion4"
        },
        {
            title: "El futuro del BPO: Tendencias tecnológicas que transformarán el sector",
            content: "La industria del BPO está evolucionando rápidamente con la automatización y la IA...",
            link: "publicacion5"
        },
        {
            title: "Cómo mejorar la atención al cliente en un call center",
            content: "La calidad en la atención al cliente es lo que diferencia a un buen call center de uno excelente...",
            link: "publicacion6"
        },
        {
            title: "Trabajo remoto en call centers: Desafíos y oportunidades",
            content: "El trabajo remoto en call centers ha crecido en los últimos años, trayendo ventajas y retos...",
            link: "publicacion7"
        }
    ];

    blogPosts.forEach(post => {
        let postElement = document.createElement("article");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="${post.link}">Leer más</a> <!-- Redirige a la página específica -->
        `;
        blogContainer.appendChild(postElement);
    });
});


