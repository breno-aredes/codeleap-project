import styled, { keyframes } from "styled-components";
import Theme from "../../styles/theme";
import { useLoading } from "../../hooks/useLoading";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${Theme.colors.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
`;

const CustomLoading = () => {
  const { loading } = useLoading();

  if (!loading) {
    return null;
  }

  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default CustomLoading;
