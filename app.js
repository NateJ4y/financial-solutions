const company = 'Call Me Finance Solutions'
const primary = '27833032807'
const secondary = '27832764669'
const vehicles = {
  Cars: 'Explore finance for a car that suits your commute, family or next adventure.',
  Bakkies: 'Discuss finance for a bakkie for work, weekends or a bit of both.',
  Bikes: 'Speak to the team about financing a motorcycle for everyday riding or weekend trips.',
  Trailers: 'Ask about finance for a trailer for work, transport or leisure.',
  Caravans: 'Talk through finance options for a caravan and plan your next trip.',
  Boats: 'Discuss boat finance before you commit to a purchase.'
}
const services = {
  'Vehicle finance': 'Talk through financing a vehicle you plan to buy and find out what information you’ll need to get started.',
  'Private-to-private finance': 'Buying directly from a private seller? We’ll guide you through the finance process and what both parties need to prepare.',
  'Vehicle refinancing': 'Already own a vehicle? Ask the team whether refinancing could suit your circumstances.'
}
const docs = ['Three months of payslips, if employed', 'Three months of bank statements', 'Valid South African ID', 'Valid driver’s licence']
const nav = [['index.html','Home'],['about.html','About Us'],['services.html','Finance Solutions'],['apply.html','Apply for Finance'],['contact.html','Contact']]
const page = document.body.dataset.page
const wa = (message = 'Hi Call Me Finance Solutions, I’d like to discuss vehicle finance.', phone = primary) => 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message)
const button = (href,label,outline=false) => `<a class="button${outline?' outline':''}" href="${href}">${label}</a>`
const brand = `<a class="brand" href="index.html">Call Me<small>Finance Solutions</small></a>`
const links = nav.map(([href,label]) => `<a href="${href}"${page===href?' aria-current="page"':''}>${label}</a>`).join('')
const header = `<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap header-inner">${brand}<button class="menu" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button><nav id="site-nav" class="nav" aria-label="Main navigation">${links}${button('apply.html','Get Started')}</nav></div></header>`
const footer = `<footer class="footer dark"><div class="wrap"><div class="split"><div>${brand}<p class="muted">South African vehicle finance facilitation.</p></div><nav aria-label="Contact and help"><a href="tel:+${primary}">083 303 2807</a><a href="tel:+${secondary}">083 276 4669</a><a href="faq.html">Finance FAQ</a><a href="checklist.html">Application Checklist</a></nav><nav aria-label="Legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms and Disclaimers</a></nav></div><div class="footer-bottom">© ${new Date().getFullYear()} ${company}</div></div></footer>`
const title = (eyebrow,heading,copy) => `<section class="inner-hero dark"><div class="wrap"><p class="eyebrow">${eyebrow}</p><h1>${heading}</h1><p class="lead">${copy}</p></div></section>`
const band = `<section class="section band"><div class="wrap split"><div><p class="eyebrow">Speak to the team</p><h2>Let’s talk finance.</h2></div><div class="actions">${button(wa(),'Chat on WhatsApp')}${button('contact.html','Call the team',true)}</div></div></section>`
const cardList = (withLinks = true) => Object.entries(services).map(([name, copy]) => `<article class="card" id="${name.toLowerCase().replaceAll(' ','-')}"><h3>${name}</h3><p>${copy}</p>${withLinks?`<a href="services.html#${name.toLowerCase().replaceAll(' ','-')}">Explore ${name.toLowerCase()}</a>`:''}</article>`).join('')
const explorer = `<section class="section dark" id="vehicles"><div class="wrap split"><div class="intro"><p class="eyebrow">Vehicle categories</p><h2>What are you financing?</h2><p class="muted">Choose a vehicle type to start a conversation.</p></div><div><div class="vehicle-buttons" role="group" aria-label="Vehicle category">${Object.keys(vehicles).map((name,i)=>`<button type="button" data-vehicle="${name}" aria-pressed="${i===0}" aria-controls="vehicle-panel">${name}</button>`).join('')}</div><div class="vehicle-panel" id="vehicle-panel"><div aria-live="polite"><h3>Cars</h3><p>${vehicles.Cars}</p></div><div class="actions">${button(wa('Hi Call Me Finance Solutions, I’d like to enquire about car finance.'),'Ask about cars')}</div></div></div></div></section>`
const checklist = `<section class="checklist" aria-labelledby="checklist-title"><h2 id="checklist-title">Application checklist</h2><p>Tick the items you have ready. If you’re self-employed, ask the team what proof of income to prepare.</p><progress value="0" max="${docs.length}" aria-label="Checklist progress"></progress><p id="checklist-status" role="status">0 of ${docs.length} items ready</p>${docs.map(doc=>`<label><input type="checkbox"> <span>${doc}</span></label>`).join('')}</section>`
const help = `<aside class="help"><h3>Want to discuss your credit history?</h3><p>Speak directly with the team about adverse credit or debt review before preparing documents.</p><a href="tel:+${primary}">Call 083 303 2807</a></aside>`
const enquiry = `<form class="form" id="enquiry"><h2>Start an enquiry</h2><label>Finance service<select name="service" required><option value="">Choose a service</option>${Object.keys(services).map(service=>`<option>${service}</option>`).join('')}</select></label><label>Vehicle type<select name="vehicle" required><option value="">Choose a vehicle type</option>${Object.keys(vehicles).map(vehicle=>`<option>${vehicle}</option>`).join('')}</select></label><p class="note">Your choices fill in a message you can review in WhatsApp before sending.</p><button class="button" type="submit">Continue to WhatsApp</button></form>`
const faqItems = [
 ['What can I finance?','Speak to the team about cars, bakkies, bikes, trailers, caravans and boats.'],
 ['Can I buy from a private seller?','We help with private-to-private vehicle finance. Contact us to talk through what you and the seller should prepare.'],
 ['Can I refinance a vehicle I already own?','We can discuss refinancing with you. The options depend on the vehicle and your circumstances.'],
 ['What documents should I prepare?','Start with the <a href="checklist.html">application checklist</a>. If you’re self-employed, ask the team what to use as proof of income.'],
 ['Can I speak to someone about my credit history?','Yes. <a href="contact.html">Contact the team</a> for a discovery call to discuss your situation.'],
 ['Does an enquiry guarantee approval?','Finance decisions and terms depend on the applicable lender’s assessment.']
]
const faq = `<section class="section"><div class="wrap faq">${faqItems.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>`
const legal = (body) => `<section class="section"><div class="wrap legal">${body}</div></section>`
const pages = {
 'index.html': `<section class="hero"><div class="wrap hero-content"><p class="eyebrow">South African vehicle finance</p><h1>Smart Finance. <em>Limitless Possibilities.</em></h1><p class="lead">Get personal guidance for financing your next vehicle, buying from a private seller or refinancing a vehicle you already own.</p><div class="actions">${button(wa(),'Chat on WhatsApp')}${button('services.html','Explore Finance Solutions',true)}</div></div></section><div class="strip"><div class="wrap"><span>Personal guidance</span><span>Private-sale finance</span><span>Vehicle refinancing</span></div></div><section class="section"><div class="wrap"><div class="intro"><p class="eyebrow">Finance Solutions</p><h2>Financing for your next move.</h2></div><div class="grid">${cardList()}</div></div></section>${explorer}<section class="section"><div class="wrap split"><div><p class="eyebrow">Applying for finance</p><h2>Know what to prepare.</h2></div><div class="copy"><p>Use the checklist to get your documents ready, then speak with the team about the vehicle and type of finance you have in mind.</p><div class="actions">${button('apply.html','Prepare your enquiry')}${button('faq.html','Finance FAQ',true)}</div></div></div></section>${band}`,
 'about.html': title('About Us','Your Journey. <em>Our Priority.</em>','Personal guidance for vehicle finance in South Africa.')+`<section class="section"><div class="wrap split"><h2>Real People. Real Solutions.</h2><div class="copy"><p>Call Me Finance Solutions helps customers understand the steps involved in vehicle finance, private sales and refinancing.</p><p>Tell us what you’re looking for and where you are in the process. We’ll talk through the options and help you prepare for the next step.</p><div class="actions">${button('services.html','Explore our services')}</div></div></div></section>`+band,
 'services.html': title('Finance Solutions','Find the right place to start.','Explore vehicle finance, private-to-private finance and vehicle refinancing.')+`<section class="section"><div class="wrap grid">${cardList(false)}</div></section>`+explorer+band,
 'apply.html': title('Apply for Finance','Get ready for your enquiry.','Prepare your documents and reach out to the team for guidance.')+`<section class="section"><div class="wrap split"><div>${checklist}${help}</div>${enquiry}</div></section>`,
 'contact.html': title('Contact','Talk to a real person.','Reach the Call Me Finance Solutions team by phone or WhatsApp.')+`<section class="section"><div class="wrap split"><div class="card"><h3>Madeleine Roos</h3><p>Call <a href="tel:+${primary}">083 303 2807</a></p><div class="actions">${button(wa(),'WhatsApp Madeleine')}</div></div><div class="card"><h3>Additional contact</h3><p>Call <a href="tel:+${secondary}">083 276 4669</a></p><div class="actions">${button(wa(undefined,secondary),'Chat on WhatsApp')}</div></div></div></section>`,
 'faq.html': title('Finance FAQ','Common questions.','Explore the steps before talking to the team.')+faq+band,
 'checklist.html': title('Application Checklist','Prepare your documents.','Use this checklist to work out what you have ready before you speak to the team.')+`<section class="section"><div class="wrap split">${checklist}<div>${help}<div class="actions">${button('apply.html','Start an enquiry')}</div></div></div></section>`,
 'privacy.html': title('Privacy Policy','Your privacy.','Information about how this website prototype handles your activity.')+legal(`<h2>Checklist and enquiry choices</h2><p>Your checklist and enquiry choices are held on the current page. The prototype has no document upload or enquiry database.</p><h2>WhatsApp and phone links</h2><p>WhatsApp opens with your selected vehicle and service in a draft message. You choose whether to send it. WhatsApp handles activity in its app under its own privacy policy.</p><h2>External fonts</h2><p>Your browser may request typefaces from Google Fonts when loading the site.</p><h2>Privacy questions</h2><p>Call <a href="tel:+${primary}">083 303 2807</a> to ask how the team handles information you share with them.</p>`),
 'terms.html': title('Terms and Disclaimers','Website information.','Learn how to use the information on this prototype.')+legal(`<h2>Finance enquiries</h2><p>Website information is general. Any offer, rate or repayment terms depend on the lender’s assessment and the details of your application.</p><h2>Application guidance</h2><p>The checklist helps you prepare. The team can confirm which documents apply to your circumstances.</p><h2>Contact</h2><p>Call <a href="tel:+${primary}">083 303 2807</a> with questions about a finance enquiry.</p>`),
 '404.html': title('Page not found','Let’s get you back on the road.','This address may have changed.')+`<section class="section"><div class="wrap">${button('index.html','Back to Home')}</div></section>`
}
document.body.innerHTML = header + `<main id="main">${pages[page] ?? pages['404.html']}</main>` + footer

const menu = document.querySelector('.menu')
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open))
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
  panel.querySelector('h3').textContent = name
  panel.querySelector('p').textContent = vehicles[name]
  const link = panel.querySelector('a')
  link.href = wa('Hi Call Me Finance Solutions, I’d like to enquire about finance for ' + name.toLowerCase() + '.')
  link.textContent = 'Ask about ' + name.toLowerCase()
}))

const checklistItems = [...document.querySelectorAll('.checklist input')]
checklistItems.forEach(item => item.addEventListener('change', () => {
  const checked = checklistItems.filter(input => input.checked).length
  document.querySelector('progress').value = checked
  document.querySelector('#checklist-status').textContent = checked + ' of ' + checklistItems.length + ' items ready'
}))

document.querySelector('#enquiry')?.addEventListener('submit', event => {
  event.preventDefault()
  const fields = new FormData(event.currentTarget)
  location.href = wa('Hi Call Me Finance Solutions, I’d like to enquire about ' + fields.get('service').toLowerCase() + ' for ' + fields.get('vehicle').toLowerCase() + '.')
})

if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()
