function joinEffect(usr) {
  let rmojTargets = document.getElementsByClassName("rmoj-select");
  for (let i = 0; i < rmojTargets.length; i++) {
    rmojTargets[i].className += " rmoj";
  }

  setTimeout(() => { 
    window.location.href = `./main.html?username=${usr}`;
  }, 500);
}

document.getElementById("entry-uname").addEventListener("keydown", function (key) {
    if (key.code === "Enter" || key.code === "NumpadEnter") {
      joinEffect(document.getElementById('entry-uname').value);
    }
});
