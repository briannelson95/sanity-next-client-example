import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-white dark:bg-slate-800 dark:text-white">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
