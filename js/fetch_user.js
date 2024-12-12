document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    fetchUsers();
});

// Fetch data from the endpoint
async function fetchUsers() {
    const endpoint = 'https://asia-southeast2-awangga.cloudfunctions.net/idbiz/auth/users/all';

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        console.log('Fetched users:', users); // Log the fetched data to inspect

        // Check if users is an array or if the data is inside another object (like users.data)
        let usersArray = users;
        if (Array.isArray(users)) {
            // Data is already an array
            usersArray = users;
        } else if (Array.isArray(users.data)) {
            // Data is inside a 'data' field
            usersArray = users.data;
        } else {
            // Handle unexpected format
            console.error('Fetched data is not in the expected format:', users);
            return;
        }

        renderUsers(usersArray);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Render data into the table
function renderUsers(users) {
    const tbody = document.querySelector('#user-tbody');

    if (!tbody) {
        console.error('Tbody not found!');
        return;
    }

    tbody.innerHTML = ''; // Clear existing rows

    if (!Array.isArray(users)) {
        console.error('Invalid data format:', users);
        return;
    }

    console.log('Rendering users:', users); // Log users being rendered

    users.forEach(user => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-100 border-b';

        row.innerHTML = `
            <td class="px-4 py-2">${user._id || '-'}</td>
            <td class="px-4 py-2">${user.name || '-'}</td>
            <td class="px-4 py-2">${user.phonenumber || '-'}</td>
            <td class="px-4 py-2">${user.email || '-'}</td>
            <td class="px-4 py-2">${user.role || '-'}</td>
            <td class="px-4 py-2">${user.password || '-'}</td>
            <td class="px-4 py-2">${user.team || '-'}</td>
            <td class="px-4 py-2">${user.scope || '-'}</td>
            <td class="px-4 py-2">${user.jumlahantrian || '-'}</td>
        `;
        tbody.appendChild(row);
    });

    // Make the users table visible by removing the hidden class
    const usersDiv = document.getElementById('users');
    if (usersDiv.classList.contains('hidden')) {
        usersDiv.classList.remove('hidden');
    }
}
