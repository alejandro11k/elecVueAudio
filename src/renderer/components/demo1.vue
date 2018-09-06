<template>
    <div class="doc">
        <div class="title"> </div>
        <br>
        <button @click="open()"> on/off </button>
        <button @click="times()"> times </button>
    </div>
</template>

<script>
    import Demo1 from '../modules/demo1'
    export default {
      data () {
        var on = false
        var first = false
        return {
          on: on,
          first: first
        }
      },
      methods: {
        open () {
          console.log('clicked!')
          if (this.first) {
            this.first = false
            Demo1.getOscillator().start()
            Demo1.getOscillator().type = 'sine'
            Demo1.getOscillator().frequency.value = 220
            Demo1.trigger()
          } else {
            Demo1.trigger()
          }
        },
        times () {
          Demo1.times(10, 1)
        }
      }
    }
</script>

<style>

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .general {
    display: flex;
    flex-direction: row;
  }

  .doc {
    color: black;
    margin-bottom: 20px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>