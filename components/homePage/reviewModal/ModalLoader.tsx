import React, { Suspense } from "react";

const ProductModal = React.lazy(() => import("./reviewModalClient"));

export const ModalLoader = () => (
  <Suspense fallback={""}>
    <ProductModal />
  </Suspense>
);
