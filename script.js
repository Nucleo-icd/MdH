async function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // busca usuários válidos de um arquivo JSON
  const res = await fetch("users.json");
  const data = await res.json();

  const validUser = data.users.find(u => u.username === user && u.password === pass);

  if (validUser) {
    document.getElementById('loadingScreen').style.display = 'flex';
    document.getElementById('loginContainer').style.display = 'none';
    setTimeout(() => {
      document.getElementById('loadingScreen').style.display = 'none';
      document.getElementById('menuContainer').style.display = 'block';
      document.getElementById('logoutBtn').style.display = 'flex';
    }, 2000);
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function logout() {
  document.getElementById('menuContainer').style.display = 'none';
  document.getElementById('logoutBtn').style.display = 'none';
  document.getElementById('loginContainer').style.display = 'block';
}

document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("password").addEventListener("keypress", e => {
  if (e.key === "Enter") login();
});
