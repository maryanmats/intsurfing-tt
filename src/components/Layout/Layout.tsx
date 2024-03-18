import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
      }}
    >
      {children}
    </Container>
  );
};
