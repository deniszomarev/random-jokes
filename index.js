async function getJoke() {
  const isButtonChecked = document.getElementById("toggle-button").checked;
  const urlTemp = isButtonChecked
    ? "assets/json/chuck-jokes-ru.json"
    : "https://api.chucknorris.io/jokes/random";
  const audio = document.getElementById("audio");

  audio.pause();
  audio.currentTime = 0;
  audio.play();

  const responce = await fetch(urlTemp);
  const data = await responce.json();

  if (!isButtonChecked) {
    document.getElementById("joke").innerHTML = data.value;
  } else {
    const rand = Math.floor(Math.random() * data.length);
    document.getElementById("joke").innerHTML = data[rand].text;
  }
}

getJoke();
