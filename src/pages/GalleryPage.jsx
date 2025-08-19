import React from 'react';
import SectionHeader from '../components/SectionHeader';
import MenuItemCard from '../components/MenuItemCard';

const GalleryPage = () => {
  const menuItems = [
    {
      image: '/images/product_nasigoreng.svg',
      name: 'Nasi Goreng Terasi Spesial',
      description: 'Nasi goreng dengan bumbu terasi rahasia, telur, dan irisan ayam.',
      price: 'Rp 25.000',
      rating: 5,
    },
    {
      image: '/images/product_ayambakar.svg',
      name: 'Ayam Bakar Terasi Madu',
      description: 'Ayam bakar empuk dengan olesan bumbu terasi madu yang meresap.',
      price: 'Rp 35.000',
      rating: 4,
    },
    {
      image: '/images/product_sambaludang.svg',
      name: 'Sambal Udang Terasi',
      description: 'Udang segar dimasak dengan sambal terasi pedas manis.',
      price: 'Rp 30.000',
      rating: 5,
    },
    {
      image: '/images/product_tumiskangkung.svg',
      name: 'Tumis Kangkung Terasi',
      description: 'Kangkung segar ditumis dengan bumbu terasi pedas.',
      price: 'Rp 18.000',
      rating: 4,
    },
    {
      image: '/images/product_terongbalado.svg',
      name: 'Terong Balado Terasi',
      description: 'Terong ungu goreng disiram sambal balado terasi.',
      price: 'Rp 20.000',
      rating: 4,
    },
    {
      image: '/images/product_nasigoreng.svg', // Reusing for variety
      name: 'Mie Goreng Terasi',
      description: 'Mie goreng dengan bumbu terasi khas Mamahmia.',
      price: 'Rp 22.000',
      rating: 3,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Galeri Hidangan Kami"
          subtitle="Jelajahi kelezatan visual dari setiap hidangan spesial Warung Mamahmia Terasi."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItemCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Siap Mencicipi?</h3>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Gambar-gambar ini hanyalah permulaan. Rasakan sendiri kelezatan autentik
            Warung Mamahmia Terasi.
          </p>
          <a href="/kontak" className="inline-block bg-accent text-secondary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300">
            Pesan Sekarang!
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;