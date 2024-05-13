import { CalculatorIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

type Props = {}
const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Formulas', to: '/forlmulas' },
    { name: 'Contact', to: '/contact' },
    
  ]
  const Links = [
    { name: 'Site support', to: '/' },
    { name: 'Technical support', to: '/' },
    { name: 'Website collaboration', to: '/' },
    
  ]


const Footer = (props: Props) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-14 lg:py-14 ring-2 ring-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            Information update on the site and new components.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:pt-4">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalculatorIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              
              
              <ul>
                
                {Links.map((item) => (
              <li className='mt-3'>
                <Link key={item.name} to={item.to} className="text-md font-semibold leading-6  ">
                {item.name}
                </Link>
              </li>
            ))}
                
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

              </div>
              <ul>
                
                {navigation.map((item) => (
              <li className='mt-3'>
                <Link key={item.name} to={item.to} className="text-md font-semibold leading-6  ">
                {item.name}
                </Link>
              </li>
            ))}
                
              </ul>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-20 leading-7 text-gray-400 text-center">
              © 2024 EqHe Fromulas Labs Inc. All rights reserved.
              </div>
     
    </div>
  )
}

export default Footer