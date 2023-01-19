import styled from "styled-components";

export const Container = styled.div(({
    justifyContent = 'center',
    background,
    height,
    width,
    alignItems ="center",
    borderBottom,

  }) => ({
    width: width,
    background: background,
    height: height,
    display: "flex",
    alignItems,
    justifyContent,
    borderBottom: borderBottom,
  }))