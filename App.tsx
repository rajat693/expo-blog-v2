import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import {
  FormControl,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import {
  AlertCircleIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
} from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";

const App = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    if (passwordInput?.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      setEmailInput("");
      setPasswordInput("");
    }
  };
  return (
    <GluestackUIProvider>
      <Center className="flex-1 p-6">
        <VStack className="rounded-xl border border-outline-200 bg-background-0 p-6 w-full max-w-[336px]">
          <Heading>Log in</Heading>
          <Text className="mt-2">Login to start using gluestack</Text>
          <FormControl className="w-full mt-4">
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                placeholder="Enter your email"
                value={emailInput}
                //@ts-ignore
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </Input>
          </FormControl>

          <FormControl isInvalid={isInvalid} className="mt-6 w-full">
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={passwordInput}
                //@ts-ignore
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <InputSlot
                onPress={() => setShowPassword(!showPassword)}
                className="mr-3"
              >
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>

            <FormControlHelper>
              <FormControlHelperText>
                Must be atleast 6 characters.
              </FormControlHelperText>
            </FormControlHelper>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText size="sm">
                Atleast 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <HStack className="justify-between my-5">
            <Checkbox value={""} size="sm">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Remember me</CheckboxLabel>
            </Checkbox>

            <Button variant="link" size="sm">
              <ButtonText className="underline underline-offset-1">
                Forgot Password?
              </ButtonText>
            </Button>
          </HStack>

          <Button className="w-full" size="sm" onPress={handleLogin}>
            <ButtonText>Log in</ButtonText>
          </Button>
        </VStack>
      </Center>
    </GluestackUIProvider>
  );
};

export default App;
