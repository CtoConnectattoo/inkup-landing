"use client"

import { Download, RefreshCw, Search, Calendar } from "lucide-react"

/* Maqueta del panel de consultas de hi.inkup.io (lista + filtros + detalle). */

const LEADS = [
  { name: "Lucía", service: "Tatuaje", status: "Pendiente", when: "Hace 12 min", active: true },
  { name: "Marcos", service: "Piercing", status: "Pendiente", when: "Hace 2 h" },
  { name: "Andrea", service: "Tatuaje", status: "Respondido", when: "Hace 5 h" },
  { name: "Noa", service: "Eliminación de tatuaje", status: "Cliente", when: "Ayer" },
  { name: "Iván", service: "Tatuaje", status: "Pendiente", when: "Ayer" },
]

const STATUS_STYLE: Record<string, string> = {
  Pendiente: "bg-amber-50 text-amber-700 border-amber-200",
  Respondido: "bg-blue-50 text-blue-700 border-blue-200",
  Cliente: "bg-emerald-50 text-emerald-700 border-emerald-200",
}

function Chip({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium ${
        active ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      {children}
    </span>
  )
}

export function PanelMock() {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-white text-gray-900 shadow-2xl border border-gray-700/40 text-left select-none">
      {/* barra superior */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 text-xs">
        <div className="flex items-center gap-2 font-semibold">
          <span className="w-5 h-5 rounded-md bg-gray-900 text-white grid place-items-center text-[10px]">i</span>
          Inkup
        </div>
        <div className="hidden sm:flex items-center gap-4 text-gray-500">
          <span className="relative text-purple-600 font-semibold">
            Consultas
            <span className="absolute -top-2 -right-3 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] grid place-items-center">
              2
            </span>
          </span>
          <span>Asistente</span>
          <span>Respuestas auto</span>
        </div>
        <span className="rounded-md border border-gray-200 px-2 py-1 text-[11px] text-blue-600 font-medium">Copiar link ↗</span>
      </div>

      <div className="grid sm:grid-cols-[1.1fr_1fr]">
        {/* lista */}
        <div className="border-r border-gray-100">
          <div className="flex items-center justify-between px-3 pt-3">
            <div className="flex items-center gap-2 font-semibold text-sm">
              Consultas <span className="rounded-full bg-gray-100 px-2 text-[11px] text-gray-600">7</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Download className="w-3.5 h-3.5" />
              <RefreshCw className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mx-3 mt-2 flex items-center gap-2 rounded-lg border border-gray-200 px-2.5 py-1.5 text-[11px] text-gray-400">
            <Search className="w-3.5 h-3.5" /> Buscar consultas…
          </div>
          <div className="px-3 pt-2 flex gap-1.5 overflow-hidden">
            <Chip active>Todos · 7</Chip>
            <Chip>Pendiente · 5</Chip>
            <Chip>Respondido · 1</Chip>
            <Chip>Cliente · 1</Chip>
          </div>
          <div className="px-3 pt-1.5 flex items-center gap-1.5 overflow-hidden text-[11px] text-gray-500">
            Servicio: <Chip>Tatuaje</Chip>
            <Chip>Piercing</Chip>
            <Chip>Eliminación</Chip>
          </div>
          <div className="px-3 pt-1.5 pb-2 flex items-center gap-1.5 overflow-hidden text-[11px] text-gray-500 border-b border-gray-100">
            Fecha: <Chip>Hoy</Chip>
            <Chip>7 días</Chip>
            <Chip>Este mes</Chip>
            <Chip>
              <Calendar className="w-3 h-3" /> Rango…
            </Chip>
          </div>
          <ul>
            {LEADS.map((l) => (
              <li
                key={l.name}
                className={`flex items-start gap-2.5 px-3 py-2.5 border-b border-gray-100 ${
                  l.active ? "bg-purple-50/60 border-l-2 border-l-purple-600" : ""
                }`}
              >
                <span className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center text-[8px] text-gray-400">IMG</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-sm truncate">{l.name}</span>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap">{l.when}</span>
                  </div>
                  <div className="text-xs text-gray-600 truncate">{l.service}</div>
                  <span className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-[10px] ${STATUS_STYLE[l.status]}`}>
                    {l.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* detalle */}
        <div className="hidden sm:flex flex-col p-4 gap-3 bg-gray-50/60">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Lucía</div>
              <div className="text-xs text-gray-500">Tatuaje · hace 12 min</div>
            </div>
            <span className="rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-2 py-0.5 text-[10px]">
              Pendiente
            </span>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white divide-y divide-gray-100 text-xs">
            {[
              ["Estilo", "Fine line"],
              ["Zona y tamaño", "Antebrazo, 10 cm"],
              ["Cuándo", "Este mes"],
              ["Teléfono", "+34 6•• ••• •••"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 px-3 py-2">
                <span className="text-gray-500">{k}</span>
                <span className="font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="text-[11px] text-gray-500 mb-1.5">Referencias (1)</div>
            <div className="w-16 h-16 rounded-lg bg-[repeating-linear-gradient(135deg,#f3f3f3_0_6px,#c9c9c9_6px_7px)] border border-gray-200" />
          </div>
          <div className="mt-auto flex gap-2">
            <span className="flex-1 text-center rounded-lg bg-[#25d366] text-white text-xs font-semibold py-2">
              Abrir WhatsApp
            </span>
            <span className="flex-1 text-center rounded-lg border border-gray-200 bg-white text-xs font-medium py-2">
              Marcar respondida
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
