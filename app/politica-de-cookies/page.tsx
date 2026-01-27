import { Header } from "@/components/header"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">POLÍTICA DE PRIVACIDAD</h1>
          <p className="text-muted-foreground mb-8">Fecha de entrada en vigor: 23/02/24</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. RESPONSABLE DEL TRATAMIENTO</h2>
            <p className="mb-2">Empresa: Connectattoo S.L. ("Inkup")</p>
            <p className="mb-2">CIF: B05270608</p>
            <p className="mb-2">Domicilio: C/ Marie Curie, 8, 29590 Málaga (España)</p>
            <p className="mb-2">Email de contacto: info@inkup.io</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. DATOS RECOPILADOS</h2>
            <p className="mb-4">Recopilamos datos personales que los usuarios nos proporcionan al registrarse, como:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Datos de facturación</li>
              <li>Datos sobre el uso de la plataforma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. FINALIDAD DEL TRATAMIENTO</h2>
            <p className="mb-4">Los datos se tratarán para:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proveer los servicios contratados</li>
              <li>Gestionar cuentas de usuario</li>
              <li>Comunicaciones y soporte</li>
              <li>Cumplimiento de obligaciones legales y fiscales</li>
              <li>Mejora del producto y análisis estadístico</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. BASE LEGAL</h2>
            <p className="mb-4">El tratamiento se basa en:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>La ejecución de un contrato</li>
              <li>El consentimiento del interesado</li>
              <li>El cumplimiento de obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. ALOJAMIENTO Y ACCESO A LOS DATOS</h2>
            <p className="mb-4">
              Los datos se alojan en servidores de Siteground Europe, dentro del Espacio Económico Europeo.
            </p>
            <p className="mb-4">
              Solo el personal autorizado de Inkup y sus proveedores técnicos pueden acceder a los datos, y siempre bajo
              contrato de confidencialidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. CONSERVACIÓN DE LOS DATOS</h2>
            <p className="mb-4">
              Los datos se conservarán mientras el usuario tenga una cuenta activa. Tras la cancelación, se eliminarán
              pasados 30 días, salvo obligaciones legales que exijan su conservación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. DERECHOS DE LOS USUARIOS</h2>
            <p className="mb-4">Los usuarios pueden ejercer los siguientes derechos:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acceder a sus datos</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la supresión (derecho al olvido)</li>
              <li>Limitar u oponerse al tratamiento</li>
              <li>Solicitar la portabilidad</li>
            </ul>
            <p className="mb-4">Para ejercer estos derechos, contactar en: info@inkup.io</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. SEGURIDAD</h2>
            <p className="mb-4">
              Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos contra accesos no
              autorizados, alteración o pérdida accidental. Todos los empleados han firmado acuerdos de
              confidencialidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">9. TRANSFERENCIAS INTERNACIONALES</h2>
            <p className="mb-4">No realizamos transferencias de datos fuera del EEE.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">10. CAMBIOS EN LA POLÍTICA</h2>
            <p className="mb-4">
              Nos reservamos el derecho a modificar esta Política. Cualquier cambio será comunicado en el sitio web y
              por correo electrónico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">11. AUTORIDAD DE CONTROL</h2>
            <p className="mb-4">
              En caso de considerar que sus derechos han sido vulnerados, puede presentar una reclamación ante la
              Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
