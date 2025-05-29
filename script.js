// kk so this load snacks from backend API
fetch('/api/snacks')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('snacklist');
    data.forEach(snack => {
      const card = document.createElement('div');
      card.className = 'snackcard';
      card.innerHTML = `
        <h2>${snack.name}</h2>
        <p>Carbs: ${snack.carbs}</p>
        <p>Sugar: ${snack.sugar}</p>
      `;
      container.appendChild(card);
    });
  });

// this part handle user submitted snack form
const form = document.getElementById('addsnackform');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('snackname').value.trim();
    const carbs = document.getElementById('snackcarbs').value.trim();
    const sugar = document.getElementById('snacksugar').value.trim();

    if (name && carbs && sugar) {
      const card = document.createElement('div');
      card.className = 'snackcard';
      card.innerHTML = `
        <h2>${name}</h2>
        <p>Carbs: ${carbs}</p>
        <p>Sugar: ${sugar}</p>
      `;
      document.getElementById('snacklist').appendChild(card);

      form.reset();
    }
  });
}

// then that toggle "what are carbs?" definition, so shpowing the deffiniton to user
const toggleDefinition = document.getElementById('toggledefinition');
if (toggleDefinition) {
  toggleDefinition.addEventListener('click', function () {
    const definition = document.getElementById('carbdefinition');
    if (definition) {
      definition.style.display = definition.style.display === 'none' ? 'block' : 'none';
    }
  });
}

// Toggle "types of carbs" definition, do same tbhing 
const toggleTypes = document.getElementById('toggletypes');
if (toggleTypes) {
  toggleTypes.addEventListener('click', function () {
    const typesSection = document.getElementById('carbtypes');
    if (typesSection) {
      typesSection.style.display = typesSection.style.display === 'none' ? 'block' : 'none';
    }
  });
}
// Toggle "spotting hidden carbs"
const toggleHidden = document.getElementById('togglehidden');
if (toggleHidden) {
  toggleHidden.addEventListener('click', function () {
    const hidden = document.getElementById('hiddencarbs');
    hidden.style.display = hidden.style.display === 'none' ? 'block' : 'none';
  });
}

// Toggle "tips for eating out"
const toggleTips = document.getElementById('toggletips');
if (toggleTips) {
  toggleTips.addEventListener('click', function () {
    const tips = document.getElementById('tipssection');
    tips.style.display = tips.style.display === 'none' ? 'block' : 'none';
  });
}

// Toggle "when in doubt, stimate"
const toggleEstimate = document.getElementById('toggleestimate');
if (toggleEstimate) {
  toggleEstimate.addEventListener('click', function () {
    const estimate = document.getElementById('estimatesection');
    estimate.style.display = estimate.style.display === 'none' ? 'block' : 'none';
  });
}

