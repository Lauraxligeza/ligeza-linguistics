const pricingTabs = document.querySelectorAll('.pricing-tab');
const pricingGroups = document.querySelectorAll('.pricing-group[data-tier]');
const pricingCards = document.querySelectorAll('.pricing-card');
const guidanceTrigger = document.getElementById('guidance-trigger');
const guidanceSection = document.querySelector('.pricing-guidance');
const guidanceForm = document.getElementById('guidance-form');
const guidanceEmail = guidanceForm
  ? guidanceForm.querySelector('input[name="email"]')
  : null;

const setTier = (tier) => {
  pricingTabs.forEach((tab) => {
    const isActive = tab.dataset.tier === tier;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  pricingGroups.forEach((group) => {
    group.classList.toggle('is-hidden', group.dataset.tier !== tier);
  });
};

pricingTabs.forEach((tab) => {
  tab.addEventListener('click', () => setTier(tab.dataset.tier));
});

pricingCards.forEach((card) => {
  const toggle = card.querySelector('.pricing-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const isOpen = card.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

if (guidanceTrigger && guidanceSection && guidanceForm) {
  guidanceTrigger.addEventListener('click', (event) => {
    event.preventDefault();
    guidanceSection.classList.add('is-revealed');
    guidanceForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (guidanceEmail) {
      guidanceEmail.focus({ preventScroll: true });
    }
  });
}

setTier('entry');
