"use client";

import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

export const HeaderStepper = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator borderColor="#ff0000">
            <StepStatus
              complete={<StepIcon borderColor="#ff0000" />}
              incomplete={<StepNumber color="#AEB1B7" borderColor="#ff0000" />}
              active={<StepNumber color="#15523E" borderColor="#ff0000" />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle color="#15523E">{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
