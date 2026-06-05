// auth page - toggle
function switchTab(tab) {
    const signin = document.getElementById('signin-form')
    const register = document.getElementById('register-form')
    const tabSignin = document.getElementById('tab-signin')
    const tabRegister = document.getElementById('tab-register')
    const footer = document.getElementById('auth-footer')
    const subtitle = document.getElementById('auth-subtitle')

    if (tab === 'signin') {
        signin.classList.remove('hidden')
        register.classList.add('hidden')
        tabSignin.classList.add('border-b-2', 'text-cyan-500', 'border-cyan-500')
        tabSignin.classList.remove('text-gray-400')
        tabRegister.classList.remove('text-cyan-500', 'border-b-2', 'border-cyan-500')
        tabRegister.classList.add('text-gray-400')
        if (subtitle) subtitle.textContent = 'Welcome back. Good to see you again.'
        if (footer) footer.innerHTML = 'Don\'t have an account? <a href="#" onclick="switchTab(\'register\')" class="text-cyan-500 hover:text-cyan-400 transition-colors">Register</a>'
    } else {
        register.classList.remove('hidden')
        signin.classList.add('hidden')
        tabRegister.classList.add('text-cyan-500', 'border-b-2', 'border-cyan-500')
        tabRegister.classList.remove('text-gray-400')
        tabSignin.classList.remove('text-cyan-500', 'border-b-2', 'border-cyan-500')
        tabSignin.classList.add('text-gray-400')
        if (subtitle) subtitle.textContent = 'Join Pulse. Share what matters to you.'
        if (footer) footer.innerHTML = 'Already have an account? <a href="#" onclick="switchTab(\'signin\')" class="text-cyan-500 hover:text-cyan-400 transition-colors">Sign In</a>'
    }
}

// register success
function setupRegisterSuccess() {
    const registerForm = document.getElementById('register-form')
    if (!registerForm) return

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault()
        const footer = document.getElementById('auth-footer')
        const subtitle = document.getElementById('auth-subtitle')
        subtitle.textContent = 'Account created! You can now sign in.'
        subtitle.classList.add('text-cyan-500')
        footer.innerHTML = 'Ready to go? <a href="#" onclick="switchTab(\'signin\')" class="text-cyan-500 hover:text-cyan-400 transition-colors">Sign in now</a>'
        switchTab('signin')
    })
}

// user dropdown toggle
function setupUserDropdown() {
    const trigger = document.getElementById('user-trigger')
    const dropdown = document.getElementById('user-dropdown')
    if (!trigger || !dropdown) return

    trigger.addEventListener('click', function (e) {
        e.stopPropagation()
        e.preventDefault()
        dropdown.classList.toggle('hidden')
    })

    document.addEventListener('click', function (e) {
        if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add('hidden')
        }
    })
}

// mobile menu toggle
function setupMobileMenu() {
    const toggle = document.getElementById('menu-toggle')
    const menu = document.getElementById('mobile-menu')
    if (!toggle || !menu) return

    toggle.addEventListener('click', function (e) {
        e.stopPropagation()
        const isHidden = menu.classList.contains('hidden')
        if (isHidden) {
            menu.classList.remove('hidden')
            menu.classList.add('flex')
        } else {
            menu.classList.add('hidden')
            menu.classList.remove('flex')
        }
    })
}

// like toggle
function likePost(btn) {
    const svg = btn.querySelector('svg path')
    const isLiked = btn.classList.contains('text-cyan-500')
    if (isLiked) {
        btn.classList.remove('text-cyan-500')
        svg.setAttribute('fill', 'none')
    } else {
        btn.classList.add('text-cyan-500')
        svg.setAttribute('fill', 'currentColor')
    }
}

// follow button toggle
function setupFollowButtons() {
    document.querySelectorAll('.follow-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const isFollowing = this.textContent.trim() === 'Following'
            this.textContent = isFollowing ? 'Follow' : 'Following'
            this.classList.toggle('bg-cyan-500')
            this.classList.toggle('text-background')
            this.classList.toggle('text-cyan-500')
            this.classList.toggle('border-cyan-500')
        })
    })
}

// single init
document.addEventListener('DOMContentLoaded', function () {
    setupUserDropdown()
    setupFollowButtons()
    setupRegisterSuccess()
    setupMobileMenu()
})