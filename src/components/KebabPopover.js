import styled from "styled-components";
import useModal from "../hooks/useModal";
import React from "react";
import ModalDeleteLink from "./Modal/ModalDeleteLink";
import ModalAddToFolder from "./Modal/ModalAddToFolder";

//practice on Styled Component
const PopoverContainer = styled.div`
  margin: 0;
  position: absolute;
  right: -55px;
  top: 30px;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
  background: white;
`;

const PopoverList = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  cursor: pointer;
  row-gap: 0.2rem;
  padding: 0.5rem 1rem;

  &:hover {
    background: var(--gray5-color);
    color: var(--primary-color);
`;

const PopoverListWithModal = ({ modalComponent, label }) => {
  const { showModal, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <PopoverList onClick={handleOpenModal}>{label}</PopoverList>
      {React.cloneElement(modalComponent, {
        isOpen: showModal,
        onClose: handleCloseModal,
      })}
    </>
  );
};

const KebabPopover = ({ url }) => {
  return (
    <PopoverContainer>
      <PopoverListWithModal
        modalComponent={<ModalDeleteLink url={url} />}
        label="삭제하기"
      />
      <PopoverListWithModal
        modalComponent={<ModalAddToFolder url={url} />}
        label="폴더에 추가"
      />
    </PopoverContainer>
  );
};
export default KebabPopover;
