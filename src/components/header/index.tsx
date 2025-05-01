import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
  const { clearUserData } = useAuth();
  return (
    <S.HeaderContent>
      <h1>CodeLeap Network</h1>
      <S.ExitButton
        onClick={() => {
          clearUserData();
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
