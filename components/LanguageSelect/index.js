import { useState, Fragment } from 'react'
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

  const onSelectChange = value => {
    setSelected(value)
    router.push(router.asPath, router.asPath, {
      locale: value,
      scroll: false,
    })
  }

  return (
    <div className='w-20'>
      <Listbox value={selected} onChange={onSelectChange}>
        <div className='relative z-10'>
          <Listbox.Button className='relative w-full py-1.5 pl-3 pr-2 text-left border dark:border-gray-500 hover:border-gray-300 dark:hover:border-gray-400 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md focus:outline-none focus:ring-2 ring-indigo-300 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800 dark:focus:ring-indigo-600'>
            <span className='block'>{router.locale}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <SelectorIcon className='w-5 h-5 text-gray-400 dark:text-gray-300' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto bg-white dark:bg-gray-700 rounded-md max-h-60 focus:outline-none text-sm shadow'>
              {languages.map(language => (
                <Listbox.Option
                  key={language.id}
                  className={({ active }) =>
                    `${
                      active
                        ? 'text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-300'
                        : 'text-gray-900 dark:text-gray-400'
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={language.name}>
                  {({ selected, active }) => (
                    <>
                      <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                        {language.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${active ? 'text-gray-600' : 'text-gray-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className='w-5 h-5 dark:text-gray-400' aria-hidden='true' />
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
