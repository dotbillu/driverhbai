// script.js: Handles dynamic rendering and interactivity

// Initialize everything once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    renderContent();
    setupSearchFilter();
    setupSidebarToggle();
    setupBackToTop();
    setupStartJourney();
    updateOverallProgress();
    initializeProgressChart();
    // Initialize default state after a small delay to ensure everything is rendered
    setTimeout(initializeDefaultState, 100);
});


// Initialize Progress Chart
let progressChart = null;

function initializeProgressChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    
    const { completed, total } = calculateOverallProgress();
    const remaining = total - completed;
    
    progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [completed, remaining],
                backgroundColor: [
                    '#00b887', // Green for completed
                    '#374151'  // Gray for remaining
                ],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    updateChartStats(completed, remaining);
}

function updateProgressChart() {
    if (!progressChart) return;
    
    const { completed, total } = calculateOverallProgress();
    const remaining = total - completed;
    
    progressChart.data.datasets[0].data = [completed, remaining];
    progressChart.update();
    
    updateChartStats(completed, remaining);
}

function updateChartStats(completed, remaining) {
    const total = completed + remaining;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Update center text
    const centerSolved = document.getElementById('centerSolved');
    const centerTotal = document.getElementById('centerTotal');
    
    if (centerSolved) centerSolved.textContent = completed;
    if (centerTotal) centerTotal.textContent = total;
    
    // Update detailed stats
    const detailCompleted = document.getElementById('detailCompleted');
    const detailRemaining = document.getElementById('detailRemaining');
    const detailPercentage = document.getElementById('detailPercentage');
    const detailTotal = document.getElementById('detailTotal');
    
    if (detailCompleted) detailCompleted.textContent = completed;
    if (detailRemaining) detailRemaining.textContent = remaining;
    if (detailPercentage) detailPercentage.textContent = `${percentage}%`;
    if (detailTotal) detailTotal.textContent = total;
}

function calculateOverallProgress() {
    let totalQuestions = 0;
    let completedQuestions = 0;
    
    steps.forEach((step, stepIndex) => {
        totalQuestions += step.questions.length;
        step.questions.forEach((question, questionIndex) => {
            const checkboxId = `checkbox-${stepIndex}-${questionIndex}`;
            const isChecked = localStorage.getItem(checkboxId) === 'true';
            if (isChecked) {
                completedQuestions++;
            }
        });
    });
    
    return { completed: completedQuestions, total: totalQuestions };
}

// Function to mark all questions in a step as done
function markAllStepQuestions(stepIndex) {
    const step = steps[stepIndex];
    if (!step) return;
    
    // Mark all questions as completed in localStorage
    step.questions.forEach((question, questionIndex) => {
        const checkboxId = `checkbox-${stepIndex}-${questionIndex}`;
        localStorage.setItem(checkboxId, 'true');
        
        // Update the actual checkbox if it exists
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) {
            checkbox.checked = true;
            // Update the visual display
            const questionElement = checkbox.closest('.question');
            if (questionElement) {
                updateQuestionDisplay(checkbox, questionElement);
            }
        }
    });
    
    // Update progress displays
    updateProgress(stepIndex);
    updateOverallProgress();
    
    // Show confirmation
    alert(`✅ All ${step.questions.length} questions in "${step.title}" have been marked as completed!`);
}

// Setup start journey button
function setupStartJourney() {
    const startJourney = document.getElementById('startJourney');
    
    // Handle start journey button
    if (startJourney) {
        startJourney.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.content-container').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
}

function initializeDefaultState() {
    // Hide sidebar by default
    const sidebar = document.getElementById('sidebar');
    const showBtn = document.getElementById('sidebarShow');
    const mainContent = document.getElementById('mainContent');
    const hero = document.querySelector('.hero');
    
    // Sidebar starts hidden, but keep show button always visible
    sidebar.classList.remove('visible');
    // Don't hide the show button - keep it always visible
    mainContent.classList.remove('sidebar-open');
    if (hero) hero.classList.remove('sidebar-open');
    
    // Collapse all step accordions by default
    document.querySelectorAll('.step-accordion').forEach(step => {
        step.classList.remove('expanded');
    });
    
    // Collapse all category accordions by default
    document.querySelectorAll('.category-accordion').forEach(category => {
        category.classList.remove('expanded');
    });
    
    // Collapse all sidebar nav items by default
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('expanded');
    });
}

