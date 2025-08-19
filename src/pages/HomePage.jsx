import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import MenuItemCard from '../components/MenuItemCard';

const HomePage = () => {
  const popularMenus = [
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
  ];

  return (
    <div className="bg-gray-50">
      <HeroSection />

      <section className="container mx-auto px-4 py-16">
        <SectionHeader
          title="Menu Populer Kami"
          subtitle="Cicipi hidangan favorit pelanggan kami yang selalu bikin ketagihan!"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularMenus.map((menu, index) => (
            <MenuItemCard key={index} {...menu} />
          ))}
        </div>
      </section>

      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kelezatan Terasi Autentik Sejak Dulu
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Warung Mamahmia Terasi adalah warisan kuliner keluarga yang telah
            menjaga resep terasi asli selama beberapa generasi. Setiap hidangan
            adalah persembahan dari hati, dengan bumbu rahasia yang tak tertandingi.
          </p>
          <a href="/tentang" className="inline-block bg-accent text-secondary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;