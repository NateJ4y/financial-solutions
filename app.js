const company = 'Call Me Finance Solutions'
const primary = '27833032807'
const secondary = '27832764669'
const image = (id, width=1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`
const vehicles = {
  Cars: { copy: 'From refined everyday comfort to something a little more special, explore finance for the car that fits your life.', image: 'photo-1492144534655-ae79c964c9d7' },
  Bakkies: { copy: 'A capable partner for the work week, the open road and everything in between.', image: 'photo-1551830820-330a71b99659' },
  Bikes: { copy: 'For the freedom of two wheels and the journeys waiting beyond the everyday.', image: 'photo-1558981806-ec527fa84c39' },
  Trailers: { copy: 'Make room for the equipment, projects and plans that move with you.', image: 'photo-1605893477799-b99e3b8b93fe' },
  Caravans: { copy: 'Make more room for weekends away, family time and the open road.', image: 'photo-1500530855697-b586d89ba3ee' },
  Boats: { copy: 'Take the next step towards weekends on the water and new horizons.', image: 'photo-1567899378494-47b22a2ae96a' }
}
const services = {
  'Vehicle finance': 'Personal guidance for financing a vehicle you plan to buy, with help understanding the steps and information you may need.',
  'Private-to-private finance': 'Buying directly from a private seller? We’ll guide you through the finance process and what both parties should prepare.',
  'Vehicle refinancing': 'Already own a vehicle? Speak to the team about whether refinancing could suit your circumstances.'
}
const docs = ['Three months of payslips, if employed', 'Three months of bank statements', 'Valid South African ID', 'Valid driver’s licence']
const nav = [['index.html','Home'],['about.html','About Us'],['services.html','Finance Solutions'],['apply.html','Apply for Finance'],['contact.html','Contact']]
const page = document.body.dataset.page
const wa = (message = 'Hi Call Me Finance Solutions, I’d like to discuss vehicle finance.', phone = primary) => 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message)
const button = (href,label,outline=false) => `<a class="button${outline?' outline':''}" href="${href}">${label}<span aria-hidden="true">↗</span></a>`
const brand = `<a class="brand" href="index.html" aria-label="Call Me Finance Solutions home"><span class="brand-mark">CM</span><span class="brand-name">Call Me<small>Finance Solutions</small></span></a>`
const links = nav.map(([href,label]) => `<a href="${href}"${page===href?' aria-current="page"':''}>${label}</a>`).join('')
const header = `<a class="skip" href="#main">Skip to content</a><div class="topline"><div class="wrap topline-inner"><span>PERSONAL VEHICLE FINANCE GUIDANCE</span><div><a href="tel:+${primary}">083 303 2807</a><span class="topline-divider">/</span><a href="tel:+${secondary}">083 276 4669</a></div></div></div><header class="site-header"><div class="wrap header-inner">${brand}<button class="menu" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation"><span></span><span></span></button><nav id="site-nav" class="nav" aria-label="Main navigation">${links}${button('apply.html','Start a conversation')}</nav></div></header>`
const footer = `<footer class="footer dark"><div class="wrap"><div class="footer-main"><div class="footer-brand">${brand}<p>Good decisions start with a conversation. Let’s make your next move a confident one.</p><div class="footer-contact"><a href="tel:+${primary}">083 303 2807</a><a href="mailto:info@callmefinance.co.za">Get in touch by email</a></div></div><div><p class="footer-label">EXPLORE</p><nav aria-label="Explore"><a href="about.html">About Us</a><a href="services.html">Finance Solutions</a><a href="apply.html">Apply for Finance</a><a href="faq.html">Finance FAQ</a><a href="checklist.html">Application Checklist</a></nav></div><div><p class="footer-label">GET IN TOUCH</p><nav aria-label="Contact"><a href="tel:+${primary}">083 303 2807</a><a href="tel:+${secondary}">083 276 4669</a><a href="contact.html">Contact the team</a><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms and Disclaimers</a></nav></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${company}. All rights reserved.</span><span>South Africa · Personal guidance, made simple.</span></div></div></footer>`
const title = (eyebrow,heading,copy) => `<section class="inner-hero dark"><div class="wrap inner-hero-content"><p class="eyebrow">${eyebrow}</p><h1>${heading}</h1><p class="lead">${copy}</p></div></section>`
const band = `<section class="closing-cta"><div class="wrap closing-inner"><div><p class="eyebrow">YOUR NEXT MOVE STARTS HERE</p><h2>Let’s make it <em>happen.</em></h2><p>Tell us what you have in mind. We’ll help you understand the next step.</p></div><div class="actions">${button(wa(),'Chat on WhatsApp')}${button('contact.html','Speak to the team',true)}</div></div></section>`
const cardList = (withLinks = true) => Object.entries(services).map(([name,copy],i) => `<article class="service-card reveal"><div class="service-number">0${i+1}</div><div class="service-icon" aria-hidden="true">${['↗','⌁','◉'][i]}</div><h3>${name}</h3><p>${copy}</p>${withLinks?`<a class="text-link" href="services.html#${name.toLowerCase().replaceAll(' ','-')}">Explore solution <span aria-hidden="true">↗</span></a>`:''}</article>`).join('')
const explorer = `<section class="section vehicle-section dark" id="vehicles"><div class="wrap"><div class="section-heading split-heading"><div><p class="eyebrow">Find your direction</p><h2>What moves <em>you?</em></h2></div><p class="section-note">From everyday essentials to the freedom of the open road, let’s talk about the vehicle that fits your next chapter.</p></div><div class="vehicle-tabs" role="group" aria-label="Vehicle category">${Object.keys(vehicles).map((name,i)=>`<button type="button" data-vehicle="${name}" aria-pressed="${i===0}" aria-controls="vehicle-panel">${name}</button>`).join('')}</div><div class="vehicle-feature" id="vehicle-panel"><div class="vehicle-image-wrap"><img src="${image(vehicles.Cars.image,1100)}" alt="Modern premium car photographed outdoors" width="1100" height="720" fetchpriority="low" loading="lazy" decoding="async"></div><div class="vehicle-copy"><p class="eyebrow">A vehicle for every kind of journey</p><h3>Cars</h3><p>${vehicles.Cars.copy}</p><div class="actions"><a class="button" href="${wa('Hi Call Me Finance Solutions, I’d like to enquire about finance for cars.')}">Explore car finance <span aria-hidden="true">↗</span></a></div></div></div></div></section>`
const checklist = `<section class="checklist reveal" aria-labelledby="checklist-title"><div class="checklist-top"><p class="eyebrow">A little preparation goes a long way</p><h2 id="checklist-title">Your document checklist.</h2><p>Tick off what you have ready. If you’re self-employed, ask the team what proof of income to prepare.</p></div><div class="progress-row"><progress value="0" max="${docs.length}" aria-label="Checklist progress"></progress><span id="checklist-status" role="status">0 / ${docs.length} ready</span></div>${docs.map((doc,i)=>`<label class="check-row"><span class="check-index">0${i+1}</span><input type="checkbox"><span>${doc}</span><span class="check-indicator" aria-hidden="true">+</span></label>`).join('')}</section>`
const help = `<aside class="help"><p class="eyebrow">Need a little clarity?</p><h3>Let’s talk it through.</h3><p>Speak directly with the team about your circumstances, including adverse credit or debt review, before preparing documents.</p><a class="text-link" href="tel:+${primary}">Call 083 303 2807 <span aria-hidden="true">↗</span></a></aside>`
const enquiry = `<form class="form reveal" id="enquiry"><p class="eyebrow">Start with the basics</p><h2>Let’s start a conversation.</h2><p class="form-intro">Choose what you’re exploring. We’ll prepare a WhatsApp message for you to review before sending.</p><label>What can we help with?<select name="service" required><option value="">Choose a service</option>${Object.keys(services).map(service=>`<option>${service}</option>`).join('')}</select></label><label>What vehicle are you considering?<select name="vehicle" required><option value="">Choose a vehicle type</option>${Object.keys(vehicles).map(vehicle=>`<option>${vehicle}</option>`).join('')}</select></label><button class="button" type="submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button><p class="note">No application is submitted on this website.</p></form>`
const faqItems = [
 ['What can I finance?','Speak to the team about cars, bakkies, bikes, trailers, caravans and boats.'],
 ['Can I buy from a private seller?','We help with private-to-private vehicle finance. Contact us to talk through what you and the seller should prepare.'],
 ['Can I refinance a vehicle I already own?','We can discuss refinancing with you. The options depend on the vehicle and your circumstances.'],
 ['What documents should I prepare?','Start with the <a href="checklist.html">application checklist</a>. If you’re self-employed, ask the team what to use as proof of income.'],
 ['Can I speak to someone about my credit history?','Yes. <a href="contact.html">Contact the team</a> for a discovery call to discuss your situation.'],
 ['Does an enquiry guarantee approval?','No. An enquiry does not guarantee approval. Finance decisions and terms depend on the applicable lender’s assessment and your circumstances.']
]
const faq = `<section class="section"><div class="wrap faq-layout"><div><p class="eyebrow">Good to know</p><h2>Questions, <em>answered.</em></h2></div><div class="faq">${faqItems.map(([q,a],i)=>`<details class="reveal"><summary><span>0${i+1}</span>${q}<b aria-hidden="true">+</b></summary><p>${a}</p></details>`).join('')}</div></div></section>`
const legal = body => `<section class="section"><div class="wrap legal">${body}</div></section>`
const journey = `<section class="section journey-section"><div class="wrap"><div class="section-heading"><p class="eyebrow">A clear way forward</p><h2>Simple steps. <em>Personal guidance.</em></h2><p class="section-note">No pressure. Just a straightforward conversation about what you’re looking for.</p></div><div class="journey-grid"><article class="journey-step reveal"><span>01</span><h3>Tell us what you need</h3><p>Share the vehicle or finance option you’re exploring.</p></article><article class="journey-step reveal"><span>02</span><h3>Talk it through</h3><p>We’ll help you understand the process and what to prepare.</p></article><article class="journey-step reveal"><span>03</span><h3>Take the next step</h3><p>When you’re ready, we’ll guide you on the way forward.</p></article></div></div></section>`
const pages = {
 'index.html': `<section class="hero"><img class="hero-photo" src="assets/hero.jpg" alt="" width="1920" height="1080" fetchpriority="high" decoding="async"><div class="hero-shade"></div><div class="wrap hero-content"><p class="eyebrow"><span class="eyebrow-line"></span> SOUTH AFRICAN VEHICLE FINANCE</p><h1>Your next chapter.<br><em>In the driver’s seat.</em></h1><p class="lead">The right vehicle can open up a world of possibility. Let’s make the finance journey feel clear, personal and considered.</p><div class="actions">${button(wa(),'Let’s talk finance')}${button('services.html','Explore solutions',true)}</div><div class="hero-footnote"><span>PERSONAL GUIDANCE</span><span>BUILT AROUND YOU</span></div></div><a class="scroll-cue" href="#welcome" aria-label="Scroll to discover"><span></span> SCROLL TO DISCOVER</a></section><div class="trust-strip"><div class="wrap"><span>VEHICLE FINANCE</span><i></i><span>PRIVATE-TO-PRIVATE</span><i></i><span>REFINANCING</span><i></i><span>PERSONAL GUIDANCE</span></div></div><section class="section welcome-section" id="welcome"><div class="wrap welcome-grid"><div class="welcome-visual reveal"><img src="${image('photo-1503376780353-7e6692767b70',1200)}" alt="Luxury sports car on a scenic road" width="1200" height="900" loading="lazy" decoding="async"><div class="image-caption"><span>THE ROAD AHEAD</span><span>STARTS WITH A CONVERSATION</span></div></div><div class="welcome-copy reveal"><p class="eyebrow">A better way to move forward</p><h2>More than a vehicle.<br><em>A feeling.</em></h2><p>It’s the comfort of a better commute. The space for your family. The freedom to explore. Or the confidence to take your business further.</p><p>At Call Me Finance Solutions, we believe the finance journey should feel just as considered as the destination. We offer personal guidance to help you understand your options and take your next step with confidence.</p><div class="actions">${button('about.html','Get to know us',true)}</div></div></div></section><section class="section services-section"><div class="wrap"><div class="section-heading split-heading"><div><p class="eyebrow">How we can help</p><h2>Finance that fits <em>your life.</em></h2></div><p class="section-note">Different journeys call for different solutions. Start with the one that sounds right for you.</p></div><div class="service-grid">${cardList()}</div></div></section>${explorer}${journey}<section class="section affordability-section"><div class="wrap affordability-grid"><div class="affordability-copy reveal"><p class="eyebrow">Confidence starts with clarity</p><h2>Know your next step.<br><em>Before you take it.</em></h2><p>We’ll help you understand the information you may need and the questions worth asking. Every finance application is assessed on its own merits, so a conversation is the best place to begin.</p><div class="actions">${button('apply.html','Prepare for an enquiry')}${button('faq.html','Read the FAQs',true)}</div></div><div class="affordability-visual reveal"><img src="${image('photo-1533473359331-0135ef1b58bf',1100)}" alt="Comfortable modern vehicle interior" width="1100" height="900" loading="lazy" decoding="async"><div class="visual-note"><span>01 / PREPARE</span><strong>A little clarity<br>goes a long way.</strong></div></div></div></section>${band}`,
 'about.html': title('ABOUT CALL ME FINANCE SOLUTIONS','Your journey.<br><em>Our priority.</em>','Personal guidance for vehicle finance in South Africa, built around real conversations and clear next steps.')+`<section class="section about-intro"><div class="wrap about-grid"><div class="about-image reveal"><img src="${image('photo-1449965408869-eaa3f722e40d',1200)}" alt="Driver enjoying a scenic open road" width="1200" height="900" loading="lazy" decoding="async"></div><div class="about-copy reveal"><p class="eyebrow">A personal approach</p><h2>Because every journey is <em>different.</em></h2><p>Whether you’re buying your first car, looking for more room for the family, purchasing from a private seller or exploring refinancing, the questions are personal. Your finance journey should be too.</p><p>Our role is to help you understand the process, identify what information you may need and connect with the right next step. No unnecessary jargon. Just a helpful conversation.</p></div></div></section>${journey}${band}`,
 'services.html': title('FINANCE SOLUTIONS','Find the right place<br>to <em>start.</em>','Explore vehicle finance, private-to-private finance and vehicle refinancing. We’ll help you understand the process and what to prepare.')+`<section class="section"><div class="wrap"><div class="service-grid service-grid-large">${cardList(false)}</div></div></section>${explorer}${journey}${band}`,
 'apply.html': title('APPLY FOR FINANCE','A confident start<br>begins <em>here.</em>','Prepare the basics, then reach out to the team. We’ll help you understand the next step.')+`<section class="section apply-section"><div class="wrap apply-grid"><div>${checklist}${help}</div>${enquiry}</div></section>`,
 'contact.html': title('GET IN TOUCH','Let’s talk about<br><em>what’s next.</em>','A question, an idea or ready to explore your options? We’d love to hear from you.')+`<section class="section contact-section"><div class="wrap contact-grid"><div class="contact-intro"><p class="eyebrow">A real conversation</p><h2>We’re just a call <em>away.</em></h2><p>Choose the contact that works for you. We’ll help you take it from there.</p><img src="${image('photo-1493238792000-8113da705763',1100)}" alt="Elegant vehicle parked in a modern setting" width="1100" height="700" loading="lazy" decoding="async"></div><div class="contact-cards"><article class="contact-card reveal"><span>01 / PRIMARY CONTACT</span><h3>Madeleine Roos</h3><a href="tel:+${primary}" class="contact-number">083 303 2807</a><a class="text-link" href="${wa()}">WhatsApp Madeleine ↗</a></article><article class="contact-card reveal"><span>02 / ADDITIONAL CONTACT</span><h3>Speak to our team</h3><a href="tel:+${secondary}" class="contact-number">083 276 4669</a><a class="text-link" href="${wa(undefined,secondary)}">WhatsApp the team ↗</a></article></div></div></section>`,
 'faq.html': title('FINANCE FAQ','The details matter.<br><em>We make them clearer.</em>','A few useful answers before you get started.')+faq+band,
 'checklist.html': title('APPLICATION CHECKLIST','A little preparation.<br><em>A clearer journey.</em>','Use this checklist to see what you have ready before you speak to the team.')+`<section class="section"><div class="wrap checklist-layout">${checklist}<div>${help}<div class="actions">${button('apply.html','Start an enquiry')}</div></div></div></section>`,
 'privacy.html': title('PRIVACY POLICY','Your privacy.<br><em>Handled with care.</em>','Information about how this website prototype handles your activity.')+legal(`<h2>Checklist and enquiry choices</h2><p>Your checklist and enquiry choices are held on the current page. The prototype has no document upload or enquiry database.</p><h2>WhatsApp and phone links</h2><p>WhatsApp opens with your selected vehicle and service in a draft message. You choose whether to send it. WhatsApp handles activity in its app under its own privacy policy.</p><h2>External fonts and images</h2><p>Your browser may request typefaces and images from third-party services when loading the site.</p><h2>Privacy questions</h2><p>Call <a href="tel:+${primary}">083 303 2807</a> to ask how the team handles information you share with them.</p>`),
 'terms.html': title('TERMS AND DISCLAIMERS','Clear information.<br><em>Clear expectations.</em>','Please read these notes before using the information on this website.')+legal(`<h2>Finance enquiries</h2><p>Website information is general. Any offer, rate or repayment terms depend on the lender’s assessment and the details of your application.</p><h2>Application guidance</h2><p>The checklist helps you prepare. The team can confirm which documents apply to your circumstances.</p><h2>No guarantee of approval</h2><p>Submitting an enquiry or speaking with the team does not guarantee finance approval.</p><h2>Contact</h2><p>Call <a href="tel:+${primary}">083 303 2807</a> with questions about a finance enquiry.</p>`),
 '404.html': title('PAGE NOT FOUND','Looks like this<br>road <em>ends here.</em>','This address may have changed. Let’s get you back on the road.')+`<section class="section"><div class="wrap">${button('index.html','Back to home')}</div></section>`
}
document.body.innerHTML = header + `<main id="main">${pages[page] ?? pages['404.html']}</main>` + footer

const menu = document.querySelector('.menu')
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open))
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation')
  document.querySelector('#site-nav').dataset.open = String(open)
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') === 'false'))
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false)
    menu.focus()
  }
})

