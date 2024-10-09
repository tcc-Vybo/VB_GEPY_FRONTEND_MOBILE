import styled from "styled-components/native";

const ParentView = styled.View `
    height: 100%;
    width: 100%;
    background-color: #D7A1FF;
    gap: 10px;
`

const ParentViewContent = styled.View `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ChildrenViewContent = styled.View `
    width: 92%;
    height: 79%;
    padding: 2%;
    gap: 10px;
    background-color: white;
    border-radius: 10px;
`

export {ParentView, ParentViewContent, ChildrenViewContent}
