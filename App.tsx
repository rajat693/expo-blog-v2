import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "@/components/ui/text";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Text>Hello World</Text>
    </GluestackUIProvider>
  );
}
