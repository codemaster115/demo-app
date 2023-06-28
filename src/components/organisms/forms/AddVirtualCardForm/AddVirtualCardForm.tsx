import { useCallback, useMemo } from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ScreenSubContainer,
  BaseKeyboardAvoidingView,
  ScreenContainer,
  Body2,
} from "components/atoms";
import { PrimaryButton } from "components/molecules";
import {
  BankAccountType,
  GetAchPaymentMethodsDocument,
  useCreateDisputeMutation,
} from "services/graphql/generated";
import { useDisableGoBackOnValueTruthiness } from "navigation/hooks";
import { getColorValue } from "theme/utils";
import { useApolloClient } from "@apollo/client";
import { useLayoutAnimationOnChange } from "utils";
import { Form, FormProps } from "../Form";

type AddVirtualCardFormProps = {
  onSuccess: () => void;
};

const schema = z.object({
  cardName: z.string().min(1),
  monthlyLimit: z.number().min(0),
  autoCancellation: z.boolean(),
});

type Schema = z.infer<typeof schema>;

const AddVirtualCardForm = ({ onSuccess }: AddVirtualCardFormProps) => {
  const client = useApolloClient();
  const methods = useForm<Schema>({
    mode: "onChange",
    delayError: 2000, // delay errors for 2 seconds onChangeText
    resolver: zodResolver(schema),
  });
  const [createACHPaymentMethod, { loading, data, error: graphqlError }] =
    useCreateDisputeMutation();

  const error = useMemo(
    () => !!graphqlError || data?.createACHPaymentMethod.__typename?.includes("Error"),
    [data, graphqlError],
  );

  useLayoutAnimationOnChange(loading);

  const toggleAccountType = useCallback(() => {
    methods.setValue("autoCancellation", !methods.getValues("autoCancellation"));
  }, [methods]);

  const fieldConfigurations = useMemo(
    (): FormProps<Schema>["fieldConfigurations"] => ({
      cardName: {
        autoFocus: true,
        autoFocusType: "after-navigation",
        component: "ControlledFormInput",
        labelText: "Card Name",
        name: "cardName",
        placeholder: "Cardholder Name",
        autoCorrect: false,
        spellCheck: false,
      },
      monthlyLimit: {
        labelText: "Monthly Limit",
        component: "ControlledFormInput",
        name: "monthlyLimit",
        placeholder: "0.00",
      },
      autoCancellation: {
        labelText: "Auto-Cancellation",
        component: "ControlledFormInput",
        name: "autoCancellation",
        onPress: toggleAccountType,
      },
    }),
    [toggleAccountType],
  );

  const handleAddVirtualCard = useCallback(
    async ({ cardName, monthlyLimit, autoCancellation }: Schema) => {
      // const result = await createACHPaymentMethod({
      //   variables: {
      //     paymentMethodInput: {
      //       accountNumber,
      //       accountType: convertReadableAccountTypeToBankAccountType(accountType),
      //       bankName,
      //       name,
      //       routingNumber,
      //     },
      //   },
      // });
      // if (
      //   result.data?.createACHPaymentMethod.__typename ===
      //   "MutationCreateACHPaymentMethodSuccess"
      // ) {
      //   try {
      //     await client.refetchQueries({
      //       include: [GetAchPaymentMethodsDocument],
      //     });
      //   } catch {
      //     // TODO improve what happens when ach method has been added but we fail to refetch payment methods
      //   } finally {
      //     onSuccess();
      //   }
      // }
    },
    [client, createACHPaymentMethod, onSuccess],
  );

  const isValid = methods.formState.isValid;

  useDisableGoBackOnValueTruthiness(loading);

  return (
    <>
      <ScreenContainer>
        <BaseKeyboardAvoidingView>
          <ScrollView keyboardShouldPersistTaps={"handled"}>
            <ScreenSubContainer flex={1} paddingTop={"$6"}>
              <Form methods={methods} fieldConfigurations={fieldConfigurations} />
            </ScreenSubContainer>
          </ScrollView>
        </BaseKeyboardAvoidingView>
        <ScreenSubContainer paddingBottom={"$6"}>
          {error ? (
            <Body2 paddingBottom={"$4"} color={"$error"}>
              {"Unable to add account. Please try again."}
            </Body2>
          ) : null}
          <PrimaryButton
            onPress={methods.handleSubmit(handleAddVirtualCard)}
            disabled={!isValid || loading}
          >
            {loading ? (
              <ActivityIndicator size={"small"} color={getColorValue("black")} />
            ) : (
              "Create Card"
            )}
          </PrimaryButton>
        </ScreenSubContainer>
      </ScreenContainer>
    </>
  );
};

export { AddVirtualCardForm };
