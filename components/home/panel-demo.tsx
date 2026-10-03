"use client"

import * as React from "react"
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit3,
  Mail,
  MessageCircle,
  Phone,
  RefreshCcw,
  Search,
} from "lucide-react"
import { useStepPlayer, PlayerControls, type Step } from "./use-step-player"

/* Demo guiada del panel "Consultas" de hi.inkup.io, reproducido a partir de
   app/dashboard/inbox/page.tsx: llega una consulta, se filtra, se abre y se
   responde por WhatsApp. */

type Status = "pending" | "responded" | "client" | "discarded"
const LABEL: Record<Status, string> = {
  pending: "Pendiente",
  responded: "Respondido",
  client: "Cliente",
  discarded: "Descartada",
}
const BADGE: Record<Status, string> = {
  pending: "bg-amber-50 text-amber-600 border border-amber-200",
  responded: "bg-blue-50 text-blue-600 border border-blue-200",
  client: "bg-green-50 text-green-600 border border-green-200",
  discarded: "bg-zinc-100 text-zinc-400 border border-zinc-200",
}

type Lead = { name: string; service: string; status: Status; when: string; img?: string }
const BASE: Lead[] = [
  { name: "Marcos", service: "Piercing", status: "pending", when: "Hace 2 horas" },
  { name: "Andrea", service: "Tatuaje", status: "responded", when: "Hace 5 horas", img: "s2" },
  { name: "Noa", service: "Eliminación de tatuaje", status: "client", when: "Hace 1 día" },
  { name: "Iván", service: "Tatuaje", status: "pending", when: "Hace 1 día", img: "s3" },
  { name: "Sara", service: "Tatuaje", status: "pending", when: "Hace 2 días", img: "s4" },
  { name: "Pablo", service: "Piercing", status: "discarded", when: "Hace 3 días" },
]

const QA: [string, string][] = [
  ["Servicio", "Tatuaje"],
  ["Estilo", "Fine line"],
  ["Zona y tamaño", "Antebrazo, 10 cm"],
  ["Cuándo", "Este mes"],
]

type State = {
  newLead: boolean
  tapFilter: boolean
  filter: "all" | "pending"
  tapRow: boolean
  selected: boolean
  bubbles: number
  images: boolean
  tapWa: boolean
  waPress: boolean
  status: Status
}
const INITIAL: State = {
  newLead: false,
  tapFilter: false,
  filter: "all",
  tapRow: false,
  selected: false,
  bubbles: 0,
  images: false,
  tapWa: false,
  waPress: false,
  status: "pending",
}

const STEPS: Step<State>[] = [
  { d: 900, patch: { newLead: true } },
  { d: 1600, patch: { tapFilter: true } },
  { d: 350, patch: { filter: "pending" } },
  { d: 1400, patch: { tapRow: true } },
  { d: 350, patch: { selected: true } },
  ...QA.flatMap<Step<State>>((_, i) => [
    { d: i === 0 ? 500 : 350, patch: { bubbles: i * 2 + 1 } },
    { d: 350, patch: { bubbles: i * 2 + 2 } },
  ]),
  { d: 500, patch: { images: true } },
  { d: 1800, patch: { tapWa: true } },
  { d: 300, patch: { waPress: true } },
  { d: 500, patch: { status: "responded" } },
]

function Thumb({ img, className = "" }: { img?: string; className?: string }) {
  return (
    <div
      className={`rounded-lg border border-zinc-200 bg-zinc-100 overflow-hidden grid place-items-center text-[7px] text-zinc-400 ${className}`}
    >
      {img ? <div className={`demo w-full h-full sw ${img}`} style={{ borderRadius: 0, border: 0 }} /> : "SIN IMAGEN"}
    </div>
  )
}

function Tap({ on, className = "", children }: { on: boolean; className?: string; children: React.ReactNode }) {
  return <span className={`tap ${on ? "go" : ""} ${className}`}>{children}</span>
}

