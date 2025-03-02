document.addEventListener("click", () => {
    const body = document.body;
    const themeColors = [
      "aliceblue",
      "antiquewhite",
      "azure",
      "bisque",
      "ghostwhite",
      "lavender",
      "honeydew",
      "lightcyan",
      "paleturquoise",
      "palegreen",
    ];
  
    document.getElementById("theme-btn").addEventListener("click", () => {
      let chosenColor = themeColors[Math.floor(Math.random() * themeColors.length)];
      body.style.backgroundColor = chosenColor;
    });
  });


 document.getElementById('change-page').addEventListener('click', function() {
    {
        window.location = '/different.side/newPage.html';
      }
 }) 

  let day = document.querySelector('#day');
let fullDate = document.querySelector('#fullDate');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();
day.innerHTML = `${days[date.getDay()]},`;
fullDate.innerHTML = `${months[date.getMonth()]} ${
  date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
} ${date.getFullYear()}`;