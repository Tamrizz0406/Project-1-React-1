import "./Section.css";
import photo from "../../assets/media.png";

function Section7() {
  return (
    <section className="book">
      <div className="bookWrap">
        <img className="bookImg" src={photo} alt="Consultant" />

        <form className="bookForm">
          <h2 className="bookTitle">Book Appointment</h2>

          <label className="bookField">
            <span className="bookLabel">Name *</span>
            <input className="bookInput" type="text" placeholder="Full Name *" />
          </label>

          <label className="bookField">
            <span className="bookLabel">Email address *</span>
            <input className="bookInput" type="email" placeholder="example@gmail.com" />
          </label>

          <label className="bookField">
            <span className="bookLabel">Departement *</span>
            <select className="bookInput" defaultValue="">
              <option value="" disabled>Please Select</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </label>

          <label className="bookField">
            <span className="bookLabel">Time *</span>
            <select className="bookInput" defaultValue="">
              <option value="" disabled>4:00 Available</option>
              <option>4:00 </option>
              <option>5:00 </option>
              <option>6:00 </option>
            </select>
          </label>

          <button className="bookBtn" type="submit">Book Appointment</button>
        </form>
      </div>
    </section>
  );
}

export default Section7;