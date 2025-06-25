import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Services } from './pages/Services.js';

const routes = {
    '/': Home,
    '/about': About,
    '/services': Services
};

export function router() {
    let path = window.location.pathname;
    
    // For GitHub Pages deployment, you might need to handle the repo name in the path
    // For now, we'll keep it simple.
    if (path === '' || path === '/index.html') {
        path = '/';
    }

    // Return the function for the current page, or the Home function if not found
    return routes[path] || routes['/'];
}
