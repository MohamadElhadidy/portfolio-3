const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="https://www.linkedin.com/in/muhamadelhadidy/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/MohamadElhadidy">
                <i className="fab fa-github" />
              </a>
              <a href="https://twitter.com/MuhamadElhadidy">
                <i className="fab fa-twitter" />
              </a>
              {/* <a href="https://www.facebook.com/people/Mohamad-Elhadidy/61554635861055/">
                <i className="fab fa-facebook-f" />
              </a> */}
            </div>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0">
              © {new Date().getFullYear()} copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
