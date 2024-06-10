import React, { useCallback } from "react";
import { StyleSheet } from "react-native";

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";

interface BottomSheetProps extends BottomSheetModalProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  disableClose?: boolean;
}

export function BottomSheet({
  enableDynamicSizing = true,
  bottomSheetModalRef,
  disableClose,
  enablePanDownToClose,
  children,
  ...props
}: BottomSheetProps) {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={disableClose ? "none" : "close"}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [disableClose]
  );
  return (
    <BottomSheetModal
      enablePanDownToClose={enablePanDownToClose || !disableClose}
      backdropComponent={renderBackdrop}
      ref={bottomSheetModalRef}
      style={styles.bottomSheetContainer}
      enableDynamicSizing={enableDynamicSizing}
      {...props}
    >
      {children}
    </BottomSheetModal>
  );
}

const bottomSheetBorderRadius = 30;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    borderTopLeftRadius: bottomSheetBorderRadius,
    borderTopRightRadius: bottomSheetBorderRadius,
    overflow: "hidden",
  },
});
