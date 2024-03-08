import Button from 'react-bootstrap/Button';

const kembali = () => {
    return (
        <div className=" container mt-4 d-flex justify-content-between">
            <Button href='/' variant="primary">Kembali ke Home</Button>
            <Button href='Pembayaran.js' variant="primary">Beli Lagi</Button>
        </div>
    );
  }
  
  export default kembali