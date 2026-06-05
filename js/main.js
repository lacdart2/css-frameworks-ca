// aut page - toggle 
function switchTab(tab) {
    const signin = document.getElementById('signin-form')
    const register = document.getElementById('register-form')
    const tabSignin = document.getElementById('tab-signin')
    const tabRegister = document.getElementById('tab-register')
    const footer = document.getElementById('auth-footer')

    if (tab === 'signin') {
        signin.classList.remove('hidden')
        register.classList.add('hidden')
        tabSignin.classList.add('border-b-2', 'text-cyan-500', 'border-cyan-500')
        tabSignin.classList.remove('text-gray-400')
        tabRegister.classList.remove('text-cyan-500', 'border-b-2', 'border-cyan-500')
        tabRegister.classList.add('text-gray-400')
        footer.innerHTML = 'Don\'t have an account? <a href="#" onclick="switchTab(\'register\')" class="text-cyan-500 hover:text-cyan-400 transition-colors">Register</a>'
    } else {
        register.classList.remove('hidden')
        signin.classList.add('hidden')
        tabRegister.classList.add('text-cyan-500', 'border-b-2', 'border-cyan-500')
        tabRegister.classList.remove('text-gray-400')
        tabSignin.classList.remove('text-cyan-500', 'border-b-2', 'border-cyan-500')
        tabSignin.classList.add('text-gray-400')
        footer.innerHTML = 'Already have an account? <a href="#" onclick="switchTab(\'signin\')" class="text-cyan-500 hover:text-cyan-400 transition-colors">Sign In</a>'
    }
}

// user dropdown toggle - logout 
function setupUserDropdown() {
    const trigger = document.getElementById('user-trigger')
    const dropdown = document.getElementById('user-dropdown')
    if (!trigger || !dropdown) return

    trigger.addEventListener('click', function (e) {
        e.stopPropagation()
        dropdown.classList.toggle('hidden')
    })
    document.addEventListener('click', function () {
        dropdown.classList.add('hidden')
    })
}

document.addEventListener('DOMContentLoaded', function () {
    setupUserDropdown()
})