import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Package, Truck, Users } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: '/images/service_dinein.svg',
      title: 'Santap di Tempat',
      description: 'Nikmati hidangan lezat kami di suasana warung yang nyaman dan ramah keluarga.',
      details: 'Tersedia area indoor dan outdoor, cocok untuk makan siang atau makan malam bersama.',
    },
    {
      icon: '/images/service_catering.svg',
      title: 'Layanan Katering',
      description: 'Sajikan kelezatan Mamahmia Terasi untuk acara spesial Anda, dari pesta kecil hingga acara besar.',
      details: 'Pilihan menu kustomisasi, pengiriman tepat waktu, dan pelayanan profesional.',
    },
    {
      icon: '/images/service_delivery.svg',
      title: 'Pesan Antar',
      description: 'Nikmati hidangan favorit Anda di rumah atau kantor dengan layanan pesan antar cepat kami.',
      details: 'Tersedia melalui aplikasi pesan antar online atau langsung hubungi kami.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Layanan Kami"
          subtitle="Kami hadir untuk memenuhi kebutuhan kuliner Anda dengan berbagai pilihan layanan."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <img src={service.icon} alt={service.title} className="w-24 h-24 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500 italic">{service.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Siap Melayani Anda!</h3>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Apapun kebutuhan Anda, Warung Mamahmia Terasi siap memberikan pengalaman kuliner terbaik.
            Hubungi kami untuk informasi lebih lanjut atau pemesanan.
          </p>
          <a href="/kontak" className="inline-block bg-accent text-secondary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300">
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;