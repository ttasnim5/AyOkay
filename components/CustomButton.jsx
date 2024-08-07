import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  // https://github.com/adrianhajdin/aora/blob/main/components/CustomButton.jsx
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={
        `bg-salmon rounded-xl min-h-[62px] flex flex-row justify-center 
        items-center mb-2 mt-2 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-offwhite font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;