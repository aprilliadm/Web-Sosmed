import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const beli = () => {
    return (
      <div className="tempat container">
          <h3 className="mt-4 fw-bold">Pilih jenis jasa pada form dibawah ini dan lakukan pembayaran</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pilih jenis jasa dan jenis paket</Form.Label>
        <Form.Control type="text" placeholder="Masukkan jenis jasa" />
        <Form.Text className="text-muted">
          Contoh : Beli Subscriber Youtube Paket A.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Masukkan harga tertera</Form.Label>
        <Form.Control type="text" placeholder="Masukkan harga dalam Rp,- " />
        <Form.Text className="text-muted">
          Note : Sesuaikan Nominal dengan harga paket tertera
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Setuju dan lanjutkan" />
      </Form.Group>
      <Button href='Proses' variant="primary" type="submit">
        Proses pembelian
      </Button>
    </Form>
      </div>
    );
  }
  
  export default beli