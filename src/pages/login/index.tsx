import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const Auth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const { token } = await response.json();

      localStorage.setItem("token", token);

      router.push("/beranda");
    } catch (error) {
      setMsg("Authentication failed");
      console.error("Error during authentication:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side: Cover Image */}
      <div className="hidden md:flex flex-col items-center justify-center relative h-screen w-full bg-black">
        <div className="absolute inset-0 opacity-50 z-0 bg-[url('/images/loginBg.jpg')] bg-cover bg-center" />
        <div className="z-10 flex items-center">
          <Image src="/logo.png" alt="Logo" width={250} height={250} />
          <div className="text-white w-[50vh]">
            <h1 className=" text-5xl font-bold  font-primary">
              Dashboard Sapit
            </h1>
            <p className="pt-3">
              <span className="font-bold">Dashboard Sapit</span> adalah aplikasi
              web yang digunakan untuk mengelola data warga Desa Sapit dan
              memahami klasifikasi data warga secara efektif.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center bg-primary-50">
        <div className="w-4/6 max-w-2xl p-10 bg-white shadow-2xl rounded-lg">
          <h1 className="text-2xl font-bold text-center text-primary-500">
            Masukan Akun Anda!
          </h1>
          <p className="mb-2 text-center text-gray-600">
            Selamat Datang dan Selamat Mengelola Data Warga Sapit!
          </p>

          {msg && <p className="mb-4 text-center text-red-500">{msg}</p>}

          <form onSubmit={Auth} className="space-y-6">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Checkbox: Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
