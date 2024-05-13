import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const navigation = [
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  { name: 'Sum Square', to: '/forlmulas' },
  
]


const Formulas = (props: Props) => {
  const [variableA, setVariableA] = useState(''); 
  const [variableB, setVariableB] = useState(''); 
  const [result, setResult] = useState(''); 

 
  const calculateResult = () => {
    const sum = parseFloat(variableA) + parseFloat(variableB);
    const squareOfSum = Math.pow(sum, 2);
    setResult(squareOfSum.toFixed(2)); 
  };

  
  const clearValues = () => {
    setVariableA('');
    setVariableB('');
    setResult('');
  };
    return (
        <div className="relative px-6 lg:px-8">
           
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
          
            <div className=" flex justify-center items-center h-screen ">
      <div className=" bg-transparent/50 p-8 rounded-2xl shadow-lg w-[600px] h-[600px]">
        <h1 className="text-3xl font-bold mb-4 text-center">Square of the sum of two expressions</h1>
        <p className="text-md font-semibold mb-4 text-slate-300">The online calculator will help you find the square of the sum of two expressions, which is equal to the square of the first number plus twice the product of the first number and the second plus the square of the second number.</p>
        <div className='ring-2 ring-inset ring-rose-600/50 p-2 rounded-md text-center w-fit mb-10'>
        Squared sum formula: (a + b)² = a² + 2ab + b²
        </div>
        <div className="mb-4">
          <label htmlFor="variableA" className="block mb-1 text-gray-400">
            Variable A:
          </label>
          <input
            type="text"
            id="variableA"
            className="w-full flex-auto rounded-md border-0 bg-transparent/20 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20  sm:text-sm sm:leading-6"
            value={variableA}
            onChange={(e) => setVariableA(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="variableB" className="block mb-1 text-gray-400">
            Variable B:
          </label>
          <input
            type="text"
            id="variableB"
            className="w-full flex-auto rounded-md border-0 bg-transparent/20 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20  sm:text-sm sm:leading-6"
            value={variableB}
            onChange={(e) => setVariableB(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="result" className="block mb-1 text-gray-400 ">
            Square of Sum:
          </label>
          <input
            type="text"
            id="result"
            className="w-full flex-auto rounded-md border-0 bg-transparent/20 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20  sm:text-sm sm:leading-6"
            value={result}
            readOnly
          />
        </div>
        <div className="flex justify-between ">
          <button
            className="bg-rose-600/50 text-white px-4 py-2 rounded-md mr-2 hover:bg-rose-500 duration-500"
            onClick={calculateResult}
          >
            Calculate
          </button>
          <button
            className="bg-gray-500/50 text-white px-4 py-2 rounded-md hover:bg-gray-500 duration-500"
            onClick={clearValues}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
            
            <div className="absolute inset-x-0 z-50 top-[18%] left-[15%] bg-transparent/50 w-[300px] h-[600px] rounded-2xl pt-6 px-8 overflow-auto">
            <div className="flex flex-col grid gap-2 ml-4 " >
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-lg font-semibold leading-6 btn">
                {item.name}
              </Link>
            ))}
          </div>
            </div>
        </div>
    );
};

export default Formulas;
