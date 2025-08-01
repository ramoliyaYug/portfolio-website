// Projects data - easily editable JSON
const projectsData = [
    {
        name: "ChugliHub",
        description: "Anonymous chat app jaha tum bina dare apni chugliyaan share kar sakte ho. Full drama, full fun - bilkul no filter!",
        technologies: ["Kotlin", "XML", "GitHub API", "OKHttp"],
        githubLink: "https://github.com/ramoliyaYug/chugliHub-anonymousChatApp",
        apkLink: "https://ramoliyayug.github.io/appMandi/ChugliHub/chugliHub.html"
    },
    {
        name: "Level Up",
        description: "Turn your daily tasks into a game like solo leveling! Earn points, level up, and stay motivated while completing your to-do list.",
        technologies: ["Kotlin", "Compose", "MVVM", "Firebase", "RealtimeDB","Auth"],
        githubLink: "https://github.com/ramoliyaYug/AndroidModule2/tree/main/sololevelinghabittrackerapp",
        apkLink: "https://ramoliyayug.github.io/appMandi/LevelUp/levelUp.html"
    },
    {
        name: "Quantum Chat",
        description: "Secure messaging app with safe authentication. Fast, reliable, and privacy-focused for all your conversations.",
        technologies: ["Kotlin", "Firebase", "XML", "RealtimeDB", "Auth"],
        githubLink: "https://github.com/ramoliyaYug/AndroidModule2/tree/main/chatAppFirebase",
        apkLink: "https://ramoliyayug.github.io/appMandi/QuantumChat/quantumChat.html"
    },
    {
        name: "Zenity",
        description: "Mindfulness and meditation app to help you relax, focus, and sleep better. Take a break from the digital chaos.",
        technologies: ["Kotlin", "XML", "Firebase", "RealtimeDB", "Auth", "MVVM"],
        githubLink: "https://github.com/ramoliyaYug/zenity",
        apkLink: "https://ramoliyayug.github.io/appMandi/Zenity/zenity.html"
    },
    {
        name: "Project Sync",
        description: "Manage your projects efficiently with this lightweight project management tool. Track tasks, deadlines, and progress.",
        technologies: ["Kotlin", "XML", "Firebase", "RealtimeDB", "Auth", "MVVM"],
        githubLink: "https://github.com/ramoliyaYug/taskboardProAndroidApp",
        apkLink: "https://ramoliyayug.github.io/appMandi/ProjectSync/projectSync.html"
    },
    {
        name: "SkyCast",
        description: "Simple and accurate weather forecasts with beautiful visualizations. Plan your day with confidence!",
        technologies: ["Kotlin", "Compose", "Retrofit", "MVVM", "Clean Architecture", "Dependency Injection"],
        githubLink: "https://github.com/ramoliyaYug/AndroidModule2/tree/main/weatherApp",
        apkLink: "https://ramoliyayug.github.io/appMandi/WeatherApp/weatherApp.html"
    }
];

// Portfolio data - easily editable JSON
const portfolioData = {
    lifeStats: {
        projectsBuilt: 15,
        dsaProblems: 1257,
        yearsLearning: 1
    },
    currentlyLearning: [
        "Compose Multiplatform",
        "Kotlin SpringBoot",
        "System Design",
        "Machine Learning"
    ],
    experience: [
        {
            title: "Open Source Contributor",
            company: "2 Pull Requests Merged In Catrobat Organization",
            duration: "2025-January",
            description: "Contributed to Catrobat's open-source project Catroid. Converted Java code to Kotlin and fixed bugs and used Null Safety Feature of Kotlin."
        }
    ],
    dsaStats: {
        totalProblems: 1257,
        activeDays: 243,
        platforms: [
            {
                name: "LeetCode",
                count: 650,
                badges: [],
                profileLink: "https://leetcode.com/u/ramoliyaYug/"
            },
            {
                name: "Codeforces",
                count: 356,
                badges: [],
                profileLink: "https://codeforces.com/profile/ramoliyayug55"
            },
            {
                name: "CodeChef",
                count: 192,
                badges: [],
                profileLink: "https://www.codechef.com/users/ramoliyayug55"
            },
            {
                name: "GFG",
                count: 52,
                badges: [],
                profileLink: "https://www.geeksforgeeks.org/user/mastermind57369/"
            }
        ],
        topics: [
            "Arrays", "Strings", "Linked Lists", "Trees", "Graphs",
            "Dynamic Programming", "Greedy", "Binary Search", "Sorting",
            "Hashing", "Stack & Queue", "Recursion", "Backtracking"
        ]
    },
    skills: {
        languages: ["Kotlin", "Java", "JavaScript", "HTML", "CSS", "SQL"],
        frameworks: ["Jetpack Compose", "RoomDB","SpringBoot", "ReactJs", "ExpressJs", "NodeJs"],
        tools: ["Android Studio","IntelliJ", "Firebase", "Git", "Github"],
        databases: ["Firebase Firestore", "Firebase RealtimeDB", "RoomDB", "SQLite"],
        concepts: ["MVVM Architecture", "Clean Architecture", "Dependency Injection", "REST API integration", "JSON parsing", "responsive UI","SOLID Principles","Gradle" , "Unit Testing"]
    },
    contact: {
        github: "https://github.com/ramoliyaYug",
        linkedin: "https://www.linkedin.com/in/yug-ramoliya-25a3b0308/",
        instagram: "https://www.instagram.com/ramoliyayug7/",
        medium: "https://medium.com/@ramoliyayug55",
        email: "ramoliyayug55@gmail.com",
        phone: "+91 8140385672"
    }
};

