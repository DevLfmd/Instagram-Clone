import React from "react";
import { Modal } from "react-native";

type TProps = { visible: boolean; children?: any; };

const Component: React.FC<TProps> = ({ visible, children }) => (  
    <Modal visible={visible} style={{ margin: 0, padding: 0, backgroundColor: "black " }}>
        {children}
    </Modal>
);

export default Component;