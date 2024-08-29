export default function date() {
  const inputDate = document.querySelector("#input-date");
  const labelDate = document.querySelector("#label-date");

  if (inputDate) {
    inputDate.addEventListener("change", (e) => {
      labelDate.textContent = e.target.value;
    });
  }
}