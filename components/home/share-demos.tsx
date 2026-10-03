"use client"

import * as React from "react"
import { useStepPlayer, Typing, PlayerControls, type Step } from "./use-step-player"

function AssistantHeader({ time }: { time: string }) {
  return (
    <>
      <div className="status">
        <span>{time}</span>
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
    </>
  )
}

function Skeleton() {
  return (
    <div className="sk" aria-hidden>
      <i />
      <i />
      <i />
    </div>
  )
}

/* ---------------- Instagram: enlace en la bio ---------------- */
type IgState = { tap: boolean; s2: boolean; sk: boolean; shown: number; typing: boolean; optSel: boolean; optTap: boolean }
const IG_INITIAL: IgState = { tap: false, s2: false, sk: true, shown: 0, typing: false, optSel: false, optTap: false }
const IG_STEPS: Step<IgState>[] = [
  { d: 1200, patch: { tap: true } },
  { d: 500, patch: { s2: true } },
  { d: 900, patch: { sk: false } },
  { d: 200, patch: { typing: true } },
  { d: 700, patch: { typing: false, shown: 1 } },
  { d: 500, patch: { optTap: true, optSel: true } },
  { d: 700, patch: { shown: 2 } },
  { d: 600, patch: { typing: true } },
  { d: 700, patch: { typing: false, shown: 3 } },
]

export function InstagramDemo() {
  const { state, status, toggle, restart, ref, label } = useStepPlayer<IgState>(IG_INITIAL, IG_STEPS)
  const idle = status === "idle"

  return (
    <div className="demo small" ref={ref}>
      <div className="phone" aria-label="Demostración: enlace en la bio de Instagram" onClick={toggle}>
        <div className="screen">
          {idle && (
            <div className="overlay">
              <span>▶</span>
            </div>
          )}
          <div className="status">
            <span>12:30</span>
            <span>●●● ▲ ▮</span>
          </div>
          <div className="ig">
            <div className="ig-top">
              getinked.malaga ▾ <span>＋ ☰</span>
            </div>
            <div className="ig-prof">
              <div className="ring">
                <div>G</div>
              </div>
              <div className="stats">
                <div>
                  <b>312</b>publicaciones
                </div>
                <div>
                  <b>24,1 mil</b>seguidores
                </div>
                <div>
                  <b>890</b>seguidos
                </div>
              </div>
            </div>
            <div className="bio">
              <b>Get Inked Tattoo · Málaga</b>
              Fine line · Realismo · Blackwork
              <br />
              Citas y presupuestos aquí 👇
              <div className={`lnk tap ${state.tap ? "go" : ""}`}>🔗 hi.inkup.io/getinked-malaga</div>
            </div>
            <div className="ig-btns">
              <span className="f">Seguir</span>
              <span>Mensaje</span>
              <span>▾</span>
            </div>
            <div className="ig-grid">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className={`scene ${state.s2 ? "in" : ""}`}>
            <AssistantHeader time="12:30" />
            {state.sk ? (
              <Skeleton />
            ) : (
              <div className="chat">
                {state.shown >= 1 && (
                  <div className="msg bot">
                    ¡Hola! 👋 ¿En qué te ayudo?
                    <div className="opts">
                      <span className={`opt tap ${state.optTap ? "go" : ""} ${state.optSel ? "sel" : ""}`}>
                        Quiero un tatuaje
                      </span>
                      <span className="opt">Piercing</span>
                      <span className="opt">Otra consulta</span>
                    </div>
                  </div>
                )}
                {state.shown >= 2 && <div className="msg me">Quiero un tatuaje</div>}
                {state.shown >= 3 && (
                  <div className="msg bot">
                    ¿Qué estilo tienes en mente?
                    <div className="styles">
                      <div className="sw s1">
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
                  </div>
                )}
                {state.typing && <Typing />}
              </div>
            )}
            <div className="scr-foot">
              <span>
                By <b>inkup.io</b>
              </span>
              <span>…y sigue como arriba</span>
            </div>
          </div>
        </div>
      </div>
      <PlayerControls status={status} label={label} onToggle={toggle} onRestart={restart} />
    </div>
  )
}

/* ---------------- WhatsApp Business: bienvenida automática ---------------- */
type WaState = {
  m1: number
  typ1: boolean
  tap: boolean
  s2: boolean
  sk: boolean
  shown: number
  typing: boolean
  s3: boolean
  m3: number
}
const WA_INITIAL: WaState = { m1: 0, typ1: false, tap: false, s2: false, sk: true, shown: 0, typing: false, s3: false, m3: 0 }
const WA_STEPS: Step<WaState>[] = [
  { d: 900, patch: { m1: 1 } },
  { d: 800, patch: { typ1: true } },
  { d: 900, patch: { typ1: false, m1: 2 } },
  { d: 1500, patch: { tap: true } },
  { d: 500, patch: { s2: true } },
  { d: 900, patch: { sk: false } },
  { d: 200, patch: { typing: true } },
  { d: 700, patch: { typing: false, shown: 1 } },
  { d: 700, patch: { shown: 2 } },
  { d: 600, patch: { typing: true } },
  { d: 700, patch: { typing: false, shown: 3 } },
  { d: 900, patch: { shown: 4 } },
  { d: 1600, patch: { s3: true } },
  { d: 600, patch: { m3: 1 } },
  { d: 1600, patch: { m3: 2 } },
]

