// Dados de login (em um cenário real, isso viria de um servidor seguro)
// NOTA: Esta é uma solução básica. Para maior segurança, implemente autenticação server-side
const validCredentials = {
    username: 'DiretorHspe',
    password: 'senhahspe'
};

// Lista de links do menu (facilmente expansível)
const menuLinks = [
    { name: 'ALERGIA', url: 'https://app.powerbi.com/view?r=eyJrIjoiZGMwNmM3NTktMGQ2ZC00ZDFkLWFmOWQtOTBlNzE4ZjQ0MjMyIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'ANATOMIA PATOLÓGICA', url: 'https://app.powerbi.com/view?r=eyJrIjoiMWNjY2FhOTMtNGQ4OS00YzRkLThlNjItZjQ5Yjc5MmU1YzU0IiwidCI6IjNhNzhiMGNkLTcjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'ANESTESIOLOGIA', url: 'https://app.powerbi.com/view?r=eyJrIjoiM2MxZDRkMjYtZWEyOS00NTQ1LWIxOGQtZGE4YTIyZDQ0OWEyIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'ASSIST MATERNO FETAL', url: 'https://app.powerbi.com/view?r=eyJrIjoiNzA4YTZjZGItZWYyMy00MTE3LTg2ZWUtMTU2OGMxMjY0MTlmIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'ASSISTÊNCIA DOMICILIAR', url: 'https://app.powerbi.com/view?r=eyJrIjoiOTA1Y2JjMDMtMTBjZS00NWU5LTg5MjMtMTNmZDcxZmI5NWM0IiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'BUCOMAXILO', url: 'https://app.powerbi.com/view?r=eyJrIjoiZTEzZTZkNjUtMjgwNy00YTcxLWE5ODMtNWU0YzIzYTA2N2M5IiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CARDIOLOGIA', url: 'https://app.powerbi.com/view?r=eyJrIjoiZTg2MzBmNWYtYmVjMS00MDkxLWE0NDQtMGQ2ZTA3MDg2MzRmIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CEAME', url: 'https://app.powerbi.com/view?r=eyJrIjoiZDJhOGIyODktMzkxYy00ODEwLTg4NTMtMWQ3NTNmYzczOGQxIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CENTRO DE INFUSÃO', url: 'https://app.powerbi.com/view?r=eyJrIjoiMmE4OTVhOWEtNjQ5Zi00NWE5LWIxZWItMTY1YzU0NzNlOTVjIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CIRURGIA CABEÇA E PESCOÇO', url: 'https://app.powerbi.com/view?r=eyJrIjoiMzkzOTg3ZDEtZGU2MC00YWZlLWFlODAtMzRjNjk4Nzg5MDRlIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CIRURGIA CARDÍACA', url: 'https://app.powerbi.com/view?r=eyJrIjoiZmVkZjJiZDUtMDY3Ny00MzdlLTgxYTUtYmQyN2JlMjAzMTIzIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CIRURGIA GERAL', url: 'https://app.powerbi.com/view?r=eyJrIjoiZDVhZDg2MjMtYTU1Yi00Yzc1LTlhMzktYzlmYTFiODYzMGMzIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CIRURGIA PEDIÁTRICA', url: 'https://app.powerbi.com/view?r=eyJrIjoiZWRhNDg3ODMtNzQwOS00Y2EzLTgwNWYtNDQ2NjM4ZTIwYTBmIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' },
    { name: 'CIRURGIA PLÁSTICA', url: 'https://app.powerbi.com/view?r=eyJrIjoiNzFiMmJiNTgtODg0ZC00MTIyLWFiZGMtM2JmYWE1OWYzNTA3IiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGA2Y2MwMTM2NSJ9' }
];

// Função para gerar hash simples (apenas para dificultar visualização no código)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

// Gerar hashes das credenciais (apenas para dificultar visualização no código)
const hashedUsername = simpleHash(validCredentials.username);
const hashedPassword = simpleHash(validCredentials.password);

// Função de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Limpa mensagens de erro anteriores
    errorMessage.style.display = 'none';
    
    // Verifica as credenciais usando hashes
    if (simpleHash(username) === hashedUsername && simpleHash(password) === hashedPassword) {
        // Mostra a tela de carregamento
        document.getElementById('loadingScreen').style.display = 'flex';
        document.getElementById('loginContainer').style.display = 'none';
        
        // Simula o tempo de carregamento (3 segundos)
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
            document.getElementById('menuContainer').style.display = 'block';
            document.getElementById('logoutBtn').style.display = 'flex';
        }, 3000);
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.display = 'block';
    }
}

// Função para preencher o menu com os links
function populateMenu() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = ''; // Limpa o conteúdo existente
    
    menuLinks.forEach(link => {
        const button = document.createElement('a');
        button.href = link.url;
        button.className = 'bubble-btn';
        button.target = '_blank';
        button.innerHTML = `<span>${link.name}</span>`;
        button.addEventListener('click', showBackButton);
        menuGrid.appendChild(button);
    });
}

function logout() {
    if (confirm('Deseja realmente sair?')) {
        document.getElementById('menuContainer').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('backBtn').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

function showBackButton() {
    // Mostra o botão de voltar após clicar em um link
    setTimeout(() => {
        document.getElementById('backBtn').style.display = 'flex';
    }, 1000);
}

function goBack() {
    // Fecha a aba atual e volta para o menu
    window.history.back();
}

// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Preencher o menu com os links
    populateMenu();
    
    // Configurar o formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        login();
    });
    
    // Configurar botões de ação
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('backBtn').addEventListener('click', goBack);
    
    // Permitir login com Enter
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
    
    // Verificar se estamos em uma página aberta a partir do menu
    if (window.location !== window.parent.location) {
        // A página está sendo exibida em um iframe ou nova aba
        document.getElementById('backBtn').style.display = 'flex';
    }
});
