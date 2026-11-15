# Catálogo de producto (copia de lectura)

`funcionalidades.json` es una **copia generada** del catálogo de funcionalidades de la app: la fuente es [`CtoConnectattoo/hi.inkup` → `producto/funcionalidades.yaml`](https://github.com/CtoConnectattoo/hi.inkup/blob/main/producto/funcionalidades.yaml). **No se edita aquí.**

- El agente SEO/GEO la lee para saber qué hace Inkup hoy: solo comunica funcionalidades `activa` y nunca las `beta`, `oculta`, `en-desarrollo` ni `retirada`.
- Con el `seo-geo-kit` que soporta catálogo (PR CtoConnectattoo/seo-geo-kit#3), la auditoría la usa sola (no hace falta tocar `config.json`): errores por promesas prohibidas y funcionalidades retiradas, avisos por funcionalidades ocultas o en beta mencionadas, cifras de planes que no existen y funcionalidades activas que la web no menciona.
- Con un kit sin ese soporte, el archivo se ignora.

Actualizar (desde `hi.inkup`, con este repo clonado al lado):

```bash
python3 producto/catalogo.py json --salida ../inkup-landing-oferta-3/seo/producto/funcionalidades.json
```
