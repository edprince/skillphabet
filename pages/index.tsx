import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Letter from '../components/Letter'
import skills from '../skills'

const Home: NextPage = () => {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let stored = localStorage.getItem('skills');
    if (stored) {
      stored = JSON.parse(stored);
      console.log(Object.keys(stored).length);
      setPercentage(Math.floor((Object.keys(stored).length / 26) * 100));
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('/bg.svg')]">
      <Head>
        <title>Skillphabet</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center font-nanum py-12">
        <div className='flex'>

          <h1 className="text-6xl font-bold mr-2">
            Skillphabet
          </h1>
          <Image src="/rubiks.svg" alt="Juggling Balls" width={40} height={40} />
        </div>

        <p className="mt-3 text-2xl">
          Learn a skill for every letter
        </p>

        <span className='text-3xl'>{percentage}% Complete</span>
        <div className='w-full sm:w-full md:w-1/2 lg:w-1/3'>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-200">
            <div className="bg-indigo-300 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>


        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className='space-y-4'>
            {alphabet.map((letter, i) => (
              <Letter key={i} letter={letter} index={i} update={(percent:Number) => {
                setPercentage(percent);
              }} />
            ))}
          </div>
        </div>
      </main>


      <footer className="flex h-24 w-full items-center justify-center font-nanum">
        Powered by a small team of dedicated gnomes
      </footer>
    </div>
  )
}

export default Home
