const produkUmkm = [
  {
    nama: "Kopi Black",
    kategori: "Kopi Hitam",
    harga: 50000,
    stok: 1,
    unggulan: true,
  },
  {
    nama: "Kopi Half Black",
    kategori: "Kopi Hitam",
    harga: 150000,
    stok: 12,
    unggulan: false,
  },
  {
    nama: "Kopi Not Black",
    kategori: "Kopi Hitam",
    harga: 200000,
    stok: 0,
    unggulan: false,
  },
  {
    nama: "Kopi White",
    kategori: "Kopi Putih",
    harga: 250000,
    stok: 10,
    unggulan: false,
  },
];

const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function statusStok(stok) {
  if (stok === 0) {
    return { label: "Habis", className: "empty" };
  }

  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }

  return { label: "Tersedia", className: "" };
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");

  if (!grid || !ringkasan) {
    return;
  }

  let jumlahTersedia = 0;
  let markup = "";

  for (const produk of produkUmkm) {
    const status = statusStok(produk.stok);
    const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";

    if (produk.stok > 0) {
      jumlahTersedia = jumlahTersedia + 1;
    }

    const badgeUnggulan = produk.unggulan 
      ? `<span class="badge-unggulan">⭐ Favorit</span>` 
      : "";

    markup = markup + `
      <article class="js-product-card">
        <div class="product-header">
          <h3>${produk.nama}</h3>
          ${badgeUnggulan}
        </div>
        <p>${produk.kategori}</p>
        <p class="price">${formatRupiah.format(produk.harga)}</p>
        <span class="stock-badge ${status.className}">${status.label}</span>
        <p>${labelAksi}</p>
      </article>
    `;
  }

  grid.innerHTML = markup;
  ringkasan.textContent = `${jumlahTersedia} produk tersedia dari ${produkUmkm.length} data.`;
}
document.addEventListener("DOMContentLoaded", renderProduk);



console.table(produkUmkm);