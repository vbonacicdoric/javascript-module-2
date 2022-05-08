document.querySelector("#blueBtn").addEventListener("click", () => {
    document.querySelector(".jumbotron").style.background = "#588fbd";
    document.querySelector("#donateButton ").style.background = "#ffa500";
    document.querySelector("#volunteerButton").style.background = "black";
    document.querySelector("#volunteerButton").style.color = "white";
  });
  document.querySelector("#orangeBtn").addEventListener("click", () => {
    document.querySelector(".jumbotron").style.background = "#f0ad4e";
    document.querySelector("#donateButton ").style.background = "#5751fd";
    document.querySelector("#volunteerButton").style.background = "#31b0d5";
    document.querySelector("#volunteerButton").style.color = "white";
  });
  document.querySelector("#greenBtn").addEventListener("click", () => {
    document.querySelector(".jumbotron").style.background = "#87ca8a";
    document.querySelector("#donateButton ").style.background = "black";
    document.querySelector("#volunteerButton").style.background = "#8c9c08";
  });
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email");
    const name = document.querySelector("#example-text-input");
    const descripcion = document.querySelector("#exampleTextarea");
    if (email.value.length === 0 && !email.value.includes("@")) {
      email.style.background = "red";
    }
    if (name.value.length === 0) {
      name.style.background = "red";
    }
    if (descripcion.value.length === 0) {
      descripcion.style.background = "red";
      console.log("hello");
    }
    if (
      email.value.length !== 0 &&
      name.value.length !== 0 &&
      descripcion.value.length !== 0
    ) {
      alert("thank you for filling out the form");
      email.value = "";
      name.value = "";
      descripcion.value = "";
    }
  });
  