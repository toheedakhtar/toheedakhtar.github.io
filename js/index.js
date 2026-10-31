function showAbout() {
    const introduction = `
        <p>Yo! It's Toheed. I do research focused on AI safety, with hands-on experience in mechanistic interpretability and looking at LLMs in a naturalistic manner, studying domains such as uncertainty, factual correctness, introspection etc. I currently work as a Research Fellow at <a href="https://lossfunk.com/">Lossfunk</a>.</p>

        <p>My research atp broadly focuses on machine metacognition (thinking about thinking, making models know what they don't know) understanding how language models recognize when an answer may be incorrect, and regulate their responses under uncertainty and how we might get more accurate self reports. I'm particularly interested in developing architecture-agnostic methods to study these behaviors across different modalities. I also take regular dives in neuroscience literature for this alos.</p>

        <p>Beyond research, I enjoy anime and reading. I'm currently reading three books at once: science fiction, philosophy, and biography, to train my brain to multitask.</p>

        <p><em>My strongest belief is that we should be very skeptical of our beliefs. I wrote an essay along the lines of it: <a href="https://toheedakhtar01.substack.com/p/the-world-is-editable" target="_blank" rel="noopener noreferrer">The World is Editable</a>.</em></p>
    `;
    const about = `
        <h3>About</h3>
        ${introduction}

        <p>Always up for interesting discussions. <a href="#contact" data-section="contact">Reach out</a>.</p>

        <img class="about-ship" src="assets/logo/about-ship.png" alt="One Piece pirate ship" width="640" height="360">


    `;
    renderSection('about', about);
}

function showWork() {
    renderSection('work', ` 

        <h3>Work</h3>
        <div class="experience">
            <p class="experience-title">Experience</p>
            <ul class="experience-list">
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">Research Fellow · Lossfunk</span>
                        <span class="experience-date">Mar 2026 – Present</span>
                    </div>
                    <p class="experience-location">Bengaluru, Karnataka</p>
                    <p>Working under <a href="https://x.com/paraschopra?lang=en" target="_blank" rel="noopener noreferrer">Paras Chopra</a> and <a href="https://scholar.google.com/citations?user=MPFzJQgAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Sushrut Thorat</a>.</p>
                    <ul class="experience-points">
                        <li>Developing an architecture-agnostic framework for metacognition by studying invariants across frontier LLMs.</li>
                        <li>Investigating whether factual correctness is represented internally in 8B-scale language models.</li>
                    </ul>
                </li>
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">AI/ML Intern · Chirpn AI</span>
                        <span class="experience-date">Mar 2025 – Oct 2025</span>
                    </div>
                    <p class="experience-location">Pune / Remote</p>
                    <ul class="experience-points">
                        <li>Created coding, GitHub, and Jira agents from scratch using CrewAI.</li>
                        <li>Owned workflow development and reduced agent token usage by approximately 85%.</li>
                        <li>Implemented A2A and MCP protocols plus custom tools for GitHub, Jira, and file operations.</li>
                        <li>Built and deployed agentic workflows in production using LangGraph and Docker.</li>
                        <li>Fine-tuned Llama and open-source vision models for handwritten-text recognition, achieving 95% accuracy.</li>
                    </ul>
                </li>
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">Full Stack Developer · buildspace</span>
                        <span class="experience-date">Aug 2024 – Sep 2024</span>
                    </div>
                    <p class="experience-location">San Francisco Bay Area / Remote</p>
                    <ul class="experience-points">
                        <li>Selected for Nightz &amp; Weekends, a six-week program funded by Y Combinator and a16z.</li>
                        <li>Independently built and scaled an MVP to more than 1,000 visits.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="profile-section">
            <p class="experience-title">Achievements</p>
            <ul class="achievement-list">
                <li><strong>NIT Goa 0xGenIgnite Winner</strong> — Won a national-level Web3 hackathon at NIT Goa.</li>
                <li><strong>Logithon '25 IIT Bombay Finalist</strong> — Placed in the top five at the national logistics hackathon.</li>
                <li><strong>World Computer Hacker League '25</strong> — National qualifier.</li>
            </ul>
        </div>
        ` 
    );
}

