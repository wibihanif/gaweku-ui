import { LoginForm, LoginFormHeader } from "../features/login";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="max-h-screen overflow-y-auto">
        <LoginFormHeader />
        <LoginForm />
      </div>
    </div>
  );
}
