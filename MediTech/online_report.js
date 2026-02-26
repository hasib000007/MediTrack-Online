
        // PASSWORD TOGGLE
        const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');

        if (togglePassword && password) {
            togglePassword.addEventListener('click', function (e) {
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
                this.classList.toggle('fa-eye');
            });
        }

        //LOGIN FORM LOGIC
        const loginForm = document.getElementById('loginForm');
        const messageBox = document.getElementById('messageBox');

        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault(); 
                const uhid = document.getElementById('uhid').value;
                const pass = document.getElementById('password').value;

                // DEMO CHECK
                if(uhid === "admin" && pass === "1234") {
                    messageBox.style.display = "block";
                    messageBox.className = "success-msg";
                    messageBox.innerHTML = "Login Successful! Please wait...";
                    setTimeout(() => { alert("Welcome to Dashboard!"); }, 1000);
                } else {
                    messageBox.style.display = "block";
                    messageBox.className = "error-msg";
                    messageBox.innerHTML = "Invalid ID or Password!";
                }
            });
        }

        // RESET BUTTON LOGIC
        const resetBtn = document.querySelector('.btn-reset');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if(messageBox) messageBox.style.display = "none";
            });
        }