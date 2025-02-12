body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    perspective: 1000px;
}

.container {
    width: 300px;
    text-align: center;
}

.login-box {
    width: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s;
}

.login-content, .signup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backface-visibility: hidden;
}

.login-content {
    transform: rotateY(0deg);
}

.signup-content {
    transform: rotateY(180deg);
}

h1 {
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #1877f2;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #165ec9;
}

.links {
    margin-top: 10px;
}

a {
    color: #1877f2;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
