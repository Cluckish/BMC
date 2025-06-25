export function Footer() {
    return `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-branding">
                    <div class="logo-placeholder">BMC</div>
                    <p class="site-title">Benoit Marketing Consultants</p>
                    <p class="site-tagline">Helping Boise's Businesses Do More Business</p>
                </div>

                <div class="footer-contact">
                    <h2>Contact Us</h2>
                    <a href="mailto:benoitmarketingconsultants@gmail.com" class="footer-button">Email</a>
                    <a href="tel:+12085778623" class="footer-button">Phone</a>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/mason-benoit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>

                <div class="footer-explore">
                    <h2>Explore</h2>
                    <nav class="footer-nav">
                        <a href="/" data-link>Home</a>
                        <a href="/about" data-link>About Us</a>
                        <a href="/services" data-link>Services & Pricing</a>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom-text">
                 &copy; ${new Date().getFullYear()} Benoit Marketing Consultants. All Rights Reserved.
            </div>
        </footer>
    `;
}
