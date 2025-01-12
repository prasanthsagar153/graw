import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchedValue: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        if(inputRef.current) onSearch(inputRef.current.value);
      }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input borderRadius={20} placeholder="Search Games" variant="filled" ref={inputRef} />
        </InputGroup>
      </form>
    </>
  )
}

export default SearchInput;