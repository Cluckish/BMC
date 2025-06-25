export function About() {
    // Note: The contact form has been replaced with a "Contact Us" section.
    return `
        <div class="about-page">
            <section class="about-section light-gradient">
                <div class="about-card two-column-card">
                    <div class="card-text">
                        <h2>Apartment Beginnings</h2>
                        <p>Benoit Marketing Consultants began as a one-person operation out of a college apartment in Moscow, Idaho. While studying marketing at the University of Idaho, our founder, Mason Benoit, was inspired to apply what he was learning to real businesses.</p>
                    </div>
                    <div class="card-image">
                        <img src="images/Appt-desk.jpg" alt="Desk setup in an apartment" />
                    </div>
                </div>
            </section>

            <section class="about-section mid-gradient">
                 <div class="about-card two-column-card reverse">
                     <div class="card-text">
                        <h2>The Entrepreneurship Club</h2>
                        <p>During his sophomore year, Mason co-founded the University of Idaho's Entrepreneurship Club to support students building businesses from scratch. This spirit of collaboration and grassroots innovation laid the foundation for what Benoit Marketing Consultants would later become.</p>
                        <a href="https://www.instagram.com/uofi_entrepreneurship/" class="cta-button" target="_blank" rel="noopener noreferrer">Check Them Out!</a>
                    </div>
                    <div class="card-image">
                        <img src="images/podium.jpg" alt="Founder Mason Benoit speaking at a University of Idaho podium" />
                    </div>
                </div>
            </section>

            <section class="about-section dark-bg">
                <div class="history-grid">
                    <div class="history-card large-card">
                        <img src="images/pretzel-cart.jpg" alt="The People's Pretzel team" />
                        <h3>The People's Pretzel</h3>
                        <p>In his senior year, Mason launched his first business — The People’s Pretzel — which empowered college students by selling franchising rights to run pretzel stands on campus.</p>
                    </div>
                    <div class="history-card small-card">
                        <img src="images/ENTR-club.jpg" alt="University of Idaho Entrepreneurship Club Logo" />
                        <h3>Benoit Marketing Consultants</h3>
                        <p>After graduating, Mason returned to his hometown, Boise, and launched Benoit Marketing Consultants to continue his mission of helping small businesses flourish.</p>
                    </div>
                </div>
            </section>
             <section class="info-section blue-gradient">
                <h2>Request Mock-ups</h2>
                <p>Interested in seeing what we can do? Contact us for a free consultation and mock-up designs for your business.</p>
                <a href="mailto:benoitmarketingconsultants@gmail.com" class="cta-button">Contact Us</a>
            </section>
        </div>
    `;
}
