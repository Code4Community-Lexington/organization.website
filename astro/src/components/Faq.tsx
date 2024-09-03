import { useState, useRef, useEffect } from "react";
import DownArrow from "./DownArrow";

interface FaqProps {
  question: string;
  answer: string;
}

export const Faq = ({ question, answer }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? "0px" : `${contentRef.current?.scrollHeight}px`);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="border border-gray-300">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer p-8 bg-gray-200 flex justify-between items-center"
      >
        <h3 className="lg:text-2xl text-xl font-bold">{question}</h3>
        <span
          className={`transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
        >
          <DownArrow />
        </span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="p-4 bg-gray-100 border-t border-gray-300">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
