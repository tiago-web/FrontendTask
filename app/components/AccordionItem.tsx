"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import system from "@/app/imgs/system.svg";
import question from "@/app/imgs/question.svg";
import arrowDown from "@/app/imgs/arrow-down.svg";
import Image from "next/image";

interface AccordionItemProps {
  showQuestionIcon?: boolean;
  children?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  showQuestionIcon,
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-3">
      <button
        type="button"
        className={`bg-neutral-900 bg-opacity-75 py-4 flex w-full px-3 justify-between items-center 
        ${open ? "rounded-t-md" : "rounded-md"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex">
          <Image className="w-5 mr-2" src={system} alt="system-icon" />
          <p>Lorem ipsum</p>
          {showQuestionIcon && (
            <Image className="w-5 mx-2" src={question} alt="question-icon" />
          )}
        </div>
        <Image className="w-5 mr-2" src={arrowDown} alt="arrow-down-icon" />
      </button>
      <Collapse isOpened={open}>
        <div className="bg-neutral-900 bg-opacity-75 p-3 text-left rounded-b-md">
          {children}
        </div>
      </Collapse>
    </div>
  );
};
