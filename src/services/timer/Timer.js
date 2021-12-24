let originalValues;

function isTimeValid({ minutes, seconds }) {
  return minutes > 0 || seconds > 0;
}

function decreaseOne(time) {
  let { minutes, seconds } = JSON.parse(JSON.stringify(time));

  if (seconds > 0) {
    seconds -= 1;
  } else if (minutes > 0) {
    minutes -= 1;
    seconds = 59;
  }

  return { minutes, seconds };
}

class Timer {
  /*
  interface timerValues {
    sessions: Number,
    workTime: { minutes: Number, seconds: Number },
    breakTime: { minutes: Number, seconds: Number },
  }
  */
  constructor(timerValues) {
    originalValues = JSON.parse(JSON.stringify(timerValues));
    Object.freeze(originalValues);

    this.values = JSON.parse(JSON.stringify(timerValues));
  }

  start() {
    this.intervalId = window.setInterval(() => {
      const { workTime, breakTime } = this.values;
      if (isTimeValid(workTime)) {
        this.values.workTime = decreaseOne(workTime);
      } else if (isTimeValid(breakTime)) {
        this.values.breakTime = decreaseOne(breakTime);
      }

      if (!isTimeValid(workTime) && !isTimeValid(breakTime)) {
        this.values.sessions -= 1;

        if (this.values.sessions > 0) {
          this.values.workTime = originalValues.workTime;
          this.values.breakTime = originalValues.breakTime;
        } else {
          this.stop();
        }
      }
    }, 1000);
  }

  stop() {
    window.clearInterval(this.intervalId);
  }

  reset() {
    this.values = JSON.parse(JSON.stringify(originalValues));
    this.stop();
  }
}

export default Timer;
