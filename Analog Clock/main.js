setInterval(() => {
   d = new Date();
   hourTime = d.getHours();
   minutTime = d.getMinutes();
   secondTime = d.getSeconds();
   hourRotation = 30*hourTime+minutTime/2;
   minutRotation = 6*minutTime;
   secondRotation = 6*secondTime;
   
   hours.style.transform = `rotate(${hourRotation}deg)`;
   Minutes.style.transform = `rotate(${minutRotation}deg)`;
   Seconds.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);