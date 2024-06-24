import { useEffect, useRef, useState } from "react";
import { SwapWidget } from "@uniswap/widgets";
import { ethers } from "ethers";

import "@uniswap/widgets/fonts.css";

import { TOKEN_LIST } from "../token_list";
import Header from "./Header";
import ValueDisplay from "./ValueDisplay";

 
const AIRM = "0xf250b1f6193941bb8bff4152d719edf1a59c0e69";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function App() {
  const dialog = useRef<HTMLDivElement>(null);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    const setupProvider = async () => {
      if (!window.ethereum) {
        console.error("MetaMask is not installed");
        return;
      }

      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        console.log("Provider set up successfully");
      } catch (error) {
        console.error("User denied account access or there was an error", error);
      }
    };

    setupProvider();
  }, []);

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
                {provider ? (
                  <SwapWidget
                    provider={provider}
                    permit2
                    width="100%"
                    routerUrl="https://api.uniswap.org/v1/"
                    dialog={dialog.current}
                    defaultOutputTokenAddress={AIRM}
                    tokenList={TOKEN_LIST}
                    defaultChainId={1}
                    defaultInputTokenAddress="NATIVE"
                    defaultInputAmount="1"
                    brandedFooter={false}
                  />
                ) : (
                  <p>Loading provider...</p>
                )}
              </div>
            </div>
            <div className="gradient-line"></div>
          </div>
          {/* New Value Display Component */}
          <ValueDisplay />
        </section>
      </main>
    </>
  );
}
