import reactLogo from './assets/react.svg'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <img src="/vite.svg" className="h-16 w-16" alt="Vite logo" />
        <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
        <h1 className="text-4xl font-bold tracking-tight">Vite + React + Tailwind</h1>
        <p className="max-w-xl text-lg text-slate-300">
          Edit <code className="rounded bg-slate-800 px-1 py-0.5">src/App.tsx</code> and save to test HMR.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <a
          className="rounded-full bg-slate-800 px-4 py-2 font-semibold transition hover:bg-slate-700"
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          Learn Vite
        </a>
        <a
          className="rounded-full bg-slate-800 px-4 py-2 font-semibold transition hover:bg-slate-700"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          Learn React
        </a>
        <a
          className="rounded-full bg-slate-800 px-4 py-2 font-semibold transition hover:bg-slate-700"
          href="https://tailwindcss.com/docs/guides/vite"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind Guide
        </a>
      </div>
    </main>
  )
}

export default App
