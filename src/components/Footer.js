function Footer() {
  return (
    <div id="contact" className="footer">
      <form
        className="left"
        action=""
        method="POST"
        encType="application/x-www-form-urlencoded"
      >
        <div className="textarea-wrapper">
          <textarea name="message" placeholder="write your message..." />
        </div>
        <div className="email-wrapper">
          <input
            type="email"
            name="email"
            placeholder="example123@gmail.com"
            required
          />
          <input className="send-btn" type="submit" />
        </div>
      </form>
      <div className="right">
        <p className="text-underline">privacy policy</p>
        <p className="text-underline">terms and conditions @2021</p>
        <p className="text-underline">
          <small>Sans Road, XY</small>
        </p>
      </div>
    </div>
  );
}

export default Footer;
