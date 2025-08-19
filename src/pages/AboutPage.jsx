import React from 'react';
import SectionHeader from '../components/SectionHeader';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Tentang Warung Mamahmia Terasi"
          subtitle="Kisah di balik cita rasa autentik yang melegenda."
        />

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img
              src="/images/about_illustration.svg"
              alt="Mamahmia Terasi Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-gray-700">
            <h3 className="text-3xl font-bold text-primary mb-4">Warisan Rasa dari Hati</h3>
            <p className="mb-4 leading-relaxed">
              Warung Mamahmia Terasi berdiri atas dasar cinta dan dedikasi terhadap kuliner Indonesia, khususnya masakan terasi. Berawal dari resep rahasia keluarga yang diwariskan turun-temurun, Mamahmia bertekad untuk menyajikan hidangan terasi dengan cita rasa autentik yang tak terlupakan.
            </p>
            <p className="mb-4 leading-relaxed">
              Setiap bumbu diracik dengan teliti, setiap bahan dipilih dengan cermat, memastikan kualitas dan kelezatan yang konsisten. Kami percaya bahwa makanan bukan hanya sekadar nutrisi, tetapi juga pengalaman yang menghubungkan kita dengan tradisi dan kenangan.
            </p>
            <p className="leading-relaxed">
              Kami bangga menjadi bagian dari perjalanan kuliner Anda, menyajikan hidangan yang hangat, lezat, dan penuh cerita. Selamat menikmati kelezatan Warung Mamahmia Terasi!
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">Filosofi Kami</h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            "Menyajikan kebahagiaan melalui setiap gigitan, dengan menjaga keaslian rasa dan kehangatan tradisi keluarga."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;