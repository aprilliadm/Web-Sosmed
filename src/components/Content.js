import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import content1 from './twitter.jpg';
import content2 from './youtube.jpg';
import content3 from './ig.jpg';
import content4 from './tt.jpg';


const content = () => {
	return(
        <div className=" container mt-4 d-flex justify-content-between">
            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content1} />
              <Card.Body>
                <Card.Title>Beli Followers Twitter</Card.Title>
                <Card.Text>
                Paket A : 1K Followers = Rp. 20.000
                <br/>
                Paket B : 2K Followers = Rp. 35.000
                <br/>
                Paket C : 5K Followers = Rp. 60.000
                <br/>
                Paket D : 10K Followers = Rp. 100.000
                </Card.Text>
                <Button href="Belisekarang" variant="primary">Klik Disini Untuk Beli</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content2} />
              <Card.Body>
                <Card.Title>Beli Subscriber Youtube</Card.Title>
                <Card.Text>
                Paket A : 1jt Subscriber = Rp. 35.000
                <br/>
                Paket B : 2jt Subscriber = Rp. 50.000
                <br/>
                Paket C : 5jt Subscriber = Rp. 100.000
                <br/>
                Paket D : 10jt Subscriber =Rp. 200.000
                </Card.Text>
                <Button href="Belisekarang" variant="primary">Klik Disini Untuk Beli</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content3} />
              <Card.Body>
                <Card.Title>Beli Followers Instagram</Card.Title>
                <Card.Text>
                Paket A : 1K Followers = Rp. 15.000
                <br/>
                Paket B : 3K Followers = Rp. 40.000
                <br/>
                Paket C : 5K Followers = Rp. 50.000
                <br/>
                Paket D : 10K Followers = Rp. 85.000
                </Card.Text>
                <Button href="Belisekarang" variant="primary">Klik Disini Untuk Beli</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={content4} />
              <Card.Body>
                <Card.Title>Beli Followers Tiktok</Card.Title>
                <Card.Text>
                Paket A : 1K Followers = Rp. 25.000
                <br/>
                Paket B : 2K Followers = Rp. 30.000
                <br/>
                Paket C : 5K Followers = Rp. 60.000
                <br/>
                Paket D : 10K Followers = Rp. 100.000
                </Card.Text>
                <Button href="Belisekarang" variant="primary">Klik Disini Untuk Beli</Button>
              </Card.Body>
            </Card>
            </div>
	);
}

export default content