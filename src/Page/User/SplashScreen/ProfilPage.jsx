import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { rectagle, uploadLoop } from '../../../assets';

export default function profilPage() {
    const navigate = useNavigate();
    // const [imagePreview, setImagePreview] = useState('/placeholder.svg?height=158&width=158');
    const [storeName, setStoreName] = useState('');
    const [storeDescription, setStoreDescription] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNext = () => {
        navigate('/dashboardUser');
    };

    return (
        // Added container for desktop
        <div className="w-full min-h-screen flex justify-center bg-white">
            {/* Main container mobile width */}
            <div className="w-full max-w-md relative bg-[#FFF5F5] min-h-screen font-['Poppins']">
                {/* Header */}
                <div className="absolute top-0  w-full  pointer-events-none">
                    <img
                        src={rectagle}
                        alt="background"
                        className=" w-full object-fill"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 px-5">
                    <div className="pt-8">
                        <h1 className="text-[28px] font-semibold text-white leading-tight">
                            Buat profil toko Anda
                        </h1>
                        <p className="text-[13px] text-white/90 mt-1 leading-normal">
                            Tampilkan identitas toko Anda kepada pelanggan. Isi profil toko dengan informasi lengkap agar terlihat lebih profesional.
                        </p>
                    </div>

                    <div className="flex justify-center mt-36 mb-8">
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="imageUpload"
                            />
                            <label htmlFor="imageUpload" className="cursor-pointer">
                                <div className="w-[158px] h-[158px] rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <img
                                        src={uploadLoop}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Masukkan nama toko anda"
                            value={storeName}
                            onChange={(e) => setStoreName(e.target.value)}
                            className="w-full px-4 h-[52px] rounded-xl border border-[#E5E5E5] focus:outline-none focus:border-[#EE4D2D] text-[15px] placeholder:text-gray-400"
                        />

                        <textarea
                            placeholder="Tulis deskripsi singkat tentang toko anda"
                            value={storeDescription}
                            onChange={(e) => setStoreDescription(e.target.value)}
                            rows={4}
                            className="w-full p-4 rounded-xl border border-[#E5E5E5] focus:outline-none focus:border-[#EE4D2D] resize-none text-[15px] placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* button */}
                <div className="bottom-0 left-0 right-0 p-5 max-w-md mx-auto">
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-full bg-[#EE4D2D] text-white h-[52px] rounded-xl font-medium text-[15px]"
                    >
                        Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}

