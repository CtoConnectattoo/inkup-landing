export function TestimonialVideos() {
  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/testimonioden.mp4?alt=media&token=112abc14-881f-45f8-993c-b6f2893558a1",
    "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/Y%20vos%20que%CC%81%20opinas%20Si%20quere%CC%81s%20probarlo%2C%20entra%20a%20este%20link%20y%20registrate%F0%9F%91%87%F0%9F%8F%BC%E2%AD%90%EF%B8%8Fapp.inkup.io-signup%20Y%20s.mp4?alt=media&token=61f88605-666e-4462-bbd9-d10ea5474749",
    "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/Si%20aveces%20se%20te%20complica%20como%20a%20mi%CC%81%20el%20tema%20de%20cotizar%2C%20prueva%20%40inkup.io%20y%20cue%CC%81ntame%20si%20te%20funcion.mp4?alt=media&token=4b7fb424-83d9-402a-9ea9-2e94478d583a",
    "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/testimoniojosz.mp4?alt=media&token=64b8dae0-d6ff-4b06-8023-9eb39ec8fb41",
    "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/ssstik.io_1758557857831.mp4?alt=media&token=7d95f3ce-e159-4861-bf39-1d98820c3c48",
    "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/testimoniotatuador.mp4?alt=media&token=b3b72201-ceb7-4077-8635-b6fa58417ba1",
    "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/%C2%BFA%20quie%CC%81n%20no%20le%20ha%20pasado%20%F0%9F%98%85%20cuando%20nos%20llegan%20esos%20mensajes%20en%20donde%20nada%20queda%20claro%2C%20pero%20desp.mp4?alt=media&token=9dea8ee1-82f4-4b2d-9c6a-cef0d67c119e",
  ]

  const usernames = [
    "@withlovedenn",
    "@rocky.ttx",
    "@andres_tatts",
    "@joszcovelo",
    "@studiobriggs",
    "@mi_tatuador",
    "@laciegga",
  ]

  const posters = [
    "/images/testimonial-poster-withlovedenn.png",
    "/images/testimonial-poster-rocky-new.png",
    "/images/testimonial-poster-andres.png",
    "/images/testimonial-poster-joszcovelo.png",
    "/images/testimonial-poster-studiobriggs.png",
    "/images/testimonial-poster-mi_tatuador.png",
    "/images/testimonial-poster-laciegga.png",
  ]

  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 text-center"></header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((src, i) => (
            <article
              key={i}
              className="relative rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-3 shadow-2xl ring-1 ring-white/5"
            >
              {/* Marco exterior con "depth" */}
              <div className="rounded-2xl bg-neutral-900/90 p-2">
                {/* Contenedor con ratio 9:16 */}
                <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl ring-1 ring-white/10">
                  {/* Vídeo HTML5: ligero y compatible */}
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={src}
                    poster={posters[i]}
                    controls
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
                </div>
              </div>
              {usernames[i] && (
                <div className="px-3 pb-3 pt-2">
                  <p className="text-sm text-neutral-300">{usernames[i]}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
