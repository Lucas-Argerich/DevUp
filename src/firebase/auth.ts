import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";

type Providers = "google" | "github";

export function SignInWithProvider(provider: Providers) {
  const auth = getAuth();
  const selectedProvider =
    (provider === "google" && new GoogleAuthProvider()) ||
    (provider === "github" && new GithubAuthProvider());

  if (selectedProvider) {
    signInWithRedirect(auth, selectedProvider);
  }
}

type EmailProps = {
  email: string;
  password: string;
};

export function signUpWithEmail({ email, password }: EmailProps) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password);
}

export function signInWithEmail({ email, password }: EmailProps) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password);
}
