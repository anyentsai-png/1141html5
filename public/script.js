async function loadMessages() {
  const container = document.getElementById('messages-list');
  container.textContent = '載入中...';
  try {
    const res = await fetch('/api/messages');
    if (!res.ok) throw new Error('Network response was not ok');
    const messages = await res.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      container.textContent = '目前沒有留言。';
      return;
    }
    const ul = document.createElement('ul');
    messages.forEach(m => {
      const li = document.createElement('li');
      const name = document.createElement('strong');
      name.textContent = m.username || '匿名';
      const text = document.createElement('span');
      text.textContent = ': ' + (m.content || '');
      li.appendChild(name);
      li.appendChild(text);
      ul.appendChild(li);
    });
    container.innerHTML = '';
    container.appendChild(ul);
  } catch (err) {
    container.textContent = '載入留言時發生錯誤';
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', loadMessages);