// IntersectionObserver for scroll-spy
const observerOptions = { root: null, rootMargin: '-20% 0px -20% 0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            // Remove active class from all nav items
            document.querySelectorAll('.nav-link, .submenu-item').forEach(item => item.classList.remove('active'));
            // Add active class to corresponding nav item
            const activeLink = document.querySelector(`[data-target="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                // Also expand parent if it's a submenu item
                const parentStep = activeLink.closest('.nav-item');
                if (parentStep) {
                    parentStep.classList.add('expanded');
                }
            }
        }
    });
}, observerOptions);

function renderSidebar() {
    const navLinks = document.getElementById('navLinks');
    navLinks.innerHTML = '';
    
    steps.forEach((step, stepIndex) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        
        // Main step link
        const stepLink = document.createElement('a');
        stepLink.className = 'nav-link step-link';
        stepLink.textContent = step.title;
        stepLink.href = '#';
        stepLink.addEventListener('click', (e) => {
            e.preventDefault();
            navItem.classList.toggle('expanded');
        });
        
        navItem.appendChild(stepLink);
        
        // Create submenu for categories
        const stepCategories = categories[stepIndex] || [];
        if (stepCategories.length > 0) {
            const submenu = document.createElement('div');
            submenu.className = 'submenu';
            
            stepCategories.forEach(categoryName => {
                const submenuItem = document.createElement('a');
                submenuItem.className = 'submenu-item';
                submenuItem.textContent = categoryName;
                submenuItem.href = '#';
                submenuItem.dataset.target = `category-${stepIndex}-${categoryName.replace(/\\s+/g, '-').toLowerCase()}`;
                submenuItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById(submenuItem.dataset.target);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
                
                submenu.appendChild(submenuItem);
            });
            
            navItem.appendChild(submenu);
        } else {
            // If no categories, link directly to the step
            stepLink.dataset.target = `step-${stepIndex + 2}`;
            stepLink.addEventListener('click', (e) => {
                e.preventDefault();
                const targetElement = document.getElementById(stepLink.dataset.target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
        
        navLinks.appendChild(navItem);
    });
}

function renderContent() {
    const container = document.getElementById('steps-container');
    container.innerHTML = '';
    
    steps.forEach((step, stepIndex) => {
        const stepElement = document.createElement('section');
        stepElement.className = 'step-accordion';
        stepElement.id = `step-${stepIndex + 2}`;
        
        // Step header (clickable to expand/collapse)
        const stepHeader = document.createElement('div');
        stepHeader.className = 'step-header clickable';
        stepHeader.addEventListener('click', () => {
            stepElement.classList.toggle('expanded');
        });
        
        const stepTitle = document.createElement('h2');
        stepTitle.className = 'step-title';
        stepTitle.textContent = step.title;
        
        const stepProgress = document.createElement('div');
        stepProgress.className = 'step-progress';
        stepProgress.id = `progress-${stepIndex}`;
        
        // Add "Mark All Done" button
        const markAllBtn = document.createElement('button');
        markAllBtn.className = 'mark-all-btn';
        markAllBtn.textContent = 'Mark All Done ✓';
        markAllBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            markAllStepQuestions(stepIndex);
        });
        
        const expandIcon = document.createElement('span');
        expandIcon.className = 'expand-icon';
        expandIcon.textContent = '▶';
        
        stepHeader.appendChild(expandIcon);
        stepHeader.appendChild(stepTitle);
        stepHeader.appendChild(markAllBtn);
        stepHeader.appendChild(stepProgress);
        stepElement.appendChild(stepHeader);
        
        // Step content (collapsible)
        const stepContent = document.createElement('div');
        stepContent.className = 'step-content';
        
        // Get categories for this step
        const stepCategories = categories[stepIndex] || [];
        
        if (stepCategories.length > 0) {
            stepCategories.forEach(categoryName => {
                const categoryElement = document.createElement('div');
                categoryElement.className = 'category-accordion';
                categoryElement.id = `category-${stepIndex}-${categoryName.replace(/\\s+/g, '-').toLowerCase()}`;
                
                // Category header (clickable to expand/collapse)
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header clickable';
                categoryHeader.addEventListener('click', () => {
                    categoryElement.classList.toggle('expanded');
                });
                
                const categoryTitle = document.createElement('h3');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = categoryName;
                
                const categoryExpandIcon = document.createElement('span');
                categoryExpandIcon.className = 'expand-icon';
                categoryExpandIcon.textContent = '▶';
                
                categoryHeader.appendChild(categoryExpandIcon);
                categoryHeader.appendChild(categoryTitle);
                categoryElement.appendChild(categoryHeader);
                
                // Category content (collapsible questions)
                const categoryContent = document.createElement('div');
                categoryContent.className = 'category-content';
                
                // Get range for this category
                const range = categoryRanges[stepIndex][categoryName];
                const startIndex = range[0];
                const endIndex = range[1];
                
                // Add questions for this category
                for (let i = startIndex; i <= endIndex; i++) {
                    const question = step.questions[i];
                    if (!question) continue;
                    
                    const questionElement = createQuestionElement(stepIndex, i, question);
                    categoryContent.appendChild(questionElement);
                }
                
                categoryElement.appendChild(categoryContent);
                stepContent.appendChild(categoryElement);
                observer.observe(categoryElement);
            });
        } else {
            // No categories, just add all questions directly
            const questionsContainer = document.createElement('div');
            questionsContainer.className = 'questions-container';
            
            step.questions.forEach((question, questionIndex) => {
                const questionElement = createQuestionElement(stepIndex, questionIndex, question);
                questionsContainer.appendChild(questionElement);
            });
            
            stepContent.appendChild(questionsContainer);
            observer.observe(stepElement);
        }
        
        stepElement.appendChild(stepContent);
        container.appendChild(stepElement);
        updateProgress(stepIndex);
    });
}

function createQuestionElement(stepIndex, questionIndex, question) {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${stepIndex}-${questionIndex}`;
    
    // Check localStorage for saved state
    const isChecked = localStorage.getItem(`checkbox-${stepIndex}-${questionIndex}`) === 'true';
    checkbox.checked = isChecked;
    
    checkbox.addEventListener('change', function() {
        localStorage.setItem(`checkbox-${stepIndex}-${questionIndex}`, this.checked);
        updateQuestionDisplay(this, questionElement);
        updateProgress(stepIndex);
        updateOverallProgress();
    });

    const label = document.createElement('label');
    label.htmlFor = `checkbox-${stepIndex}-${questionIndex}`;
    
    const link = document.createElement('a');
    link.href = question.url;
    link.target = '_blank';
    link.textContent = question.text;
    
    label.appendChild(link);
    questionElement.appendChild(checkbox);
    questionElement.appendChild(label);
    
    // Apply styling for completed items on load
    if (isChecked) {
        link.classList.add('completed');
    }
    
    return questionElement;
}

function updateQuestionDisplay(checkbox, questionElement) {
    const link = questionElement.querySelector('a');
    if (checkbox.checked) {
        link.classList.add('completed');
    } else {
        link.classList.remove('completed');
    }
}

function updateProgress(stepIndex) {
    const step = steps[stepIndex];
    const progressElement = document.getElementById(`progress-${stepIndex}`);
    
    let completedCount = 0;
    const totalCount = step.questions.length;
    
    step.questions.forEach((question, questionIndex) => {
        const checkboxId = `checkbox-${stepIndex}-${questionIndex}`;
        const checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.checked) {
            completedCount++;
        }
    });
    
    progressElement.textContent = `${completedCount}/${totalCount}`;
    
    const completionPercentage = (completedCount / totalCount) * 100;
    if (completionPercentage === 100) {
        progressElement.className = 'step-progress completed';
    } else if (completionPercentage > 50) {
        progressElement.className = 'step-progress good-progress';
    } else if (completionPercentage > 0) {
        progressElement.className = 'step-progress started';
    } else {
        progressElement.className = 'step-progress';
    }
}

