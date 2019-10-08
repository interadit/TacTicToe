function mulaigame () {
  for(a=1; a<=9; a++) {
    kotakkosong(a);
  }
  document.balik = "x";
  document.menang = null;
  tampilpesan(document.balik + " mulai game!");
}

function tampilpesan(psn){
  document.getElementById("message").innerText=psn;
}

function langkahberikut(eks){
  if (document.menang !== null) {
    tampilpesan(document.balik + " sudah menang");
  }
  else if (eks.innerText === ''){
    eks.innerText = document.balik;
    ganti();
  }
  else {
    tampilpesan("eks lainnya")
  }
}

function ganti() {
  if(cekpemenang(document.balik)) {
    tampilpesan("selamat! " + document.balik + ", anda menang!");
    document.menang = document.balik;
  }
  else if (document.balik == "x"){
    document.balik = "o";
    tampilpesan("berikutnya " + document.balik + " pilih");
  }
  else {
    document.balik = "x";
    tampilpesan("berikutnya " + document.balik + " pilih");
  }
}

function cekpemenang(langkah) {
  var hasil = false;
  if (cek(1,2,3, langkah)||cek(4,5,6, langkah)||cek(7,8,9, langkah)||cek(1,4,7, langkah)||cek(2,5,8, langkah)||cek(3,6,9, langkah)||cek(1,5,9, langkah)||cek(3,5,7, langkah)) {
    hasil = true;
  }
  return hasil;
}

function cek(x,y,z,langkah) {
  var hasil = false;
  if (kotak(x) == langkah && kotak(y) == langkah && kotak(z) == langkah) {
    hasil = true;
  }
  return hasil;
}

function kotak(angka) {
  return document.getElementById("no"+ angka).innerText;
}

function kotakkosong(angka) {
  document.getElementById("no"+ angka).innerText="";
}