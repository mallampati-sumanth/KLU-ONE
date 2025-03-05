document.getElementById('signUp').addEventListener('click', () => {
    document.getElementById('container').classList.add('right-panel-active')
})

document.getElementById('signIn').addEventListener('click', () => {
    document.getElementById('container').classList.remove('right-panel-active')
})

// Signup Function
document.querySelector('.sign-up-container form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.querySelector('.sign-up-container input[name="name"]').value
    const email = document.querySelector('.sign-up-container input[name="email"]').value
    const password = document.querySelector('.sign-up-container input[name="password"]').value

    try {
        const res = await fetch('http://127.0.0.1:7100/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })
        const data = await res.json()
        alert(data.message)
        if (res.ok) {
            document.getElementById('container').classList.remove('right-panel-active')
        }
    } catch (err) {
        console.error(err)
        alert("Signup failed!")
    }
})

// Login Function
document.querySelector('.sign-in-container form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.querySelector('.sign-in-container input[name="email"]').value
    const password = document.querySelector('.sign-in-container input[name="password"]').value

    try {
        const res = await fetch('http://127.0.0.1:7100/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (res.ok) {
            alert('Login successful!')
            window.location.href = 'index.html'
        } else {
            alert('Invalid credentials')
        }
    } catch (err) {
        console.error(err)
        alert("Login failed!")
    }
})
