import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";
const SgnupWithGoogle = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={() => loginWithRedirect()}>Sign up with Google</Button>
  );
};

export default SgnupWithGoogle;