// Application state
let currentTheme = 'dark';
let appRunning = false;
let currentScreen = 'about';
let openTabs = ['aboutme']; // Track open file tabs
let activeTab = 'aboutme'; // Currently active tab

// DOM elements
const runButton = document.getElementById('runButton');
const themeToggle = document.getElementById('themeToggle');
const emulatorHome = document.getElementById('emulatorHome');
const portfolioApp = document.getElementById('portfolioApp');
const portfolioAppIcon = document.getElementById('portfolioAppIcon');
const logcatContent = document.getElementById('logcatContent');
const clearLogcat = document.getElementById('clearLogcat');
const navButtons = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');
const fileItems = document.querySelectorAll('.file');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const toast = document.getElementById('toast');
const editorTabs = document.querySelector('.editor-tabs');
const fullscreenModal = document.getElementById('fullscreenModal');
const backToIde = document.getElementById('backToIde');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    logMessage('I/Portfolio: Application initialized successfully', 'info');
    setupEventListeners();
    loadProjects();
    loadPortfolioData();
    updateCodeEditor(activeTab);
    updateTabsDisplay();
    animateStats();
});

// Animate statistics counters
function animateStats() {
    const stats = [
        { element: document.getElementById('projectsCount'), target: portfolioData.lifeStats.projectsBuilt, suffix: '+' },
        { element: document.getElementById('dsaCount'), target: portfolioData.lifeStats.dsaProblems, suffix: '+' },
        { element: document.getElementById('experienceYears'), target: portfolioData.lifeStats.yearsLearning, suffix: '' }
    ];

    stats.forEach(stat => {
        if (stat.element) {
            animateCounter(stat.element, 1, stat.target, 100, stat.suffix);
        }
    });
}

function animateCounter(element, start, end, duration, suffix = '') {
    const range = end - start;
    const minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);

    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer;

    function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));
        element.textContent = value + suffix;

        if (value === end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

// Event Listeners Setup
function setupEventListeners() {
    // Run button click
    runButton.addEventListener('click', function() {
        if (!appRunning) {
            startApp();
        } else {
            stopApp();
        }
    });

    // Portfolio app icon click
    portfolioAppIcon.addEventListener('click', function() {
        if (!appRunning) {
            startApp();
        } else {
            openFullscreenPhone();
        }
    });

    // Back to IDE button
    backToIde.addEventListener('click', function() {
        closeFullscreenPhone();
    });

    // Close fullscreen on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenModal.classList.contains('show')) {
            closeFullscreenPhone();
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', function() {
        toggleTheme();
    });

    // Navigation buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const screenName = this.dataset.screen;
            switchScreen(screenName);
        });
    });

    // File explorer items
    fileItems.forEach(file => {
        file.addEventListener('click', function() {
            const fileName = this.dataset.file;
            openFileTab(fileName);
        });
    });

    // Tab clicks and close buttons
    editorTabs.addEventListener('click', function(e) {
        if (e.target.closest('.close-tab')) {
            const tab = e.target.closest('.tab');
            const fileName = tab.dataset.file;
            closeFileTab(fileName);
        } else if (e.target.closest('.tab')) {
            const tab = e.target.closest('.tab');
            const fileName = tab.dataset.file;
            switchToTab(fileName);
        }
    });

    // Clear logcat
    clearLogcat.addEventListener('click', function() {
        logcatContent.innerHTML = '';
        logMessage('I/Portfolio: Logcat cleared', 'info');
    });
    function clearLogcatFn() {
        logcatContent.innerHTML = '';
        logMessage('I/Portfolio: Logcat cleared', 'info');
    }

    // Send message button
    sendMessageBtn.addEventListener('click', function() {
        handleContactForm();
    });

    // Social buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.classList[1];
            logMessage(`I/Social: ${type} link clicked`, 'info');
            showToast(`Opening ${type}...`);
        });
    });

    // Project links
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-link')) {
            const linkType = e.target.textContent;
            logMessage(`I/Projects: ${linkType} link clicked`, 'info');
            showToast(`Opening ${linkType}...`);
        }
    });
}

// App Control Functions
function startApp() {
    emulatorHome.style.display = 'none';
    portfolioApp.style.display = 'flex';

    // Update run button
    const runIcon = runButton.querySelector('svg');
    runIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    runButton.innerHTML = runIcon.outerHTML + 'Stop App';
    runButton.style.background = '#f44336';
    appRunning = true;

    logMessage('I/Portfolio: Starting portfolio app...', 'info');
    logMessage('I/App: Portfolio app started', 'info');

    // Auto-open fullscreen after a short delay
    setTimeout(() => {
        openFullscreenPhone();
    }, 1000);

    // Simulate app loading
    setTimeout(() => {
        logMessage('I/AboutMe: Screen loaded successfully', 'info');
    }, 500);
}

