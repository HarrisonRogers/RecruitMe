import Image from 'next/image'
import Logo from '../assets/logo.svg'
import LandingImg from '../assets/main.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-auto sm:px-8 py-6">
        <Image src={Logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4 ">
            Introducing Jobify, your ultimate companion in the job search
            journey! With Jobify, you can effortlessly add and organize the jobs
            you have applied for, ensuring you never miss a follow-up or
            interview. Keep a detailed record of each application, including
            company details, job titles, and application dates. Monitor your
            progress and stay motivated by tracking the total number of jobs you
            have applied for. Whether you are actively job hunting or keeping
            tabs on potential opportunities, Jobify simplifies the process,
            helping you stay organized and focused on landing your dream job.
          </p>
          <Button asChild className="mt-4">
            <Link href={'/add-job'}>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="Landing Img" className="hidden lg:block" />
      </section>
    </main>
  )
}
