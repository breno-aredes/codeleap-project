import Modal from "..";
import { ButtonContent } from "../../../styles/globalStyles";
import Button from "../../button";
import { ModalContent } from "./styles";

import { deletePostProps } from "./types";

const DeletePost: React.FC<deletePostProps> = ({
  isVisible,
  setIsVisible,
  onConfirm,
}) => {
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} isWide>
      <ModalContent>
        <h1>Are you sure you want to delete this item?</h1>
        <ButtonContent>
          <ButtonContent>
            <Button color="white" onClick={() => setIsVisible(false)}>
              Cancel
            </Button>
            <Button color="red" onClick={onConfirm}>
              Delete
            </Button>
          </ButtonContent>
        </ButtonContent>
      </ModalContent>
    </Modal>
  );
};

export default DeletePost;
