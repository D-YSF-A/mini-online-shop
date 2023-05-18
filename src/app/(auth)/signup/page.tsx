'use client';
import { DBUserApi } from '@/app/libs/dto';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import router from "next/router";
import { useState } from 'react';
import { useMutation } from 'react-query';

const SignUp = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: DBUserApi['create']['request']) => {
      return axios.post('/api/users', data, {
        headers: { 'req-type': 'create' },
      });
    },
    onSuccess(res) {
      router.push('/signin');
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
      const userData: DBUserApi['create']['request'] = {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        address: address,
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
      setErrorMessage('Error creating user');
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
          Prijavite se i kreirajte svoj račun
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          {errorMessage && <div>{errorMessage}</div>}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ime
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prezime
            </label>
            <div className="mt-2">
              <input
                id="surname"
                name="surname"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Adresa
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Telefonski broj
            </label>
            <div className="mt-2">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </div>

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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Potvrdite lozinku
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff6139] sm:text-sm sm:leading-6"
                value={name} onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#ff6d48] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff6139] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6139]"
            >
              Prijavite se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
