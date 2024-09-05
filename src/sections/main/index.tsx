"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour * 60 + minute;

      const openHours = [
        [720, 930, 1200, 1440], // Domingo
        [720, 930, 1200, 1440], // Lunes
        [720, 930, 1200, 1440], // Martes
        [720, 930, 1200, 1440], // Miércoles
        [720, 930, 1200, 1440], // Jueves
        [720, 930, 1200, 1470], // Viernes
        [720, 930, 1200, 1470], // Sábado
      ];

      const todayHours = openHours[day];
      setIsOpen(
        (time >= todayHours[0] && time < todayHours[1]) ||
          (time >= todayHours[2] && time < todayHours[3])
      );
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <Image
        src="/fondo.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="absolute inset-0 flex flex-col xl:items-center">
          <button
            onClick={() => setShowModal(true)}
            className="w-full h-auto p-2 backdrop-blur-md bg-white/20 mt-[110px] lg:mt-[120px] flex flex-col justify-center items-center"
          >
            <div className="w-full flex flex-row justify-center items-center gap-2">
              <p className="text-3xl mt-1">{isOpen ? "🍽️" : "😴"}</p>
              <span className="w-auto flex flex-col">
                <p className="text-white text-[13px] lg:text-2xl xl:text-3xl">
                  {isOpen
                    ? "Estamos abiertos"
                    : "En este momento estamos cerrados"}
                </p>
                <p className="text-white text-[10px] lg:text-2xl xl:text-3xl">
                  Haz click para consultar nuestros horarios.
                </p>
              </span>
            </div>
          </button>
          {showModal && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <button
                  className={styles.closeButton}
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
                <h2 className={styles.modalTitle}>Horarios de atencion</h2>
                <p className="text-[#333] text-sm text-center mt-1 mb-4">Abierto de lunes a lunes 😉</p>
                <p className={styles.modalText}>
                  <span className={styles.dayName}>Lunes:</span> de 12:00PM a
                  15:30PM y de 20:00PM a 00:00PM.
                </p>
                <p className={styles.modalText}>
                  <span className={styles.dayName}>Martes:</span> de 12:00PM a
                  15:30PM y de 20:00PM a 00:00PM.
                </p>
                <p className={styles.modalText}>
                  <span className={styles.dayName}>Miercoles:</span> de 12:00PM
                  a 15:30PM y de 20:00PM a 00:00PM.
                </p>
                <p className={styles.modalText}>
                  <span className={styles.dayName}>Jueves:</span> de 12:00PM a
                  15:30PM y de 20:00PM a 00:00PM.
                </p>
                <p className={styles.modalText}>
                  <span className={styles.dayName}>Viernes:</span> de 12:00PM a
                  15:30PM y de 20:00PM a 00:30AM.
                </p>
                <p className={styles.modalText}>
                  <span className={styles.dayName}>Sabado:</span> de 12:00PM a
                  15:30PM y de 20:00PM a 00:30AM.
                </p>
                <p className={styles.modalText}>
                  <span className={styles.dayName}>Domingo:</span> de 12:00PM a
                  15:30PM y de 20:00PM a 00:00PM.
                </p>
              </div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
