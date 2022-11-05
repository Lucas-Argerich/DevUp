import GithubIcon from "../../assets/icons/GithubIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
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
      <Button onClick={handleGoogleLogin} icon={<GoogleIcon />}>
        <span>Sign Up with Google</span>
      </Button>
      <Button onClick={handleGithubLogin} icon={<GithubIcon />}>
        <span>Login Github</span>
      </Button>
    </>
  );
}
