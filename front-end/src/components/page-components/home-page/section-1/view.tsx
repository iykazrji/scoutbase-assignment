import React from "react";

import {
  SectionWrapper,
  HeroContentWrapper,
  HeroContentItem,
  HeroMainHeading,
  HeroSubText,
  ActionLink
} from "./styles";

const Section1 = () => {
  return (
    <SectionWrapper>
      <HeroContentWrapper
        width={[0.95, 0.9, 0.85, 0.7]}
        mx="auto"
        justifyContent="center"
        alignItems="center"
        flexDirection="column">
        <HeroContentItem width={[1]}>
          <HeroMainHeading>
            Now Greetings to the World!{" "}
            <span role="img" aria-label="world-emoji">
              🌎
            </span>
          </HeroMainHeading>
        </HeroContentItem>
        <HeroContentItem width={[1]}>
          <HeroSubText>
            In celebration of World Peace, we provided a directory of all
          </HeroSubText>
        </HeroContentItem>
        <HeroContentItem mt={["2.5rem"]} width={[1]}>
          <ActionLink to="/countries">Go!</ActionLink>
        </HeroContentItem>
      </HeroContentWrapper>
    </SectionWrapper>
  );
};

export default Section1;
