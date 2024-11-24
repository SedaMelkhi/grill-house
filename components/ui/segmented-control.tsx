"use client";

import { For, SegmentGroup } from "@chakra-ui/react";
import { forwardRef, useMemo } from "react";

interface Item {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps extends SegmentGroup.RootProps {
  items: Array<string | Item>;
}

function normalize(items: Array<string | Item>): Item[] {
  return items.map((item) => {
    if (typeof item === "string") return { value: item, label: item };
    return item;
  });
}

export const SegmentedControl = forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(function SegmentedControl(props, ref) {
  const { items, ...rest } = props;
  const data = useMemo(() => normalize(items), [items]);

  return (
    <SegmentGroup.Root ref={ref} {...rest}>
      <SegmentGroup.Indicator
        borderRadius={"53px"}
        background="#fff"
        boxShadow={"0px 0px 4px 0px #5C63703D"}
      />
      <For each={data}>
        {(item) => (
          <SegmentGroup.Item
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            width={"50%"}
            borderRadius={"53px"}
            padding={"2px"}
            cursor={"pointer"}
            // boxShadow={
            //   props.defaultValue === item.label
            //     ? props.defaultValue === "Самовывоз"
            //       ? "5px 0px 15px 0px #5C63703D"
            //       : "-5px 0px 15px 0px #5C63703D"
            //     : ""
            // }
          >
            <SegmentGroup.ItemText
              textAlign={"center"}
              width={"100%"}
              color={"#5C6370"}
            >
              {item.label}
            </SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        )}
      </For>
    </SegmentGroup.Root>
  );
});
