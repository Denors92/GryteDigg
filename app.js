// App logic
let currentTypeFilter = 'alle';
let currentCuisineFilter = 'alle';
let currentTimeFilter = 'alle';

// DOM elements
const recipesGrid = document.getElementById('recipes-grid');
const typeFilterButtons = document.querySelectorAll('.type-filter');
const cuisineFilterButtons = document.querySelectorAll('.cuisine-filter');
const timeFilterButtons = document.querySelectorAll('.time-filter');
const modal = document.getElementById('recipe-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Initialize app
function init() {
    renderRecipes(recipes);
    setupFilters();
    setupModal();
}

// Render recipes to grid
function renderRecipes(recipesToShow) {
    recipesGrid.innerHTML = '';

    if (recipesToShow.length === 0) {
        recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d;">Ingen oppskrifter funnet</p>';
        return;
    }

    recipesToShow.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipesGrid.appendChild(card);
    });
}

// Create recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => openRecipeModal(recipe);

    card.innerHTML = `
        <div class="recipe-image">
            ${recipe.emoji}
        </div>
        <div class="recipe-content">
            <span class="recipe-type ${recipe.type}">${getTypeName(recipe.type)}</span>
            <h3>${recipe.name}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time}</span>
                <span>👥 ${recipe.servings}</span>
                ${recipe.protein ? `<span>💪 ${recipe.protein}</span>` : ''}
                ${recipe.calories ? `<span>🔥 ${recipe.calories}</span>` : ''}
            </div>
        </div>
    `;

    return card;
}

// Get display name for recipe type
function getTypeName(type) {
    const names = {
        'kjøtt': 'Kjøtt',
        'kylling': 'Kylling',
        'fisk': 'Fisk',
        'vegetar': 'Vegetar'
    };
    return names[type] || type;
}

// Setup filter buttons
function setupFilters() {
    // Time filter
    timeFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const time = btn.dataset.time;

            // Update active button
            timeFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and render
            currentTimeFilter = time;
            applyFilters();
        });
    });

    // Type filter
    typeFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;

            // Update active button
            typeFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and render
            currentTypeFilter = type;
            applyFilters();
        });
    });

    // Cuisine filter
    cuisineFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cuisine = btn.dataset.cuisine;

            // Update active button
            cuisineFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and render
            currentCuisineFilter = cuisine;
            applyFilters();
        });
    });
}

// Apply all filters
function applyFilters() {
    let filtered = recipes;

    // Apply time filter
    if (currentTimeFilter !== 'alle') {
        filtered = filtered.filter(r => r.cookTime === currentTimeFilter);
    }

    // Apply type filter
    if (currentTypeFilter !== 'alle') {
        filtered = filtered.filter(r => r.type === currentTypeFilter);
    }

    // Apply cuisine filter
    if (currentCuisineFilter !== 'alle') {
        filtered = filtered.filter(r => r.cuisine === currentCuisineFilter);
    }

    renderRecipes(filtered);
}

// Open recipe modal
function openRecipeModal(recipe) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="recipe-type ${recipe.type}">${getTypeName(recipe.type)}</span>
            <h2>${recipe.emoji} ${recipe.name}</h2>
            <p style="color: #7f8c8d;">${recipe.description}</p>
            <div class="recipe-meta" style="margin-top: 1rem; font-size: 1rem;">
                <span>⏱️ ${recipe.time}</span>
                <span>👥 ${recipe.servings}</span>
                ${recipe.protein ? `<span>💪 ${recipe.protein}</span>` : ''}
                ${recipe.calories ? `<span>🔥 ${recipe.calories}</span>` : ''}
            </div>
        </div>

        <div class="modal-section">
            <h3>Ingredienser</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Fremgangsmåte</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Setup modal
function setupModal() {
    // Close button
    closeBtn.onclick = closeModal;

    // Click outside modal to close
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