function stopApp() {
    closeFullscreenPhone();
    emulatorHome.style.display = 'flex';
    portfolioApp.style.display = 'none';

    // Update run button
    const runIcon = runButton.querySelector('svg');
    runIcon.innerHTML = '<polygon points="5,3 19,12 5,21 5,3"/>';
    runButton.innerHTML = runIcon.outerHTML + 'Run App';
    runButton.style.background = '#4caf50';
    appRunning = false;

    logMessage('I/Portfolio: Stopping portfolio app...', 'info');
    logMessage('I/App: Portfolio app stopped', 'info');
}

// Screen Navigation
function switchScreen(screenName) {
    // Update navigation
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-screen="${screenName}"]`).classList.add('active');

    // Update screens
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(`${screenName}Screen`).classList.add('active');

    currentScreen = screenName;
    logMessage(`I/${screenName}: Screen switched to ${screenName}`, 'info');
}

// File Tab Management
function openFileTab(fileName) {
    // Add to open tabs if not already open
    if (!openTabs.includes(fileName)) {
        openTabs.push(fileName);
    }

    // Switch to this tab
    switchToTab(fileName);
    updateTabsDisplay();

    // Update file selection in sidebar
    fileItems.forEach(file => file.classList.remove('active'));
    document.querySelector(`[data-file="${fileName}"]`).classList.add('active');

    logMessage(`I/Editor: ${fileName}.kt opened`, 'info');
}

function closeFileTab(fileName) {
    const tabIndex = openTabs.indexOf(fileName);
    if (tabIndex === -1) return;

    // Remove from open tabs
    openTabs.splice(tabIndex, 1);

    // If closing active tab, switch to another tab
    if (activeTab === fileName) {
        if (openTabs.length > 0) {
            // Switch to the previous tab or first available
            const newActiveIndex = Math.max(0, tabIndex - 1);
            activeTab = openTabs[newActiveIndex];
            updateCodeEditor(activeTab);
        } else {
            // No tabs left, clear editor
            activeTab = null;
            document.getElementById('codeDisplay').innerHTML = '<span class="comment">// No file open</span>';
        }
    }

    updateTabsDisplay();
    logMessage(`I/Editor: ${fileName}.kt closed`, 'info');
}

function switchToTab(fileName) {
    if (!openTabs.includes(fileName)) return;

    activeTab = fileName;
    updateCodeEditor(fileName);
    updateTabsDisplay();

    // Update file selection in sidebar
    fileItems.forEach(file => file.classList.remove('active'));
    document.querySelector(`[data-file="${fileName}"]`).classList.add('active');

    logMessage(`I/Editor: Switched to ${fileName}.kt`, 'info');
}

function updateTabsDisplay() {
    editorTabs.innerHTML = '';

    openTabs.forEach(fileName => {
        const tab = document.createElement('div');
        tab.className = `tab ${fileName === activeTab ? 'active' : ''}`;
        tab.dataset.file = fileName;

        const fileDisplayNames = {
            aboutme: 'AboutMe.kt',
            projects: 'Projects.kt',
            dsa: 'DSA.kt',
            skills: 'Skills.kt',
            contact: 'Contact.kt'
        };

        tab.innerHTML = `
            <span onclick="switchToTab('${fileName}')">${fileDisplayNames[fileName] || fileName + '.kt'}</span>
            <span class="close-tab" onclick="closeFileTab('${fileName}')">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </span>
        `;

        editorTabs.appendChild(tab);
    });
}

function handleAllTabOperations(fileName) {
    openFileTab(fileName);
    switchToTab(fileName);
    updateTabsDisplay();
}

// Code Editor Updates
function updateCodeEditor(fileName) {
    if (!fileName) return;

    const codeDisplay = document.getElementById('codeDisplay');
    const codeTemplates = {
        aboutme: `<span class="keyword">package</span> <span class="package">com.portfolio.developer</span>

<span class="keyword">import</span> <span class="import">androidx.compose.runtime.*</span>
<span class="keyword">import</span> <span class="import">androidx.compose.foundation.layout.*</span>
<span class="keyword">import</span> <span class="import">androidx.compose.material3.*</span>

<span class="annotation">@Composable</span>
<span class="keyword">fun</span> <span class="function">AboutMeScreen</span>() {
    <span class="keyword">val</span> <span class="variable">developer</span> = <span class="function">remember</span> {
        <span class="class">Developer</span>(
            name = <span class="string">"Android Developer"</span>,
            bio = <span class="string">"Passionate Android Developer..."</span>,
            skills = <span class="function">listOf</span>(<span class="string">"Kotlin"</span>, <span class="string">"Compose"</span>),
            experience = <span class="string">"1200+ DSA problems"</span>
        )
    }
    
    <span class="function">Column</span>(
        modifier = <span class="class">Modifier</span>.<span class="function">fillMaxSize</span>()
    ) {
        <span class="function">ProfileCard</span>(developer = developer)
    }
}`,
        projects: `<span class="keyword">package</span> <span class="package">com.portfolio.developer</span>

