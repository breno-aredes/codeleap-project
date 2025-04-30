import { toast } from "react-toastify";
import { useUser } from "../../hooks/useUser";
import * as S from "./styles";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
  const { setUsername } = useUser();
  return (
    <S.HeaderContent>
      <h1>CodeLeap Network</h1>
      <S.ExitButton
        onClick={() => {
          setUsername("");
          toast.success("See you soon!");
        }}
      >
        <IoExitOutline size={25} />
        <span>Leave</span>
      </S.ExitButton>
    </S.HeaderContent>
  );
};

export default Header;
