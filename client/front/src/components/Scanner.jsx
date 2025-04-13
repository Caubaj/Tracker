// Scanner.jsx
import { useEffect, useRef } from "react";
import Quagga from "quagga"; // Make sure you have quagga installed

function Scanner({ onDetected }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const startScanner = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1920 },
            height: { ideal: 1080 },
            facingMode: "environment"
          }
        });

        streamRef.current = stream;
        const video = videoRef.current;
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // needed for iOS
        video.play();

        video.addEventListener("playing", () => {
          initQuagga();
        });
      } catch (err) {
        console.error("❌ Error accessing webcam:", err);
      }
    };

    const initQuagga = () => {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current,
          constraints: {
            width: 1920,
            height: 1080,
            facingMode: "environment"
          }
        },
        decoder: {
          readers: ["upc_reader"]
        },
        locate: true,
        locator: {
          patchSize: "large",
          halfSample: false
        }
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      });

      Quagga.onDetected(result => {
        const code = result.codeResult.code;
        onDetected(code); // pass barcode to parent
        stopScanner(); // optionally stop after one scan
      });
    };

    const stopScanner = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        Quagga.stop();
      }
    };

    // Start scanning on mount
    startScanner();

    // Cleanup on unmount
    return () => {
      stopScanner();
    };
  }, [onDetected]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%", display: "block" }} />
    </div>
  );
}

export default Scanner;
