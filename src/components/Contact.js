import emailjs from "emailjs-com";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { id: 1, label: "Phone", value: "+0201557809982", icon: "fas fa-envelope" },
  {
    id: 2,
    label: "Mail",
    value: "mohamad@elhadidy.co",
    icon: "fas fa-phone-alt",
  },
  // {
  //   id: 3,
  //   label: "Visit My Studio",
  //   value: "Warnwe Park Streetperrine, FL 33157 New York City",
  //   icon: "fas fa-map-marker-alt",
  // },
];

const Contact = () => {
  const [mailData, setMailData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    reply_to: "",
  });
  const { from_name, from_email, reply_to, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      from_name.length === 0 ||
      from_email.length === 0 ||
      message.length === 0 ||
      reply_to.length === 0
    ) {
      setError(true);
    } else {
      setLoading(true)
      emailjs
        .send(
          "service_so16vcv", // service id
          "template_a0xzc4e", // template id
          mailData,
          "ryFsvBOoQeAx2ou_t" // public api
        )
        .then(
          (response) => {
            setLoading(false)
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ from_name: "", from_email: "", message: "", reply_to: "" });
          },
          (err) => {
            setLoading(false)
            console.log(err.text);
          }
        );
    }
  };

  return (
    <section id="contactus" className="section contactus-section bg-gray">
      <div className="container">
        <SectionTitle
          heading={"Let's Discuss Project"}
          subHeading={"Contact"}
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form">
              <h6>Get in touch</h6>
              <p className="lead">
                {/* Our friendly team would love to hear from you. */}
              </p>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your name</label>
                      <input
                        name="from_name"
                        onChange={(e) => onChange(e)}
                        value={from_name}
                        id="from_name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (from_name.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="from_email"
                        onChange={(e) => onChange(e)}
                        value={from_email}
                        id="from_email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (from_email.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="reply_to"
                        onChange={(e) => onChange(e)}
                        value={reply_to}
                        id="reply_to"
                        placeholder="Subject *"
                        className={`form-control ${
                          error ? (reply_to.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={3}
                        className={`form-control ${
                          error ? (message.length !== 0 ? "" : "invalid") : ""
                        }`}
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: success ? "block" : "none" }}
                    >
                      Message Sent Successfully
                    </span>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme2"
                        type="submit"
                        value="Send"
                        disabled={loading}
                      >
                        {" "}
                        {loading ? 'Sending...'  : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ms-auto col-xl-4 pt-5 pt-lg-0">
            <ul className="contact-infos">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  <div className="icon">
                    <i className={contact.icon} />
                  </div>
                  <div className="col">
                    <h5>{contact.label}</h5>
                    <p>{contact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center pt-5">
              <img src="assets/img/contact.svg" className="svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
