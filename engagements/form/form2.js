document.getElementById('signup-form').addEventListener('submit', function(event) {
                event.preventDefault();
                //aler("Form Submitted");

                const fullname = document.getElementById('personname').value;
                const email = document.getElementById('personemail').value;
                const password = document.getElementById('personpassword').value;
                const age = Number(document.getElementById('age').value);

                if (!fullname || !email){
                    alert("You need a name and emaiil.");
                    return;
                }

                if (!age || age<18){
                    alert("You need to be 18.");
                    return;
                }

                const formData = {
                    name: fullname,
                    email: email,
                    password: password,
                    age: age,
                };
                console.log(formData);
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "submit.json", true) ; 
                xhr. setRequestHeader("Content-Type", "application/json;charset=UTF-8") ;
                xhr. onreadystatechange = function () {
                    if (xhr. readyState === 4 && xhr.status === 200) {
                        //alert('Form submitted successfully.');
                        const message = document.getElementById ('message');
                        const response = JSON.parse(xhr. responseText);
                        message.textContent = response.message;
                        form = document.getElementById('signup-form').reset();
                    } else if (xhr.readyState === 4) {
                        alert ('Error submitting form.');
                    }
                };
                xhr. send(JSON.stringify(formData));
                alert('Success: ${firstName ${lastName}');
            });