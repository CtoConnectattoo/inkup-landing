"use client"

import * as React from "react"

export type Step<S> = {
  /** Milisegundos de espera antes de aplicar el paso */
  d: number
  patch: Partial<S> | ((prev: S) => S)
}

export type PlayerStatus = "idle" | "playing" | "paused" | "done"

interface Options {
  /** Arranca solo cuando el componente entra en pantalla */
  autoplay?: boolean
  /** Tras terminar, vuelve a empezar pasados estos ms */
  loopAfter?: number
}

/**
 * Reproductor de pasos para las maquetas animadas de la home.
 * Cada paso aplica un parche al estado tras una espera. Se puede pausar,
 * reanudar y reiniciar, y respeta prefers-reduced-motion para el autoplay.
 */
export function useStepPlayer<S>(initial: S, steps: Step<S>[], opts: Options = {}) {
  const [state, setState] = React.useState<S>(initial)
  const [status, setStatus] = React.useState<PlayerStatus>("idle")
  const index = React.useRef(0)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const stepsRef = React.useRef(steps)
  stepsRef.current = steps
  const loopRef = React.useRef(opts.loopAfter)
  loopRef.current = opts.loopAfter

  const clear = React.useCallback(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = null
  }, [])

  const restart = React.useCallback(() => {
    clear()
    index.current = 0
    setState(initial)
    setStatus("playing")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear])

  const schedule = React.useCallback(() => {
    const list = stepsRef.current
    if (index.current >= list.length) {
      setStatus("done")
      if (loopRef.current) {
        timer.current = setTimeout(() => restart(), loopRef.current)
      }
      return
    }
    const step = list[index.current]
    timer.current = setTimeout(() => {
      setState((prev) =>
        typeof step.patch === "function" ? (step.patch as (p: S) => S)(prev) : { ...prev, ...step.patch },
      )
      index.current += 1
      schedule()
    }, step.d)
  }, [restart])

  React.useEffect(() => {
    if (status === "playing") schedule()
    else clear()
    return clear
  }, [status, schedule, clear])

  const play = React.useCallback(() => {
    if (status === "done") restart()
    else setStatus("playing")
  }, [status, restart])

  const pause = React.useCallback(() => setStatus("paused"), [])

  const toggle = React.useCallback(() => {
    if (status === "playing") pause()
    else play()
  }, [status, play, pause])

  // Autoplay al entrar en pantalla
  const ref = React.useRef<HTMLDivElement | null>(null)
  const started = React.useRef(false)
  React.useEffect(() => {
    if (!opts.autoplay || started.current || !ref.current) return
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started.current) {
          started.current = true
          setTimeout(() => setStatus("playing"), 900)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [opts.autoplay])

  const label =
    status === "playing" ? "Pausar" : status === "done" ? "Ver de nuevo" : status === "paused" ? "Continuar" : "Reproducir"

  return { state, status, play, pause, toggle, restart, ref, label }
}

export function Typing({ className = "typing" }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <i />
      <i />
      <i />
    </div>
  )
}

export function PlayerControls({
  status,
  label,
  onToggle,
  onRestart,
}: {
  status: PlayerStatus
  label: string
  onToggle: () => void
  onRestart: () => void
}) {
  return (
    <div className="ctrl">
      <button type="button" onClick={onToggle} aria-label={label}>
        {status === "playing" ? "⏸" : "▶"} {label}
      </button>
      <button type="button" onClick={onRestart}>
        ↻ Repetir
      </button>
    </div>
  )
}
