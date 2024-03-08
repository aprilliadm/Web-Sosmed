const bayar = () => {
  return (
    <div className="tempat container">
        <h3 className="mt-4 fw-bold">Petunjuk Cara Pembayaran</h3>
        <p className='text-start fs-4'>Cara Bayar dengan Dana</p>
        <p className='fw-bold'> Apabila kamu belum pernah menghubungkan akun DANA sebelumnya:</p>
        <p className='text-start'>1. Verifikasi nomor HP di web ini, dan pastikan nomor HP sama dengan akun DANA kamu.<br/>
2. Pilih metode pembayaran pada saat checkout, lalu pilih “Uang Elektronik” kemudian pilih “DANA”. Klik “Bayar sekarang”.<br/>
3. Selanjutnya kamu akan diarahkan ke laman untuk menghubungkan akun Blibli dengan DANA.<br/>
4. Masukkan kode verifikasi OTP dan PIN untuk menghubungkan akun dan melanjutkan transaksi.<br/>
5. Jika pembayaran berhasil, akun DANA kamu akan langsung terhubung ke halaman pembayaran web ini.
        </p>
        <p className='fw-bold'> Apabila kamu sudah menghubungkan akun DANA:</p>
        <p className='text-start'>1. Pilih metode pembayaran pada saat checkout, lalu pilih “Uang Elektronik”, pilih “DANA”, kemudian klik “Bayar sekarang”<br/>
2. Selanjutnya kamu akan diarahkan ke laman konfirmasi nominal transaksi dengan DANA.<br/>
3. Cek kembali nominal transaksi kamu, lalu jenis untuk membayar.<br/>
4. Klik “Bayar” lalu masukkan PIN DANA kamu.<br/>
5. Pembayaran berhasil.
        </p>
        <p className='text-start fs-4'>Cara Bayar dengan Link Aja</p>
        <p className='fw-bold'> Link Aja dengan QRIS:</p>
        <p className='text-start'>1. Pilih ikon Bayar diaplikasi LinkAja <br/> 2. Scan QR/masukkan Kode Bayar/Kode Token sesuai dengan metode pembayaran yang tersedia di Merchant<br/>3. Masukkan nominal yang perlu dibayarkan serta cek kembali nominal yang ditagihkan<br/>4. Masukkan PIN LinkAja untuk memproses pembayaran<br/>5. Terima notifikasi transaksi berhasil</p>
    </div>
  );
}

export default bayar