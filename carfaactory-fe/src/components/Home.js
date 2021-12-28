import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const navigation = ["Fragments", "Template", "Configuration"];
const profile = ["Your Profile", "Settings", "Sign out"];

export default function Home() {
    const [active, setActive] = useState(0);

  
    // const showSection = () => {
    //   if (active === 0) {
    //     return <Fragments />;
    //   } else if (active === 1) {
    //     return <Templates />;
    //   } else if (active === 2) {
    //     return <Configuration />;
    //   }
    // };
  
    return (
      <div>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
              
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) => (
                          <Fragment key={item}>
                            <p
                              onClick={() => setActive(itemIdx)}
                              className={
                                active === itemIdx
                                  ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                              }
                            >
                              {item}
                            </p>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                          <>
                   
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                {profile.map((item) => (
                                  <Menu.Item key={item}>
                                    {({ active }) => (
                                      <span
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                        )}
                                      >
                                        {item}
                                      </span>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
  
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Template authoring tool
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* {showSection()} */}
          </div>
        </main>
      </div>
    );
  }