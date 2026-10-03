"use client"

import * as React from "react"
import { useStepPlayer, Typing, PlayerControls, type Step } from "./use-step-player"

/* Conversación de ejemplo: el cliente responde en el asistente y al final se abre WhatsApp. */
type Msg = { from: "bot" | "me"; body: React.ReactNode }

const MESSAGES: Msg[] = [
  {
    from: "bot",
    body: (
      <>
        ¡Hola! 👋 ¿En qué te ayudo?
        <div className="opts">
          <span className="opt sel">Quiero un tatuaje</span>
          <span className="opt">Piercing</span>
          <span className="opt">Otra consulta</span>
        </div>
      </>
    ),
  },
  { from: "me", body: "Quiero un tatuaje" },
  {
    from: "bot",
    body: (
      <>
        ¿Qué estilo tienes en mente?
        <div className="styles">
          <div className="sw s1 sel">
            <span>Fine line</span>
          </div>
          <div className="sw s2">
            <span>Realismo</span>
          </div>
          <div className="sw s3">
            <span>Tradicional</span>
          </div>
          <div className="sw s4">
            <span>Blackwork</span>
          </div>
        </div>
      </>
    ),
  },
  { from: "me", body: "Fine line" },
  {
    from: "bot",
    body: (
      <>
        ¿Zona y tamaño aproximado?
        <div className="opts">
          <span className="opt sel">Antebrazo</span>
          <span className="opt">Costillas</span>
          <span className="opt">Tobillo</span>
        </div>
      </>
    ),
  },
  { from: "me", body: "Antebrazo, unos 10 cm" },
  { from: "bot", body: "¿Tienes alguna referencia? Sube una imagen." },
  { from: "me", body: "📎 referencia.jpg" },
  {
    from: "bot",
    body: (
      <>
        ¿Para cuándo?
        <div className="opts">
          <span className="opt">Esta semana</span>
          <span className="opt sel">Este mes</span>
          <span className="opt">Sin prisa</span>
        </div>
      </>
    ),
  },
  { from: "bot", body: "¿Cómo te llamas?" },
  { from: "me", body: "Lucía" },
]

type State = { shown: number; typing: boolean; press: boolean; wa: boolean }
const INITIAL: State = { shown: 0, typing: false, press: false, wa: false }

function buildSteps(): Step<State>[] {
  const steps: Step<State>[] = []
  MESSAGES.forEach((m, i) => {
    if (m.from === "bot") {
      steps.push({ d: i === 0 ? 300 : 600, patch: { typing: true } })
      steps.push({ d: 700, patch: { typing: false, shown: i + 1 } })
    } else {
      steps.push({ d: 700, patch: { shown: i + 1 } })
    }
  })
  // resumen final
  steps.push({ d: 600, patch: { typing: true } })
  steps.push({ d: 800, patch: { typing: false, shown: MESSAGES.length + 1 } })
  steps.push({ d: 1400, patch: { press: true } })
  steps.push({ d: 600, patch: { wa: true } })
  return steps
}

const STEPS = buildSteps()

export function PhoneDemo({ autoplay = true, loop = true }: { autoplay?: boolean; loop?: boolean }) {
  const { state, status, toggle, restart, ref, label } = useStepPlayer<State>(INITIAL, STEPS, {
    autoplay,
    loopAfter: loop ? 5000 : undefined,
  })

  return (
    <div className="demo" ref={ref}>
      <div className="phone" aria-label="Demostración del asistente de Inkup" onClick={toggle}>
        <div className="screen">
          <div className="status">
            <span>18:41</span>
            <span>●●● ▲ ▮</span>
          </div>
          <div className="urlbar">
            <span className="u">
              hi.inkup.io/<b>getinked-malaga</b>
            </span>
            <span className="langs">
              <span className="on">ES</span>
              <span>EN</span>
              <span>FR</span>
              <span>PT</span>
              <span>IT</span>
            </span>
          </div>
          <div className="scr-head">
            <div className="avatar">G</div>
            <div className="who">
              Asistente de Get Inked<small>Málaga · en línea</small>
            </div>
          </div>
          <div className="chat">
            {MESSAGES.slice(0, state.shown).map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.body}
              </div>
            ))}
            {state.shown > MESSAGES.length && (
              <div className="msg bot">
                Este es un resumen de tu solicitud:
                <div className="summary">
                  <h5>Resumen de tu consulta</h5>
                  <div>
                    <span>Servicio</span>
                    <span>Tatuaje</span>
                  </div>
                  <div>
                    <span>Estilo</span>
                    <span>Fine line</span>
                  </div>
                  <div>
                    <span>Zona</span>
                    <span>Antebrazo, 10 cm</span>
                  </div>
                  <div>
                    <span>Referencias</span>
                    <span>1 imagen</span>
                  </div>
                  <div>
                    <span>Cuándo</span>
                    <span>Este mes</span>
                  </div>
                </div>
                <div className={`btn-wa ${state.press ? "press" : ""}`}>💬 Enviar por WhatsApp</div>
              </div>
            )}
            {state.typing && <Typing />}
          </div>
          <div className="scr-foot">
            <span>
              By <b>inkup.io</b>
            </span>
            <span>Demo</span>
          </div>

          <div className={`wa-screen ${state.wa ? "in" : ""}`} aria-hidden={!state.wa}>
            <div className="status dark">
              <span>18:42</span>
              <span>●●● ▲ ▮</span>
            </div>
            <div className="wa-head">
              <span className="back">‹</span>
              <div className="avatar">G</div>
              <div>
                Get Inked<small>en línea</small>
              </div>
              <div className="ic">
                <span>📹</span>
                <span>📞</span>
                <span>⋮</span>
              </div>
            </div>
            <div className="wa-body">
              <span className="wa-note">WhatsApp se abre con el mensaje ya escrito</span>
              <div className="wa-msg out">
                {"Hola "}
                <b>Get Inked!</b>
                {"\n\nMi nombre es "}
                <b>Lucía</b>
                {" y me interesa lo siguiente:\n\n"}
                <b>Fuente:</b>
                {" Asistente de Inkup\n"}
                <b>Servicio:</b>
                {" Tatuaje\n"}
                <b>Estilo:</b>
                {" Fine line\n"}
                <b>Zona y tamaño:</b>
                {" Antebrazo, 10 cm\n"}
                <b>Cuándo:</b>
                {" Este mes\n\n"}
                <b>Imágenes:</b>
                {"\n"}
                <a>hi.inkup.io/ref/lucia-01.jpg</a>
                <span className="tick">
                  18:42 <i>✓✓</i>
                </span>
              </div>
            </div>
            <div className="wa-foot">
              <span>Mensaje</span>
              <em>🎤</em>
            </div>
          </div>
        </div>
      </div>
      <PlayerControls status={status} label={label} onToggle={toggle} onRestart={restart} />
    </div>
  )
}
