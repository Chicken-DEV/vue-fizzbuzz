<template>
  <div class="fizzbuzz">
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
</template>

<style scoped>

.fizzbuzz{
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 50%;
}

.fizzbuzz > div {
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
