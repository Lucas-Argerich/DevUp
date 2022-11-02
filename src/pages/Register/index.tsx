import Button from "../../components/Button";
import { SignInWithProvider } from "../../firebase/auth";

export default function Register() {
  const handleGoogleLogin = () => {
    SignInWithProvider("google");
  };
  const handleGithubLogin = () => {
    SignInWithProvider("github");
  };

  return (
    <>
      <Button onClick={handleGoogleLogin}>Login Google</Button>
      <Button onClick={handleGithubLogin}>Login Github</Button>
    </>
  );
}
