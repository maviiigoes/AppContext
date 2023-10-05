import Heading from './Heading/Heading.tsx';
import Section from './Section/Section.tsx'

export default function Page() {
  return (
    <Section>
      <Heading>Começo</Heading>
      <Section>
        <Heading>Quase quase quase fim</Heading>
        <Section>
          <Heading>Quase quase fim</Heading>
          <Section>
            <Heading>Quase fim</Heading>
            <Section>
              <Heading>Fim!</Heading>
    
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

