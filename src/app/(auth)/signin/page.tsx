"use client";
import { DBUserApi } from "@/app/libs/dto";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "react-query";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: DBUserApi["create"]["request"]) => {
      return axios.post("/api/users", data, {
        headers: { "req-type": "login" },
      });
    },
    onSuccess(res) {
      router.push("/shops");
    },
    onError: (axiosError) => {
      // toast.error(`Signup not successful`, {
      //   autoClose: 3000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   progress: undefined,
      //   theme: 'colored',
      // });
    },
  });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const userData: any = {
        email: email,
        password: password,
      };
      mutation.mutate(userData);
      // setName("");
      // setSurname("");
      // setPhone("");
      // setEmail("");
      // setAddress("");
      // setPassword("");
      // setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Error login");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/images/lightLogo.png"
          alt="logo"
          width={385}
          height={175}
          className="object-contain"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Prijavite se na svoj račun
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-mail adresa
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Lozinka
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="text-sm flex justify-end">
              <a
                href="/emailConfirmation"
                className="font-semibold text-[#ff6139] hover:text-[#ff6d48]"
              >
                Zaboravili ste lozinku?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#ff6d48] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff6139] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6139]"
            >
              Prijavite se
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Niste član?{" "}
          <a
            href="/signup"
            className="font-semibold leading-6 hover:text-[#ff9a81] text-[#ff6d48]"
          >
            Kreirajte svoj račun ovdje
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
