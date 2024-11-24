"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { Title, Container, ProductModal } from "../shared";
import { SectionService, ISection, API } from "@/services";
import { CardProduct } from "./cardProduct";
import { useSectionStore } from "@/store/section";
import qs from "qs";

export const MenuSection = () => {
  const { activeId, setActiveId } = useSectionStore();
  const [sections, setSections] = useState<ISection[]>([]);
  const [modalId, setModalId] = useState<null | string>(null);
  const params = useParams();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    SectionService.getSection().then((res) => setSections(res));
  }, []);

  useEffect(() => {
    setModalId(
      window.location.search
        ? (qs.parse(window.location.search.substring(1)).modal as string)
        : null
    );
  }, [params]);

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
    const currentPath = window.location.pathname;
    router.push(`${currentPath}?modal=${id}`);
  };

  const closeModal = () => {
    const currentPath = window.location.pathname;
    router.replace(currentPath);
  };

  console.log(modalId);

  return (
    <div className="menu-section">
      <Container>
        <div className="mt-[24px] sm:mt-[32px]">
          {sectionRefs &&
            sections.map(({ id, title, products }, index) => {
              // console.log(`Section: ID=${id}, Title=${title}`);

              return (
                <div
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
                    {products.map(
                      ({ id: productId, name, image, description, price }) => {
                        // console.log(
                        //   `Product in Section ${title}: ID=${productId}, Name=${name}`
                        // );

                        return (
                          <div
                            key={productId}
                            onClick={() => openModal(productId)}
                          >
                            <CardProduct
                              id={productId}
                              name={name}
                              image={API + image}
                              description={description}
                              price={price}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </Container>

      {modalId && <ProductModal id={parseInt(modalId)} onClose={closeModal} />}
    </div>
  );
};
