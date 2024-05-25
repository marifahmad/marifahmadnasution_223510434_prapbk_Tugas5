<script setup>
import AboutView from '../pages/AboutView.vue'
</script>
<template>
     <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Ahmad Market</h3>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/produk">Produk</a></li>
          
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contact Us</h4>
        <p>Email: marifahmad145@gmail.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 M Arif Ahmad. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  margin: 10px;
  min-width: 200px;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 5px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #f39c12;
}

.social-links a {
  color: #fff;
  margin-right: 10px;
  font-size: 20px;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #f39c12;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 10px;
}
</style>