import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import UseGallery from "../services/gallery-service";
import { GalleryModel } from "../models/gallery-model";
import ItemGallery from "../components/item-gallery";
import { RootStackParamList } from "./root-stack-params";
import AppBarHeader from "../components/app-bar-header";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export default function FragmentGallery() {
  const { data, isLoading, isSuccess } = UseGallery();

  return (
    <View style={styles.container}>
      <AppBarHeader title="Gallery" />
      {isLoading && <LoadingView />}
      {isSuccess && <GalleryView galleries={data} />}
    </View>
  );
}

const LoadingView = () => {
  return (
    <View style={styles.contentLoading}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

const GalleryView = ({ galleries }: { galleries: GalleryModel[] }) => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <FlashList
      data={galleries}
      renderItem={({ item }) => (
        <ItemGallery
          gallery={item}
          onItemClick={() => {
            navigation.navigate("DetailGallery", item);
          }}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      estimatedItemSize={galleries.length}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  contentLoading: {
    flex: 1,
    justifyContent: "center",
  },
});
