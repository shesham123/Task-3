import Avatar from "../assets/images/avatar-jessica.jpeg";
import Button from "../Components/Button.jsx";

const Section = () => {
  return (
    <>
      <section className="container">
        <div className="container__data">
          <img className="container__data_img" src={Avatar} alt="img-avatar" />
          <p className="container__data_name"> Jessica Randall</p>
          <p className="container__data_adres">London, United Kingdom</p>
          <p className="container__data_work">
            "Front-end developer and avid reader."
          </p>
        </div>
        <div className="container__Button">
          <Button name={"GitHub"} />
          <Button name={"Frontend Mentor"} />          
          <Button name={"LinkedIn"} />
          <Button name={"Twitter"} />
          <Button name={"Instagram"} />
        </div>
      </section>
    </>
  );
};

export default Section;
