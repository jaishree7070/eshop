import { selectLoggedIn } from "../redux/reducer/authSlice";
import { useSelector } from "react-redux";
const ShowWhenLoggedIn = (prop) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (isLoggedIn) 
  return(<>{prop.children}</>);
  else return null;
};

export default ShowWhenLoggedIn;
