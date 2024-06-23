import { useEffect, useRef, useState } from "react";
import { SwapWidget } from "@uniswap/widgets";

import "@uniswap/widgets/fonts.css";

import { TOKEN_LIST } from "../token_list";
import Header from "./Header";
import ValueDisplay from "./ValueDisplay";

const AIRM = "0xf250b1f6193941bb8bff4152d719edf1a59c0e69";

export default function App() {
  const dialog = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    setLoading(false);
    if (dialog.current !== null) setLoading(true);
    console.log("Dialog current", dialog.current);
  }, [dialog.current]);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 20) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <Header fixed={fixedHeader} />
      <div className="fixed top-auto bottom-auto left-auto right-auto w-screen h-screen bg-mainback bg-cover z-[-1]" />
      <main className="pt-[100px] min-h-screen w-full flex items-center">
        <section className="container mx-auto flex flex-col justify-center items-center">
          <h1 className="hidden md:block text-2xl font-bold mb-8">AI Realm Swap</h1>
          <div className="features-box">
            <div className="feature-box-exterior">
              <div className="img-content-wrap">
                <SwapWidget
                  permit2
                  // routerUrl="https://api.uniswap.org/v2/"
                  width={"100%"}
                  dialog={dialog.current}
                  defaultOutputTokenAddress={AIRM}
                  tokenList={TOKEN_LIST}
                  defaultChainId={1}
                  defaultInputTokenAddress="NATIVE"
                  defaultInputAmount="1"
                  brandedFooter={false}
                />
              </div>
            </div>
            <div className="gradient-line"></div>
          </div>
          {/* New Value Display Component */}
          <ValueDisplay />
          {/* <div ref={dialog} className="swap-modal"></div> */}
        </section>
      </main>
    </>
  );
}

