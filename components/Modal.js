import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function Popup({ modalVisible, setModalVisible, activeItem }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        presentationStyle="overFullScreen"
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{activeItem?.name}</Text>
            <Text style={styles.modalText}>
              Fodmap Level:{" "}
              <Text style={styles.boldModalText}>{activeItem?.fodmap}</Text>
              {"\n"}
              {"\n"}•{" "}
              <Text style={styles.boldModalText}>
                {activeItem?.details.oligos > 1
                  ? "High"
                  : activeItem?.details.oligos < 1
                  ? "Low"
                  : "Medium"}
              </Text>{" "}
              oligos content
              {"\n"}•{" "}
              <Text style={styles.boldModalText}>
                {activeItem?.details.fructose > 1
                  ? "High"
                  : activeItem?.details.fructose < 1
                  ? "Low"
                  : "Medium"}
              </Text>{" "}
              fructose content
              {"\n"}•{" "}
              <Text style={styles.boldModalText}>
                {activeItem?.details.polyols > 1
                  ? "High"
                  : activeItem?.details.polyols < 1
                  ? "Low"
                  : "Medium"}
              </Text>{" "}
              polyols content
              {"\n"}•{" "}
              <Text style={styles.boldModalText}>
                {activeItem?.details.lactose > 1
                  ? "High"
                  : activeItem?.details.lactose < 1
                  ? "Low"
                  : "Medium"}
              </Text>{" "}
              lactose content
            </Text>

            <Pressable
              style={{ ...styles.openButton }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide information</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#1f1f1f",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "blue",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    alignItems: "center",
    backgroundColor: "#CA0B00",
    borderRadius: 5,
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    backgroundColor: "#CA0B00",
    borderRadius: 5,
    padding: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "left",
    color: "white",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  boldModalText: {
    marginBottom: 15,
    textAlign: "left",
    fontWeight: "bold",
    color: "white",
  },
});
