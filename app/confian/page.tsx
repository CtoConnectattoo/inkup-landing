"use client"

import React from "react"
import { Header } from "@/components/header"
import Image from "next/image"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"

const StudioCard = ({ studio }) => {
  const isPlaceholder = studio.logo === "/placeholder.svg" || !studio.logo

  return (
    <motion.a
      href={studio.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${studio.bgColor} rounded-lg aspect-[3/4] flex items-center justify-center p-8 cursor-pointer`}
    >
      <div className="relative w-full h-32">
        {isPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full" />
          </div>
        ) : (
          <Image
            src={studio.logo || "/placeholder.svg"}
            alt={studio.name}
            fill
            className={`object-contain ${studio.imageClass}`}
          />
        )}
      </div>
    </motion.a>
  )
}

export default function ConfianPage() {
  const studios = [
    {
      name: "SOHO TATTOO",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sohotattoo%20logo.jpg-usjyPKebg10rfYE02RlDW39oJ0jCQN.jpeg",
      bgColor: "bg-[#7F5C40]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/soho-tattoo",
    },
    {
      name: "La Mujer Barbuda",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lamujerbarbuda_N%20(1)-ZNm27OItP3ytCQz132094HJmyWzD0S.png",
      bgColor: "bg-[#D3D3D3]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/la-mujer-barbuda-tattoo",
    },
    {
      name: "MOE TATTOO",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moetattoo-E5EfjzwkRa7cDYzUapzXHzHfPlERgm.png",
      bgColor: "bg-[#010101]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/moe-tattoo",
    },
    {
      name: "NOBLE ART",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20noble%20art-tOThUMPVfKV7Gyvhu4fl74n0OT4VTs.png",
      bgColor: "bg-[#A9A9A9]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/NOBLE-ART",
    },
    {
      name: "DOT TATTOO",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20dot-LrDiaFNH8YD8xVeNw5bZt452T7yNFC.png",
      bgColor: "bg-[#E5DED3]",
      imageClass: "invert",
      url: "https://my.inkup.io/DOT-TATTOO",
    },
    {
      name: "Al Sur Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alsurtattoo.jpg-j90n0jtpqu777JdxhBRFM1ru0fcOdb.jpeg",
      bgColor: "bg-white",
      imageClass: "",
      url: "https://my.inkup.io/al-sur-tattoo",
    },
    {
      name: "The Club",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c1b4a5d2f89a4e40bdc1b45883dd8e-the-club-tattoo-barber-biz-photo-994f5f3d1ea3456984b7c3b4301cd8-booksy-RWpykhJMpL5m4Ts6mnj5qorp5l9n1f.jpeg",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/THE-CLUB-MALAGA",
    },
    {
      name: "Jaula Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JAULA%20TATTOO-XPsdVPoqKGIa8QR6e4OioQq8S3fa30.png",
      bgColor: "bg-[#A3A3A3]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/jaula-tattoo",
    },
    {
      name: "Tattoo Me",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02%20ISOLOGOTIPO%20POSITIVO%20TATTOO%20ME%20sin%20fondo-PRCP3UAk3YdNCrGqvYGAA5S18bfvnI.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/tattoo-me",
    },
    {
      name: "Seven Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEVEN%20TATTOO%20STUDIO-hzEMPGZywMPRhyfJo3Z3MQD7OvWYmH.png",
      bgColor: "bg-[#A3A3A3]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/seven-tattoo",
    },
    {
      name: "Dark Portrait",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20(6).jpg-iCzjif95je4rju1Vn30BLsTP2LpoVj.jpeg",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Nath-Rubio",
    },
    {
      name: "Curly Portrait",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(5).jpg-Cm9tsKS8KKflwEl1rndazMuHiQrEyB.jpeg",
      bgColor: "bg-[#D4B69B]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/PICARA-CLAVEL",
    },
    {
      name: "Tik Tak Boom",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20(5).jpg-Kw8jmyu5BtWhYzUm4eZRSd3Lkd3pY9.jpeg",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Mia-tattoo-gallery-",
    },
    {
      name: "MIA Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(4).jpg-w8Yhb9YYGUG0bEbqHWvl65BOiupsqz.jpeg",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Tik-Tak-Boom-Tattoo",
    },
    {
      name: "Anthea Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antheatattoo.jpg-sD1IWJjV6zKYb3T6RnTtHiqnaC8Z8X.jpeg",
      bgColor: "bg-[#FFF5F5]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/anthea-tattoo",
    },
    {
      name: "JuanMarBra",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-artista-SS6aMEZK7bt8j9Het6vg1RdVZL2ffg.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/whatsapp-bravo-tattoo",
    },
    {
      name: "NC Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20(7)-e5JMm4WQht9IdAMQkF1Ed0haL8tzsS.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/la-tinta-que-habito",
    },
    {
      name: "La Tinta Que Habito",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20TINTA%20QUE%20HABITO-SK8yS6JhyeCXd0QhH2FGlCH7ImT11I.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Inktenza-Body-Art-Studio",
    },
    {
      name: "Vintage Portrait",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4PZI6duZjCHQMG5LDQe90iwxU4iOdx.png",
      bgColor: "bg-[#E5E5E5]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Gema-tattoo",
    },
    {
      name: "GT Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eT8MHmGG6yMh0DGguHK4HuolofugDP.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Ferran-Torre",
    },
    {
      name: "Vintage Mirror",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o08iCTyw0MGVEhpdqBHWmqny1oDQJs.png",
      bgColor: "bg-[#F5F5F5]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/CITAS-PIERCINGS-MADRID",
    },
    {
      name: "PA Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RMfSl9m4Bn0zN0PQjf65UH9jk23cpa.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/PICARA-CLAVEL",
    },
    {
      name: "Minimal Circle",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n1zpmvxfsPALhFJthmXntYlvohzQLn.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Malditatentaciontattoo",
    },
    {
      name: "Haru Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6KSEd3lyw5MjJsPLsGVSn1299eaplu.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/WhatsApp-BLACKHARU",
    },
    {
      name: "AG Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5laOImBSlVXAm2zX2aOdaOvHGDGe84.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/TattooRectaStudio",
    },
    {
      name: "R Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QslQYcbPQmczTeIxLslBojCvJgRxYL.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/WHATSAPP-For-Always-Tattoo",
    },
    {
      name: "Unity Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unity%20tattoo%20logo.jpg-4Rf68NGQFTBXytFYX1yjDQ6wu2y9PT.jpeg",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/UNITY-TATTOO",
    },
    {
      name: "Nirvana Family Art",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nirvana%20tattoo-f4BqyQdj77bWC4FCTVaxmZr83Z0xyW.jpeg",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Nirvana-Family-Art",
    },
    {
      name: "Mawi Tattoo Art",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mawi%20tattoo%20art%20logo.jpg-qS1u7edpKRY9z30BCcoKP0dpYh7H1r.jpeg",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/mawi-tattoo-art",
    },
    {
      name: "Red Roses Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OLUOYGhEOR7sVHKJ6Ax01BZ6jKiDUT.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Red-Roses",
    },
    {
      name: "Barbarroja Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pi2Q43AC5ggLhZMq6iYQCFSrw9UjVy.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/barbarrojatattoo",
    },
    {
      name: "SU3 Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J37R9i88z9HdcGe1sCugJ4QyYHS9kA.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Su3-Tattoo-",
    },
    {
      name: "Artist Working",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0cdtaR3o9EdzJwlGFHG7semWTjDEJF.png",
      bgColor: "bg-[#40CFC8]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Robury_ink",
    },
    {
      name: "Artist Portrait",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OuSQlVQ3say9LeCau5otymjqAhVJqa.png",
      bgColor: "bg-[#E6B5A3]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/ROS.INK",
    },
    {
      name: "N Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h2MIzctezuVbbN3zijjyGtbsXPHyWj.png",
      bgColor: "bg-[#F5F5F5]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Matias-Noble",
    },
    {
      name: "Minimal Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SyQeZKuMjW1r4iH19ktUzqXW46S9Qb.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Lumbre-Studios",
    },
    {
      name: "Tiny Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bVY0nRbYuZOxgQgAkFR5ueU1EWqphy.png",
      bgColor: "bg-[#FF69B4]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Nev",
    },
    {
      name: "Bird Art",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UUbbK8EEgSA02NMB2wGNaLbtzwGnmR.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Tiny-Tattoo",
    },
    {
      name: "Circle Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9goBXrCzCt8QrWQMpMGQTnSqHQ5BKL.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Legacy-Tattoo-Studio",
    },
    {
      name: "Engel Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oURksd9qvwy4te0X3cMWXA1ffQ7bHe.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Engel-Tattoo-GmbH",
    },
    {
      name: "YASS Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qU2j6Stag3G1pjL6oOC1Ow7n6IpB5l.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Yass-Tattoo-Studio",
    },
    {
      name: "El Tintero",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OQ1RaNramcPM8TAZ6xhV6hopS3l8QQ.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/El-Tintero-Tattoo-Studio",
    },
    {
      name: "Skinlabel",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P0PVTe9NkO83advmOH28VecmZkR6zF.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Skinlabel-tattoo-studio",
    },
    {
      name: "Urban Artist",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uHRlJv65gGWvUQ4pspEVhzKxXRFlQG.png",
      bgColor: "bg-[#1A1A1A]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Aldo-Blanco.tattoo",
    },
    {
      name: "Custo Mi Zorte",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pQolrNlMN4eDVKx03PKfSUPgaWNB5M.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/custo-mi-zorte",
    },
    {
      name: "Mala Idea",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j3MX6RCXsif057MbOfcsE9V06VFQN9.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/MALA-IDEA-TATTOO-STUDIO",
    },
    {
      name: "Artist Portrait",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-My7WayulbmuT9YqwZf8ziLs21A7gJu.png",
      bgColor: "bg-[#F5F5F5]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/customizarte",
    },
    {
      name: "Tinta De Calamar",
      logo: "/placeholder.svg",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Tinta-De-Calamar",
    },
    {
      name: "Fine Line Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TMPzUAY3S0S3tj7T5FeVrHJOU2HFxU.png",
      bgColor: "bg-gradient-to-b from-purple-100 to-pink-100",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Fine-Line-Tattoo-Zaragoza",
    },
    {
      name: "Emimich Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y3eVGIKlVUQcAvvekxt73Q0F8n6Y6a.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Emimich-Tatto",
    },
    {
      name: "Casa Negra Ink",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xh2RqeQvGkklfzTqn8THEkIjyOpXMK.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Casa-Negra-Ink",
    },
    {
      name: "Gabriel Moreno",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ax1GOUMhKjUweZqiZFEUCDwcSarsYV.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Gabriel-Tattoo-Artist-",
    },
    {
      name: "Arcadia Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4N68VC24fmllFp0LrwHvmTgW7DMm1.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/arcadiastudiotattoo",
    },
    {
      name: "Minimal Ink",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SeCWT20CafFhBokzKLk3cPArULbM3n.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Cristine-Tattoo",
    },
    {
      name: "Moon Star Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyugfJtzkELJQC8keGjgYlq9veR40C.png",
      bgColor: "bg-white",
      imageClass: "invert",
      url: "https://my.inkup.io/Malditatentaciontattoo",
    },
    {
      name: "Orquídea Studio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AvsAGLnlHXGN3sVB7f5p4Ew5k3SkGc.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/orquidea.tattoostudio",
    },
    {
      name: "The Line Club",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eZGZvuDKaVsfHXkBjEqoPFIVBkVHQA.png",
      bgColor: "bg-[#E6E6FA]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/The-Line-Club-Studio",
    },
    {
      name: "Cat Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aVuZLe5E2DbWWsKl1VT3i7Pp0u1Huz.png",
      bgColor: "bg-white",
      imageClass: "invert-0",
      url: "https://my.inkup.io/cat-tattoo",
    },
    {
      name: "Wanda Tattoo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jqiaJZa7HpnDjqyj2pqkLYLKdoRg8.png",
      bgColor: "bg-black",
      imageClass: "invert-0",
      url: "https://my.inkup.io/wandatattoo",
    },
    {
      name: "Dragon Art",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-baAt2nOudjjCHDdfB2CWSbLNOcPb06.png",
      bgColor: "bg-[#1A1A1A]",
      imageClass: "invert-0",
      url: "https://my.inkup.io/Crooked-Tattoo",
    },
  ]

  const firstTwoRows = studios.slice(0, 6)
  const remainingStudios = studios.slice(6)

  const groupedStudios = []
  for (let i = 0; i < remainingStudios.length; i += 2) {
    const lightBg = remainingStudios[i]
    const darkBg = remainingStudios[i + 1] || remainingStudios[i]
    groupedStudios.push([lightBg, darkBg])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mt-8 mb-16">
            Inspírate con alguno de los muchos profesionales que ya ahorran múltiples horas con Inkup
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {firstTwoRows.map((studio, index) => (
              <StudioCard key={index} studio={studio} />
            ))}
            {groupedStudios.map((pair, index) => (
              <React.Fragment key={index}>
                <StudioCard studio={index % 2 === 0 ? pair[0] : pair[1]} />
                <StudioCard studio={index % 2 === 0 ? pair[1] : pair[0]} />
              </React.Fragment>
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