<span class="keyword">import</span> <span class="import">androidx.compose.foundation.lazy.LazyColumn</span>
<span class="keyword">import</span> <span class="import">androidx.compose.material3.*</span>

<span class="keyword">data class</span> <span class="class">Project</span>(
    <span class="keyword">val</span> <span class="variable">name</span>: <span class="class">String</span>,
    <span class="keyword">val</span> <span class="variable">description</span>: <span class="class">String</span>,
    <span class="keyword">val</span> <span class="variable">technologies</span>: <span class="class">List</span>&lt;<span class="class">String</span>&gt;,
    <span class="keyword">val</span> <span class="variable">githubLink</span>: <span class="class">String</span>,
    <span class="keyword">val</span> <span class="variable">apkLink</span>: <span class="class">String</span>
)

<span class="annotation">@Composable</span>
<span class="keyword">fun</span> <span class="function">ProjectsScreen</span>() {
    <span class="keyword">val</span> <span class="variable">projects</span> = <span class="function">getProjects</span>()
    
    <span class="function">LazyColumn</span> {
        <span class="function">items</span>(projects) { project ->
            <span class="function">ProjectCard</span>(project = project)
        }
    }
}`,
        dsa: `<span class="keyword">package</span> <span class="package">com.portfolio.developer</span>

<span class="keyword">import</span> <span class="import">androidx.compose.material3.*</span>

<span class="keyword">data class</span> <span class="class">DSAStats</span>(
    <span class="keyword">val</span> <span class="variable">problemsSolved</span>: <span class="class">Int</span> = <span class="number">1200</span>,
    <span class="keyword">val</span> <span class="variable">platforms</span>: <span class="class">Map</span>&lt;<span class="class">String</span>, <span class="class">Int</span>&gt; = <span class="function">mapOf</span>(
        <span class="string">"LeetCode"</span> to <span class="number">650</span>,
        <span class="string">"Codeforces"</span> to <span class="number">200</span>,
        <span class="string">"CodeChef"</span> to <span class="number">300</span>
    )
)

<span class="annotation">@Composable</span>
<span class="keyword">fun</span> <span class="function">DSAScreen</span>() {
    <span class="keyword">val</span> <span class="variable">stats</span> = <span class="function">remember</span> { <span class="class">DSAStats</span>() }
    
    <span class="function">Column</span> {
        <span class="function">StatsCard</span>(stats = stats)
        <span class="function">PlatformProgress</span>(platforms = stats.platforms)
    }
}`,
        skills: `<span class="keyword">package</span> <span class="package">com.portfolio.developer</span>

<span class="keyword">import</span> <span class="import">androidx.compose.foundation.layout.*</span>

<span class="keyword">enum class</span> <span class="class">SkillLevel</span> { <span class="variable">BEGINNER</span>, <span class="variable">INTERMEDIATE</span>, <span class="variable">ADVANCED</span>, <span class="variable">EXPERT</span> }

<span class="keyword">data class</span> <span class="class">Skill</span>(
    <span class="keyword">val</span> <span class="variable">name</span>: <span class="class">String</span>,
    <span class="keyword">val</span> <span class="variable">level</span>: <span class="class">SkillLevel</span>,
    <span class="keyword">val</span> <span class="variable">category</span>: <span class="class">String</span>
)

<span class="annotation">@Composable</span>
<span class="keyword">fun</span> <span class="function">SkillsScreen</span>() {
    <span class="keyword">val</span> <span class="variable">skills</span> = <span class="function">listOf</span>(
        <span class="class">Skill</span>(<span class="string">"Kotlin"</span>, <span class="class">SkillLevel</span>.<span class="variable">EXPERT</span>, <span class="string">"Language"</span>),
        <span class="class">Skill</span>(<span class="string">"Jetpack Compose"</span>, <span class="class">SkillLevel</span>.<span class="variable">ADVANCED</span>, <span class="string">"Framework"</span>),
        <span class="class">Skill</span>(<span class="string">"Firebase"</span>, <span class="class">SkillLevel</span>.<span class="variable">ADVANCED</span>, <span class="string">"Backend"</span>)
    )
    
    <span class="function">SkillsGrid</span>(skills = skills)
}`,
        contact: `<span class="keyword">package</span> <span class="package">com.portfolio.developer</span>

<span class="keyword">import</span> <span class="import">androidx.compose.material3.*</span>
<span class="keyword">import</span> <span class="import">androidx.compose.runtime.*</span>

<span class="keyword">data class</span> <span class="class">ContactMessage</span>(
    <span class="keyword">val</span> <span class="variable">name</span>: <span class="class">String</span>,
    <span class="keyword">val</span> <span class="variable">email</span>: <span class="class">String</span>,
    <span class="keyword">val</span> <span class="variable">message</span>: <span class="class">String</span>
)

