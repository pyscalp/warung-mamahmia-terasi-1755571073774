import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Pesan Anda telah terkirim!');
    reset();
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Kami siap melayani Anda. Jangan ragu untuk bertanya atau memberikan masukan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan Kepada Kami</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Nama lengkap wajib diisi' })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                />
                {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email wajib diisi',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Alamat email tidak valid',
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                />
                {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan Anda</label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Pesan wajib diisi' })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <MapPin size={24} className="mr-3 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Alamat:</p>
                  <p>Jl. Kenangan Indah No. 123, Kebayoran Baru, Jakarta Selatan, 12120</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={24} className="mr-3 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Telepon:</p>
                  <p>(021) 123-4567</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={24} className="mr-3 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>info@mamahmiaterasi.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={24} className="mr-3 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Jam Operasional:</p>
                  <p>Senin - Sabtu: 10:00 - 22:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Lokasi Kami</h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                {/* Placeholder for Google Maps iframe */}
                <p>Peta Lokasi (Google Maps Embed)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;