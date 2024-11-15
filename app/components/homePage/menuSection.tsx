"use client";

import { useState, useEffect, useRef } from "react";
import { Title, Container } from "../shared";
import { SectionService, ISection, API } from "@/services";
import { CardProduct } from "./cardProduct";
import { useSectionStore } from "@/store/section"; // Zustand store для хранения активного ID

export const MenuSection = () => {
  const { activeId, setActiveId } = useSectionStore(); // Из Zustand store
  const [sections, setSections] = useState<ISection[]>([]);

  // Получаем секции с сервера
  useEffect(() => {
    SectionService.getSection().then((res) => setSections(res));
  }, []);

  // Настроим IntersectionObserver
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      threshold: 0.4, // секция будет активироваться, когда она видна на 40%
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id.replace("section-", ""));
          setActiveId(id); // Обновляем активный ID, когда секция видна
        }
      });
    }, options);
0213

    // Подключаем observer ко всем секциям
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Очистка observer
    };
  }, [setActiveId]);

  return (
    <div className="">
      <Container>
        <div className="mt-[24px] sm:mt-[32px]">
          {sections.map(({ id, title, products }, index) => (
            <div
              key={id}
              id={`section-${id}`}
              ref={(el) => (sectionRefs.current[index] = el)} // Привязываем секцию к рефу
              className={`${
                index === 0 ? "mt-[0px]" : "mt-[32px] sm:mt-[70px] xl:mt-[100px]"
              }`}
            >
              <Title value={title} />
              <div className="mt-[24px] sm:mt-[32px] lg:mt-[36px] grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4 gap-[20px_15px] sm:gap-[32px_20px] lg:gap-[60px_20px]">
                {products.map(({ id, name, image, description, price }) => (
                  <CardProduct
                    key={id}
                    id={id}
                    name={name}
                    image={API + image}
                    description={description}
                    price={price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
