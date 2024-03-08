import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import gbr1 from './gbr1.jpg';
import gbr2 from './gbr2.jpg';
import gbr4 from './gbr4.jpg';


const seputarmedia = () => {
    return(
        <section className="home">
            <div class="container pt-5"> 
            <h2 class="fw-bold pt-4">Pengertian Media Sosial, Sejarah, Fungsi dan Manfaatnya</h2>
            <p class="text-muted">Desember, 14 2022</p>
            <div class="row">
                <div class="col-sm-6">
                    <InputGroup className="pt-2">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        />
                        <InputGroup.Text id="inputGroup-sizing-default" className="bg-info text-light">
                        Cari Dokter
                        </InputGroup.Text>
                    </InputGroup>
                    <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col-sm-6">
                    <img src={gbr1} width={650}></img>
                </div>


                <div className="mt-4 tempat container">
                <p className='text-start'>Kehidupan manusia saat ini tak lepas dari aktivitas di media sosial dan bahkan sudah menjadi kewajiban di setiap menitnya ketika berselancar di internet. Media sosial adalah sarana yang memegang peranan penting pada hampir semua lini dalam masyarakat. Media sosial yang awalnya digunakan menjalin pertemanan dengan orang lain, kini fungsinya semakin bertambah. </p>
                <p className='text-start fs-4'>Pengertian Media Sosial</p>    
                <div className="col-sm-6">
                    <img src={gbr4} width={650}></img>
                </div>
                        <p className='text-start'>Media sosial adalah suatu platform dengan fasilitas yang membuat penggunanya dalam hal ini masyarakat dapat melakukan aktivitas sosial. Aktivitas sosial ini bisa seperti komunikasi sebagai interaksi sosial dengan mengirim atau memberi informasi, berbagi foto dan video dan lain sebagainya sesuai dengan fasilitas yang dimiliki.</p>
                        <p className='text-start' >Pada dasarnya, media sosial merupakan bagian dari pengembangan akibat kemajuan teknologi dalam hal ini internet. Internet yang muncul beberapa dekade lalu berhasil membuat media sosial berkembang dengan cepat, bahkan bertumbuh dengan segala fasilitas atau manfaat baru yang diberikan kepada penggunanya.</p>
                        <p className='text-start' >Secara terus menerus mengalami perkembangan hingga meluas karena cepatnya perkembangan internet hingga saat ini. Karena itulah banyak pengguna yang telah terhubung hanya dengan menggunakan internet, segala jenis informasi bisa didapat dan diproses dengan mudah untuk kemudian disebarkan ke seluruh dunia.</p>
                        <p className='text-start fw-bold'>
                        <Alert.Link href="https://www.sampoernauniversity.ac.id/id/thrifting-adalah/">Baca juga: Pengertian Thrifting, Kelebihan, Manfaat dan Cara Memilih</Alert.Link>
                        </p>
                        <p className='text-start fs-4'>Pengertian Media Sosial Menurut Ahli</p> 
                        <p className='text-start fs-6'>- B.K Lewis</p>
                        <p className='text-start' >Lewat karyanya yang dirilis pada tahun 2010, B.K Lewis menyebut media sosial sebagai label yang merujuk pada teknologi digital dengan potensi membuat orang saling terhubung. Dalam hubungan yang memunculkan interaksi, produksi dan berbagai pesan.</p>
                        <p className='text-start fs-6'>-Chris Borgan</p> 
                        <p className='text-start' >Disebutkan bahwa media sosial salah satu perangkat yang muncul sebagai alat komunikasi dengan berisi berbagai kemungkinan dalam menciptakan bentuk dan gaya interaksi baru seiring perkembangan dan kemajuan teknologi.</p>
                        <p className='text-start fs-6'>-Dave Kerpen</p> 
                        <p className='text-start' >Dave Kerpen menyebut media sosial dengan definisi merujuk pada tempat berkumpulnya gambar, video, tulisan dan hubungan interaksi dalam jaringan. Kondisi ini berlaku untuk individu maupun antarkelompok seperti organisasi.</p>
                        <p className='text-start fs-4'>Sejarah Media Sosial</p> 
                        <p className='text-start'>Sudah sejak dahulu kala media sosial muncul, tepatnya pada 24 Mei 1844 yang awalnya hanya serangkaian titik dan garis elektronik diketik dengan menggunakan mesin telegraf. Samuel Morse saat itu mengirim pesan telegraf untuk kali pertama kepada publik, dasar komunikasi digital bersamaan muncul lewat asal usul internet modern.</p>
                        <p className='text-start'>Pelopornya Advanced Research Projects Agency Networks (Arpanet) yang awalnya menciptakan jaringan untuk Departemen Pertahanan Amerika Serikat guna mempermudah komunikasi dengan para ilmuwan dari empat universitas saat itu dan saling berbagi perangkat lunak, perangkat keras hingga data lainnya.</p>
                        <p className='text-start'>Jaringan digital lebih luas diluncurkan pada 1987 dan diberi nama NSFNET, hingga berjalan sampai satu dekade hingga 1997. Tumbuh kembang internet terjadi sekitar tahun 1980 hingga 1990, dalam masa itu potensi dalam memperkenalkan layanan publik komunikasi online muncul. Di antaranya seperti CompuServe, America Online dan Prodigy.</p>
                        <p className='text-start'>Dan mendorong kemunculan Six Degrees yang mulai diluncurkan pada 1997 sebagai media sosial pertama yang membuat pengguna saling terhubung dengan kontak dunia nyata. Membuat profil di dalam database juga sudah bisa dilakukan saat itu, meskipun kemunculan Six Degrees sangat singkat dan hanya bertahan hingga 2001.</p>
                        <p className='text-start'>Saat itu pula inovasi dalam dunia komunikasi internet muncul, lahirlah Friendster yang berhasil menarik jutaan pengguna. Hanya dengan melakukan pendaftaran, disusul Linkedln yang lahir pada 2002. Layanan sosial jaringan yang selanjutnya muncul di tahun 2003, MySpace dan menjadi paling banyak dikunjungi di tahun 2006.</p>
                        <p className='text-start'>Meskipun usianya juga tak lama setelah pada 2008 lahirlah Facebook, menjelma sebagai media sosial raksasa di dunia internet pada masa kemunculannya. Google pun bahkan kalah, produk keluaran mereka Google+ tak memiliki umur panjang seiring kalah pamor dengan Facebook yang saat itu menjadi sosial terbesar di dunia internet.</p>
                        <p className='text-start fs-4'>Fungsi Media Sosial</p> 
                        <p className='text-start'>Awalnya media sosial diciptakan sebagai alat komunikasi, namun seiring perkembangan zaman dan teknologi ada banyak sekali manfaat yang diberikan dari media sosial. Baik yang berkaitan dengan interaksi sosial, hingga dijadikan sebagai alat dalam memudahkan jual-beli. Berikut beberapa fungsi yang diberikan media sosial dalam kehidupan terlepas adanya dampak negatif media sosial.</p>
                        <p className='text-start fs-6'>-Komunikasi</p> 
                        <p className='text-start'>Fungsi pertama dari media sosial adalah membangun ekosistem komunikasi yang baik bagi para pengguna. Komunikasi bagi seluruh orang di dunia, berkumpul dalam satu tempat meski tak bertemu secara langsung. Media sosial berhasil dalam membangun komunikasi tanpa batasan waktu dan geografi.</p>
                        <p className='text-start fs-6'>-Branding</p> 
                        <p className='text-start'>Media sosial selalu berkembang dan memberi berbagai kebutuhan bagi manusia, termasuk dalam hal branding. Membangun citra diri di mata masyarakat, pengguna media sosial memiliki cara tersendiri dalam melakukan branding menggunakan media sosial. Inilah yang membuat media sosial terlihat seperti dunia nyata.</p>
                        <p className='text-start fs-6'>-Tempat Usaha</p> 
                        <p className='text-start'>Sebagai tempat dalam melakukan bisnis, sosial media perlahan mengalami perkembangan dalam hal usaha atau bisnis bagi setiap pengguna. Bahkan media sosial yang digunakan sebagai tempat bisnis bisa berlaku dan berjalan selama 24 jam. Media sosial terbukti menjadi sangat memudahkan pengguna dalam hal membangun bisnis secara nyata.</p>
                        <p className='text-start fs-6'>-Marketing</p> 
                        <p className='text-start'>Kemudahan dalam mengakses media sosial menjadikannya sebagai platform dalam menciptakan layanan mempermudah melakukan bisnis termasuk dampak positif media sosial. Cara ini terbukti efektif untuk meningkatkan keuntungan dan memudahkan pengguna dalam mendapatkan kebutuhan. Selain itu bagi perusahaan juga sangat bermanfaat ketika akan memasarkan produk.</p>
                        <p className='text-start fs-4'>Jenis Media Sosial</p> 
                        <p className='text-start fs-6'>-Layanan Blog</p> 
                        <p className='text-start'>Disebut juga sebagai layanan jurnal pribadi dalam internet, media sosial memang memiliki fungsi sebagai penyebar informasi. Blogger menjadi sebutan bagi mereka yang menyebarkan informasi melalui media sosial atau platform tertentu. Pada jamannya layanan blog menjadi hal yang lagi viral di media sosial.</p>
                        <p className='text-start fs-6'>-Social Network</p> 
                        <p className='text-start'>Termasuk jenis layanan blog kecil atau mikro, fungsi dari layanan ini nyaris sama seperti blog namun media sosial yang satu ini menyediakan halaman yang lebih ringkas. Layanan mikroblog dengan kecepatan lebih baik, jika dibandingkan dengan blog. Contoh media sosial pun beragam, dapat seperti Facebook dan Twitter.</p>
                        <p className='text-start fs-6'>-Media Sharing</p> 
                        <p className='text-start'>Seperti YouTube dan Soundcloud yang berfungsi sebagai layanan dengan keutamaan membagikan produk hasil dari media sosial. Pada dasarnya memang memiliki fokus utama bagi pengguna saling berbagi produk atau konten dari media sosial, seperti foto, video, audio dan lain sebagainya. Instagram menjadi salah satunya, bahkan sangat populer hingga saat ini.</p>
                        <p className='text-start fs-4'>Manfaat Media Sosial</p> 
                        <div className="col-sm-6">
                    <img src={gbr2} width={650}></img>
                        </div>
                        <p className='text-start fs-6'>-Sarana Belajar</p> 
                        <p className='text-start'>Beberapa platform atau penyedia media sosial dapat dimanfaatkan sebagai tempat untuk belajar, seperti hanya dengan mendengarkan dan menyampaikan. Hal ini terkait informasi yang ingin didapatkan, media sosial sangat berguna untuk berbagi informasi selain dipakai menjalin komunikasi dengan orang lain.</p>
                        <p className='text-start fs-6'>-Sarana Berbagai Hal</p> 
                        <p className='text-start'>Dalam hal ini seperti dokumentasi, administrasi dan integrasi yang bisa dilakukan oleh pengguna media sosial. Pada dasarnya aplikasi media sosial memang dijadikan sebagai tempat menyimpan berbagai produk seperti konten, memudahkan bagi masyarakat menerima informasi, mengolah hingga kemudian menyebarkan.</p>
                        <p className='text-start fw-bold'>Referensi</p>
                        <p className='text-start fw-bold'>
                        <Alert.Link href="https://hot.liputan6.com/read/4844021/pengertian-media-sosial-adalah-laman-dalam-jaringan-sosial-ini-fungsi-dan-jenis-jenisnya">Liputan 6 Media Sosial Adalah</Alert.Link>
                        </p>

                </div>
            </div>
        </div>
        </section>
    )
}

