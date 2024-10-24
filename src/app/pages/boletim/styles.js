import styled from "styled-components/native";

const ParentView = styled.View`
    height: 100%;
    width: 100%;
    background-color: #8300E4;
    gap: 10px;
`

const ParentViewContent = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ChildrenViewContent = styled.View`
    width: 95%;
    height: 80%;
    background-color: white;
    border-radius: 10px;
`

export { ParentView, ParentViewContent, ChildrenViewContent }