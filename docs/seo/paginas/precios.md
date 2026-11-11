> **ARCHIVO · material de Kalmaa, no de Inkup.** Enfoque del 7 de noviembre de 2026, cuando el proyecto era «Inkup · ManyChat en español». No aplicar a inkup.io (Inkup es solo tatuaje). Para Kalmaa manda el «00 BRIEF PARA CLAUDE CODE · Kalmaa» del Drive, que cambia producto y precios. Se guarda aquí porque el mapa de proyectos del Drive apunta a esta carpeta.

# Brief · /precios (F1-4)

Búsquedas: "manychat precio", "manychat gratis", "precio bot instagram". La página actual está desactualizada (planes antiguos, garantía, soporte 24/7): sustituirla entera.

## Metadata

- **title:** Precios de Inkup: automatiza Instagram con precio fijo
- **description:** Desde 12 €/mes + IVA con pago anual. Respuestas automáticas en Instagram y paso a WhatsApp, sin pagar por contacto. 7 días de prueba.

## Estructura

1. **H1:** Precio fijo. Sin pagar por contacto.
   **Subtítulo:** Automatiza comentarios, historias y DMs de Instagram por lo mismo cada mes, tengas 100 o 10.000 seguidores escribiéndote.
2. **Planes:** reutilizar `PricingSection` con `HOME_TIERS` (moverlo a un archivo compartido, por ejemplo `data/plans.ts`, para no duplicarlo). Precios siempre "+ IVA" y aclarar "con pago anual".
3. **Tabla comparativa** "Inkup vs ManyChat vs Meta gratis":

| | Inkup | ManyChat | Meta (gratis) |
| --- | --- | --- | --- |
| Precio | Fijo, desde 12 €/mes + IVA (anual) | Según contactos activos; gratis hasta 25 | 0 € |
| Comentario → DM | Sí | Sí | Sí, solo desde escritorio y con pocas palabras exactas |
| Velocidad de respuesta | Al momento | Al momento | Con retraso |
| Paso a WhatsApp con la consulta escrita | Incluido | Hay que configurarlo | No |
| Español | Sí, con soporte por WhatsApp | Principalmente inglés | Sí, sin soporte |

4. **FAQ (JSON-LD FAQPage):**
   - ¿Hay que pagar por contacto? No. El precio es el mismo cada mes.
   - ¿Hay prueba gratis? 7 días sin límite de consultas. Se añade tarjeta, pero no se cobra hasta el día 7.
   - ¿Puedo cancelar cuando quiera? Sí, desde tu cuenta, sin permanencia.
   - ¿Los precios llevan IVA? No, el IVA va aparte.
   - ¿Qué pasa si supero las consultas del plan? **[CONFIRMAR con Carlos]**
5. **CTA final:** Empezar la prueba gratis.

No mencionar reembolsos, soporte 24/7 ni plan Enterprise.
