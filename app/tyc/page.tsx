import { Header } from "@/components/header"

export default function TermsAndConditionsPage() {
  // Get current date for the "Fecha de entrada en vigor"
  const currentDate = new Date().toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">TÉRMINOS Y CONDICIONES DE USO</h1>
          <p className="text-muted-foreground mb-8">Fecha de entrada en vigor: {currentDate}</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. INFORMACIÓN GENERAL</h2>
            <p className="mb-4">
              El presente documento establece los Términos y Condiciones de Uso del sitio web y servicios ofrecidos por
              Connectattoo S.L., en adelante "Inkup", con CIF B05270608 y domicilio social en C/ Marie Curie, 8, 29590
              Málaga (España), inscrita en el Registro Mercantil de Málaga Tomo 6027, Libro 4934, Folio 42, Hoja
              MA-160523, Inscripción 1ª.
            </p>
            <p className="mb-4">
              Al acceder y utilizar la plataforma Inkup (https://inkup.io), el usuario acepta expresamente y sin
              reservas los presentes Términos y Condiciones. Si no está de acuerdo, debe abstenerse de utilizar los
              servicios.
            </p>
            <p className="mb-4">
              Inkup se reserva el derecho de modificar los presentes Términos en cualquier momento. Las modificaciones
              serán publicadas en el sitio web y se considerarán aceptadas si el usuario continúa utilizando los
              servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. DESCRIPCIÓN DEL SERVICIO</h2>
            <p className="mb-4">
              Inkup es una plataforma SaaS diseñada para la gestión de estudios de tatuajes y artistas independientes.
              Permite a los usuarios gestionar presupuestos, comunicaciones, reservas, clientes y otros aspectos
              vinculados a su actividad profesional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. CONDICIONES DE REGISTRO Y USO DE LA CUENTA</h2>
            <p className="mb-2">3.1 Edad mínima: Para registrarse en Inkup es necesario ser mayor de 18 años.</p>
            <p className="mb-2">
              3.2 Datos requeridos: El usuario deberá proporcionar información veraz y actualizada como nombre completo,
              dirección de correo electrónico y cualquier otro dato requerido por Inkup.
            </p>
            <p className="mb-2">
              3.3 Veracidad y responsabilidad: El usuario es responsable de mantener actualizados sus datos y de la
              seguridad de su cuenta. Inkup no se hace responsable de accesos no autorizados por negligencia del
              usuario.
            </p>
            <p className="mb-2">
              3.4 Firma digital: Se acepta como válida cualquier firma digital u otro mecanismo de aceptación expresa al
              contratar servicios.
            </p>
            <p className="mb-2">
              3.5 Creación de cuenta desde solicitudes: Si un cliente solicita presupuesto a través de Inkup, se
              generará una cuenta automática para acceder al estado de su solicitud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. PLANES, PAGO Y FACTURACIÓN</h2>
            <p className="mb-2">
              4.1 Inicio del contrato: La contratación de un plan de pago se produce al introducir los datos de la
              tarjeta y realizar el primer abono.
            </p>
            <p className="mb-2">
              4.2 No reembolsos: Todos los pagos son finales. No se realizarán devoluciones ni compensaciones por tiempo
              no utilizado.
            </p>
            <p className="mb-2">
              4.3 Facturación: El servicio se cobra por adelantado y de forma periódica según el plan elegido. Es
              responsabilidad del usuario revisar las tarifas vigentes en https://inkup.io/precio
            </p>
            <p className="mb-2">
              4.4 Impagos: En caso de impago, se notificará al cliente. Pasados 30 días sin resolución, los datos podrán
              ser eliminados.
            </p>
            <p className="mb-2">4.5 Cambios de tarifas: Inkup podrá modificar los precios con 15 días de preaviso.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. MODIFICACIONES DEL SERVICIO</h2>
            <p className="mb-4">
              Inkup se reserva el derecho a modificar, suspender o interrumpir temporal o permanentemente el servicio,
              sin necesidad de previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. CANCELACIÓN DE LA CUENTA</h2>
            <p className="mb-2">
              6.1 Por parte del usuario: Puede cancelar su suscripción en cualquier momento desde su panel de usuario.
              Los datos se conservarán 30 días tras la cancelación.
            </p>
            <p className="mb-2">
              6.2 Por parte de Inkup: Inkup podrá cancelar cuentas que incumplan las presentes condiciones sin previo
              aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. PROPIEDAD INTELECTUAL</h2>
            <p className="mb-4">
              Todos los derechos sobre la plataforma, incluyendo código fuente, diseños, logotipos y contenidos,
              pertenecen a Inkup. El usuario no podrá copiar, modificar, distribuir ni explotar comercialmente ningún
              elemento sin autorización expresa.
            </p>
            <p className="mb-4">
              El contenido que los usuarios suban seguirá siendo de su propiedad, pero otorgan a Inkup una licencia no
              exclusiva para mostrarlo dentro del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. USOS PROHIBIDOS</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Usar el servicio para enviar spam o contenido malicioso.</li>
              <li>Realizar ingeniería inversa o replicar el servicio.</li>
              <li>Compartir acceso con terceros no autorizados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">9. EXENCIÓN DE RESPONSABILIDAD</h2>
            <p className="mb-4">
              Inkup no garantiza la disponibilidad ininterrumpida del servicio, ni la ausencia de errores. En ningún
              caso será responsable por daños directos o indirectos derivados del uso del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">10. LEGISLACIÓN Y JURISDICCIÓN</h2>
            <p className="mb-4">
              Este contrato se rige por las leyes de España. Cualquier conflicto será resuelto en los tribunales de
              Valencia, salvo que la normativa de consumo disponga otra cosa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">11. CONTACTO</h2>
            <p className="mb-4">Para cualquier duda o reclamación, puede contactarnos en info@inkup.io</p>
          </section>
        </div>
      </main>
    </div>
  )
}
