<template>
  <div id="app" style="margin: 0;">
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">*</div>
    <router-view/>
    <Town></Town>
  </div>
</template>

<script>
import Town from "./components/Town.vue";
export default {
  name: "App",
  components: {
    Town,
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: linear-gradient(#01060e,#011629);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex{
  display: flex;
}

.column{
  flex-direction: column;
}

* {
  font-family: 'Berkshire Swash', serif;
  font-family: 'Space Mono', monospace;
  font-weight: 600;
  color: rgb(247, 233, 190);
}

/* customizable snowflake styling */
.snowflake {
  z-index: 0;
  color: #fff9;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #0003;
}

@-webkit-keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes snowflakes-shake {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
}
@keyframes snowflakes-fall {
  0% {
    top: -5%;
  }
  100% {
    top: 100%;
  }
}
@keyframes snowflakes-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(80px);
  }
}
@keyframes snowflakes-shake2 {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(40px);
  }
}
.snowflake {
  position: fixed;
  top: -10%;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}
/* duration */
.snowflake:nth-of-type(5n) {
  animation-duration: 10s,3s;
}
.snowflake:nth-of-type(5n+1) {
  animation-duration: 11s,3.92s;
}
.snowflake:nth-of-type(5n+2) {
  animation-duration: 8s,2.36s;
}
.snowflake:nth-of-type(5n+3) {
  animation-duration: 10.5s,3.5s;
}
.snowflake:nth-of-type(5n+4) {
  animation-duration: 9s,2.62s;
}
/* delay */
.snowflake:nth-of-type(4n) {
  animation-delay: 0.2s, 0s;
}
.snowflake:nth-of-type(4n+1) {
  animation-delay: 2.6s, 1.9s;
}
.snowflake:nth-of-type(4n+2) {
  animation-delay: 5.2s, 0.9s;
}
.snowflake:nth-of-type(4n+2) {
  animation-delay: 7.2s, 2.5s;
}

.snowflake:nth-of-type(8n) {
  animation-delay: 1.2s, 0s;
}
.snowflake:nth-of-type(8n+1) {
  animation-delay: 3.6s, 1.9s;
}
.snowflake:nth-of-type(8n+2) {
  animation-delay: 6.2s, 0.9s;
}
.snowflake:nth-of-type(8n+2) {
  animation-delay: 8.2s, 2.5s;
}
/* x */
.snowflake:nth-of-type(9n) {
  left: 10%;
}
.snowflake:nth-of-type(9n+1) {
  left: 20%;
}
.snowflake:nth-of-type(9n+2) {
  left: 30%;
}
.snowflake:nth-of-type(9n+3) {
  left: 40%
}
.snowflake:nth-of-type(9n+4) {
  left: 50%;
}
.snowflake:nth-of-type(9n+5) {
  left: 60%;
}
.snowflake:nth-of-type(9n+6) {
  left: 70%;
}
.snowflake:nth-of-type(9n+7) {
  left: 80%;
}
.snowflake:nth-of-type(9n+8) {
  left: 90%;
}
</style>
