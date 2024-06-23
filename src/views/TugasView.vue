<template>
    <div ref="tugasSection" class="task-list" >
      <h1>List Tugas</h1>
      <ul>
        <li v-for="(tugas, index) in daftarTugas" :key="index" @click="redirectToNetlify(tugas)" class="task-item">
          {{ tugas.nama }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useRouter } from 'vue-router';

const tugasSection = ref(null);
const router = useRouter();

const scrollToTugas = () => {
  // Scroll to the tugasSection element
  tugasSection.value.scrollIntoView({ behavior: 'smooth' });
};

// Navigation guard to scroll on route change (optional)
router.afterEach(() => {
  if (router.currentRoute.value.path === '/tugas') {
    scrollToTugas();
  }
});

  
  // Membuat referensi reaktif untuk daftar tugas
  const daftarTugas = ref([
    { nama: 'Tugas 1', url: 'https://ahmad-projectcv.netlify.app' },
    { nama: 'Tugas 2', url: 'marifahmadn-223510434-lab-t2freetugas.netlify.app' },
    { nama: 'Tugas 3', url: 'https://marifahmad.netlify.app' },
    { nama: 'Tugas 4', url: 'https://marifahmad-223510434-prapbk.netlify.app' },
    { nama: 'Tugas 5', url: 'https://marifahmad-223510434-ppbk-t5-landingp.netlify.app' },
    { nama: 'Tugas 6', url: 'https://marifahmadnasution-223510434-t6-inapi.netlify.app' },
    { nama: 'Tugas 7', url: 'https://marifahmadnasution-223510434-t7-pinia.netlify.app/' }
  ]);
  
  // Fungsi untuk mengarahkan pengguna ke URL Netlify
  const redirectToNetlify = (tugas) => {
    window.location.href = tugas.url;
  };
  </script>
  
  <style scoped>
  /* Gaya khusus untuk komponen ini */
  .task-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  .task-item {
    cursor: pointer;
    padding: 15px;
    margin: 10px 0;
    background-color: #f0f0f0;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .task-item:hover {
    background-color: #e0e0e0;
  }
  
  h1 {
    font-size: 24px;
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  </style>
  