export function PanelDemo() {
  const { state, status, toggle, restart, ref, label } = useStepPlayer<State>(INITIAL, STEPS, { autoplay: true })
  const detailRef = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    const el = detailRef.current
    if (el && (state.images || state.tapWa)) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [state.images, state.tapWa, state.bubbles])
  const idle = status === "idle"
  const lucia: Lead = { name: "Lucía", service: "Tatuaje", status: state.status, when: "Hace 1 min", img: "s1" }
  const leads = state.newLead ? [lucia, ...BASE] : BASE
  const visible = state.filter === "pending" ? leads.filter((l) => l.status === "pending" || l.name === "Lucía") : leads
  const count = (s: Status) => leads.filter((l) => l.status === s).length
  const unread = state.newLead && !state.selected

  const chip = (s: Status | "all", active: boolean) => {
    const base = "px-2.5 py-1 rounded-full text-[11px] font-medium inline-flex items-center gap-1 whitespace-nowrap"
    const map: Record<string, [string, string]> = {
      all: ["bg-zinc-900 text-white", "bg-zinc-100 text-zinc-500"],
      pending: ["bg-amber-500 text-white", "bg-amber-50 text-amber-600 border border-amber-200"],
      responded: ["bg-blue-500 text-white", "bg-blue-50 text-blue-600 border border-blue-200"],
      client: ["bg-green-500 text-white", "bg-green-50 text-green-600 border border-green-200"],
    }
    return `${base} ${active ? map[s][0] : map[s][1]}`
  }
  const counter = (n: number, active: boolean) => (
    <span className={`text-[10px] px-1.5 rounded-full ${active ? "bg-white/20" : "bg-black/5"}`}>{n}</span>
  )

  return (
    <div className="demo" ref={ref}>
      <div
        className="relative w-full rounded-xl overflow-hidden bg-white text-[#0a0a0a] shadow-2xl border border-gray-700/40 text-left select-none cursor-pointer"
        onClick={toggle}
        aria-label="Demostración del panel de consultas de Inkup"
      >
        {idle && (
          <div className="overlay">
            <span>▶</span>
          </div>
        )}

        {/* barra superior de la app */}
        <div className="flex items-center justify-between px-4 h-11 border-b border-zinc-100 text-[12px]">
          <div className="flex items-center gap-2 font-semibold">
            <span className="w-6 h-6 rounded-lg bg-[#0a0a0a] text-white grid place-items-center text-[11px] font-bold">i</span>
            Inkup
          </div>
          <div className="hidden sm:flex items-center gap-5 text-zinc-500">
            <span className="relative text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-md">
              Consultas
              {unread && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] grid place-items-center">
                  1
                </span>
              )}
            </span>
            <span>Asistente</span>
            <span>Respuestas auto</span>
          </div>
          <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] text-blue-600 font-medium">
            Copiar link ↗
          </span>
        </div>

        <div className="flex h-[540px]">
          {/* ---------- lista ---------- */}
          <div
            className={`w-full md:w-[300px] lg:w-[340px] flex-none border-r border-zinc-200 flex flex-col ${
              state.selected ? "hidden md:flex" : "flex"
            }`}
          >
            <div className="px-4 pt-3 pb-2.5 border-b border-zinc-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold">Consultas</span>
                  <span className="text-[11px] text-zinc-400 bg-zinc-100 rounded-full px-2 py-0.5">{leads.length}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500">
                  <span className="p-1.5 rounded-md">
                    <Download className="h-3.5 w-3.5" />
                  </span>
                  <span className="p-1.5 rounded-md">
                    <RefreshCcw className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 pl-3 pr-2 py-1.5 text-[13px] text-zinc-400 border border-zinc-200 rounded-lg bg-zinc-50">
                <Search className="h-3.5 w-3.5" /> Buscar consultas...
              </div>
            </div>
            <div className="px-3 pt-2 pb-1 border-b border-zinc-100 flex gap-1.5 overflow-hidden">
              <span className={chip("all", state.filter === "all")}>Todos {counter(leads.length, state.filter === "all")}</span>
              <Tap on={state.tapFilter}>
                <span className={chip("pending", state.filter === "pending")}>
                  Pendiente {counter(count("pending"), state.filter === "pending")}
                </span>
              </Tap>
              <span className={chip("responded", false)}>Respondido {counter(count("responded"), false)}</span>
              <span className={chip("client", false)}>Cliente {counter(count("client"), false)}</span>
            </div>
            <div className="px-3 py-1.5 flex items-center gap-1.5 overflow-hidden text-[10px] text-zinc-400">
              Servicio:
              {["Tatuaje", "Piercing", "Eliminación"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-full text-[10px] font-medium border bg-white text-zinc-500 border-zinc-200 whitespace-nowrap">
                  {s}
                </span>
              ))}
            </div>
            <div className="px-3 pb-2 flex items-center gap-1.5 overflow-hidden text-[10px] text-zinc-400 border-b border-zinc-100">
              Fecha:
              {["Hoy", "7 días", "Este mes"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-full text-[10px] font-medium border bg-white text-zinc-500 border-zinc-200 whitespace-nowrap">
                  {s}
                </span>
              ))}
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium border bg-white text-zinc-500 border-zinc-200 inline-flex items-center gap-1 whitespace-nowrap">
                <Calendar className="h-3 w-3" /> Rango…
              </span>
            </div>
            <ul className="flex-1 overflow-hidden">
              {visible.map((l) => {
                const isLucia = l.name === "Lucía"
                const sel = isLucia && state.selected
                const isUnread = isLucia && unread
                return (
                  <li
                    key={l.name}
                    className={`relative flex items-start gap-2.5 px-3 py-2.5 border-b border-zinc-100 ${
                      sel ? "bg-blue-50 border-l-2 border-l-blue-400" : ""
                    } ${isLucia ? "pop" : ""}`}
                  >
                    {isUnread && <span className="absolute left-0 top-3 w-[3px] h-[32px] rounded-r-full bg-blue-500" />}
                    <Thumb img={l.img} className="w-[46px] h-[46px] flex-none" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[13px] truncate ${isUnread ? "font-bold text-[#0a0a0a]" : "font-medium text-zinc-600"}`}>
                          {isLucia ? <Tap on={state.tapRow}>{l.name}</Tap> : l.name}
                        </span>
                        <span className="text-[10px] text-zinc-400 whitespace-nowrap">{l.when}</span>
                      </div>
                      <div className="text-[11px] text-zinc-500 truncate">{l.service}</div>
                      <span className={`mt-1 inline-block text-[9px] px-1.5 py-0.5 rounded-full ${BADGE[l.status]}`}>
                        {LABEL[l.status]}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ---------- detalle ---------- */}
          {!state.selected ? (
            <div className="hidden md:flex flex-1 flex-col items-center justify-center gap-1.5 text-center">
              <span className="text-4xl">📋</span>
              <span className="text-[15px] font-medium text-zinc-500">Selecciona una consulta</span>
              <span className="text-[12px] text-zinc-400">Elige un lead de la lista para ver sus detalles</span>
            </div>
          ) : (
            <>
              <div ref={detailRef} className="flex-1 min-w-0 px-4 md:px-7 py-5 overflow-y-auto overflow-x-hidden">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[20px] font-bold leading-tight">Lucía</div>
                    <div className="text-[12px] text-zinc-400">Tatuaje · Hace 1 min</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-8 inline-flex items-center gap-1 px-3 rounded-md border border-zinc-200 text-[12px] font-medium">
                      {LABEL[state.status]} <ChevronDown className="h-3.5 w-3.5" />
                    </span>
                    <span className="p-1.5 rounded-md border border-zinc-200">
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </span>
                    <span className="p-1.5 rounded-md border border-zinc-200">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                <div className="mb-4 rounded-[12px] border border-black/[0.08] px-4 py-3 flex flex-col gap-1.5">
                  {QA.map(([q, a], i) => (
                    <React.Fragment key={q}>
                      {state.bubbles > i * 2 && (
                        <span className="self-start max-w-[80%] bg-zinc-100 text-zinc-600 text-[12px] px-3 py-1 rounded-[14px] rounded-tl-[4px] pop">
                          {q}
                        </span>
                      )}
                      {state.bubbles > i * 2 + 1 && (
                        <span className="self-end max-w-[80%] bg-[#0a0a0a] text-white text-[13px] px-3 py-1 rounded-[14px] rounded-tr-[4px] pop">
                          {a}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {state.images && (
                  <div className="mb-4 pop">
                    <div className="text-[11px] text-zinc-400 mb-1.5">Imágenes enviadas</div>
                    <div className="grid grid-cols-3 gap-2 max-w-[240px]">
                      <Thumb img="s1" className="aspect-square" />
                    </div>
                  </div>
                )}

                {state.images && (
                  <div className="hidden md:block">
                    <div className="text-[11px] text-zinc-400 font-medium mb-1.5">Plantilla de respuesta</div>
                    <div className="rounded-[8px] border border-black/[0.08] px-3 py-2.5 text-[13px] text-zinc-700">
                      Hola {"{{name}}"}! Soy {"{{studio_name}}"}, acabo de ver la información del tatuaje que quieres hacerte.
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-1">Variables: {"{{name}}"}, {"{{studio_name}}"}</div>
                  </div>
                )}
                {state.images && (
                  <div className="mt-3 pb-1 flex items-center gap-2">
                    <Tap on={state.tapWa}>
                      <span
                        className={`h-8 inline-flex items-center gap-1.5 px-3 rounded-md bg-green-500 text-white text-[12px] font-medium ${
                          state.waPress ? "press" : ""
                        }`}
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> Abrir WhatsApp
                      </span>
                    </Tap>
                    <span className="h-8 inline-flex items-center px-3 rounded-md border border-zinc-200 text-[12px] font-medium">
                      Guardar plantilla
                    </span>
                  </div>
                )}
              </div>

              <div className="hidden lg:flex w-[260px] flex-none border-l border-zinc-200 px-[18px] py-[18px] flex-col gap-4">
                <div>
                  <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wide mb-2">Contacto</div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg mb-1.5">
                    <Phone className="h-3.5 w-3.5 text-green-600" />
                    <span className="text-[12px] font-medium text-green-700">+34 6•• ••• •••</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-50 px-3 py-2 rounded-lg">
                    <Mail className="h-3.5 w-3.5 text-zinc-400" />
                    <span className="text-[12px] text-zinc-600">lucia•••@gmail.com</span>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wide mb-2">Cambiar estado</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(["pending", "responded", "client", "discarded"] as Status[]).map((s) => (
                      <span
                        key={s}
                        className={`px-2 py-1.5 rounded-lg text-[11px] font-medium border text-center ${
                          state.status === s ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-200"
                        }`}
                      >
                        {LABEL[s]}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 px-2 py-1.5 rounded-lg border border-zinc-200">
                  <Edit3 className="h-3 w-3" /> Gestionar ingreso
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <PlayerControls status={status} label={label} onToggle={toggle} onRestart={restart} />
    </div>
  )
}
