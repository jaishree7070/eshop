import { selectLoggedIn } from "../redux/reducer/authSlice";
import { useSelector } from "react-redux";
const ShowWhenNotLoggedIn = (props) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (!isLoggedIn)return(<>{props.children}</>);
  else return null;
};

export default ShowWhenNotLoggedIn;
