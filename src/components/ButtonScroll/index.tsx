import { useEffect, useState } from "react";
import { ButtonReturnTop } from "./styles";
import { ArrowUp } from "@phosphor-icons/react";


export function ButtonScroll(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.scrollY > 1000) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return(
        <ButtonReturnTop onClick={scrollToTop} show={isVisible}>
            <ArrowUp size={32} weight="bold"/>
        </ButtonReturnTop>
    )
}