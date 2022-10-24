//External Import
import { useSelector } from "react-redux";

const FullScreenLoader = () => {
  const { IsLoading } = useSelector((state) => state.Loader);

  return (
    <div className={IsLoading ? "loading__overlay" : "d-none"}>
      <div className="indeterminate"></div>
    </div>
  );
};

export default FullScreenLoader;