function updateOverallProgress() {
    // Update the progress chart
    updateProgressChart();
}

function setupSearchFilter() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', () => {
        const term = input.value.toLowerCase();
        document.querySelectorAll('.nav-item').forEach(item => {
            const stepText = item.querySelector('.step-link').textContent.toLowerCase();
            const submenuItems = item.querySelectorAll('.submenu-item');
            let hasMatch = stepText.includes(term);
            
            submenuItems.forEach(submenuItem => {
                const submenuText = submenuItem.textContent.toLowerCase();
                if (submenuText.includes(term)) {
                    hasMatch = true;
                    submenuItem.style.display = 'block';
                } else {
                    submenuItem.style.display = term ? 'none' : 'block';
                }
            });
            
            item.style.display = hasMatch ? 'block' : 'none';
        });
    });
}

function setupSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const hideBtn = document.getElementById('sidebarHide');
    const showBtn = document.getElementById('sidebarShow');
    const mainContent = document.getElementById('mainContent');
    const hero = document.querySelector('.hero');
    
    hideBtn.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        // Keep the show button always visible - don't add hidden class
        mainContent.classList.remove('sidebar-open');
        if (hero) hero.classList.remove('sidebar-open');
    });
    
    showBtn.addEventListener('click', () => {
        sidebar.classList.add('visible');
        // Don't hide the show button - keep it always visible
        mainContent.classList.add('sidebar-open');
        if (hero) hero.classList.add('sidebar-open');
    });
}

function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}