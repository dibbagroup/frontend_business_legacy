import "./footer.scss"

export const Footer = _ => {
    return (
        <footer className="footer p-5">
            <div className="row ">

                <div className="row-6 icons-div">
                    <hr className="text" />
                    <ul className="list-unstyled icons-footer">
                        <li className="mb-1 icons"><a className="link-secondary text-decoration-none" href="https://instagram.com/dibbabr/"><i className="fab fa-instagram" id="instagram"></i></a></li>
                        <li className="mb-1 icons"><a className="link-secondary text-decoration-none" href="https://instagram.com/dibbabr/"><i className="fab fa-twitter" id="twitter"></i></a></li>
                        <li className="mb-1 icons"><a className="link-secondary text-decoration-none" href="https://instagram.com/dibbabr/"><i className="fab fa-tiktok" id="tiktok"></i></a></li>
                        <li className="mb-1 icons"><a className="link-secondary text-decoration-none" href="https://instagram.com/dibbabr/"><i className="fab fa-facebook" id="facebook"></i></a></li>
                    </ul>
                    <hr className="text" />
                </div>
                <div className="col-12 text-footer">
                    <h5>Dibba Bussines Site</h5>
                    <small className="d-block mb-3 text-muted"> Dibba Bussines &copy; 2022</small>
                    <small className="d-block mb-3 text-muted marg"> <a href="https://instagram.com/dibbabr/" className="link">Sobre nós</a> </small>
                    <small className="d-block mb-3 text-muted marg"></small>
                </div>
            </div>
        </footer>
    )
}