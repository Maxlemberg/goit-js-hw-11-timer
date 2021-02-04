const refs = {
  dayRef: document.querySelector("[data-value=days]"),
  hourRef: document.querySelector("[data-value=hours]"),
  minRef: document.querySelector("[data-value=mins]"),
  secRef: document.querySelector("[data-value=secs]"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  addTimer() {
    let time;

    const timerId = setInterval(() => {
      let timeNow = Date.now();
      const curentTime = this.targetDate.getTime();

      if (timeNow >= curentTime) {
        clearInterval(timerId);
      } else {
        time = curentTime - timeNow;

        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(
          Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        );
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        refs.dayRef.textContent = `${days}`;
        refs.hourRef.textContent = `${hours}`;
        refs.minRef.textContent = `${mins}`;
        refs.secRef.textContent = `${secs}`;
      }
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(2021, 01, 05, 20),
});

timer.addTimer();
