import { StackScreenProps } from "@react-navigation/stack"

export type RootStackParamList = {
	Welcome: undefined
	Login: undefined
	SignUp: undefined
	Main: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	StackScreenProps<RootStackParamList, T>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}