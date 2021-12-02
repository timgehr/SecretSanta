<template>
  <div class="generated">
    <div id="topbar">Assignments:</div>
    <ul class="namesList">
      <div class="listColumn">
        <li
          class="namesListItem"
          v-for="name in this.$store.state.names"
          :key="name"
        >
          {{ name }}
        </li>
      </div>

      <div class="listColumn">
        <li
          class="namesListItem"
          v-for="assignment in this.$store.state.assignments"
          :key="assignment"
        >
          https://encryptedsanta.netlify.app/#/decrypt/{{ encryptName(assignment) }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
const CryptoJS = require("crypto-js");

export default Vue.extend({
  name: "Generated",
  data() {
    return {
      res: "",
      errmess: "",
    };
  },
  methods: {
    encryptName(name) {
      return btoa(
        CryptoJS.AES.encrypt(name, "2021").toString(CryptoJS.enc.Utf8)
      );
    },
  },
});
</script>

<style scoped>
.namesList {
  display: flex;
  flex-direction: row;
}

.generated {
  background-color: rgb(0, 95, 43);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>