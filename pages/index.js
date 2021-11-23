import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return <>
    <main>
      <div className="top-0 bottom-0 left-0 right-0 fixed">
          <div className="h-full bg-landing bg-center bg-cover bg-no-repeat">
            <div className="flex h-16 items-center w-full">
              <div className="h-16 w-16 bg-white rounded-full mt-4 ml-4 overflow-hidden border-purple-400 border-4">
                <p><img src="/logo.svg" alt="Share'N'Go"/></p>
              </div>
              <div className="ml-2 mt-2 text-white font-bold">
                <h1>Share'N'Go</h1>
              </div>
              <div className="ml-auto mt-2 mr-16 font-bold text-white">Join Us</div>
              <div className="mt-2 mr-16 font-bold text-white">Founders</div>

            </div>
            <div className="md:ml-auto ml-2 mt-32 sm:w-full md:w-2/3 xl:w-1/3 h-full ">
              <h1 className="text-white text-5xl font-bold">Enjoy Your City</h1>
              <h3 className="text-white text-xl font-semibold mt-16">Find the perfect spot to chill with your friend</h3>
              <p className="mt-16"><Link href="/accueil" ><a className="mt-16 py-2 px-2 text-3xl text-white bg-accueil-button">Start sharing</a></Link></p>
            </div>
          </div>
      </div>
    </main>
    </>
}
