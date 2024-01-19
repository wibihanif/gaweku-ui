import { RegisterForm, RegisterFormHeader } from "../features/register";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="max-h-screen overflow-y-auto">
        <RegisterFormHeader />
        <RegisterForm />
      </div>
    </div>
  );
}
