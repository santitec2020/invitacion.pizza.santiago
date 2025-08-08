// Crear corazones flotantes
const hearts = document.getElementById('hearts');
for (let i = 0; i < 25; i++) {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = `${Math.random() * 100}px`;
  heart.style.animationDelay = `${Math.random() * 5}s`;
  hearts.appendChild(heart);
}

// Crear destellos mágicos
const magic = document.getElementById('magic');
for (let i = 0; i < 40; i++) {
  const sparkle = document.createElement('div');
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  magic.appendChild(sparkle);
}
