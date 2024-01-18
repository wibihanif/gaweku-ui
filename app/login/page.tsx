import { LoginForm, LoginFormHeader } from "../features/login";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <LoginFormHeader />
        <LoginForm />
      </div>
    </div>
  );
}
