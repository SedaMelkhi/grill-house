import React, { Suspense } from "react";

const ProductModal = React.lazy(() => import("./productModalClient"));

export const ModalLoader = ({ id }: { id: number }) => (
  <Suspense fallback={""}>
    <ProductModal id={id} />
  </Suspense>
);