const vehicleButtons = document.querySelectorAll('[data-vehicle]')
vehicleButtons.forEach(control => control.addEventListener('click', () => {
  const name = control.dataset.vehicle
  vehicleButtons.forEach(item => item.setAttribute('aria-pressed', String(item === control)))
  const panel = document.querySelector('#vehicle-panel')
  const photo = panel.querySelector('img')
  photo.classList.add('image-changing')
  const next = new Image()
  next.onload = () => {
    photo.src = next.src
    photo.alt = name === 'Cars' ? 'Modern car available for a finance conversation' : name + ' vehicle category'
    photo.classList.remove('image-changing')
  }
  next.src = image(vehicles[name].image,1100)
  panel.querySelector('h3').textContent = name
  panel.querySelector('.vehicle-copy > p:not(.eyebrow)').textContent = vehicles[name].copy
  const link = panel.querySelector('.vehicle-copy a')
  link.href = wa('Hi Call Me Finance Solutions, I’d like to enquire about finance for ' + name.toLowerCase() + '.')
  link.innerHTML = 'Explore ' + name.toLowerCase() + ' finance <span aria-hidden="true">↗</span>'
}))

const checklistItems = [...document.querySelectorAll('.checklist input')]
checklistItems.forEach(item => item.addEventListener('change', () => {
  const checked = checklistItems.filter(input => input.checked).length
  const progress = document.querySelector('.checklist progress')
  if (progress) progress.value = checked
  const status = document.querySelector('#checklist-status')
  if (status) status.textContent = checked + ' / ' + checklistItems.length + ' ready'
  item.closest('.check-row')?.classList.toggle('is-checked', item.checked)
}))

document.querySelector('#enquiry')?.addEventListener('submit', event => {
  event.preventDefault()
  const fields = new FormData(event.currentTarget)
  location.href = wa('Hi Call Me Finance Solutions, I’d like to enquire about ' + fields.get('service').toLowerCase() + ' for ' + fields.get('vehicle').toLowerCase() + '.')
})

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'))
}

if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()
