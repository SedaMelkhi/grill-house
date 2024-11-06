"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ButtonSectionProps {
  value: string;
}

export const ButtonSection = ({ value }: ButtonSectionProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const router = useRouter();

  // Проверяем наличие параметра `modal=open` при загрузке страницы
  useEffect(() => {  
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("modal") === "open") {
        setOpen(true); // Открываем модальное окно, если параметр установлен
      }
     
    }
  }, []);

  // Открываем модальное окно и добавляем параметр `modal=open` в URL
  const openModal = () => {
    setOpen(true);
    
    router.push(`${window.location.pathname}?modal=open`, undefined, { shallow: true }); 
    
  };

  // Закрываем модальное окно и убираем параметр `modal` из URL
  const closeModal = () => {
    setOpen(false);
    // Используем shallow routing для удаления параметра из URL без перезагрузки страницы
    router.push(window.location.pathname, undefined, { shallow: true });
  };

  return (
    <div>
      {/* Кнопка для открытия окна */}
      <button 
        onClick={openModal} // Открываем модальное окно с параметром в URL
        className="flex justify-center items-center 
          w-[64px] h-[24px] sm:w-[80px] sm:h-[30px] lg:w-[110px] lg:h-[42px] p-[12px] 
          rounded-[50px] bg-[rgba(91,164,140,0.3)] 
          text-[9px] sm:text-[11px] lg:text-[15px] text-[var(--green)]"
      >
        {value}
      </button>

      {/* Всплывающее окно */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div> {/* Полупрозрачный фон */}
          
          <div className="relative bg-white w-[90%] max-w-[400px] p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Всплывающее окно</h2>
            <p className="text-gray-700 mb-4">
              Это содержимое вашего всплывающего окна. Вы можете добавить здесь любые элементы.
            </p>
            <button 
              onClick={closeModal} // Закрытие окна
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
