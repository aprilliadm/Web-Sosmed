import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import content1 from './dana.jpg';
import content2 from './linkaja.jpg';
import content3 from './ovo.jpg';
import content4 from './permata.jpg';


const Content2 = () => {
	return(
        <div className=" container mt-4 d-flex justify-content-between">
            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content1} />
              <Card.Body>
                <Card.Title>Bayar dengan Dana.ID</Card.Title>
                <Card.Text>
                Nomor Dana kami: 0852-6674-2291
                <br/>
                atau
                </Card.Text>
                <Button href='https://play.google.com/store/apps/details?id=id.dana&hl=id&gl=US' variant="primary">Masuk ke DANA.ID</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content2} />
              <Card.Body>
                <Card.Title>Bayar dengan LinkAja</Card.Title>
                <Card.Text>
                No LinkAja kami : 0852-6674-2291
                <br/>
                atau
                </Card.Text>
                <Button href='https://play.google.com/store/apps/details?id=com.telkom.mwallet' variant="primary">Masuk ke LinkAja</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content3} />
              <Card.Body>
                <Card.Title>Bayar dengan OVO</Card.Title>
                <Card.Text>
                Nomor OVO kami : 0852-6674-2291
                <br/>
                atau
                </Card.Text>
                <Button href='https://play.google.com/store/apps/details?id=ovo.id&hl=id&gl=US' variant="primary">Masuk ke OVO</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content4} />
              <Card.Body>
                <Card.Title>Bayar dengan Bank Permata</Card.Title>
                <Card.Text>
                Nomor Rek. kami :971 0075 79
                <br/>
                atau
                </Card.Text>
                <Button href='https://play.google.com/store/apps/details?id=net.myinfosys.PermataMobileX&hl=id&gl=US' variant="primary">Masuk ke PermataMobileX</Button>
              </Card.Body>
            </Card>
            </div>
	);
}

export default Content2