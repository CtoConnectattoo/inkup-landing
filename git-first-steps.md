┌─────────────────────────────────────────────┐
│           TU ORDENADOR (LOCAL)               │
└─────────────────────────────────────────────┘
                │
                │ Abrir terminal en el proyecto
                │
                v
┌─────────────────────────────────────────────┐
│ 1) ASEGURARTE DE PARTIR DE LA BASE CORRECTA │
└─────────────────────────────────────────────┘
                │
                │ git checkout main
                │ git pull
                │
                v
        ┌──────────────────────────┐
        │ main actualizado (local) │
        └──────────────────────────┘
                │
                │
                │ Crear tu espacio de trabajo
                │ git checkout -b post/mi-cambio
                │
                v
┌─────────────────────────────────────────────┐
│          TU RAMA (TRABAJO AISLADO)           │
└─────────────────────────────────────────────┘
                │
                │ Editas archivos (post, home, etc.)
                │
                │ npm run dev
                │ (compruebas que todo se ve bien)
                │
                │ npm run build
                │ (compruebas que no rompe nada)
                │
                v
┌─────────────────────────────────────────────┐
│          GUARDAR TU TRABAJO (COMMIT)         │
└─────────────────────────────────────────────┘
                │
                │ git status
                │ git add -A
                │ git commit -m "Descripción clara"
                │
                v
┌─────────────────────────────────────────────┐
│        SUBIR TU RAMA A GITHUB (PUSH)         │
└─────────────────────────────────────────────┘
                │
                │ git push -u origin post/mi-cambio
                │
                v
┌─────────────────────────────────────────────┐
│                GITHUB                       │
│        (Pull Request contra main)           │
└─────────────────────────────────────────────┘
                │
                │ Abres Pull Request
                │
                │ GitHub avisa a Vercel
                │
                v
┌─────────────────────────────────────────────┐
│            VERCEL (PREVIEW)                 │
│   Deploy temporal solo para este cambio     │
└─────────────────────────────────────────────┘
                │
                │ Revisas:
                │ - que el post se ve bien
                │ - que no hay errores
                │ - que todo está correcto
                │
                v
┌─────────────────────────────────────────────┐
│            MERGE A MAIN                     │
│     (Aceptar Pull Request en GitHub)        │
└─────────────────────────────────────────────┘
                │
                │ GitHub actualiza main
                │
                │ Vercel detecta cambios
                │
                v
┌─────────────────────────────────────────────┐
│        VERCEL (PRODUCCIÓN AUTOMÁTICA)       │
│        La web real se actualiza             │
└─────────────────────────────────────────────┘
                │
                │ Abres la URL pública
                │ Compruebas que está OK
                │
                v
┌─────────────────────────────────────────────┐
│        FIN DEL PROCESO (TODO OK ✅)          │
└─────────────────────────────────────────────┘ 