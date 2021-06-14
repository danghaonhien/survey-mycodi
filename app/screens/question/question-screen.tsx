import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, FlatList } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"

import { color, spacing } from "../../theme"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.darkPlum,
  flex: 1,
  paddingHorizontal: spacing.large,
}

const HEADER_CONTAINER: ViewStyle = { marginTop: spacing.huge, marginBottom: spacing.medium }

export const QuestionScreen = observer(function QuestionScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const { questionStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER_CONTAINER}>
        <Text preset="header" text="Questions!" />
      </View>
      <FlatList
        data={questionStore.questions}
        renderItem={({ item }) => (
          <View>
            <Text>{item.question}</Text>
          </View>
        )}
      />
    </Screen>
  )
})