export default seputarmedia;

<ListGroup.Item><p>
     <Alert.Link href="https://www.sampoernauniversity.ac.id/id/akuntansi-perpajakan-dunia-perkuliahan-prospek-kerja/">Akuntansi Perpajakan: Dunia Perkuliahan & Prospek Kerja</Alert.Link>
                        </p></ListGroup.Item>

<ListGroup.Item><p>
     <Alert.Link href="https://www.sampoernauniversity.ac.id/id/sistem-informasi-akuntansi/">Sistem Informasi Akuntansi: Arti, Perkuliahan, & Prospek Kerja</Alert.Link>
                        </p></ListGroup.Item>

<ListGroup.Item><p>
     <Alert.Link href="https://www.sampoernauniversity.ac.id/id/jurusan-ilmu-komputer-keunggulan-prospek-kerja/">Jurusan Ilmu Komputer: Keunggulan & Prospek Kerja</Alert.Link>
                        </p></ListGroup.Item>

<ListGroup.Item><p>
     <Alert.Link href="https://www.sampoernauniversity.ac.id/id/mari-berkenalan-dengan-fakultas-bisnis-sampoerna-university/">Mari Berkenalan dengan Fakultas Bisnis Sampoerna University</Alert.Link>
                        </p></ListGroup.Item>

