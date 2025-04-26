import Modal from "..";
import { ModalContent } from "./styles";

import { EditPostProps } from "./types";
import PostForm from "../../postForm";

const EditPost: React.FC<EditPostProps> = ({ isVisible, setIsVisible }) => {
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} isWide>
      <ModalContent>
        <PostForm isModal isEdit setIsVisible={setIsVisible} />
      </ModalContent>
    </Modal>
  );
};

export default EditPost;
