if (document.getElementById('mapa')) {

    var map = L.map('mapa').setView([19.4952781,-99.044259], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([19.4952781,-99.044259]).addTo(map).bindPopup('aanclac').openPopup();
    // .bindTooltip('GDLWebCamp 2018, Boletos ya disponibles')
    // .openTooltip();
}