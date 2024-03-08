import styled from 'styled-components';

const footer = () => {
    return(
        <FooterContainer className="main-footer">
    <div className="main-footer">
        <div className="footer-middle">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h4>Reseller</h4>
                    <ul className="list-unstyled">
                        <li>VIP Partner Program</li>
                        <li>Affiliate Program</li>
                        <li>Caruban.id</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Support</h4>
                    <ul className="list-unstyled">
                        <li>Status Network</li>
                        <li>Google.inc</li>
                        <li>QRIS</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>CV. Sociale Markt</h4>
                    <ul className="list-unstyled">
                        <li>Rumah Produksi Fah -  Lantai 2</li>
                        <li>Jl. Mawar No. 11 Balerejo</li>
                        <li>Madiun 63152</li>
                    </ul>
                </div>
            <div className="col-md-3 col-sm-6">
                <h4>Follow me on Social Media</h4>
                <ul className="list-unstyled">
                    <li>email : fahrizaljr@student.uns.ac.id</li>
                    <li>instagram : @fahrizaljr_</li>
                    <li>twitter : @fahrizalwp</li>
                    <li>facebook : Fahrizal Wisnu Panggalih</li>
                </ul>
            </div>
            </div>
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} - All Rights Reserved By kel2
                </p>
            </div>
        </div>
        </div>
    </div>
    </FooterContainer>
    );
}

export default footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
`;