function Contact(){
    return(
        <>
  <div className="container3">
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name..."
            autoComplete="on"
            required
          />
        </fieldset>

        <fieldset>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Your Surname..."
            autoComplete="on"
            required
          />
        </fieldset>

        <fieldset>
          <input
            type="email"
            name="email"
            id="email"
            pattern="[^ @]*@[^ @]*"
            placeholder="Your E-mail..."
            required
          />
        </fieldset>

        <fieldset>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            required
          ></textarea>
        </fieldset>

        <fieldset>
          <button
            type="submit"
            id="form-submit"
            className="orange-button"
          >
            Send Message Now
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</>

    )
}
export default Contact