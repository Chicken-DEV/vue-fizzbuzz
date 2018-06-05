<template>
  <div class="buttons">
      <div class="button">
          <div class="thumbnail">
            <img src="/static/images/none.png" alt="none">
          </div>
          <div>
            <p>Not divisible</p>
          </div>
      </div>
      <div class="button">
          <div class="thumbnail">
            <img src="/static/images/fizz.png" alt="fizz">
          </div>
          <div>
            <p>Fizz</p>
          </div>
      </div>
      <div class="button">
          <div class="thumbnail">
            <img src="/static/images/buzz.png" alt="buzz">
          </div>
          <div>
            <p>Buzz</p>
          </div>
      </div>
      <div class="button">
          <div class="thumbnail">
            <img src="/static/images/fizzbuzz.png" alt="fizzbuzz">
          </div>
          <div>
            <p>FizzBuzz</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'buttons'
}
</script>

<style scoped>

.buttons {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.buttons .button {
  display: inline-block;
  margin: 1%;
  width: 46%;
  border: solid;
  border-color: #83cd29;
  border-radius: 10px;
  text-align: center;
}

.thumbnail > img {
  margin-top: 20px;
  width: 40%;
}
</style>
