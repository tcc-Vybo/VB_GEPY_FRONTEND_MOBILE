import styled from "styled-components/native";

const CardNewsView = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    width: 55%;
    height: 260px;
`;

const CardNewsViewLeft = styled.View `
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 80%;
`
const CardNewsViewRight = styled.View `
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 80%;
`

const CardNewsImageViewLeft = styled.View `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
`
const CardNewsImageViewRight = styled.View `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
`

const CardNewsTitle = styled.Text`
`
const CardNewsText = styled.Text`
`

const CardNewsImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export {CardNewsView, CardNewsViewLeft, CardNewsImageViewLeft, CardNewsImageViewRight, CardNewsViewRight, CardNewsTitle, CardNewsText, CardNewsImage}