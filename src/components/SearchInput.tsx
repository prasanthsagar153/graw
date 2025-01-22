import useGameQueryStore from "@/store";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        if(inputRef.current) setSearchText(inputRef.current.value);
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