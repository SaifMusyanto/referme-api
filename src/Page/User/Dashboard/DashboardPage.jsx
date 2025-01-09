import React from 'react';
import { Search } from 'lucide-react';
import { pen, profil, kategori2, kategori3, produk1, produk2 } from '../../../assets';


export default function DashboardPage() {
    const categories = [
        { id: 1, name: 'Gamis', image: kategori2 },
        { id: 2, name: 'Niqab', image: kategori3 },
        { id: 3, name: 'Dress', image: kategori2 },
    ];

    const newProducts = [
        {
            id: 1,
            name: 'Jual Gamis Simple Elegan Syari Terbaru',
            image: produk1,
        },
        {
            id: 2,
            name: 'Baju remaja gamis polos kain katun',
            image: produk2,
        },
        {
            id: 3,
            name: 'Baju remaja gamis polos kain katun',
            image: produk1,
        },
    ];

    const products = [
        {
            id: 1,
            name: 'Jual Gamis Simple Elegan Syari',
            image: produk1,
        },
        {
            id: 2,
            name: 'Baju remaja gamis polos kain katun',
            image: produk2,
        },
        {
            id: 3,
            name: 'Baju remaja gamis polos kain katun',
            image: produk1,
        },
        {
            id: 4,
            name: 'Baju remaja gamis polos kain katun',
            image: produk2,
        },
    ];

    return (
        <div className="w-full h-screen flex justify-center bg-white overflow-hidden">
            <div className="w-full max-w-md h-full bg-[#FFF5F5] font-['Poppins']">
                {/* Header */}
                <div className="bg-[#EE4D2D] p-4 rounded-b-3xl relative">
                    <div className="absolute top-4 right-4">
                        <img src={pen} alt="edit" className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-[92px] h-[92px] rounded-full border-2 border-white overflow-hidden">
                            <img
                                src={profil}
                                alt="Store Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-white">
                            <h1 className="text-xl font-semibold">Judul Toko</h1>
                            <p className="text-xs opacity-90">klik tombol search buat cari produk</p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="search link..."
                            className="w-full p-3 pl-12 rounded-full bg-white shadow-lg text-sm"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                {/* Content wrapper with scroll */}
                <div className="h-[calc(100%-200px)] overflow-y-auto">
                    {/* Categories */}
                    <div className="px-4 mt-6">
                        <h2 className="text-lg font-semibold mb-4 text-[#FF5722]">Kategori</h2>
                        <div className="flex gap-4">
                            {categories.map((category) => (
                                <div key={category.id} className="flex flex-col items-center">
                                    {/* <div className="w-[72px] h-[72px] bg-white rounded-[22px] p-2 shadow-md flex items-center justify-center mb-2"> */}
                                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#a92727] mb-2">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* </div> */}
                                    <span className="mt-[1px] text-sm text-[#FF5722]">{category.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New Products */}
                    <div className="px-4 mt-8">
                        <h2 className="text-lg font-semibold mb-4 text-[#FF5722]">Produk Terbaru</h2>
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                            {newProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="min-w-[170px] bg-white rounded-2xl shadow-md overflow-hidden"
                                >
                                    <div className="w-full h-[160px] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-sm line-clamp-2">{product.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product List */}
                    <div className="px-4 mt-8 pb-8">
                        <h2 className="text-lg font-semibold mb-4 text-[#FF5722]">Daftar Produk</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden"
                                >
                                    <div className="w-full h-[160px] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-sm line-clamp-2">{product.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


