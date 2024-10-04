<script setup></script>

<template>
  <div class="site-loader">
    <!-- <img src="/images/logo.png" alt="" /> -->
    <div id="preloader">
      <div class="loader">
        <span>H</span>
        <span>A</span>
        <span>M</span>
        <span>R</span>
        <span>O</span>
        <span>H</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.site-loader {
  position: fixed;
  inset: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  z-index: 9999;
}

#preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}

.loader span {
  display: inline-block;
  font-size: 32px;
  color: #333;
  animation: bounce 1.5s infinite;
  font-weight: 900;
  color: #18a53c;
  margin: 0 6px;
}

.loader span:nth-child(1) {
  animation-delay: 0s;
}
.loader span:nth-child(2) {
  animation-delay: 0.1s;
}
.loader span:nth-child(3) {
  animation-delay: 0.2s;
}
.loader span:nth-child(4) {
  animation-delay: 0.3s;
}
.loader span:nth-child(5) {
  animation-delay: 0.4s;
}
.loader span:nth-child(6) {
  animation-delay: 0.5s;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
