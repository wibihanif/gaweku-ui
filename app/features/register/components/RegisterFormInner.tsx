import { useFormikContext } from "formik";
import { RegisterFormInput } from "../types";
import { MouseEventHandler } from "react";

interface RegisterFormInnerProps {
  toLoginPage: () => void;
}

export const RegisterFormInner: React.FC<RegisterFormInnerProps> = ({
  toLoginPage,
}) => {
  const { errors, handleSubmit, getFieldProps } =
    useFormikContext<RegisterFormInput>();

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-8">
      <div className="w-[384px]">
        <label className="text-sm text-black">Email Address</label>
        <input
          type="email"
          id="email"
          className="bg-white border block w-full p-2.5 rounded-md text-sm placeholder-gray-400 placeholder-shown:font-light"
          placeholder="Enter email address"
          required
          {...getFieldProps("email")}
        />
        {errors.email && (
          <p className="pt-2 text-xs font-light text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div className="w-[384px]">
        <label className="text-sm text-black">Password</label>
        <input
          type="password"
          id="password"
          className="bg-white border block w-full p-2.5 rounded-md text-sm placeholder-gray-400 placeholder-shown:font-light"
          placeholder="Enter password"
          required
          {...getFieldProps("password")}
        />
        {errors.password && (
          <p className="pt-2 text-xs font-light text-red-500" role="alert">
            {errors.password}
          </p>
        )}
      </div>
      <div className="w-[384px]">
        <label className="text-sm text-black">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="bg-white border block w-full p-2.5 rounded-md text-sm placeholder-gray-400 placeholder-shown:font-light"
          placeholder="Enter confirm password"
          required
          {...getFieldProps("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="pt-2 text-xs font-light text-red-500" role="alert">
            {errors.confirmPassword}
          </p>
        )}
      </div>
      <button
        className="text-sm bg-[#B43030] w-[384px] h-[48px] rounded-lg text-white font-semibold mt-4"
        onClick={handleSubmit as unknown as MouseEventHandler<HTMLSpanElement>}
      >
        Register
      </button>
      <div className="text-sm flex gap-1">
        <span>Already have an account?</span>
        <span
          className="text-[#B43030] font-semibold cursor-pointer hover:underline"
          onClick={() => toLoginPage()}
        >
          Sign In
        </span>
      </div>
    </div>
  );
};
