// Fade-out tombol Buka Undangan
function openInvitationFade() {
  const hero = document.querySelector('.hero-content'); // target elemen
  hero.classList.add('fade-out'); // trigger animasi fade-out

  setTimeout(() => {
    window.location.href = 'main.html'; // pindah halaman setelah animasi
  }, 800); // durasi animasi sesuai CSS
}

// Countdown
function countdown() {
  const targetDate = new Date('2025-10-10T10:00:00').getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = 'Hari Bahagia Telah Tiba!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}h ${hours}j ${minutes}m ${seconds}d`;
  }, 1000);
}

// Animasi scroll fade-in
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Redirect lama (bisa tetap, tapi tombol baru pakai fade-out)
function goToMain() {
  window.location.href = 'main.html';
}

// Simpan ucapan (localStorage)
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('ucapanForm')) {
    const form = document.getElementById('ucapanForm');
    const list = document.getElementById('ucapanList');

    const ucapan = JSON.parse(localStorage.getItem('ucapan')) || [];
    renderUcapan();

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.getElementById('nama').value;
      const pesan = document.getElementById('pesan').value;
      ucapan.push({ nama, pesan });
      localStorage.setItem('ucapan', JSON.stringify(ucapan));
      form.reset();
      renderUcapan();
    });

    function renderUcapan() {
      list.innerHTML = '';
      ucapan.forEach((u) => {
        const p = document.createElement('p');
        p.innerHTML = `<b>${u.nama}</b>: ${u.pesan}`;
        list.appendChild(p);
      });
    }
  }

  if (document.getElementById('countdown')) {
    countdown();
  }
  // Munculkan dekorasi setelah load
  window.addEventListener('load', () => {
    document.querySelectorAll('.corner-png').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, 500 * index); // stagger effect tiap PNG
    });
  });

  // Animasi fade-in saat scroll
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });

  // Jalankan sekali saat halaman load, untuk section yang sudah terlihat
  window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });
});
