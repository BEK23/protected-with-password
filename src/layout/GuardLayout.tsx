import React, { ReactNode, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Checkbox,
  Button,
} from "@nextui-org/react";

export default function GuardLayout({ children }: { children: ReactNode }) {
  const [password, setPassword] = useState<string | null>(
    localStorage.getItem("password"),
  );
  const [error, setError] = useState<string>();
  const [checked, setChecked] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (refInput.current?.value !== (import.meta.env.VITE_PASSWORD as string))
      setError("The password is not correct");
    else {
      setPassword(refInput.current?.value);
      if (checked) localStorage.setItem("password", refInput.current?.value);
    }
  };

  return (
    <>
      <Modal
        isOpen={password !== import.meta.env.VITE_PASSWORD}
        isDismissable={false}
        isKeyboardDismissDisabled={false}
        hideCloseButton
        placement="top-center"
      >
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Enter password to login
            </ModalHeader>
            <ModalBody>
              <Input
                ref={refInput}
                id="password"
                // endContent={
                //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                errorMessage={error}
              />
              <div className="flex py-2 px-1 justify-end">
                <Checkbox
                  id="remember"
                  checked={checked}
                  onValueChange={setChecked}
                  classNames={{
                    label: "text-small",
                  }}
                >
                  Remember me
                </Checkbox>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Login
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {password === import.meta.env.VITE_PASSWORD ? children : null}
    </>
  );
}