function showResearch() {
    const research = `
        <h3>Research</h3>

        <ul>
            <li><strong>Is Factual Correctness Represented in LLMs? A Cross-Dataset Probing Study</strong> — Examining whether internal model representations encode factual correctness consistently across datasets. <span class="research-status">[Preprint soon] / <a href="#contact" data-section="contact">contact</a></span></li>
            <li><a target="_blank" href="https://www.lesswrong.com/posts/cgCeqi8cDn9RnDdQA/small-language-models-hallucinate-knowing-something-s-off">Small language models hallucinate knowing something's off</a> — Research on epistemic uncertainty detection in LLMs and how small models suppress detected uncertainty. Published on LessWrong (Jan 2026). <b>[LessWrong]</b></li>
            <li><a target="_blank" href="https://github.com/Open-Superintelligence-Lab/5-dollar-llm/pull/56">Polar Express contribution to the $5 LLM project</a> — Replaced the Newton–Schulz iteration in the MuON optimizer; the contribution is credited on the project's <a target="_blank" href="https://github.com/Open-Superintelligence-Lab/5-dollar-llm/blob/main/docs/LEADERBOARD.md">1B-token marathon leaderboard</a>. <b>[Open source]</b></li>
            <li><a target="_blank" href="https://github.com/toheedakhtar/higher-order-alleys">Higher-Order Alleys</a> — Found exploratory evidence that a Qwen3.6-27B latent tracks hidden-process degradation under fixed visible output; causal mediation to later judgments remains unresolved. <b>[Code]</b></li>
        </ul>
    `;
    renderSection('research', research);
}

function showBlog() {
    const posts = window.BLOG_POSTS || [];
    const items = posts.map(post => {
        const source = post.source ? ` · ${post.source}${post.external ? ' ↗' : ''}` : '';
        const linkAttributes = post.external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `
        <li>
            <a href="${post.url}"${linkAttributes}>${post.title}</a>
            <p>${post.description}</p>
            <time datetime="${post.date}">${post.displayDate} · ${post.label}${source}</time>
        </li>
    `;
    }).join('');
    renderSection('blog', `
        <h3>Writing</h3>
        <p>Research notes, technical walkthroughs, and occasional dispatches from the latent space.</p>
        <ul class="post-list">${items || '<li>No posts yet.</li>'}</ul>
    `);
}

function showLinks() {
    const links = `
        <h3>Contact</h3>
        <ul>
            <li><a href="mailto:toheedak333@gmail.com">Email</a></li>
            <li><a href="https://github.com/toheedakhtar" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/toheedakhtar01" target="_blank">LinkedIn</a></li>
            <li><a href="https://x.com/toheedakhtar01" target="_blank">Twitter/X</a></li>
            <li><a href="https://toheedakhtar01.substack.com/" target="_blank">Substack</a></li>
        </ul>
    `;
    renderSection('contact', links);
}

function renderSection(section, html) {
    const content = document.getElementById('content');
    content.dataset.section = section;
    content.innerHTML = html;
    content.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.rel = 'noopener noreferrer';
    });
    content.classList.remove('content-enter');
    void content.offsetWidth;
    content.classList.add('content-enter');
    const sections = ['about', 'research', 'work', 'contact', 'blog'];
    document.getElementById('section-index').textContent = `0${sections.indexOf(section) + 1} / 05`;
    document.querySelectorAll('.nav-item[data-section]').forEach(link => {
        if (link.dataset.section === section) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
    document.title = `${section.charAt(0).toUpperCase() + section.slice(1)} — Tohe²d Akhtar`;
}

window.addEventListener('DOMContentLoaded', () => {
    const views = { about: showAbout, research: showResearch, work: showWork, contact: showLinks, blog: showBlog };
    const currentView = () => {
        const section = window.location.hash.slice(1);
        if (Object.hasOwn(views, section)) views[section]();
        else showAbout();
    };

    document.querySelectorAll('.nav-item[data-section]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const section = link.dataset.section;
            if (window.location.hash !== `#${section}`) {
                window.history.pushState(null, '', `#${section}`);
            }
            views[section]();
            const main = document.getElementById('main');
            main.focus({ preventScroll: true });
            if (window.matchMedia('(max-width: 900px)').matches) {
                main.scrollIntoView({ block: 'start' });
            }
        });
    });
    window.addEventListener('popstate', currentView);
    window.addEventListener('hashchange', () => {
        if (Object.hasOwn(views, window.location.hash.slice(1))) currentView();
    });

    document.getElementById('back-to-top').addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0 });
        document.querySelector('.nav-item[data-section="about"]').focus({ preventScroll: true });
    });
    document.querySelectorAll('a[target="_blank"]').forEach(link => { link.rel = 'noopener noreferrer'; });
    currentView();
});
