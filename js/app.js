import { router } from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

const appDiv = document.getElementById('app');

function render() {
    const pageFunction = router();
    appDiv.innerHTML = `
        ${Header()}
        <main>
            ${pageFunction()}
        </main>
        ${Footer()}
    `;
}

function navigateTo(url) {
    history.pushState(null, null, url);
    render();
}

// Initial render
render();

// Handle browser back/forward
window.addEventListener('popstate', render);

// Handle navigation clicks
document.body.addEventListener('click', e => {
    // Find the closest ancestor which is a link
    const link = e.target.closest('a');
    if (link && link.matches('[data-link]')) {
        e.preventDefault();
        navigateTo(link.href);
    }
});
