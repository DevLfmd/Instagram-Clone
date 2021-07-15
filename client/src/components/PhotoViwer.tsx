import React from "react";
import { StyleSheet, Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

type TProps = {
  imageNames: string[];
  visible: boolean;
  selectedImageIndex: number;
  onSwipeDown?: () => void;
  rightButtons?: {
    update?: {
      active: boolean,
      onPress: () => void
    },
    delete?: {
      active: boolean,
      onPress: () => void
    },
    loading?: boolean
  }
};

const Component: React.FC<TProps> = ({ imageNames, visible, selectedImageIndex, onSwipeDown, rightButtons }) => (  
  <Modal visible={visible} style={{ margin: 0, padding: 0, backgroundColor: "black " }}>
    <ImageViewer
      enableSwipeDown
      swipeDownThreshold={200}
      onSwipeDown={onSwipeDown}
      imageUrls={imageNames.map((item) => ({ url: item })) }
      footerContainerStyle={styles.footerContainerStyle}
      backgroundColor="#000000"
      index={selectedImageIndex}
    />
  </Modal>
);

const styles = StyleSheet.create({
  footerContainerStyle: {
    backgroundColor: "#000000AA",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Component;