document.addEventListener('DOMContentLoaded', function () {
    const userListElement = document.getElementById('userList');
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    existingUsers.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.email;
      userListElement.appendChild(listItem);
    });
  });
  