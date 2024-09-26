

document.addEventListener('click', function(event) {
    let x = event.clientX; // Posisi X (horizontal) dari klik
    let y = event.clientY; // Posisi Y (vertikal) dari klik
    
    console.log('Posisi klik:', x, y);
});

  
document.addEventListener('touchstart', tapClick);

document.addEventListener('touchmove',tapClick);
  
function tapClick(event){
    if (event.touches.length > 0) {
    console.log('Jumlah sentuhan aktif:', event.touches.length);
    console.log(event.touches);
    }
    if (event.clientX !== null && event.clientX !== undefined) {
        console.log('clientX memiliki nilai:', event.clientX);
        console.log(event.clientY);
    }
    
}