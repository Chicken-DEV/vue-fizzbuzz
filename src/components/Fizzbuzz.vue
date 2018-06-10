<template>
  <div class="fizzbuzz">
    <div class="info">
      <div id="currentScore">
        <p>Score: {{ score }}</p>
      </div>
      <div id="question">
        <p id="nextNumber">{{ number }}</p>
      </div>
      <div id="highScore">
        <p>High score: 0</p>
      </div>
    </div>
    <div class="panels">
      <panel @select="judge" text="Not divisible" srcPath="/static/images/none.png" srcAlt="none"></panel>
      <panel @select="judge" text="Fizz" srcPath="/static/images/fizz.png" srcAlt="fizz"></panel>
      <panel @select="judge" text="Buzz" srcPath="/static/images/buzz.png" srcAlt="buzz"></panel>
      <panel @select="judge" text="FizzBuzz" srcPath="/static/images/fizzbuzz.png" srcAlt="fizzbuzz"></panel>
    </div>
  </div>
</template>

<script>
import Panel from './Panel'
import {calculateNum} from '../util/fizzbuzz'

export default {
  name: 'fizzbuzz',
  components: {
    Panel
  },
  data: function() {
    return {
      score: 0,
      number: 630
    }
  },
  methods: {
    generateNumber() {
      this.number = Math.floor(Math.random() * 1001)
    },
    judge(ans) {
      if (calculateNum(this.number) === ans) {
        this.score++
      }
      else {
        if (this.score > 0) this.score--
      }
      this.generateNumber()
    }
  },
  created() {
    this.generateNumber()
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

.panels {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>
