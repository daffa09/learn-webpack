import _ from "lodash";

const mahasiswa = [
  {
    nama: "daffa",
    email: "daffa@gmail.com",
    jurusan: "teknik informatika",
  },
  { nama: "fathan", email: "fathan@gmail.com", jurusan: "teknik informatika" },
  { nama: "grey", email: "grey@gmail.com", jurusan: "teknik informatika" },
];

const mhs = _.find(mahasiswa, { nama: "daffa" });
console.log(mhs);
