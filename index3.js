 // 1. Grab the username from your login page's localStorage
        const userName = localStorage.getItem('chatUser');

        // 2. Connect to your server (Use your PUBLIC IP if testing on phone)
        const socket = new WebSocket('ws://192.168.0.110:8080'); 

        // 3. Listen for messages from the server
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            addMessageToScreen(data);
        };

        function sendMessage() {
            const input = document.getElementById('text-input');
            if (input.value.trim() === "") return;

            const messageObj = {
                user: userName,
                text: input.value
            };

            // 4. Send the message as a JSON string
            socket.send(JSON.stringify(messageObject));
            input.value = '';
        }

        function addMessageToScreen(data) {
            const container = document.getElementById('messages');
            const div = document.createElement('div');
            
            // Add a special class if the message is from YOU
            div.className = data.user === userName ? 'msg my-msg' : 'msg';
            div.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;
            
            container.appendChild(div);
            container.scrollTop = container.scrollHeight; // Auto-scroll to bottom
        }

        // Allow "Enter" key to send
        document.getElementById('text-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });