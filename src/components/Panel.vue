<template>
  <div class="panel">
      <div class="thumbnail">
        <img :src="srcPath" :alt="srcAlt">
      </div>
      <div>
        <p>{{ text }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: ['text', 'srcPath', 'srcAlt']
}
</script>

<style scoped>

@keyframes buttonClick {
  0% {
    background-color: #83cd29;
  }
  50% {
    background-color: #8aff16;
  }
  100% {
    background-color: #83cd29;
  }
}

.panel {
  display: inline-block;
  margin: 1%;
  width: 46%;
  border: solid;
  border-color: #83cd29;
  border-radius: 10px;
  text-align: center;
}

.panel:hover {
  background-color: #b3f274;
  cursor: pointer;
}

.thumbnail > img {
  margin-top: 20px;
  width: 40%;
}
</style>
