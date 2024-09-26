document.addEventListener('click', tapClick);
document.addEventListener('touchstart', tapClick);
document.addEventListener('touchmove', tapClick);

function tapClick(event) {
    let targetElement = event.target;  // Elemen yang diklik atau disentuh
    console.log('Elemen yang dipicu:', targetElement);
    // Mengecek apakah ini event sentuhan
    if (event.touches && event.touches.length > 0) {
        console.log('Jumlah sentuhan aktif:', event.touches.length);
        console.log(event.touches);
    }
    
    // Mengecek apakah ini event mouse (click)
    if (event.clientX !== null && event.clientX !== undefined) {
        console.log('clientX memiliki nilai:', event.clientX);
        console.log('clientY memiliki nilai:', event.clientY);
    }
}
