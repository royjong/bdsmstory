import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Check } from "lucide-react";

const Home = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex space-x-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="mt-2 text-muted-foreground">Based on 5000 reviews</p>
        <div className="mb-2">
          <Image src="/bdsm.png" alt="Logo" width={128} height={128} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl text-white font-light">BDSM Story E-book</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
          <div className="lg:col-span-5 order-1 lg:order-none w-full">
            <Image
              src="https://www.christineleduc.nl/cldmagazine/wp-content/uploads/2022/08/Wat-is-BDSM-Christine-le-Duc-scaled.jpg"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-xl object-cover w-full h-full"
              alt="A conceptual representation of BDSM"
            />
          </div>
          <div className="lg:col-span-7 bg-gray-200 rounded-xl p-8 order-2 lg:order-none">
            <h1 className="text-2xl text-gray-900 font-bold">"Verhalen waar je benen van gaan trillen."</h1>
            <p className="mt-4 text-gray-700">
              Lees in ons E-book 8 waargebeurde "bdsm" verhalen.
              <br />
              <br />
              <b>Waarschuwing: als je niet tegen extreem opwindende verhalen kan, sluit dan deze pagina.</b>
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start font-light">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Lees je 8 waargebeurde BDSM seksverhalen die je benen laten trillen.
              </li>
              <li className="flex items-start font-light">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Ontdek in ons "extreme" boek geheime technieken voor een spannender seksleven.
              </li>
              <li className="flex items-start font-light">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Ontdek hoe je je man extreem dominant maakt in bed...(Pas op met deze verleidingstechniek)
              </li>
              <li className="flex items-start font-light">
                <Check className="h-6 w-6 text-green-500 mr-2 mb-10" />
                Ontdek geheime technieken om je vrouw onderdanig te maken..
              </li>
            </ul>
            <Link href="/checkout" className="py-3 px-6 bg-red-700 text-center text-white font-bold rounded-xl hover:bg-red-900 transition duration-300">
              Lees ons "extreme" boek.
            </Link>
          </div>
        </div>
      </div>
      <section className="bg-white py-8 px-4 sm:py-12">
        <div className="max-w-3xl mx-auto bg-gray-100 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900">Je staat op het punt om dit te ontgrendelen🔓</h2>
          <ul className="mt-4 sm:mt-6 list-disc list-inside text-gray-700">
            <li className="mb-2">🔥 8 opwindende en meeslepende sex verhalen</li>
            <li className="mb-2">🔥 Zes avontuurlijke rollenspellen</li>
            <li className="mb-2">🔥 Negen BDSM opdrachten</li>
            <li className="mb-2">🔥 <b>Bonus</b>: Extreem sex verhaal</li>
          </ul>
        </div>
      </section>
      <section className="bg-black py-12 px-4 sm:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">Direct Toegang</h2>
          <p className="text-white text-lg sm:text-xl mb-8">Ontvang dit opwindende boek binnen één minuut in jouw mailbox.</p>
          <Link href="/checkout">
            <button className="bg-red-700 text-white py-3 px-8 rounded-lg font-bold hover:bg-red-900 transition duration-300">
              Ja, bestel het E-book anoniem!
            </button>
          </Link>
          <div className="mt-8">
            <p className="text-white text-sm">⬇️⬇️⬇️</p>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1 bg-gray-100 rounded-xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Voor Vrouwen</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                Lees hoe andere vrouwen hun seksualiteit hebben ontdekt en versterkt door BDSM-verhalen.
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                Leer over consent, boundaries en safe words in een veilige en open omgeving.
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                Ontvang tips en adviezen om je eigen BDSM-reis te beginnen of te verdiepen.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1 bg-gray-100 rounded-xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Voor Mannen</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                Leer hoe je beter kunt communiceren met je partner over seksuele verlangens.
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                Ontdek nieuwe manieren om plezier en opwinding toe te voegen aan je seksleven.
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                Begrijp de principes van dominantie en onderwerping voor een bevredigende relatie.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white py-8 px-4 sm:py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-auto">
              <Image
                src="https://media.s-bol.com/736gV8NlY2j8/550x825.jpg"
                layout="responsive"
                width={200}
                height={300}
                className="rounded-xl w-[500px] h-[500px]"
                alt="Book cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 bg-gray-100 rounded-xl p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">E-book: BDSM Bed Stories</h2>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              ))}
              <span className="ml-2 text-gray-600">Gebaseerd op 5014 reviews</span>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Ontdek in ons "extreme" boek geheime technieken voor een spannender seksleven.
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Lees je 8 waargebeurde BDSM seksverhalen die je benen laten trillen.
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Tips for beginners and advanced practitioners.
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-2" />
                Real-life stories and experiences.
              </li>
            </ul>
            <Link href="/checkout" className="mt-8 py-3 px-6 bg-red-700 text-center text-white font-bold rounded-xl hover:bg-red-900 transition duration-300">
              Ja, bestel het E-book anoniem!
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-black py-8 px-4 sm:py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-white text-sm mb-4">© 2024 BDSM Story E-book. Alle rechten voorbehouden.</p>
          <div className="flex items-center space-x-4">
            <Link href="/checkout" className="text-white text-sm hover:underline">
              Algemene voorwaarden
            </Link>
            <span className="text-white text-sm">|</span>
            <Link href="/checkout" className="text-white text-sm hover:underline">
              Privacybeleid
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
