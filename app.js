
fetch('birthdays.json')
    .then(response => response.json())
    .then(data => {
       
        const currentBirthday = data.currentBirthday;
        document.getElementById('current-birthday-name').textContent = currentBirthday.name;
        document.getElementById('current-birthday-date').textContent = currentBirthday.date;
        document.getElementById('current-profile-img').src = currentBirthday.image;

        
        const upcomingBirthday = data.upcomingBirthdays[0];
        document.getElementById('upcoming-birthday-name').textContent = upcomingBirthday.name;
        document.getElementById('upcoming-birthday-date').textContent = upcomingBirthday.date;
        document.getElementById('upcoming-profile-img').src = upcomingBirthday.image;
    })
    .catch(error => console.error('Error loading birthday data:', error));
