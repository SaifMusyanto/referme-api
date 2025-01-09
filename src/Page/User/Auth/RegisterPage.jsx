import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../../../assets'

export default function RegisterPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="w-full h-screen flex justify-center bg-white overflow-hidden">
            <div className="w-full max-w-md h-full"
                style={{
                    background: 'linear-gradient(180deg, #FFEEE9 33%, #FFC7AD 98%)'
                }}>
                {/* Content container */}
                <div className="w-full h-full flex flex-col items-center justify-center px-4 font-poppins">
                    {/* Logo */}
                    <div className="text-[#FF5C35] text-4xl font-bold mb-12">
                        <img src={logo} alt="referme" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-[#FF5C35] text-3xl font-semibold mb-8">
                        Daftar Akun
                    </h1>

                    {/* Form  */}
                    <form className="w-full space-y-4" onSubmit={handleSubmit}>
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

