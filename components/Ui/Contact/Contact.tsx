import React from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { GiCoffeeCup } from "react-icons/gi";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import clsx from "clsx";
import Cowsay from "@/components/common/icons/Cowsay";
import Table_Console from "@/components/common/consoles/console_lines/Table_Console";
import Link from "next/link";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import BodyText from "@/components/common/text/BodyText";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const headers = {
    label: "",
    items: ["type", "company"],
  };

  const descriptions = {
    label: "",
    items: [
      {
        prefix: "social",
        label: (
          <Link
            href={"https://www.linkedin.com/in/juanglezf/"}
            target='_blank'>
            @juan-glez
          </Link>
        ),
        icon: <AiFillLinkedin />,
      },
      {
        prefix: "social",
        label: (
          <Link
            href={"https://github.com/SirJohn72-script"}
            target='_blank'>
            JohnScript-72
          </Link>
        ),
        icon: <AiFillGithub />,
      },
      {
        prefix: "social",
        label: (
          <Link
            href={"https://www.youtube.com/c/JohnScript72"}
            target='_blank'>
            JohnScript
          </Link>
        ),
        icon: <AiFillYoutube />,
      },
    ],
  };

  const handleSendEmail = () => {
    router.push(
      "mailto:sirjohn72@outlook.es?subject=Hello Juan from the web page&body=< put your message here :) >"
    );
  };

  return (
    <ConsoleSecction
      id='contact'
      border={false}
      branch='contact'
      icon={<GiCoffeeCup />}>
      <>
        <div id='Console_Secction'>
          <HeaderLine>Let&apos;s work together</HeaderLine>
        </div>
        <div
          className={clsx(
            "flex w-full flex-wrap md:gap-0",
            "gap-9"
          )}>
          <div
            id='contact_cowsay'
            className={clsx(
              "md:w-[50%] md:w-max-[50%]",
              "w-full"
            )}>
            <CommandLine command='coffee' label='cowsay' />
            <div
              className={clsx(
                "relative md:pl-[38px]",
                "pl-[20px]"
              )}>
              <Cowsay />
            </div>
          </div>

          <div
            id='contact_contacts'
            className={clsx(
              "md:w-[50%] md:w-max-[50%] gap-4 flex flex-col",
              "w-full"
            )}>
            <div className='social_media'>
              <CommandLine
                command='ls'
                label='social_media'
              />
              <div className='pl-[25px]'>
                <Table_Console
                  headers={headers}
                  descriptions={descriptions}
                />
              </div>
            </div>

            <div id='contact_send'>
              <CommandLine
                command='echo'
                label='send me a email'
              />
              <div className='pl-[38px]'>
                <PrimaryButton
                  event={() => handleSendEmail()}>
                  Send
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div
            id='copyright'
            className={clsx("w-full text-center pt-9")}>
            <div className='flex w-full justify-center gap-2'>
              <BodyText
                color={"text-yellow-900"}
                weight={"font-600"}
                uppercase={false}>
                {`Todos los derechos reservados © 
                ${new Date().getFullYear()}`}
              </BodyText>
            </div>
            <div className='flex w-full justify-center gap-2'>
              <Link href={"/"}>
                <BodyText
                  color={"text-yellow-900"}
                  weight={"font-600"}
                  uppercase={false}>
                  johnscript.com
                </BodyText>
              </Link>
            </div>
          </div>
        </div>
      </>
    </ConsoleSecction>
  );
}
