'use client';

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Logo from "../utils/Logo";

const Header = () => {
  return (
    <Section className="w-full flex justify-center items-center py-2 px-5">
      <Container className="border rounded p-2 w-full">
        <Logo text="Intapes"/>
      </Container>
    </Section>
  )
}

export default Header;