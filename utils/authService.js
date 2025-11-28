const STATIC_USERS = [
  { id: '1', email: 'juan@example.com', password: 'user123', role: 'usuario', name: 'Juan' },
  { id: '2', email: 'maria@example.com', password: 'user456', role: 'usuario', name: 'María' },
  { id: '3', email: 'carlos@example.com', password: 'super123', role: 'super_usuario', name: 'Carlos' },
  { id: '4', email: 'ana@example.com', password: 'super456', role: 'super_usuario', name: 'Ana' },
  { id: '5', email: 'roberto@example.com', password: 'admin123', role: 'administrador', name: 'Roberto' },
  { id: '6', email: 'laura@example.com', password: 'admin456', role: 'administrador', name: 'Laura' }
];

function login(email, password) {
  const user = STATIC_USERS.find(u => 
    u.email === email && u.password === password
  );

  if (user) {
    const userData = {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    };
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return userData;
  }
  
  return null;
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}