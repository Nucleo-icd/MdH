:root {
  --primary: #1D5636;   /* verde escuro */
  --secondary: #29C1DC; /* azul claro */
  --bg-light: #f8f9fa;
  --text-dark: #333;
}

* {
  margin: 0; padding: 0; box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

/* Fundo */
body {
  background: var(--bg-light);
  height: 100vh;
  display: flex; justify-content: center; align-items: center;
  overflow: hidden; position: relative;
}

.background-shapes .shape {
  position: absolute; border-radius: 50%; opacity: 0.1;
}
.shape-1 { width: 300px; height: 300px; background: var(--primary); top: -100px; left: -100px; }
.shape-2 { width: 200px; height: 200px; background: var(--secondary); bottom: -50px; right: -50px; }
.shape-3 { width: 150px; height: 150px; background: var(--primary); top: 50%; left: 70%; }

/* Login */
.container { width: 100%; max-width: 400px; padding: 20px; }
.login-card {
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  text-align: center;
}
.logo { margin-bottom: 20px; color: var(--primary); }
.logo i { font-size: 40px; }
.logo h1 { font-size: 22px; }

.input-group { position: relative; margin-bottom: 15px; }
.input-group i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--primary); }
input {
  width: 100%; padding: 12px 40px;
  border-radius: 25px; border: 1px solid #ccc;
  outline: none;
}
input:focus { border-color: var(--secondary); }

button {
  width: 100%; padding: 12px;
  border: none; border-radius: 25px;
  background: var(--primary); color: #fff;
  font-weight: bold; cursor: pointer;
}
button:hover { background: var(--secondary); }

/* Loading */
.loading-screen {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(255,255,255,0.95);
  display: none; /* escondido até login */
  flex-direction: column; justify-content: center; align-items: center;
  z-index: 1000;
}
.loading-gif { width: 120px; margin-bottom: 15px; }
.loading-text { color: var(--primary); font-weight: 600; }

/* Menu */
.menu-container { display: none; padding: 20px; max-width: 1200px; }
.menu-title { text-align: center; margin-bottom: 30px; color: var(--primary); }

.bubble-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}
.bubble-btn {
  background: var(--primary);
  border-radius: 50%; aspect-ratio: 1;
  color: #fff; display: flex; justify-content: center; align-items: center;
  text-decoration: none; font-weight: 600;
  transition: 0.3s;
}
.bubble-btn:hover { background: var(--secondary); transform: scale(1.1); }

/* Botões flutuantes */
.logout-btn, .back-btn {
  position: fixed; bottom: 20px;
  width: 55px; height: 55px;
  border-radius: 50%; background: var(--primary);
  display: none; justify-content: center; align-items: center;
  color: #fff; cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
.logout-btn { right: 20px; }
.back-btn { left: 20px; }
.logout-btn:hover, .back-btn:hover { background: var(--secondary); }

/* Responsivo */
@media (max-width: 768px) {
  .bubble-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
}
@media (max-width: 480px) {
  .bubble-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px; }
}
