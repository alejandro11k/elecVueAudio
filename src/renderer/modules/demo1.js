'use strict'

function Demo1 () {
  this.context = new AudioContext()
  this.context.audioWorklet.addModule('./static/bypass-processor.js').then(() => {
    this.oscillator = new OscillatorNode(this.context)
    this.gainNode = new GainNode(this.context)
    this.bypasser = new AudioWorkletNode(this.context, 'bypass-processor')
    this.oscillator.connect(this.gainNode)
    this.gainNode.connect(this.context.destination)
  })
}

Demo1.prototype.getOscillator = function () {
  return this.oscillator
}

Demo1.prototype.start = function () {
  // this.oscillator.connect(this.context.destination)
}

Demo1.prototype.disconnect = function () {
  // this.oscillator.stop()
  // this.oscillator.disconnect(this.context.destination)
}

Demo1.prototype.pulse = function () {
  this.currentTime = this.context.currentTime
  console.log(this.currentTime)
  this.gainNode.gain.value = 5
  this.oscillator.frequency.value = 220
  while (this.context.currentTime < this.currentTime + 0.2) {
  }
  this.gainNode.gain.value = 0
  // this.gainNode.gain.exponentialRampToValueAtTime(0.1, this.currentTime + 0.5)
}

Demo1.prototype.times = function (times, space) {
  for (let i = 1; i < times; i++) {
    this.pulse()
    this.currentTime = this.context.currentTime
    while (this.context.currentTime < this.currentTime + space) {
    }
  }
}

Demo1.prototype.getOscillator = function () {
  return this.oscillator
}

Demo1.prototype.destroyOsc = function () {
  this.oscillator = null
  this.oscillator = new OscillatorNode(this.context)
}

Demo1.prototype.trigger = function () {
  this.oscillator.start()
  this.currentTime = this.context.currentTime
  console.log(this.currentTime)
  this.oscillator.frequency.setValueAtTime(150, this.currentTime)
  this.gainNode.gain.setValueAtTime(0.8, this.currentTime)
  this.oscillator.frequency.exponentialRampToValueAtTime(0.01, this.currentTime + 0.5)
  this.gainNode.gain.exponentialRampToValueAtTime(0.01, this.currentTime + 0.5)
  while (this.context.currentTime < this.currentTime + 0.55) {
  }
  this.gainNode.disconnect(this.context.destination)
  this.oscillator.disconnect(this.gainNode)
  this.destroyOsc()
  this.oscillator.connect(this.gainNode)
  this.gainNode.connect(this.context.destination)
  /*
  for (let i = 1; i < 10; i++) {
    this.currentTime = this.context.currentTime
    console.log(this.currentTime)
    while (this.context.currentTime < this.currentTime + 1.5) {
    }
    this.currentTime = this.context.currentTime
    this.oscillator.frequency.setValueAtTime(200, this.currentTime)
    this.gainNode.gain.setValueAtTime(0.8, this.currentTime)
    this.oscillator.frequency.exponentialRampToValueAtTime(0.01, this.currentTime + 0.5)
    this.gainNode.gain.exponentialRampToValueAtTime(0.01, this.currentTime + 0.5)
  }
  */
}

export default new Demo1()
