document.getElementById('signup-form').addEventListener('submit', function(event) {
                event.preventDefault();
                //aler("Form Submitted");

                const fullname = document.getElementById('personname').value;
                const email = document.getElementById('personemail').value;
                const password = document.getElementById('personpassword').value;
                const age = Number(document.getElementById('age').value);
                const state = document.getElementById('state').value;
                const gender = document.querySelector('input[name="gender"]:checked');
                const remember = document.querySelector('input[name="remember"]').checked;
                const comments = document.getElementById('comments').value;

                if (!fullname || !email){
                    alert("You need a name and emaiil.");
                    return;
                }
                if (!password) {
                    alert("Please enter a password.");
                    return;
                }

                if (!age || age < 18 || age > 120) {
                    alert("Your age must be between 18 and 120.");
                    return;
                }

                const formData = {
                    name: fullname,
                    email: email,
                    password: password,
                    age: age,
                    state: state,
                    gender: gender ? gender.value : "",
                    remember: remember,
                    comments: comments
                };
                console.log(formData);
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "submit.json", true) ; 
                xhr. onreadystatechange = function () {
                    if (xhr. readyState === 4 && xhr.status === 200) {
                        //alert('Form submitted successfully.');
                        const message = document.getElementById ('message');
                        const response = JSON.parse(xhr. responseText);
                        message.textContent = response.message;
                        document.getElementById('signup-form').reset();
                    } else if (xhr.readyState === 4) {
                        alert ('Error submitting form.');
                    }
                };
                xhr.send();
            });