<span class="annotation">@Composable</span>
<span class="keyword">fun</span> <span class="function">ContactScreen</span>() {
    <span class="keyword">var</span> <span class="variable">name</span> <span class="keyword">by</span> <span class="function">remember</span> { <span class="function">mutableStateOf</span>(<span class="string">""</span>) }
    <span class="keyword">var</span> <span class="variable">email</span> <span class="keyword">by</span> <span class="function">remember</span> { <span class="function">mutableStateOf</span>(<span class="string">""</span>) }
    <span class="keyword">var</span> <span class="variable">message</span> <span class="keyword">by</span> <span class="function">remember</span> { <span class="function">mutableStateOf</span>(<span class="string">""</span>) }
    
    <span class="function">ContactForm</span>(
        name = name,
        email = email,
        message = message,
        onSend = { <span class="function">sendMessage</span>(<span class="class">ContactMessage</span>(name, email, message)) }
    )
}`
    };

    codeDisplay.innerHTML = codeTemplates[fileName] || codeTemplates.aboutme;
}

// Projects Loading
function loadProjects() {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = '';

    logMessage('D/Projects: Loading project data from JSON', 'debug');

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>
                <a href="${project.apkLink}" class="project-link" target="_blank">APK</a>
            </div>
        `;
        projectsList.appendChild(projectCard);
    });

    logMessage(`I/Projects: ${projectsData.length} projects loaded successfully`, 'info');
}

// Load Portfolio Data
function loadPortfolioData() {
    loadLifeStats();
    loadCurrentlyLearning();
    loadExperience();
    loadProjects();
    loadDSAData();
    loadSkills();
    loadContactLinks();
    logMessage('I/Portfolio: All portfolio data loaded successfully', 'info');
}

function loadLifeStats() {
    // Stats will be animated on page load
    setTimeout(() => {
        animateStats();
    }, 50);
}

function loadCurrentlyLearning() {
    const learningTags = document.getElementById('learningTags');
    learningTags.innerHTML = '';

    portfolioData.currentlyLearning.forEach((skill, index) => {
        const tag = document.createElement('span');
        tag.className = 'learning-tag';
        tag.textContent = skill;
        tag.style.animationDelay = `${index * 0.1}s`;
        learningTags.appendChild(tag);
    });
}

function loadExperience() {
    const experienceContent = document.getElementById('experienceContent');
    experienceContent.innerHTML = '';

    portfolioData.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.innerHTML = `
            <div class="experience-title">${exp.title}</div>
            <div class="experience-company">${exp.company}</div>
            <div class="experience-duration">${exp.duration}</div>
            <div class="experience-description">${exp.description}</div>
        `;
        experienceContent.appendChild(expItem);
    });
}

function loadDSAData() {
    // Load overview stats
    const dsaOverview = document.getElementById('dsaOverview');
    dsaOverview.innerHTML = `
        <div class="dsa-stat-card">
            <h3>${portfolioData.dsaStats.totalProblems}+</h3>
            <p>Problems Solved</p>
        </div>
        <div class="dsa-stat-card">
            <h3>${portfolioData.dsaStats.activeDays}</h3>
            <p>Active Days</p>
        </div>
    `;

    // Load platforms
    const dsaPlatforms = document.getElementById('dsaPlatforms');
    dsaPlatforms.innerHTML = '';

    portfolioData.dsaStats.platforms.forEach(platform => {
        const platformDiv = document.createElement('div');
        platformDiv.className = 'platform';
        platformDiv.innerHTML = `
            <div class="platform-header">
                <span class="platform-name">${platform.name}</span>
                <span class="platform-count">${platform.count} solved</span>
            </div>
            <div class="platform-badges">
                ${platform.badges.map(badge => `<span class="badge-tag">${badge}</span>`).join('')}
            </div>
            <a href="${platform.profileLink}" class="platform-link" target="_blank">View Profile</a>
        `;
        dsaPlatforms.appendChild(platformDiv);
    });

    // Load topics
    const dsaTopics = document.getElementById('dsaTopics');
    dsaTopics.innerHTML = '';

    portfolioData.dsaStats.topics.forEach(topic => {
        const topicTag = document.createElement('span');
        topicTag.className = 'topic-tag';
        topicTag.textContent = topic;
        dsaTopics.appendChild(topicTag);
    });
}

function loadSkills() {
    const skillsContent = document.getElementById('skillsContent');
    skillsContent.innerHTML = `
        <div class="skill-category">
            <h3>• Languages</h3>
            <div class="skill-list">${portfolioData.skills.languages.join(', ')}</div>
        </div>
        <div class="skill-category">
            <h3>• Frameworks/Libraries</h3>
            <div class="skill-list">${portfolioData.skills.frameworks.join(', ')}</div>
        </div>
        <div class="skill-category">
            <h3>• Tools & Platforms</h3>
            <div class="skill-list">${portfolioData.skills.tools.join(', ')}</div>
        </div>
        <div class="skill-category">
            <h3>• Databases</h3>
            <div class="skill-list">${portfolioData.skills.databases.join(', ')}</div>
        </div>
        <div class="skill-category">
            <h3>• Core Concepts</h3>
            <div class="skill-list">${portfolioData.skills.concepts.join(', ')}</div>
        </div>
    `;
}

