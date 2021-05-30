import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions"; //앨벙이랑 사진찍기 허용하게
import { Image, ScrollView, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library"; // 카메라 앨범에서 사진 가져오기, 이걸 위해서 permission 필요
import styled from "styled-components";
import Loader from "../../components/Loader";
import constants from "../../constants";
import styles from "../../styles";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 15px;
  background-color: ${styles.blueColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: white;
  font-weight: 600;
`;

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState();
  const [allPhotos, setAllPhotos] = useState();
  const changeSelected = photo => {
    setSelected(photo);
  };
  const getPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync(); // 앨범에서 사진 가져오기
      const [firstPhoto] = assets;
      setSelected(firstPhoto); // 첫 사진 가져오기
      setAllPhotos(assets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const askPermission = async () => {
    try {
      // CAMERA_ROLL에 접근하기위한 허가 얻기
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") { // 허가 얻으면
        setHasPermission(true);
        getPhotos(); // 사진 가져오기
      }
    } catch (e) {
      console.log(e);
      setHasPermission(false);
    }
  };
  const handleSelected = () => {
    navigation.navigate("Upload", { photo: selected });
  };
  useEffect(() => {
    askPermission();
  }, []);
  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          {hasPermission ? (
            <>
              <Image
                style={{ width: constants.width, height: constants.height / 2 }}
                source={{ uri: selected.uri }}
              />
              <Button onPress={handleSelected}>
                <Text>Select Photo</Text>
              </Button>

              <ScrollView
                contentContainerStyle={{
                  flexDirection: "row",
                  flexWrap: "wrap"
                }}
              >
                {allPhotos.map(photo => (
                  <TouchableOpacity
                    key={photo.id}
                    onPress={() => changeSelected(photo)}
                  >
                  <Image
                      source={{ uri: photo.uri }}
                      style={{
                        width: constants.width / 3,
                        height: constants.height / 6,
                        opacity: photo.id === selected.id ? 0.5 : 1
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          ) : null}
        </View>
      )}
    </View>
  );
};
