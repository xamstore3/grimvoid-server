const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let stories = [
  {id:1, judul:"Selamat Datang!", pesan:"Server GrimVoid AKTIF ✅", pembuat:"Alvaro", waktu: new Date().toLocaleString('id-ID')}
];

app.get('/', (req, res) => res.send("✅ Server GrimVoid AKTIF! Semua bisa akses!"));
app.get('/api/story', (req, res) => res.json({status:"berhasil", data:stories}));

app.post('/api/story/tambah', (req, res) => {
  const {judul, pesan, pembuat} = req.body;
  stories.push({id:stories.length+1, judul:judul||"Tanpa Judul", pesan, pembuat:pembuat||"Anonim", waktu: new Date().toLocaleString('id-ID')});
  res.json({status:"berhasil"});
});

module.exports = app;
