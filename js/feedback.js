const photoInput = document.getElementById('photo');
const fileNameSpan = document.getElementById('fileName');
const stars = document.querySelectorAll('.star');
const categorySelect = document.getElementById('category');
const otherNote = document.getElementById('otherNote');

// Event listener untuk rating bintang
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value'); // Dapatkan nilai rating
    highlightStars(selectedRating); // Highlight bintang sesuai rating
    updateEmoji(selectedRating); // Tampilkan emotikon sesuai rating
  });
});

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    const starValue = star.getAttribute('data-value');
    if (starValue <= rating) {
      star.classList.add('selected');
      star.classList.remove('text-gray-300');
      star.classList.add('text-yellow-400');
    } else {
      star.classList.remove('selected');
      star.classList.add('text-gray-300');
      star.classList.remove('text-yellow-400');
    }
  });
}

categorySelect.addEventListener('change', () => {
  if (categorySelect.value === 'Others') {
    otherNote.classList.remove('hidden');
  } else {
    otherNote.classList.add('hidden');
  }
});

photoInput.addEventListener('change', () => {
  fileNameSpan.textContent = photoInput.files.length > 0 ? photoInput.files[0].name : 'No file chosen';
});

// Fungsi untuk memvalidasi dan mengosongkan form
function validateForm() {
  const category = document.getElementById('category').value;
  const comment = document.getElementById('comment').value.trim();
  const otherNoteText = document.getElementById('otherNoteText').value.trim();

  if (!category || !comment || selectedRating === 0 || 
      (category === 'Others' && !otherNoteText)) {
    alert("Please fill out all fields before submitting.");
  } else {
    alert("Thank you for your feedback!");
    clearForm(); // Panggil fungsi clearForm setelah submit sukses
  }
}

// Fungsi untuk mengosongkan semua input form
function clearForm() {
  // Reset dropdown kategori
  document.getElementById('category').value = '';
  
  // Reset komentar dan input teks lainnya
  document.getElementById('comment').value = '';
  document.getElementById('otherNoteText').value = '';
  
  // Sembunyikan bagian "Other Note"
  otherNote.classList.add('hidden');
  
  // Reset input file
  photoInput.value = '';
  fileNameSpan.textContent = 'Choose a file...';
  
  // Kosongkan emoji
  emojiContainer.textContent = '';
  
  // Reset rating bintang
  selectedRating = 0; // Reset nilai rating
  stars.forEach(star => {
    star.classList.remove('selected', 'text-yellow-400'); // Hapus kelas bintang yang dipilih
    star.classList.add('text-gray-300'); // Tambahkan kelas default
  });
}


