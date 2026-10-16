const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    navigation.dataset.open = 'false';
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.dataset.open = String(!isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());

const contactForm = document.querySelector('#contact-form');
const contactStatus = document.querySelector('#contact-form-status');
const clinicWhatsAppLink = 'https://api.whatsapp.com/message/FP35IW5JMZKYD1?autoload=1&app_absent=0';

if (contactForm && contactStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const lines = [
      `Olá, Love Pet! Meu nome é ${name}.`,
      `Meu telefone para contato: ${phone}.`,
    ];

    if (email) lines.push(`Meu e-mail: ${email}.`);
    lines.push('', `Mensagem: ${message}`);

    const whatsappUrl = new URL(clinicWhatsAppLink);
    whatsappUrl.searchParams.set('text', lines.join('\n'));
    window.open(whatsappUrl.toString(), '_blank', 'noopener,noreferrer');
    contactStatus.textContent = 'Revise a mensagem no WhatsApp e toque em enviar por lá. Se ele não abrir, use o telefone da clínica.';
  });
}