function loadContactLinks() {
    const contactLinks = document.getElementById('contactLinks');
    contactLinks.innerHTML = `
        <a href="${portfolioData.contact.github}" class="contact-link" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
        </a>
        <a href="${portfolioData.contact.linkedin}" class="contact-link" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
        </a>
        <a href="${portfolioData.contact.instagram}" class="contact-link" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>Instagram</span>
        </a>
        <a href="${portfolioData.contact.medium}" class="contact-link" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span>Medium</span>
        </a>
        <a href="mailto:${portfolioData.contact.email}" class="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Email</span>
        </a>
        <a href="tel:${portfolioData.contact.phone}" class="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>Call</span>
        </a>
    `;
}

// Theme Toggle
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update theme toggle icon
    const themeIcon = themeToggle.querySelector('svg');
    if (currentTheme === 'light') {
        themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    } else {
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    }

    logMessage(`I/Theme: Switched to ${currentTheme} mode`, 'info');
}

// Contact Form Handler
function handleContactForm() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (!name.trim()) {
        logMessage('W/Contact: Empty name field', 'warning');
        showToast('Please enter your name');
        return;
    }

    if (!email.trim()) {
        logMessage('W/Contact: Empty email field', 'warning');
        showToast('Please enter your email');
        return;
    }

    if (!message.trim()) {
        logMessage('W/Contact: Empty message field', 'warning');
        showToast('Please enter a message');
        return;
    }

    // Simulate sending message
    logMessage('I/Contact: Processing message submission', 'info');
    logMessage(`D/Contact: Name: ${name}, Email: ${email}`, 'debug');

    // Clear form
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';

    showToast('Message sent successfully!');
    logMessage('I/Contact: Message sent successfully', 'info');
}

// Fullscreen Phone Functions
function openFullscreenPhone() {
    if (!appRunning) return;

    // Clone the portfolio app content to fullscreen modal with deep cloning
    const portfolioAppClone = portfolioApp.cloneNode(true);

    // Ensure unique IDs for fullscreen elements
    const elementsWithIds = portfolioAppClone.querySelectorAll('[id]');
    elementsWithIds.forEach(element => {
        element.id = 'fs-' + element.id;
    });

    const fullscreenScreen = fullscreenModal.querySelector('.fullscreen-device-screen');
    fullscreenScreen.innerHTML = '';
    fullscreenScreen.appendChild(portfolioAppClone);

    // Show fullscreen modal
    fullscreenModal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Small delay to ensure DOM is ready, then setup navigation
    setTimeout(() => {
        setupFullscreenNavigation();

        // Ensure the current screen is active in fullscreen
        const fullscreenScreens = fullscreenModal.querySelectorAll('.screen');
        const fullscreenNavButtons = fullscreenModal.querySelectorAll('.nav-btn');

        // Clear all active states first
        fullscreenScreens.forEach(screen => screen.classList.remove('active'));
        fullscreenNavButtons.forEach(btn => btn.classList.remove('active'));

        // Set the current screen as active
        const activeScreen = fullscreenModal.querySelector(`#fs-${currentScreen}Screen`);
        const activeNavBtn = fullscreenModal.querySelector(`[data-screen="${currentScreen}"]`);

        if (activeScreen) activeScreen.classList.add('active');
        if (activeNavBtn) activeNavBtn.classList.add('active');

        // Load portfolio data in fullscreen context
        loadFullscreenPortfolioData();
    }, 100);


    logMessage('I/UI: Opened fullscreen phone view', 'info');
}

function closeFullscreenPhone() {
    fullscreenModal.classList.remove('show');
    document.body.style.overflow = '';

    logMessage('I/UI: Closed fullscreen phone view', 'info');
}

