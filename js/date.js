let date_today = new Date();

let date_locale = date_today.toLocaleDateString('fr-FR', {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
});

document.getElementById('date_du_jour').innerHTML=("Le "+ date_locale).toUpperCase();