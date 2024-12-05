"use client";

import { usePathname } from "next/navigation"; // Используем App Router API
import { useEffect, useState } from "react";
import nProgress from "nprogress";

const ProgressBar = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      nProgress.start();
      setLoading(true);
    };

    const handleStop = () => {
      nProgress.done();
      setLoading(false);
    };

    // Запускаем полоску загрузки при изменении маршрута
    if (!loading) {
      handleStart();
    }

    handleStop();

    // Так как в App Router нет события, используем `pathname` как индикатор изменения
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Следим за изменениями пути

  return null; // Компонент ничего не рендерит
};

export default ProgressBar;