function setupFullscreenNavigation() {
    const fullscreenNavButtons = fullscreenModal.querySelectorAll('.nav-btn');
    const fullscreenScreens = fullscreenModal.querySelectorAll('.screen');

    fullscreenNavButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const screenName = this.dataset.screen;

            // Update navigation
            fullscreenNavButtons.forEach(navBtn => navBtn.classList.remove('active'));
            this.classList.add('active');

            // Update screens
            fullscreenScreens.forEach(screen => screen.classList.remove('active'));
            const targetScreen = fullscreenModal.querySelector(`#fs-${screenName}Screen`);
            if (targetScreen) {
                targetScreen.classList.add('active');
            }

            // Update current screen state
            currentScreen = screenName;

            logMessage(`I/Fullscreen: Switched to ${screenName} screen`, 'info');
        });
    });

    // Setup contact form in fullscreen
    const fullscreenSendBtn = fullscreenModal.querySelector('#fs-sendMessageBtn');
    if (fullscreenSendBtn) {
        fullscreenSendBtn.addEventListener('click', function() {
            const name = fullscreenModal.querySelector('#fs-contactName').value;
            const email = fullscreenModal.querySelector('#fs-contactEmail').value;
            const message = fullscreenModal.querySelector('#fs-contactMessage').value;

            if (!name.trim() || !email.trim() || !message.trim()) {
                showToast('Please fill all fields');
                return;
            }

            // Clear form
            fullscreenModal.querySelector('#fs-contactName').value = '';
            fullscreenModal.querySelector('#fs-contactEmail').value = '';
            fullscreenModal.querySelector('#fs-contactMessage').value = '';

            showToast('Message sent successfully!');
            logMessage('I/Contact: Message sent from fullscreen', 'info');
        });
    }

    // Setup social buttons in fullscreen
    const fullscreenSocialBtns = fullscreenModal.querySelectorAll('.social-btn');
    fullscreenSocialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.classList[1];
            logMessage(`I/Social: ${type} link clicked in fullscreen`, 'info');
            showToast(`Opening ${type}...`);
        });
    });

    // Setup project links in fullscreen
    const fullscreenProjectLinks = fullscreenModal.querySelectorAll('.project-link');
    fullscreenProjectLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkType = this.textContent;
            logMessage(`I/Projects: ${linkType} link clicked in fullscreen`, 'info');
            showToast(`Opening ${linkType}...`);
        });
    });

    // Setup contact links in fullscreen
    const fullscreenContactLinks = fullscreenModal.querySelectorAll('.contact-link');
    fullscreenContactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkType = this.textContent.trim();
            logMessage(`I/Contact: ${linkType} link clicked in fullscreen`, 'info');
            showToast(`Opening ${linkType}...`);
        });
    });

    // Setup platform links in fullscreen (DSA section)
    const fullscreenPlatformLinks = fullscreenModal.querySelectorAll('.platform-link');
    fullscreenPlatformLinks.forEach(link => {
        link.addEventListener('click', function() {
            logMessage('I/DSA: Platform profile link clicked in fullscreen', 'info');
            showToast('Opening profile...');
        });
    });

    // Ensure stats animation works in fullscreen
    const fullscreenStatsElements = [
        { element: fullscreenModal.querySelector('#fs-projectsCount'), target: portfolioData.lifeStats.projectsBuilt, suffix: '+' },
        { element: fullscreenModal.querySelector('#fs-dsaCount'), target: portfolioData.lifeStats.dsaProblems, suffix: '+' },
        { element: fullscreenModal.querySelector('#fs-experienceYears'), target: portfolioData.lifeStats.yearsLearning, suffix: '' }
    ];

    fullscreenStatsElements.forEach(stat => {
        if (stat.element) {
            // Reset counter and animate
            stat.element.textContent = '0' + stat.suffix;
            setTimeout(() => {
                animateCounter(stat.element, 0, stat.target, 2000, stat.suffix);
            }, 300);
        }
    });
}

// Logging Functions
function logMessage(message, type = 'info') {
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;
    logEntry.textContent = `${getCurrentTime()} ${message}`;
    logcatContent.appendChild(logEntry);
    logcatContent.scrollTop = logcatContent.scrollHeight;
}

