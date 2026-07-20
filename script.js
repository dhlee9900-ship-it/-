const roles = [
  { name: '토끼', icon: '🐰', color: '#ffe5ed' },
  { name: '거북이', icon: '🐢', color: '#dff4d7' },
  { name: '용왕', icon: '🐉', color: '#ffe4a5' },
  { name: '상어장군', icon: '🦈', color: '#dceeff' },
  { name: '문어', icon: '🐙', color: '#f8ddec' },
  { name: '물고기', icon: '🐠', color: '#ffe8bd' },
  { name: '인어공주', icon: '🧜‍♀️', color: '#e5ddff' },
  { name: '생쥐', icon: '🐭', color: '#e8edf2' },
  { name: '여우', icon: '🦊', color: '#ffe3d0' },
  { name: '당나귀', icon: '🫏', color: '#e8e0d4' },
];

let availableRoles = [...roles];
const card = document.querySelector('#draw-card');
const count = document.querySelector('#remaining-count');
const instruction = document.querySelector('#instruction');
const statusMessage = document.querySelector('#status-message');

document.querySelector('#role-list').innerHTML = roles.map((role) => `
  <li style="background:${role.color}"><span class="emoji">${role.icon}</span><span class="name">${role.name}</span></li>
`).join('');

function showCard(role) {
  card.className = 'role-card revealed';
  card.style.background = role.color;
  card.innerHTML = `<span class="card-icon">${role.icon}</span><span class="card-role">${role.name}</span><span class="card-subtitle">오늘의 주인공!</span>`;
  card.setAttribute('aria-label', `${role.name} 역할 카드, 다음 카드 뽑기`);
}

function resetCard() {
  card.className = 'role-card face-down';
  card.style.background = '';
  card.innerHTML = '<span class="card-pattern">✦</span><span class="card-back-title">바다<br />이야기</span><span class="card-shell">✦</span>';
  card.setAttribute('aria-label', '역할 카드 뽑기');
}

function drawRole() {
  if (!availableRoles.length) return;
  const index = Math.floor(Math.random() * availableRoles.length);
  const [role] = availableRoles.splice(index, 1);
  showCard(role);
  count.textContent = availableRoles.length;
  instruction.innerHTML = availableRoles.length
    ? '<span class="sparkle">✦</span><p>다음 친구도<br /><strong>카드를 뽑아보세요!</strong></p>'
    : '<span class="sparkle">✦</span><p><strong>모두 역할을 뽑았어요!</strong><br />이제 이야기를 시작해요.</p>';
  statusMessage.textContent = availableRoles.length ? `${role.name} 역할이 나왔어요!` : '모든 역할 카드가 뽑혔어요.';
}

card.addEventListener('click', drawRole);
document.querySelector('#reset-button').addEventListener('click', () => {
  availableRoles = [...roles];
  count.textContent = roles.length;
  resetCard();
  instruction.innerHTML = '<span class="sparkle">✦</span><p>카드를 눌러<br /><strong>역할을 뽑아보세요!</strong></p>';
  statusMessage.textContent = '모든 친구가 하나씩 뽑을 수 있어요.';
});
