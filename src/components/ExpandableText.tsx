import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  if(!children) return;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const limit = 400;

  if(children.length <= limit) return <Text>{children}</Text>
  
  const summary = isCollapsed ? children.substring(0, limit) + "..." : children;

  return (
    <>
      <Text>
        { summary }
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}
        >
          {
            isCollapsed ? "Show More" : "Show Less"
          }
        </Button>
      </Text>
    </>
  )
}

export default ExpandableText;