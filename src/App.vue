<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';

const slide = ref(1);
const autoplay = ref(true);
const expanded = ref(false);
const lorem = 'Desain-desain ini adalah karya para desainer yang kami temukan di internet Oleh karena itu, kami menghimbau untuk Anda tidak menggunakannya tanpa izin pemilik hak cipta, apalagi untuk kepentingan komersial jual/beli Jadikan desain-desain ini sebagai inspirasi untuk menghasilkan suatu karya original yang bisa Anda banggakan sebagai seorang desainer';



</script>


<template>
  <section class="navbar">
  <nav class="navbar">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/about" class="nav-link">About</RouterLink>
    <RouterLink to="/blog" class="nav-link">Blog</RouterLink>
    <RouterLink to="/shop" class="nav-link">Shop</RouterLink>
    <RouterLink to="/produk" class="nav-link">Produk</RouterLink>
    <label style="padding-left: 15px; padding-top: 5px;">
    <span style="padding-right: 10px;">Search:</span>  <input type="search" name="" id="">
</label>
<i class="material-icons">shopping_cart</i> <!-- Shopping cart icon -->
<i class="material-icons">account_circle</i>
    
  </nav>
</section>

<section class="caraousel">
  <div class="carousel-container q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/1-2.jpg" />
      <q-carousel-slide :name="2" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/9251-202357-kaos-hut-pjb-2021-4.jpg-1-scaled.webp" />
      <q-carousel-slide :name="3" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/19925-202317-4.jpg-1.webp" />
      <q-carousel-slide :name="4" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/82056-202395-mockup-kaos-1.jpg.webp" />
      <q-carousel-slide :name="5" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/1350-2023223-Desain-12-minCetak-min-1.png-1-scaled.webp" />
      <q-carousel-slide :name="6" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/01554-2023262-T-Shirt-Mock-Up-Front.png-1.webp" />
      <q-carousel-slide :name="7" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/1322-2023210-design-kaos-hahalaen_6.jpg-scaled.webp" />
      <q-carousel-slide :name="8" img-src="https://blog.sribu.com/wp-content/uploads/2023/08/131958-202370-desain-bajuu.png-1.webp" />
    </q-carousel>
  </div>
</section>

  <section class="card">
    <div class="q-pa-md row q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://blog.sribu.com/wp-content/uploads/2023/08/1-2.jpg"
      />

      <q-card-section>
        <button class="buy">Buy Now</button>
        <div class="text-h5 q-mt-sm q-mb-xs">Depan logo, belakang slogan</div>
        <div class="text-caption text-grey">
          Gaya ini adalah salah satu pendekatan desain yang paling klasik.

Supaya kedua bagian — depan & belakang kaos — tidak sepi, Anda bisa bagikan 2 bagian dari brand Anda/klien ke 2 tempat berbeda.

Di contoh ini, desain logo brand di tempatkan di depan kaos karena ini bisa sangat bermanfaat untuk branding.

(Bagian depan baju, tentunya, adalah bagian yang paling sering dilihat oleh orang lain.)

Di bagian belakang, Anda bisa menempatkan slogan/tagline.

Strategi ini bisa sangat membantu untuk menyebarluaskan nama brand Anda/klien.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://blog.sribu.com/wp-content/uploads/2023/08/9251-202357-kaos-hut-pjb-2021-4.jpg-1-scaled.webp"
      />

      <q-card-section>
        <button class="buy">Buy Now</button>
        
        <div class="text-h5 q-mt-sm q-mb-xs">Desain baju depan belakang untuk event</div>
        <div class="text-caption text-grey">
          Ini adalah contoh desain kaos depan & belakang untuk keperluan acara suatu organisasi.

Di sini, seperti contoh sebelumnya, gunakan pendekatan yang minimalis di bagian depan dengan hanya menempatkan desain logo organisasi terkait.

Di belakang, gunakan desain ilustrasi yang dibuat untuk keperluan acara, sehingga desain bisa relevan dengan acara yang berlangsung.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://blog.sribu.com/wp-content/uploads/2023/08/19925-202317-4.jpg-1.webp"
      />

      <q-card-section>
        <button class="buy">Buy Now</button>
        
        <div class="text-h5 q-mt-sm q-mb-xs">Desain urban/artistik</div>
        <div class="text-caption text-grey">
          Untuk contoh berikutnya, kita bisa memanfaatkan ruang yang tersedia secara maksimal dengan menggunakan desain yang memiliki nilai artistik tinggi.

Di sini, desainer memberikan kesan visual yang kuat dengan ukuran desain artistik yang besar di depan dan belakang kaos.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
  
  </section>

  
  <router-view></router-view>
  <main>
    <RouterView />
  </main>
  <section class="footer">
    <Footer />
  </section>
  
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  
</style>

<style scoped>

button.buy{
  margin-left: 120px;
  padding: 5px;
  border-radius: 20px;
}
button.buy:hover{
  background-color: #b5e496;
}
.material-icons {
  font-size: 3 rem; /* Adjust the size as needed */
  padding-left: 20px;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 1rem;
}

.nav-link {
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #555;
  color: #ffcc00;
}

.carousel-container {
  max-width: 800px;
  margin: 20px auto;
}

.q-pa-md {
  padding: 1rem;
}
</style>
