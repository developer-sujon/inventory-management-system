//External Import
import NotFoundImg from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center items-center animated fadeIn">
      <img className="animated fadeIn" src={NotFoundImg} alt="404" />
    </div>
  );
};
export default NotFound;
