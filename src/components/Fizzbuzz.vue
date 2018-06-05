<template>
  <div class="fizzbuzz">
    <div class="info">
      <div id="currentScore">
        <p>Score: 0</p>
      </div>
      <div id="question">
        <p id="nextNumber">13</p>
      </div>
      <div id="highScore">
        <p>High score: 0</p>
      </div>
    </div>
    <buttons></buttons>
  </div>
</template>

<script>
import Buttons from './Buttons'

export default {
  name: 'fizzbuzz',
  components: {
    Buttons
  }
}
</script>

<style scoped>

.info{
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 50%;
}

.info > div {
  margin: 10px;
  width: 33%;
  display: flex;
  align-items: center;
}

#currentScore {
  justify-content: flex-start;
}

#highScore {
  justify-content: flex-end;
}

#question {
  justify-content: center;
}

#nextNumber {
  font-size: 250%;
  margin: 0px;
}
</style>
