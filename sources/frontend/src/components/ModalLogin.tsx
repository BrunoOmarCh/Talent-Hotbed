import { useState } from "react";

interface ButtonProps {
  imgUrl: string;
  socialMediaName: string;
}
function Button({ imgUrl, socialMediaName }: ButtonProps) {
  return (
    <button
      className="w-full flex justify-start items-center gap-4 cursor-pointer font-bold border border-gray-300 rounded-3xl py-3 px-16
  hover:bg-black hover:text-white hover:border-black transition"
      style={{ fontSize: 18 }}
    >
      <img width="23" height="23" src={imgUrl} alt={socialMediaName} />
      Sign in with {socialMediaName}
    </button>
  );
}

interface ModalLoginProps {
  setShowModal: (x: boolean) => void;
}
export default function ModalLogin({ setShowModal }: ModalLoginProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register data:", registerData);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/[.83]">
      <div className="relative bg-white rounded-4xl shadow-lg w-full max-w-md mx-auto px-8 pb-14 pt-16">
        {/* Botón de cierre */}
        <button
          className="absolute top-8 right-8 text-gray-400 hover:text-black cursor-pointer transition-colors"
          onClick={() => setShowModal(false)}
        >
          <i className="fa-solid fa-x"></i>
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo_modal.png" alt="Logo de la app" width={65} />
        </div>

        {/* Pestañas */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 font-bold rounded-lg transition ${
              isLogin
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-6 py-2 font-bold rounded-lg transition ${
              !isLogin
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Registrarse
          </button>
        </div>

        {isLogin ? (
          // Formulario de Login
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center mb-4">
              Inicia sesión
            </h2>

            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                id="login-password"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Iniciar Sesión
            </button>
          </form>
        ) : (
          // Formulario de Registro
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center mb-4">
              Crea tu cuenta
            </h2>

            <div>
              <label
                htmlFor="register-username"
                className="block text-sm font-medium mb-2"
              >
                Nombre de usuario
              </label>
              <input
                id="register-username"
                type="text"
                value={registerData.username}
                onChange={(e) =>
                  setRegisterData({ ...registerData, username: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="usuario123"
                required
              />
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="register-email"
                type="email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="register-password"
                className="block text-sm font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                id="register-password"
                type="password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Registrarse
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
