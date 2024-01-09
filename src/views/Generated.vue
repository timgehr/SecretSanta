<template>
  <div class="generated">
    <div id="topbar">Assignments:</div>
    <ul class="names-list">
      <div class="listColumn">
        <li
          class="names-list-item"
          v-for="name in this.$store.state.names"
          :key="name"
        >
          {{ name }}
        </li>
      </div>

      <div class="listColumn">
        <li
          class="names-list-item"
          v-on:click="copyText(assignment)"
          v-for="assignment in this.$store.state.assignments"
          :key="assignment"
        >
          🎁
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
const CryptoJS = require("crypto-js");

export default Vue.extend({
  name: "generated",
  data() {
    return {
      res: "",
      errmess: "",
    };
  },
  methods: {
    encryptName(name) {
      return btoa(
        CryptoJS.AES.encrypt(name, "2021").toString()
      );
    },
    copyText(assignment) {
      var toBeCopied = ("Your Secret Santa assignment awaits 🎁🎅🏼🎄: https://encryptedsanta.netlify.app/#/decrypt/" + this.encryptName(assignment))
      navigator.clipboard.writeText(toBeCopied)
    }
  },
  mounted() {
    for(var i = 0; i < this.$store.state.assignments.length; i++){
      if (this.$store.state.assignments[i] === this.$store.state.names[i]){
        document.getElementById('app').style.backgroundColor = "rgb(95, 0, 0)";
        alert('tiddy')
      }
    }
  }
});
</script>

<style scoped>
.names-list {
  display: flex;
  flex-direction: row;
}

.names-list-item {
  padding-top: 20px;
  padding-right: 20px;
  font-size: 30px;
  height: 40px;
  text-align: justify;
}

.generated {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
