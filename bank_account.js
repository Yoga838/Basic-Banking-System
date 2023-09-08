
//deklarasi awal variable saldo dengan nilai 0
let saldo = 0

// Referensi ke elemen dengan ID "saldoDisplay"
const saldoLabel = document.getElementById("Display");
// Function untuk memperbarui nilai tampilan saldo
function updateSaldoDisplay() {
  saldoLabel.innerHTML = `${saldo},00-`;
}

//function untuk menambah saldo
function tambahSaldo(){
    //nilai prompt akan di convert ke dalam bilangan desimal(float)
    const value = parseFloat(window.prompt("Masukkan Jumlah Nominal Uang Yang Ingin Ditambahkan"))
    //pengecekan kondisi inputan apakah sudah sesuai atau tidak dengan fungsi pertambahan  
    if (!isNaN(value)  && value >0){
        //jika sesuai saldo akan ditambah sesuah dengan nilai inputan dan akan mengeluarkan message jumlah uang yang ditambahkan dan juga jumlah saldo saat ini ketika selesai ditambahkan
        saldo += value
        alert(`Saldo berhasil di Tambahkan Sejumlah Rp. ${value},00-, Jumlah Saldo Anda Sekarang Rp. ${saldo},00-`)
        updateSaldoDisplay(); // Memanggil fungsi untuk memperbarui tampilan saldo
    }
    else{
        //message yang keluar ketika nilai inputan tidak sesuai
        alert("Input Tidak Valid. Silahkan Masukkan Jumlah Uang Dengan Format Yang Benar!")
    }
}

//function untuk mengurangi saldo
function kurangiSaldo(){
    //nilai prompt akan di convert ke dalam bilangan desimal(float)
    const value = parseFloat(window.prompt("Masukkan Jumlah Nominal Uang Yang Ingin Dikurangi"))
    //pengecekan kondisi inputan apakah sudah sesuai atau tidak dengan fungsi pengurangan
    if(!isNaN(value)&& value >0){
        //pengecekan apakah pengurangan saldo tidak lebih dari saldo yang ada
        if(value <= saldo){
            //jika sesuai saldo akan dikurangi sesuah dengan nilai inputan dan akan mengeluarkan message  jumlah saldo saat ini ketika selesai dipotong
            saldo -= value
            alert(`Saldo Berhasil Dipotong. Sisa Saldo Anda Saat Ini Rp. ${saldo},00-`)
            updateSaldoDisplay(); // Memanggil fungsi untuk memperbarui tampilan saldo
        }
        else{
            //jika saldo tidak mencukupi maka akan mengeluarkan message saldo tidak mencukupi
            alert("Saldo Tidak Cukup Untuk Pengurangan")
        }
    }
    else{
        //message yang keluar ketika nilai inputan tidak sesuai
        alert("Input Tidak Valid. Silahkan Masukkan Jumlah Uang Dengan Format Yang Benar!")
    }
}

