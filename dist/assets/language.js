(() => {
  const entries = [
    ['nav a', ['Azienda', 'Produzioni', 'Il nostro lavoro', 'Contatti'], ['Company', 'Collections', 'Our process', 'Contact']],
    ['.hero-copy .eyebrow', ['Esperienza nella confezione · dal 2004'], ['Apparel manufacturing · since 2004']],
    ['.hero-copy h1', ['Produzione sartoriale<br>dal 2004.'], ['Tailored production<br>since 2004.']],
    ['.hero-copy p', ['Realizziamo giacche, pantaloni eleganti e tailleur. Seguiamo ogni capo dal taglio della stoffa alla confezione finale.'], ['We make jackets, tailored trousers and women’s suits, managing each garment from fabric cutting to final finishing.']],
    ['.hero-actions a', ['Scopri le produzioni', 'Richiedi informazioni'], ['Explore our collections', 'Request information']],
    ['.image-note', ['R.A. ITALIA · Abbigliamento elegante'], ['R.A. ITALIA · Tailored apparel']],
    ['#azienda .eyebrow', ['La nostra storia · dal 2004'], ['Our story · since 2004']],
    ['#azienda h2', ['Esperienza e cura, dal primo taglio al capo finito.'], ['Experience and care, from the first cut to the finished garment.']],
    ['.intro-copy p', [
      '<strong>La storia di R.A. ITALIA inizia nel 2004 a Sant’Antimo, con un obiettivo chiaro: realizzare capi d’abbigliamento curati e ben confezionati.</strong> Da allora lavoriamo con passione nel settore, mettendo l’esperienza maturata in oltre vent’anni al servizio di aziende e marchi.',
      'Produciamo e confezioniamo giacche, pantaloni eleganti, tailleur donna e altri capi per uomo e donna. Tagliamo la stoffa, cuciamo, stiriamo, applichiamo le etichette e confezioniamo i capi, seguendo le lavorazioni concordate per ogni progetto.',
      'Se cerchi un partner produttivo per la tua prossima collezione, raccontaci la tua idea: valuteremo insieme come trasformarla in capi concreti.'
    ], [
      '<strong>R.A. ITALIA began in 2004 in Sant’Antimo with a clear goal: to make carefully crafted, well-finished garments.</strong> Since then, we have served apparel companies and brands with the experience built over more than twenty years.',
      'We produce jackets, tailored trousers, women’s suits and other garments. We cut, sew, press, label and package each piece, following the agreed specifications for every project.',
      'Looking for a manufacturing partner for your next collection? Tell us about your project and we can discuss how to bring it to life.'
    ]],
    ['#azienda .stat strong', ['22', '2', 'Dal taglio'], ['22', '2', 'From cutting']],
    ['#azienda .stat span', ['anni di esperienza', 'linee uomo e donna', 'al capo confezionato'], ['years of experience', 'menswear and womenswear', 'to the finished garment']],
    ['.intro-cta a', ['Parliamo della tua collezione'], ['Let’s discuss your collection']],
    ['#collezioni .eyebrow', ['Cosa produciamo'], ['What we make']],
    ['#collezioni h2', ['Le nostre produzioni'], ['Our collections']],
    ['.section-head p', ['Giacche, pantaloni e tailleur uomo e donna, realizzati seguendo le richieste e le specifiche di ogni collezione.'], ['Jackets, trousers and tailored suits for men’s and women’s collections, made to each project’s specifications.']],
    ['.card-number', ['01 · UOMO', '02 · DONNA', '03 · UOMO', '04 · DONNA', '05 · DONNA'], ['01 · MEN', '02 · WOMEN', '03 · MEN', '04 · WOMEN', '05 · WOMEN']],
    ['.card h3', ['Giacche uomo', 'Giacche donna', 'Pantaloni uomo', 'Pantaloni donna', 'Tailleur donna'], ['Men’s jackets', 'Women’s jackets', 'Men’s trousers', 'Women’s trousers', 'Women’s tailored suits']],
    ['.card p', [
      'Produzione e confezione di giacche eleganti per collezioni maschili.',
      'Giacche eleganti pensate per valorizzare le collezioni femminili.',
      'Pantaloni eleganti confezionati per completare le collezioni maschili.',
      'Pantaloni eleganti coordinabili con giacche e capi delle collezioni femminili.',
      'Completi coordinati con giacca e pantaloni, per un look elegante e armonioso.'
    ], [
      'Production and finishing of smart jackets for menswear collections.',
      'Elegant jackets designed for women’s collections.',
      'Tailored trousers made to complete menswear collections.',
      'Elegant trousers to coordinate with jackets and other womenswear.',
      'Coordinated jacket and trouser suits for a polished, harmonious look.'
    ]],
    ['.quote-guide .eyebrow', ['Per aziende e brand'], ['For apparel companies and brands']],
    ['.quote-guide h2', ['Parliamo del tuo progetto.'], ['Let’s discuss your project.']],
    ['.quote-guide p', ['Per una prima valutazione, raccontaci quali capi ti interessano, le quantità indicative e le tempistiche. Se disponibili, puoi inviare anche foto o una scheda tecnica: approfondiremo insieme i dettagli del progetto.'], ['For an initial assessment, tell us which garments you are interested in, the approximate quantities and your timeframe. If available, you can also send photos or a technical sheet; we can discuss the project details together.']],
    ['.quote-actions a', ['Scrivici su WhatsApp', 'Invia un’email'], ['Message us on WhatsApp', 'Send an email']],
    ['.clients-head .eyebrow', ['Esperienza e collaborazioni'], ['Experience and collaborations']],
    ['.clients-head h2', ['La fiducia si costruisce nel tempo.'], ['Trust is built over time.']],
    ['.clients-head p', ['Nel corso degli anni abbiamo lavorato con aziende e marchi dell’abbigliamento, contribuendo alla realizzazione di capi e collezioni.'], ['Over the years, we have worked with apparel companies and brands, contributing to garments and collections.']],
    ['.client-group h3', ['Marchi con cui abbiamo lavorato', 'Giacche prodotte per'], ['Brands we have worked with', 'Jackets made for']],
    ['.client-group:nth-child(2) .client-names span:last-child', ['E altri marchi'], ['And other brands']],
    ['.clients-note', ['I nomi sono riportati a titolo di referenza commerciale; i marchi appartengono ai rispettivi proprietari.'], ['Brand names are shown as commercial references; each brand is the property of its respective owner.']],
    ['#metodo .eyebrow', ['Dal progetto al capo'], ['From concept to garment']],
    ['#metodo h2', ['Dalla stoffa al capo pronto.'], ['From fabric to finished garment.']],
    ['#metodo .craft-grid > div > p', ['In R.A. ITALIA seguiamo le principali lavorazioni interne per realizzare capi eleganti da uomo e donna. Ci confrontiamo con il cliente sulle caratteristiche della collezione e sulle fasi necessarie per ogni capo.'], ['At R.A. ITALIA, we manage the key production stages for elegant menswear and womenswear. We work with each client on the collection details and the steps required for each garment.']],
    ['.point strong', ['Taglio della stoffa', 'Assemblaggio del capo', 'Cucitura e finitura', 'Stiro', 'Etichettatura', 'Controllo generale', 'Confezionamento'], ['Fabric cutting', 'Garment assembly', 'Sewing and finishing', 'Pressing', 'Labelling', 'Final garment inspection', 'Packaging']],
    ['.point span', [
      'Prepariamo e tagliamo il tessuto secondo il modello e le indicazioni ricevute.',
      'Mettiamo insieme i pezzi tagliati e prepariamo il capo per la cucitura.',
      'Cuciamo le componenti e completiamo le finiture previste.',
      'Stiriamo il capo prima delle fasi finali.',
      'Applichiamo le etichette fornite o indicate dal cliente.',
      'Controlliamo il capo nel suo insieme prima di prepararlo per la consegna.',
      'Confezioniamo il capo per la consegna.'
    ], [
      'We prepare and cut the fabric according to the pattern and instructions provided.',
      'We bring the cut pieces together and prepare the garment for sewing.',
      'We sew the components and complete the planned finishing work.',
      'We press the garment before the final stages.',
      'We apply labels supplied or specified by the client.',
      'We inspect the garment as a whole before preparing it for delivery.',
      'We package the garment for delivery.'
    ]],
    ['#contatti .eyebrow', ['Collaboriamo'], ['Let’s work together']],
    ['#contatti h2', ['Hai una collezione<br>da realizzare?'], ['Have a collection<br>to make?']],
    ['#contatti .contact-box > div:first-child > p', ['Raccontaci il tuo progetto e scopri come R.A. ITALIA può affiancarti nella produzione e confezione di giacche e pantaloni eleganti.'], ['Tell us about your project and find out how R.A. ITALIA can support you with the production and finishing of tailored jackets and trousers.']],
    ['.contact-note > strong', ['Contatta R.A. ITALIA'], ['Contact R.A. ITALIA']],
    ['.contact-note > span', ['Per informazioni e collaborazioni, siamo a Sant’Antimo, in provincia di Napoli.'], ['For information and business enquiries, we are based in Sant’Antimo, near Naples, Italy.']],
    ['.contact-item small', ['Indirizzo', 'Email', 'Telefono'], ['Address', 'Email', 'Phone']],
    ['.address-directions', ['Apri indicazioni'], ['Get directions']],
    ['.contact-links a', ['Scrivi un’email', 'WhatsApp · 329 176 4222', 'WhatsApp · 328 116 1334'], ['Send an email', 'WhatsApp · 329 176 4222', 'WhatsApp · 328 116 1334']],
    ['.footer-caption', ['Produzione e confezione di abbigliamento elegante'], ['Production and finishing of tailored apparel']],
    ['.footer-location', ['Sant’Antimo · Napoli<br>22 anni di esperienza'], ['Sant’Antimo · Naples<br>22 years of experience']],
    ['.legal-details span', ['<strong>Ragione sociale:</strong> R.A. ITALIA di Islam Ishrat Jahan', '<strong>P. IVA:</strong> IT09819001216', '<strong>REA:</strong> NA-1061045'], ['<strong>Business name:</strong> R.A. ITALIA di Islam Ishrat Jahan', '<strong>VAT number:</strong> IT09819001216', '<strong>REA:</strong> NA-1061045']],
    ['.whatsapp-float span', ['Scrivici su WhatsApp'], ['Message us on WhatsApp']]
  ];

  const imageAlt = [
    ['.brand-logo', 'Logo R.A. ITALIA — Produzione e confezione', 'R.A. ITALIA logo — production and garment finishing'],
    ['.hero-visual img', 'Giacche eleganti appese nella fabbrica R.A. ITALIA', 'Elegant jackets hanging in the R.A. ITALIA factory'],
    ['.card-photo img', ['Giacca sartoriale uomo blu navy', 'Giacca sartoriale donna color avorio', 'Pantaloni sartoriali uomo color antracite', 'Pantaloni sartoriali donna color antracite', 'Tailleur donna coordinato con giacca e pantaloni'], ['Tailored navy men’s jacket', 'Ivory tailored women’s jacket', 'Charcoal tailored men’s trousers', 'Charcoal tailored women’s trousers', 'Coordinated women’s tailored suit']]
  ];

  const button = document.getElementById('languageToggle');
  if (!button) return;

  const pageTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const pageDescription = description?.content ?? '';

  function setLanguage(language) {
    const english = language === 'en';
    for (const [selector, italian, translated] of entries) {
      document.querySelectorAll(selector).forEach((element, index) => {
        const value = (english ? translated : italian)[index];
        if (value !== undefined) element.innerHTML = value;
      });
    }
    for (const [selector, italian, translated] of imageAlt) {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.alt = Array.isArray(italian) ? (english ? translated[index] : italian[index]) : (english ? translated : italian);
      });
    }
    document.documentElement.lang = english ? 'en' : 'it';
    document.title = english ? 'R.A. ITALIA — Tailored jackets and trousers' : pageTitle;
    if (description) description.content = english
      ? 'Since 2004, R.A. ITALIA has manufactured and finished tailored jackets, trousers and women’s suits in Sant’Antimo, Italy.'
      : pageDescription;
    button.textContent = english ? 'Italiano' : 'English';
    button.setAttribute('aria-label', english ? 'Passa all’italiano' : 'Switch to English');
    button.setAttribute('aria-pressed', String(english));

    document.querySelectorAll('.whatsapp-link, .whatsapp-float').forEach((link) => {
      if (!link.dataset.phone) {
        const match = new URL(link.href).pathname.match(/\d+/);
        if (match) link.dataset.phone = match[0];
      }
      if (!link.dataset.phone) return;
      const message = english
        ? 'Hello, I would like information about manufacturing with R.A. ITALIA.'
        : 'Ciao, vorrei informazioni sulla produzione R.A. ITALIA';
      link.href = `https://wa.me/${link.dataset.phone}?text=${encodeURIComponent(message)}`;
    });
    document.querySelectorAll('#richieste .whatsapp-link').forEach((link) => {
      link.setAttribute('aria-label', english ? 'Message R.A. ITALIA on WhatsApp' : 'Scrivi a R.A. ITALIA su WhatsApp');
    });
    document.querySelectorAll('.quote-actions a[href^="mailto:"], .contact-links a[href^="mailto:"]').forEach((link) => {
      const subject = link.closest('.quote-actions')
        ? (english ? 'Manufacturing project enquiry - R.A. ITALIA' : 'Progetto di produzione - R.A. ITALIA')
        : (english ? 'Information request - R.A. ITALIA' : 'Richiesta informazioni - R.A. ITALIA');
      link.href = `mailto:r.aitaliaindustry@gmail.com?subject=${encodeURIComponent(subject)}`;
    });
  }

  button.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'it' : 'en');
  });
  setLanguage('it');
})();
