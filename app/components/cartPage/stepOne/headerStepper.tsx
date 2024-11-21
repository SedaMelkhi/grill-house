"use client";
import { StepsItem, StepsList } from "@/components/ui/steps";

export const HeaderStepper = () => {
  return (
    <div className="w-[624px] pr-10">
      <StepsList>
        <StepsItem index={0} title="Корзина" />
        <StepsItem index={1} title="Оформление заказа" />
        <StepsItem index={2} title="Заказ принят" />
      </StepsList>
      {/* <StepsContent index={0}>Step 1</StepsContent>
      <StepsContent index={1}>Step 2</StepsContent>
      <StepsContent index={2}>Step 3</StepsContent>
      <StepsCompletedContent>All steps are complete!</StepsCompletedContent> */}

      {/* <Group>
        <StepsPrevTrigger asChild>
          <Button variant="outline" size="sm">
            Prev
          </Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </StepsNextTrigger>
      </Group> */}
    </div>
  );
};
