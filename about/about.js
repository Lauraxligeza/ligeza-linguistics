const pillarCards = document.querySelectorAll('.principle-card');

if (pillarCards.length) {
  const toggleCard = (card) => {
    const isExpanded = card.classList.contains('is-expanded');
    pillarCards.forEach((item) => {
      item.classList.remove('is-expanded', 'is-active');
      item.setAttribute('aria-pressed', 'false');
      item.setAttribute('aria-expanded', 'false');
    });
    if (!isExpanded) {
      card.classList.add('is-expanded', 'is-active');
      card.setAttribute('aria-pressed', 'true');
      card.setAttribute('aria-expanded', 'true');
    }
  };

  pillarCards.forEach((card) => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');
    card.addEventListener('click', () => toggleCard(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCard(card);
      }
    });
  });
}
