import { ModalButtonBlue } from "feature/Modal/ModalButtonBlue";
import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/Modal/ModalCloseButton";
import { ModalContainer } from "feature/Modal/ModalContainer";
import { ModalDim } from "feature/Modal/ModalDim";
import { ModalTitle } from "feature/Modal/ModalTitle";
import { ModalInput } from "feature/Modal/ModalInput";

export function RenameModal() {
  return (
    <ModalPortal>
      <ModalDim />
      <ModalContainer className="modal-container">
        <ModalCloseButton className="modal-exit-button" />
        <ModalTitle className="modal-title">폴더 이름 변경</ModalTitle>
        <ModalInput type="text" className="modal-input"></ModalInput>
        <ModalButtonBlue type="button" className="rename-button">
          변경하기
        </ModalButtonBlue>
      </ModalContainer>
    </ModalPortal>
  );
}
