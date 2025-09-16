document.addEventListener('DOMContentLoaded', function () {
    // Inicialização dos ícones Feather
    feather.replace();

    // --- Script para Menu Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Fechar menu mobile ao clicar em um link
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Script para o ano atual no rodapé ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Script para link do WhatsApp ---
    const whatsappLink = document.getElementById('whatsapp-link');
    if (whatsappLink) {
        const whatsappNumber = '551140710770'; // Número de Henrique Nedina do manual
        const message = encodeURIComponent("Olá! Vi o site da Sevencard e gostaria de fazer um orçamento.");
        whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    }

    // --- Script para Troca de Tema (Dark/Light Mode) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-toggle-sun');
    const moonIcon = document.getElementById('theme-toggle-moon');

    const updateThemeIcons = () => {
        if (document.documentElement.classList.contains('dark')) {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        // Atualiza os ícones após a troca
        feather.replace();
    };

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateThemeIcons();
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Atualiza os ícones no carregamento inicial da página
    updateThemeIcons();
});
