import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { History } from "history";
import React, { ReactElement } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

interface Props {
  open: boolean;
  history?: History;
  modalTitle?: string;
  modalMaxWidth: "xs" | "sm" | "md" | "lg" | "xl" | false;
  height: string;
  children?: any;
  onClose?: () => void;
  direction?: string;
  hasHeader?: boolean;
}

const SimpleModal = ({
  onClose,
  open,
  modalTitle,
  modalMaxWidth,
  height,
  children,
  history,
  direction = "rtl",
  hasHeader = true,
}: Props): ReactElement => {
  const htlmElement: HTMLElement = document.getElementById("modal_root")!;

  return createPortal(
    <Dialog
      className={direction}
      maxWidth={modalMaxWidth}
      fullWidth={true}
      open={open}
      disableBackdropClick={false}
      onClose={onClose}
    >
      {modalTitle && hasHeader && (
        <DialogTitle id="form-dialog-title">
          <div>
            {modalTitle}
            <i
              color="red"
              className="la la-close float-left pointer"
              onClick={(e: any) => {
                onClose && onClose();
              }}
            />
          </div>
        </DialogTitle>
      )}
      <DialogContent className="p-0">
        <div>
          {!modalTitle && hasHeader && (
            <DialogTitle id="form-dialog-title">
              <div>
                <i
                  color="red"
                  className="la la-close float-left"
                  onClick={(e: any) => {
                    onClose && onClose();
                  }}
                />
              </div>
            </DialogTitle>
          )}
          {children}
        </div>
      </DialogContent>
    </Dialog>,
    htlmElement,
  );
};

export default SimpleModal;
