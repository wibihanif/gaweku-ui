import { RegisterForm, RegisterFormHeader } from "../features/register";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <RegisterFormHeader />
        <RegisterForm />
      </div>
    </div>
  );
}
