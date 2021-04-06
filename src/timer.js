// const date1 = Date.now();
// console.log('date1', date1);
// // 1 января 1970 00: 00;

// // разница во времени

// setTimeout(() => {
//   const date2 = Date.now();
//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);

// -------------------------------------------------
const refs = {
  clockDays: document.querySelector('[data-value="days"]'),
  clockHours: document.querySelector('[data-value="hours"]'),
  clockMinutes: document.querySelector('[data-value="mins"]'),
  clockSeconds: document.querySelector('[data-value="secs"]'),
};

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);
      updateClockFace(time);

      console.log(
        `${pad(new Date(deltaTime).getUTCDay())}:${pad(
          new Date(deltaTime).getUTCHours(),
        )}:${pad(new Date(deltaTime).getUTCMinutes())}:${pad(
          new Date(deltaTime).getUTCSeconds(),
        )}`,
      );
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function updateClockFace({ days, hours, mins, secs }) {
  refs.clockDays.textContent = `${days}`;
  refs.clockHours.textContent = `${hours}`;
  refs.clockMinutes.textContent = `${mins}`;
  refs.clockSeconds.textContent = `${secs}`;
}

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
