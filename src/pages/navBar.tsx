import { Fragment } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import connectxeniaLogo from '../../assets/ConnectXenia Final Files/Connectxenia-final-logo-png.png';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
  { name: 'Home', href: 'home', current: false },
  { name: 'Our Features', href: 'features', current: false },
  { name: 'Contact Us', href: '#footer', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-black" id="home">
      {({ open }: any) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Image className="h-8 w-auto" src={connectxeniaLogo} alt="ConnectXenia Logo" objectFit="contain" />
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                  <div className="flex space-x-4 pr-20">
                    {navigation.map((item) => (
                      <ScrollLink
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-md font-medium'
                        )}
                        activeClass="bg-gray-900 text-white"
                        spy={true}
                      >
                        {item.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={ScrollLink}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  activeClass="bg-gray-900 text-white"
                  spy={true}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
