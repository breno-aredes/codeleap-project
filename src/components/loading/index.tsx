import { Oval } from "react-loader-spinner";

import Theme from "../../styles/theme";
import { useLoading } from "../../hooks/useLoading";

const Loading = () => {
  const { loading } = useLoading();

  return (
    <Oval
      height={80}
      width={80}
      color={Theme.colors.primary}
      wrapperStyle={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "3",
      }}
      wrapperClass="spinner"
      visible={loading}
      ariaLabel="oval-loading"
      secondaryColor={Theme.colors.secondary}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loading;
