import React from "react";
import styled from "styled-components";

const data = [
  {
    id: "1",
    name: "What is BorB?",
    text: "BorB is a non-custodial prediction market platform built on blockchain (currently operating on BNB Smart Chain. Ethereum and Polygon coming soon). It enables traders to bet on the price of an asset and get rewarded for doing so correctly. Use your market knowledge or gut feeling to predict whether the final price will be Bullish or Bearish.",
  },
  {
    id: "2",
    name: "How my profit is calculated?",
    text: "Your profit from a trade can be up to 80% of the investment amount. The percentage depends on the current yield of the liquidity pool. If liquidity pool earnings fall or become negative, the payout percentage decreases automatically.",
  },
  {
    id: "3",
    name: "What is the liquidity pool?",
    text: "Liquidity pools are pools of tokens locked in smart contracts that provide liquidity. Your profit from successful trades is formed from these pools. The profitability of pools should be 2-4%. In this case, successful traders take money from unsuccessful ones, and liquidity providers earn on volumes.",
  },
  {
    id: "4",
    name: "What is the minimum/maximum amount that I can invest?",
    text: "The minimum amount to invest in a single trade is $1. The maximum amount in a single trade is $1000.",
  },
  {
    id: "5",
    name: "Are there any fees?",
    text: "1% of each trade (trading fees) will go to the treasury.",
  },
  {
    id: "6",
    name: "What are you using for your price feed?",
    text: "BorB uses real-time on-chain market data from Chainlink oracles.",
  },
  {
    id: "7",
    name: "Is this gambling?",
    text: "Gambling relies on luck. According to our statistics, it is possible to predict the price movement. Someone does it better than others, but the average win rate is 53.08% per trade. And, unlike traditional bookmakers, BorB doesn’t benefit from a right or wrong outcome. It makes money only through trading fees.",
  },
];

const Faq = () => {
  const [show, setShow] = React.useState(null);

  const handleShow = (cardId) => () => {
    if (show === cardId) {
      return setShow(null);
    }

    setShow(cardId);
  };

  return (
    <StyledFaq>
      <Grid>
        {data.map((card) => (
          <Block key={card.id}>
            <Row
              state={show === card.id}
              className={show === card.id ? `active` : ``}
              onClick={handleShow(card.id)}
            >
              <Title>{card.name}</Title>
              <Burger state={show === card.id}>
                <div className="hor"></div>
                <div className="ver"></div>
              </Burger>
            </Row>
            <Content state={show === card.id}>
              <Text>
                {card.text}
              </Text>
            </Content>
          </Block>
        ))}
      </Grid>
    </StyledFaq>
  );
};

export default Faq;

const StyledFaq = styled.div``;
const Block = styled.div``;
const Grid = styled.div``;
const Row = styled.div`
  cursor: pointer;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  border-bottom: ${(props) => (props.state ? "none" : "1px solid var(--grey)")};
  @media screen and (max-width: 1000px) {
    height: 90px;
  }
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;
const Content = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
`;
const Text = styled.p`
  font-size: 18px;
  line-height: 180%;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Title = styled.h5`
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 1000px) {
    font-size: 23px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Burger = styled.div`
  position: relative;
  display: flex;
  height: 21px;
  width: 21px;
  div {
    border-radius: 10px;
  }
  .hor {
    width: 100%;
    height: 3px;
    background: var(--black);
    margin: auto;
  }
  .ver {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    height: 100%;
    width: 3px;
    background: var(--black);
    display: ${(props) => (props.state ? "none" : "block")};
  }
`;
