import { Triangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{ justifyContent: "center", marginTop: "20px" }}
      wrapperClass=""
    />
  );
};

export default Loader;