<ListGroup.Item><p>
     <Alert.Link href="https://www.sampoernauniversity.ac.id/id/kisah-alumn/">Kisah Alumni: Beasiswa 100% & Berkarir di Perusahaan Luar Negeri</Alert.Link>
                        </p></ListGroup.Item>


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import content1 from './twitter.jpg';
import content2 from './youtube.jpg';
import content3 from './ig.jpg';
import content4 from './tt.jpg';
import lit from './lit.jpg';
import fb from './fb.jpg';
import tan from './tan.jpg';
import tin from './tin.jpg';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function BasicExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return(
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Beli Sekarang</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <h3>Stok : 19</h3>
        <Form.Label>Nama</Form.Label>
        <Form.Control
        type="name" placeholder='Masukkan nama anda'
        />
        <Form.Label>Pilih Paket</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Pilih Paket Yang Ingin Dibeli</option>
          <option value="1">Paket A</option>
          <option value="2">Paket B</option>
          <option value="3">Paket C</option>
          <option value="4">Paket D</option>
        </Form.Select>

        
        <Form.Label>Tanggal</Form.Label>
        <Form.Control
        type="date"
        />


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button href='BeliSekarang' variant="primary">Lanjut</Button>
        </Modal.Footer>
      </Modal>


     <h2 class="fw-bold pt-4">Produk Yang Tersedia</h2>
    <div className=" container mt-5 d-flex justify-content-between">
        <Card className='kart' style={{ width: '19rem' }}>
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
            <Button variant="primary" onClick={handleShow}>Klik Disini Untuk Beli</Button>
          </Card.Body>
        </Card>

        <Card className='kart' style={{ width: '19rem' }}>
          <Card.Img variant="top" src={content2} />
          <Card.Body>
            <Card.Title>Beli Subscriber Youtube</Card.Title>
            <Card.Text>
            Paket A : 50K Subs = Rp. 35.000
            <br/>
            Paket B : 65K Subs = Rp. 50.000
            <br/>
            Paket C : 120K Subs = Rp. 100.000
            <br/>
            Paket D : 250K Subs =Rp. 200.000
            </Card.Text>
            <Button  variant="primary">Klik Disini Untuk Beli</Button>
          </Card.Body>
        </Card>

        <Card className='kart' style={{ width: '19rem' }}>
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

        <Card className='kart' style={{ width: '19rem' }}>
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

    <div className=" container mt-4 d-flex justify-content-between">
        <Card className='kart' style={{ width: '19rem' }}>
          <Card.Img variant="top" src={fb} />
          <Card.Body>
            <Card.Title>Beli Followers Facebook</Card.Title>
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

        <Card className='kart' style={{ width: '19rem' }}>
          <Card.Img variant="top" src={lit} />
          <Card.Body>
            <Card.Title>Beli Follower Litmatch</Card.Title>
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

        <Card className='kart' style={{ width: '19rem' }}>
          <Card.Img variant="top" src={tan} />
          <Card.Body>
            <Card.Title>Beli Followers Tantan</Card.Title>
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

        <Card className='kart' style={{ width: '19rem' }}>
          <Card.Img variant="top" src={tin} />
          <Card.Body>
            <Card.Title>Beli Followers Tinder</Card.Title>
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
        </>

);
}

export default BasicExample;