export function WhatsAppDemo() {
  const { state, status, toggle, restart, ref, label } = useStepPlayer<WaState>(WA_INITIAL, WA_STEPS)
  const idle = status === "idle"

  return (
    <div className="demo small" ref={ref}>
      <div className="phone" aria-label="Demostración: bienvenida automática de WhatsApp Business" onClick={toggle}>
        <div className="screen">
          {idle && (
            <div className="overlay">
              <span>▶</span>
            </div>
          )}
          <div className="status dark">
            <span>12:33</span>
            <span>●●● ▲ ▮</span>
          </div>
          <div className="wa-screen wa-static">
            <div className="wa-head">
              <span className="back">‹</span>
              <div className="avatar">G</div>
              <div>
                Get Inked<small>Cuenta de empresa</small>
              </div>
              <div className="ic">
                <span>📹</span>
                <span>📞</span>
                <span>⋮</span>
              </div>
            </div>
            <div className="wa-body">
              <span className="wa-day">Hoy</span>
              {state.m1 >= 1 && (
                <div className="wa-msg out">
                  Buenas, info de precios porfa
                  <span className="tick">
                    12:33 <i>✓✓</i>
                  </span>
                </div>
              )}
              {state.typ1 && <Typing className="typing wa-typing" />}
              {state.m1 >= 2 && (
                <div className="wa-msg in">
                  {"¡Hola! 👋 Gracias por contactar con Get Inked. Para pedir presupuesto o cita, usa nuestro asistente:\n"}
                  <a className={`tap ${state.tap ? "go" : ""}`}>hi.inkup.io/getinked-malaga</a>
                  <div className="wa-prev">
                    <b>Asistente de Get Inked</b>
                    <span>Cuéntanos qué tatuaje quieres y te damos precio.</span>
                    <small>hi.inkup.io</small>
                  </div>
                  <span className="tick">12:33</span>
                </div>
              )}
            </div>
            <div className="wa-foot">
              <span>Mensaje</span>
              <em>🎤</em>
            </div>
          </div>

          <div className={`scene ${state.s2 ? "in" : ""}`}>
            <AssistantHeader time="12:34" />
            {state.sk ? (
              <Skeleton />
            ) : (
              <div className="chat">
                {state.shown >= 1 && (
                  <div className="msg bot">
                    ¡Hola! 👋 ¿En qué te ayudo?
                    <div className="opts">
                      <span className="opt sel">Quiero un tatuaje</span>
                      <span className="opt">Piercing</span>
                    </div>
                  </div>
                )}
                {state.shown >= 2 && <div className="msg me">Quiero un tatuaje</div>}
                {state.shown >= 3 && (
                  <div className="msg bot">
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
                  </div>
                )}
                {state.shown >= 4 && <div className="msg hint">… responde el resto y pulsa “Enviar por WhatsApp” …</div>}
                {state.typing && <Typing />}
              </div>
            )}
            <div className="scr-foot">
              <span>
                By <b>inkup.io</b>
              </span>
              <span>Demo</span>
            </div>
          </div>

          <div className={`scene fade ${state.s3 ? "in" : ""}`} style={{ background: "var(--wa-wall)" }}>
            <div className="status dark">
              <span>12:36</span>
              <span>●●● ▲ ▮</span>
            </div>
            <div className="wa-head">
              <span className="back">‹</span>
              <div className="avatar">L</div>
              <div>
                Lucía<small>en línea</small>
              </div>
              <div className="ic">
                <span>📹</span>
                <span>📞</span>
                <span>⋮</span>
              </div>
            </div>
            <div className="wa-body">
              <span className="wa-note">Lo que recibes tú</span>
              {state.m3 >= 1 && (
                <div className="wa-msg in">
                  {"Hola "}
                  <b>Get Inked!</b>
                  {"\n\nMi nombre es "}
                  <b>Lucía</b>
                  {" y me interesa lo siguiente:\n\n"}
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
                  <span className="tick">12:35</span>
                </div>
              )}
              {state.m3 >= 2 && (
                <div className="wa-msg out">
                  Hola Lucía! Serían unos 120 €. ¿Te va el jueves a las 17h?
                  <span className="tick">
                    12:36 <i>✓✓</i>
                  </span>
                </div>
              )}
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