// Load portfolio data specifically for fullscreen context
function loadFullscreenPortfolioData() {
    // Load projects in fullscreen
    const fullscreenProjectsList = fullscreenModal.querySelector('#fs-projectsList');
    if (fullscreenProjectsList) {
        fullscreenProjectsList.innerHTML = '';

        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>
                    <a href="${project.apkLink}" class="project-link" target="_blank">APK</a>
                </div>
            `;
            fullscreenProjectsList.appendChild(projectCard);
        });
    }

    // Load currently learning tags in fullscreen
    const fullscreenLearningTags = fullscreenModal.querySelector('#fs-learningTags');
    if (fullscreenLearningTags) {
        fullscreenLearningTags.innerHTML = '';
        portfolioData.currentlyLearning.forEach((skill, index) => {
            const tag = document.createElement('span');
            tag.className = 'learning-tag';
            tag.textContent = skill;
            tag.style.animationDelay = `${index * 0.1}s`;
            fullscreenLearningTags.appendChild(tag);
        });
    }

    // Load experience in fullscreen
    const fullscreenExperienceContent = fullscreenModal.querySelector('#fs-experienceContent');
    if (fullscreenExperienceContent) {
        fullscreenExperienceContent.innerHTML = '';
        portfolioData.experience.forEach(exp => {
            const expItem = document.createElement('div');
            expItem.className = 'experience-item';
            expItem.innerHTML = `
                <div class="experience-title">${exp.title}</div>
                <div class="experience-company">${exp.company}</div>
                <div class="experience-duration">${exp.duration}</div>
                <div class="experience-description">${exp.description}</div>
            `;
            fullscreenExperienceContent.appendChild(expItem);
        });
    }

    // Load DSA data in fullscreen
    const fullscreenDsaOverview = fullscreenModal.querySelector('#fs-dsaOverview');
    if (fullscreenDsaOverview) {
        fullscreenDsaOverview.innerHTML = `
            <div class="dsa-stat-card">
                <h3>${portfolioData.dsaStats.totalProblems}+</h3>
                <p>Problems Solved</p>
            </div>
            <div class="dsa-stat-card">
                <h3>${portfolioData.dsaStats.activeDays}</h3>
                <p>Active Days</p>
            </div>
        `;
    }

    const fullscreenDsaPlatforms = fullscreenModal.querySelector('#fs-dsaPlatforms');
    if (fullscreenDsaPlatforms) {
        fullscreenDsaPlatforms.innerHTML = '';
        portfolioData.dsaStats.platforms.forEach(platform => {
            const platformDiv = document.createElement('div');
            platformDiv.className = 'platform';
            platformDiv.innerHTML = `
                <div class="platform-header">
                    <span class="platform-name">${platform.name}</span>
                    <span class="platform-count">${platform.count} solved</span>
                </div>
                <div class="platform-badges">
                    ${platform.badges.map(badge => `<span class="badge-tag">${badge}</span>`).join('')}
                </div>
                <a href="${platform.profileLink}" class="platform-link" target="_blank">View Profile</a>
            `;
            fullscreenDsaPlatforms.appendChild(platformDiv);
        });
    }

    const fullscreenDsaTopics = fullscreenModal.querySelector('#fs-dsaTopics');
    if (fullscreenDsaTopics) {
        fullscreenDsaTopics.innerHTML = '';
        portfolioData.dsaStats.topics.forEach(topic => {
            const topicTag = document.createElement('span');
            topicTag.className = 'topic-tag';
            topicTag.textContent = topic;
            fullscreenDsaTopics.appendChild(topicTag);
        });
    }

    // Load skills in fullscreen
    const fullscreenSkillsContent = fullscreenModal.querySelector('#fs-skillsContent');
    if (fullscreenSkillsContent) {
        fullscreenSkillsContent.innerHTML = `
            <div class="skill-category">
                <h3>• Languages</h3>
                <div class="skill-list">${portfolioData.skills.languages.join(', ')}</div>
            </div>
            <div class="skill-category">
                <h3>• Frameworks/Libraries</h3>
                <div class="skill-list">${portfolioData.skills.frameworks.join(', ')}</div>
            </div>
            <div class="skill-category">
                <h3>• Tools & Platforms</h3>
                <div class="skill-list">${portfolioData.skills.tools.join(', ')}</div>
            </div>
            <div class="skill-category">
                <h3>• Databases</h3>
                <div class="skill-list">${portfolioData.skills.databases.join(', ')}</div>
            </div>
            <div class="skill-category">
                <h3>• Core Concepts</h3>
                <div class="skill-list">${portfolioData.skills.concepts.join(', ')}</div>
            </div>
        `;
    }

    // Load contact links in fullscreen
    const fullscreenContactLinks = fullscreenModal.querySelector('#fs-contactLinks');
    if (fullscreenContactLinks) {
        fullscreenContactLinks.innerHTML = `
            <a href="${portfolioData.contact.github}" class="contact-link" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <span>GitHub</span>
            </a>
            <a href="${portfolioData.contact.linkedin}" class="contact-link" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn</span>
            </a>
            <a href="${portfolioData.contact.instagram}" class="contact-link" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>Instagram</span>
            </a>
            <a href="${portfolioData.contact.medium}" class="contact-link" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <span>Medium</span>
            </a>
            <a href="mailto:${portfolioData.contact.email}" class="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Email</span>
            </a>
            <a href="tel:${portfolioData.contact.phone}" class="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call</span>
            </a>
        `;
    }

    logMessage('I/Fullscreen: Portfolio data loaded successfully', 'info');
}

function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().slice(0, 8);
}

// Toast Notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Additional interactive features
document.addEventListener('click', function(e) {
    // Log clicks for debugging
    if (e.target.classList.contains('nav-btn')) {
        const screen = e.target.dataset.screen;
        logMessage(`D/Navigation: Switching to ${screen} screen`, 'debug');
    }

    if (e.target.classList.contains('file')) {
        const file = e.target.dataset.file;
        logMessage(`D/Editor: File ${file}.kt selected`, 'debug');
    }
});

// Simulate periodic system messages
setInterval(() => {
    const messages = [
        'D/System: Memory usage: 45% (Normal)',
        'D/Network: Connection stable',
        'I/Background: Auto-save completed',
        'D/Performance: UI thread responsive'
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    logMessage(randomMessage, 'debug');
}, 30000);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + R to run/stop app
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        runButton.click();
        logMessage('D/Keyboard: Run shortcut triggered', 'debug');
    }

    // Ctrl/Cmd + T to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
        logMessage('D/Keyboard: Theme toggle shortcut triggered', 'debug');
    }
});

// Simulate build progress when running
function simulateBuildProgress() {
    const buildSteps = [
        'D/Build: Cleaning project...',
        'D/Build: Compiling Kotlin sources...',
        'D/Build: Processing resources...',
        'D/Build: Generating APK...',
        'I/Build: Build successful!'
    ];

    buildSteps.forEach((step, index) => {
        setTimeout(() => {
            logMessage(step, index === buildSteps.length - 1 ? 'info' : 'debug');
        }, index * 500);
    });
}

// Run build simulation when emulator is shown
const originalStartApp = startApp;
startApp = function() {
    simulateBuildProgress();
    setTimeout(originalStartApp, 2500);
};

// Add some startup messages
setTimeout(() => {
    logMessage('D/System: Project indexing completed', 'debug');
    logMessage('I/IDE: Ready for development', 'info');
}, 2000);