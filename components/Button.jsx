import { Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({
  imgUrl,
  minWidth,
  fontSize,
  handlepress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlepress}
    >
      <Image
        source={imgUrl}
        resizeMode="cover"
        style={{ width: 35, height: 40 }}
      />
    </TouchableOpacity>
  );
};
export const RecButton = ({ minWidth, fontSize, handlepress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlepress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
