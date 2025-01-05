import { Link } from 'react-router-dom'
import { logo } from '../../../assets'

export default function RegisterPage() {
    return (
        <div className="w-full min-h-[calc(100vh-72px)] bg-white flex justify-center">
            <div className="w-[390px] min-h-[calc(100vh-72px)]"
                style={{
                    background: 'linear-gradient(180deg, #FFEEE9 33%, #FFC7AD 98%)'
                }}>
                <div className="w-full min-h-screen flex flex-col items-center px-4 py-8 font-poppins mt-[72px]">
                    {/* Logo */}
                    <div className="text-[#FF5C35] text-4xl font-bold mb-16">
                        <img src={logo} alt="referme" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-[#FF5C35] text-3xl font-semibold mb-8">
                    Daftar Akun
                    </h1>

                    {/* Form  */}
                    <form className="w-full space-y-4">
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF5C35] text-gray-700 placeholder-gray-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF5C35] text-gray-700 placeholder-gray-400"
                        />
                        <input
                            type="tel"
                            placeholder="No Handphone"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF5C35] text-gray-700 placeholder-gray-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF5C35] text-gray-700 placeholder-gray-400"
                        />
                        <input
                            type="password"
                            placeholder="Konfirmasi Password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF5C35] text-gray-700 placeholder-gray-400"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#FF5C35] text-white py-3 rounded-lg hover:bg-[#ff4a1a] transition-colors"
                        >
                            Daftar sekarang
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-[#FF5C35]">
                        Sudah punya akun?{' '}
                        <Link to="/login" className="text-[#000000] text-decoration: underline">
                            Login di sini
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

