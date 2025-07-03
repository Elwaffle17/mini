document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let slideIndex = 0;
    const slides = slider.querySelectorAll("img");
    const slideWidth = slides[0].clientWidth;
    let intervalId = null;

    // Función para ir a una diapositiva específica
    const goToSlide = (index) => {
        slider.scrollLeft = index * slideWidth;
        slideIndex = index;
    };

    // Botón Siguiente
    nextBtn.addEventListener("click", () => {
        slideIndex = (slideIndex + 1) % slides.length;
        goToSlide(slideIndex);
        resetInterval();
    });

    // Botón Anterior
    prevBtn.addEventListener("click", () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        goToSlide(slideIndex);
        resetInterval();
    });

    // Desplazamiento automático
    const startInterval = () => {
        intervalId = setInterval(() => {
            slideIndex = (slideIndex + 1) % slides.length;
            goToSlide(slideIndex);
        }, 3000); // Cambia de imagen cada 3 segundos
    };

    // Reinicia el intervalo del desplazamiento automático
    const resetInterval = () => {
        clearInterval(intervalId);
        startInterval();
    };

    // Iniciar el desplazamiento automático
    startInterval();
});















document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE PRODUCTOS (SIMULADA) ---
    // En una aplicación real, esto vendría de una API o base de datos.
    const products = [
        {
            id: 1,
            name: 'Mac',
            category: 'Mac',
            price: '$1,500.00',
            description: 'Potente laptop con tarjeta gráfica RTX 4080, 32GB de RAM y SSD de 1TB. Ideal para juegos y trabajo pesado.',
            imageUrl: 'img_Catalogos/store-card-13-mac-nav-202503.png'
        },
        {
            id: 2,
            name: 'iPad',
            category: 'iPad',
            price: '$900.00',
            description: 'Camiseta clásica de 100% algodón peinado. Suave, cómoda y duradera. Disponible en varios colores.',
            imageUrl: 'img_Catalogos/store-card-13-ipad-nav-202405.png'
        },
        {
            id: 3,
            name: 'iPhone 16e',
            category: 'iPhone',
            price: '$600.00',
            description: 'Prepara hasta 12 tazas de café perfecto. Con filtro permanente y función de pausa para servir.',
            imageUrl: 'img_Catalogos/store-card-13-iphone-nav-202502_GEO_US.png'
        },
        {
            id: 4,
            name: 'AirPods 2',
            category: 'AirPods',
            price: '$25.00',
            description: 'Mouse ergonómico con conexión Bluetooth 5.0 y 2.4GHz. Batería recargable de larga duración.',
            imageUrl: 'img_Catalogos/store-card-13-airpods-nav-202409.png'
        },
    ];

    // --- ELEMENTOS DEL DOM ---
    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    // --- FUNCIONES ---

    /**
     * Muestra los productos en la cuadrícula.
     * @param {Array} productsToShow - El array de productos a mostrar.
     */
    function displayProducts(productsToShow) {
        productGrid.innerHTML = ''; // Limpia la cuadrícula actual
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id; // Guardamos el ID en el elemento

            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="product-card-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }
    
    /**
     * Abre el modal con la información del producto.
     * @param {Object} product - El objeto del producto a mostrar.
     */
    function openModal(product) {
        document.getElementById('modal-img').src = product.imageUrl;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-description').textContent = product.description;
        document.getElementById('modal-price').textContent = product.price;

        // Configurar el botón de WhatsApp
        const whatsappBtn = document.getElementById('whatsapp-share-btn');
        const message = `¡Hola! Me interesa este producto: *${product.name}* - *${product.price}*. Más información aquí: [enlace a tu web si tienes]`;
        // El número debe estar en formato internacional sin el '+' o '00'. Por ejemplo, para Colombia: 57xxxxxxxxxx
        const phoneNumber = '+573006792207'; // ¡¡¡REEMPLAZA ESTO!!!
        
        if (phoneNumber === 'TU_NUMERO_DE_WHATSAPP' || phoneNumber === '') {
            alert('Por favor, configura tu número de WhatsApp en el archivo script.js');
            whatsappBtn.href = '#';
        } else {
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            whatsappBtn.href = whatsappUrl;
        }

        modal.classList.add('show');
    }

    /**
     * Cierra el modal.
     */
    function closeModal() {
        modal.classList.remove('show');
    }

    // --- LÓGICA DE EVENTOS ---

    // Lógica de los filtros
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manejo visual del botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            if (category === 'todos') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                displayProducts(filteredProducts);
            }
        });
    });

    // Lógica para abrir el modal (usando delegación de eventos)
    productGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.product-card');
        if (card) {
            const productId = parseInt(card.dataset.id, 10);
            const product = products.find(p => p.id === productId);
            if (product) {
                openModal(product);
            }
        }
    });

    // Lógica para cerrar el modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        // Cierra el modal si se hace clic fuera del contenido
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- CARGA INICIAL ---
    displayProducts(products);
});








// Definimos los datos de nuestras páginas
const paginas = [
    { titulo: 'Sobre Nosotros', url: 'pagina1.html' },
    { titulo: 'Nuestros Servicios', url: 'pagina2.html' },
    { titulo: 'Blog de tecnología', url: 'pagina3.html' },
    { titulo: 'Formulario de Contacto', url: 'pagina4.html' }
];

// Obtenemos las referencias a los elementos del HTML
const buscadorInput = document.getElementById('buscador');
const resultadosDiv = document.getElementById('resultados');
const searchIconBtn = document.getElementById('search-icon-btn'); // NUEVO: referencia al icono
const searchWrapper = document.getElementById('search-wrapper');   // NUEVO: referencia al contenedor

// NUEVO: Event listener para el icono de búsqueda
searchIconBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic se propague al 'document' y cierre el menú inmediatamente
    // Alterna la clase 'active' para mostrar/ocultar el buscador
    searchWrapper.classList.toggle('active');

    // Si el buscador se acaba de activar, ponemos el foco en el input para que el usuario pueda escribir
    if (searchWrapper.classList.contains('active')) {
        buscadorInput.focus();
    }
});

// Event listener para cuando el usuario escribe en el buscador
buscadorInput.addEventListener('input', () => {
    const terminoBusqueda = buscadorInput.value.toLowerCase();
    resultadosDiv.innerHTML = '';

    if (terminoBusqueda.length > 0) {
        const paginasFiltradas = paginas.filter(pagina => 
            pagina.titulo.toLowerCase().includes(terminoBusqueda)
        );
        mostrarResultados(paginasFiltradas);
    }
});

// Función para mostrar los resultados en el HTML
function mostrarResultados(paginas) {
    if (paginas.length > 0) {
        paginas.forEach(pagina => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = pagina.titulo;
            itemDiv.classList.add('resultado-item');

            itemDiv.addEventListener('click', () => {
                window.location.href = pagina.url;
            });

            resultadosDiv.appendChild(itemDiv);
        });
    } else {
        const sinResultados = document.createElement('div');
        sinResultados.textContent = 'No se encontraron resultados';
        sinResultados.classList.add('resultado-item');
        resultadosDiv.appendChild(sinResultados);
    }
}

// MEJORADO: Cerrar resultados o el buscador al hacer clic fuera
document.addEventListener('click', (event) => {
    // Si el clic fue FUERA del contenedor del buscador...
    if (!searchWrapper.contains(event.target)) {
        // ...ocultamos la lista de resultados
        resultadosDiv.innerHTML = '';

        // ...y si el buscador móvil está activo, lo cerramos
        if (searchWrapper.classList.contains('active')) {
            searchWrapper.classList.remove('active');
        }
    }
});





