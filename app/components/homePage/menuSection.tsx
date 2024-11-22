"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Для работы с URL
import { Title, Container, ProductModal } from "../shared";
import { SectionService, ISection, API } from "@/services";
import { CardProduct } from "./cardProduct";
import { useSectionStore } from "@/store/section";

export const MenuSection = () => {
  const { activeId, setActiveId } = useSectionStore();
  const [sections, setSections] = useState<ISection[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const searchParams = useSearchParams();
  const modalId = searchParams.get("modal");
  const router = useRouter();

  // Fetch sections from the server
  useEffect(() => {
    SectionService.getSection().then((res) => setSections(res));
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id.replace("section-", ""));
          setActiveId(id);
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveId]);

  const openModal = (id: number) => {
    const currentPath = window.location.pathname; // Текущий путь
    router.push(`${currentPath}?modal=${id}`); // Добавляем параметр в URL
  };
  
  const closeModal = () => {
    const currentPath = window.location.pathname; // Текущий путь
    router.replace(currentPath); // Убираем параметр modal из URL
  };

  return (
    <div className="menu-section">
      <Container>
        <div className="mt-[24px] sm:mt-[32px]">
          {sectionRefs &&
            sections.map(({ id, title, products }, index) => (
              <div
                onClick={() => openModal(id)}
                key={id}
                id={`section-${id}`}
                ref={(el) => {
                  sectionRefs.current[id] = el;
                }}
                className={`${
                  index === 0
                    ? "mt-[0px]"
                    : "mt-[32px] sm:mt-[70px] xl:mt-[100px]"
                } ${activeId === id ? "active-section" : ""}`}
              >
                <Title value={title} />
                <div className="mt-[24px] sm:mt-[32px] lg:mt-[36px] grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4 gap-[20px_15px] sm:gap-[32px_20px] lg:gap-[60px_20px]">
                  {products.map(({ id, name, image, description, price }) => (
                    <div key={id}>
                      <CardProduct
                        id={id}
                        name={name}
                        image={API + image}
                        description={description}
                        price={price}
                      />
                      
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Container>

      {/* Модальное окно для продукта */}
      {modalId && <ProductModal id={parseInt(modalId)} onClose={closeModal} />}
    </div>
  );
};

