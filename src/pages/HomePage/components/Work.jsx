import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import animationData1 from "../../../common/work-animation-3.json";
import animationData2 from "../../../common/work-animation-2.json";
import animationData3 from "../../../common/work-animation-1.json";
import Lottie from "react-lottie";

const Work = () => {
  const { t } = useTranslation();

  const [width, setWidth] = React.useState("683px");

  const [defaultOptions, setDefaultOptions] = React.useState({
    loop: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const ref = React.useRef(null)

  const [paused, setPaused] = React.useState(true)

  React.useEffect(() => {
    function scroll() {
        console.log(ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight, window.scrollY - window.innerHeight)
        if (window.scrollY + window.innerHeight >= ref.current.offsetTop && window.scrollY <= ref.current.offsetTop + ref.current.offsetHeight) {
            setPaused(false)
        } else {
            setPaused(true)
        }
    }
    scroll()
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])

  const windowHandler = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1500 && windowWidth > 768) {
      setWidth("50vw");
    } else if (windowWidth <= 768) {
      setWidth("100%");
    } else {
      setWidth("683px");
    }
  };

  React.useEffect(() => {
    windowHandler();
  }, [window.innerWidth]);

  const [opened, setOpened] = React.useState(0)

  return (
    <StyledWork ref={ref}>
      <LottieWrapper>
        <Lottie options={defaultOptions} width={width} isStopped={paused} paused={paused}/>
      </LottieWrapper>
      <Column>
        <Title>{t("how_it_works_section")}</Title>
        <Row onClick={() => {
            setOpened(1);
            setDefaultOptions({...defaultOptions, animationData: animationData1})
          }} className={`${opened===1 ? 'selected' : ''}`}>
          <Text>{t("how_it_works_first_item")}</Text>
          {opened===1 &&
            <CollapsedText dangerouslySetInnerHTML={{__html: t("how_it_works_first_item_text")}}></CollapsedText>}
        </Row>
        <Row onClick={() => {
            setOpened(2);
            setDefaultOptions({...defaultOptions, animationData: animationData2})
          }} className={`${opened===2 ? 'selected' : ''}`}>
          <Text>{t("how_it_works_second_item")}</Text>
          {opened===2 &&
            <CollapsedText dangerouslySetInnerHTML={{__html: t("how_it_works_second_item_text")}}></CollapsedText>}
        </Row>
        <Row onClick={() => {
            setOpened(3);
            setDefaultOptions({...defaultOptions, animationData: animationData3})
          }} className={`${opened===3 ? 'selected' : ''}`}>
          <Text>{t("how_it_works_third_item")}</Text>
          {opened===3 &&
            <CollapsedText dangerouslySetInnerHTML={{__html: t("how_it_works_third_item_text")}}></CollapsedText>}
        </Row>
      </Column>
    </StyledWork>
  );
};

export default Work;

const StyledWork = styled.div`
  margin: 157px 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 50px 0;
  }
`;

const LottieWrapper = styled.div`
  width: 40%;
  height: 100%;
  left: 0;
  position: absolute;
  z-index: -1;
  svg {
    width: 200%!important;
    left: 0%;
    position: absolute;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    margin: 50px 0 0;
    width: 100%;
    max-width: 430px;
    svg {
      width: 180%!important;
      position: relative;
    }
  }

`
const Column = styled.div`
  margin-left: 50%;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 110px 110px 110px;
  grid-gap: 10px;
  @media screen and (max-width: 1000px) {
    grid-template-rows: 100px 100px 100px 100px;
    grid-gap: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    grid-gap: 10px;
  }
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  @media screen and (max-width: 1000px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 30px;
    margin-bottom: 0;
  }
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #888888;
  .selected & {color: #000000}
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
const CollapsedText = styled.p`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Row = styled.div`
  display: block;
  cursor: pointer;
  border-right: 4px solid #dadada;
  padding-right: 20px;
  &.selected {
    border-color: #00e9be;
  }
`;
