function qrGenerator() {
  const qrText = document.querySelector("#qrText");
  const generate = document.querySelector("#generate");
  const qrImage = document.querySelector("#qrImage");
  const clear = document.querySelector("#clear");

  if (qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=30*30&data=${qrText.value}`;
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
generate.addEventListener("click", () => {
  qrGenerator();
});

clear.addEventListener("click", () => {
  qrImage.src = "";
  qrText.value = "";
});
