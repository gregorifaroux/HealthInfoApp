import React from "react";
import { Card, CardHeader, Text } from "@ui-kitten/components";

export const CardInfo = ({ status, title, content }) => {
  const Header = () => <CardHeader title={title} />;

  return (
    <Card header={Header} status={status}>
      <Text>{content}</Text>
    </Card>
  );
};
