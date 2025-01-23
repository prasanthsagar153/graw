import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  attribute: string;
  children: ReactNode | ReactNode[];
}

function DisplayAttribute({ attribute, children }: Props) {
  return (
    <>
      <Box marginY={5}>
        <Heading as="dt" fontSize="md" color="gray.700">
          { attribute }
        </Heading>
        <dd>
          {children}
        </dd>
      </Box>
    </>
  )
}

export default DisplayAttribute;