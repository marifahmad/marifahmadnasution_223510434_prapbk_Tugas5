<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();

const produkSection = ref(null);

const scrollToProduk = () => {
  produkSection.value.scrollIntoView({ behavior: 'smooth' });
};
router.afterEach(() => {
  if (router.currentRoute.value.path === '/produk') {
    scrollToProduk();
  }
});

</script>

<template>
    <div ref="produkSection">
      <h1 ><i>Produk Me</i></h1>
      <p>Read our latest Produk posts here.</p>
    </div>
  </template>
  