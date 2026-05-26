document.addEventListener("DOMContentLoaded", () => {
  // 1. Detectar el idioma actual del documento (<html lang="xx">)
  const currentLang = document.documentElement.lang || "es";
  
  // 2. Buscar la etiqueta de idioma alternativo en el <head>
  // Si estamos en 'es', busca 'en'. Si estamos en 'en', busca 'es'.
  const targetLang = currentLang === "es" ? "en" : "es";
  const alternateLink = document.querySelector(`link[rel="alternate"][hreflang="${targetLang}"]`);
  
  // 3. Determinar la URL de destino (con red de seguridad hacia la Home)
  const targetUrl = alternateLink ? alternateLink.href : (targetLang === "en" ? "/en/" : "/");

  // 4. Configurar todos los botones de cambio de idioma en la página
  const langButtons = document.querySelectorAll(".btn-lang-switch");
  
  langButtons.forEach(button => {
    // Cambiar el texto visual del botón para ofrecer el idioma OPUESTO
    button.textContent = targetLang.toUpperCase();
    
    // Asignar la URL correspondiente
    button.setAttribute("href", targetUrl);
    
    // Accesibilidad opcional (Mejora el SEO y lectores de pantalla)
    button.setAttribute("hreflang", targetLang);
    button.setAttribute("aria-label", `Cambiar idioma a ${targetLang === "en" ? "Inglés" : "Español"}`);
  });
});