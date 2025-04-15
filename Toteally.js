function gacha() {
    const loader = document.getElementById('loaderLogo');
    const result = document.getElementById('result');
    const gachaResult = document.getElementById('gachaResult');
    const bagClosed = document.getElementById('bagClosed');
    const bagOpen = document.getElementById('bagOpen');
  
    // Reset
    result.innerText = '';
    gachaResult.innerHTML = '';
    loader.style.display = 'none';
    bagOpen.classList.add('hidden');
    bagOpen.classList.remove('show', 'fade-out');
  
    // Fade out tas tertutup
    bagClosed.classList.remove('hidden');
    bagClosed.classList.remove('fade-out');
    void bagClosed.offsetWidth; // force reflow
    bagClosed.classList.add('fade-out');
  
    // Tampilkan loader setelah fade
    setTimeout(() => {
      bagClosed.classList.add('hidden');
      loader.style.display = 'block';
  
      // Loader selesai
      setTimeout(() => {
        loader.style.display = 'none';
  
        // Tampilkan tas terbuka
        bagOpen.classList.remove('hidden');
        setTimeout(() => {
          bagOpen.classList.add('show');
  
          // Tampilkan hasil gacha
          setTimeout(() => {
            const probability = Math.random();
            let resultText, resultImage;
  
            if (probability < 0.2) {
              resultText = "Selamat! Anda mendapatkan item LANGKA!";
              resultImage = "langka.jpg";
            } else {
              resultText = "Anda mendapatkan item BIASA.";
              resultImage = "putih1.jpg";
            }
  
            result.innerText = resultText;
            gachaResult.innerHTML = `<img src="${resultImage}" alt="Gacha Result">`;
  
            // Fade out tas terbuka setelah result muncul
            setTimeout(() => {
              bagOpen.classList.add('fade-out');
            }, 1000);
  
          }, 500);
        }, 100);
      }, 3000);
    }, 1000);
  }
  