import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const languages = [
  { id: 1, name: 'en' },
  { id: 2, name: 'es' },
]
export default function LanguageSelect() {
  const [selected, setSelected] = useState(languages[0])
  const router = useRouter()

  useEffect(() => {
    router.push(router.asPath, undefined, {
      locale: selected.name,
    })
  }, [selected])

  return (
    <div className='w-20'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative'>
          <Listbox.Button className='relative w-full py-2 pl-3 pr-2 text-left bg-white text-sm rounded-md cursor-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-gray-200 focus:ring-opacity-50'>
            <span className='block'>{selected.name}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <SelectorIcon
                className='w-5 h-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm'>
              {languages.map(language => (
                <Listbox.Option
                  key={language.id}
                  className={({ active }) =>
                    `${active ? 'text-gray-900 bg-gray-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={language}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}>
                        {language.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-gray-600' : 'text-gray-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className='w-5 h-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
