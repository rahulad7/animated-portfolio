import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="text-container">
        <p className="contact-heading">Let’s build something together 🤝</p>
        <p className="contact-hit">Don't be shy! Hit me up! 👇</p>
      </div>
      <div className="form-container">
        <form>
            <input type="text" required placeholder="Enter your Name"/>
            <input type="email" required placeholder="Enter your Email"/>
            <textarea rows={8} placeholder="Enter your Message"></textarea>
            <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
