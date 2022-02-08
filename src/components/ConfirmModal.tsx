import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

import { Button } from '@apideck/components';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  isOpen: boolean;
  onConfirm: () => void;
}

export function ConfirmModal({ onClose, isOpen, onConfirm }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirm();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-xs p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Are you sure?
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  When you delete a connection you will lose all your settings.
                </p>
              </div>

              <div className="mt-4 space-x-4 flex">
                <Button
                  onClick={handleConfirm}
                  text="Delete"
                  variant="danger"
                  className="w-full"
                  isLoading={isLoading}
                />
                <Button
                  onClick={onClose}
                  text="Cancel"
                  variant="outline"
                  className="w-full"
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ConfirmModal;
