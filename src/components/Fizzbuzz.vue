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
      number: 0,
      oldColor: '#d9ffb3',
      trueColor: '#76e893',
      falseColor: '#ff0000'
    }
  },
  methods: {
    generateNumber() {
      this.number = Math.floor(Math.random() * 1001)
    },
    blinkButton(blinkColor, oldColor, event) {
      event.target.style.background = blinkColor
      setTimeout(() => {
        event.target.style.background = oldColor
      }, 200)
    },
    judge(ans, event) {
      let blinkColor
      if (calculateNum(this.number) === ans) {
        this.score++
        blinkColor = this.trueColor
      }
      else {
        if (this.score > 0) this.score--
        blinkColor = this.falseColor
      }
      this.blinkButton(blinkColor, this.oldColor, event)
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
  justify-content: center;
  flex-wrap: wrap;
}

</style>
