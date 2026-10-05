const form = document.querySelector("#form-kontak");
const previewDemo = document.querySelector("#preview-demo");
const previewForm = document.querySelector("#preview-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  previewDemo.textContent = "Pesan Berhasil Terkirim";
  previewDemo.style.display = "block";

  previewForm.textContent = [
    `Nama: ${data.get("nama")}`,
    `Email: ${data.get("email")}`,
    `WhatsApp: ${data.get("WhatsApp")}`,
    `Paket: ${data.get("paket")}`,
    `Topik: ${data.get("topik")}`,
    `Waktu: ${data.get("waktu")}`,
    `Pesan: ${data.get("pesan")}`,
  ].join("\n");
});